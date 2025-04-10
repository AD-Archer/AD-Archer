import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages are required and must be an array' },
        { status: 400 }
      );
    }

    // Try OpenAI first
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI assistant. Format your responses using markdown for better readability. Use code blocks with language specification for code examples, and use proper markdown formatting for lists, headings, and other elements.'
          },
          ...messages.map(msg => ({
            role: msg.role,
            content: msg.content,
          }))
        ],
        temperature: 0.7,
        max_tokens: 1000,
      });

      return NextResponse.json({
        content: response.choices[0].message.content,
        model: 'openai',
      });
    } catch (openaiError) {
      console.error('OpenAI error:', openaiError);
      
      // Fallback to Gemini if OpenAI fails
      try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        
        // Format messages for Gemini with markdown instruction
        const systemPrompt = 'You are a helpful AI assistant. Format your responses using markdown for better readability. Use code blocks with language specification for code examples, and use proper markdown formatting for lists, headings, and other elements.';
        
        const formattedMessages = [
          `System: ${systemPrompt}`,
          ...messages.map(msg => 
            `${msg.role === 'user' ? 'Human' : 'Assistant'}: ${msg.content}`
          )
        ].join('\n\n');
        
        const result = await model.generateContent(formattedMessages);
        const response = await result.response;
        const text = response.text();
        
        return NextResponse.json({
          content: text,
          model: 'gemini',
        });
      } catch (geminiError) {
        console.error('Gemini error:', geminiError);
        throw new Error('Both AI services failed');
      }
    }
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
} 