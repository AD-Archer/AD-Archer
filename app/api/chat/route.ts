import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { projects, jobs, skills, certifications, education } from '@/lib/data';

// Define message type
interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Store conversation history with a limit
const conversationHistory = new Map<string, { messages: ChatMessage[]; lastAccessed: number }>();
const MAX_HISTORY_MESSAGES = 10; // Keep last 10 messages
const HISTORY_CLEANUP_INTERVAL = 1000 * 60 * 60; // Clean up every hour

// Clean up old conversations periodically
setInterval(() => {
  const now = Date.now();
  for (const [sessionId, data] of conversationHistory.entries()) {
    if (now - data.lastAccessed > HISTORY_CLEANUP_INTERVAL) {
      conversationHistory.delete(sessionId);
    }
  }
}, HISTORY_CLEANUP_INTERVAL);

// Generate a detailed system prompt from the data
function generateSystemPrompt() {
  // Format projects for the prompt
  const projectsText = projects
    .map((project, index) => {
      const technologies = project.technologies
        ? project.technologies.map(tech => tech.name).join(', ')
        : 'Various technologies';

      const features = project.features ? `Features include: ${project.features.join(', ')}` : '';

      return `${index + 1}. ${project.title}: ${project.description} ${features} Built with ${technologies}. Links: ${project.link || 'No live link'} | GitHub: ${project.github || 'No GitHub link'}`;
    })
    .join('\n\n');

  // Format jobs for the prompt
  const jobsText = jobs
    .map(
      job => `- ${job.title} at ${job.company} (${job.duration}): ${job.achievements.join(', ')}`
    )
    .join('\n');

  // Format skills for the prompt
  const skillsText = Object.entries(skills)
    .map(([category, skillList]) => {
      const skillsList = skillList.map(skill => `${skill.name} (${skill.power}%)`).join(', ');
      return `${category}: ${skillsList}`;
    })
    .join('\n');

  // Format certifications for the prompt
  const certificationsText = certifications
    .map(cert => `- ${cert.title} from ${cert.issuer} (${cert.date}): ${cert.skills?.join(', ')}`)
    .join('\n');

  // Format education for the prompt
  const educationText = education
    .map(edu => `- ${edu.degree} in ${edu.field} from ${edu.institution} (${edu.years})`)
    .join('\n');

  return `You are Charmi, a friendly and helpful AI assistant for Antonio Archer, a full-stack developer and DevOps engineer who loves to chat about tech.

Here's what I know about Antonio:

JOBS:
${jobsText}

EDUCATION:
${educationText}

SKILLS:
${skillsText}

CERTIFICATIONS:
${certificationsText}

PROJECTS:
${projectsText}

IMPORTANT INSTRUCTIONS:
1. Keep responses concise and conversational - no need for formal language or excessive detail
2. Use a friendly, casual tone like you're chatting with a friend
3. Use markdown for formatting, but keep it simple
4. When sharing code, use code blocks with language tags
5. Reference projects with links when relevant
6. Maintain conversation context throughout the session
7. Be helpful while keeping responses brief and to the point`;
}

export async function POST(req: NextRequest) {
  try {
    const { messages, sessionId = 'default' } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages are required and must be an array' },
        { status: 400 }
      );
    }

    // Get or initialize conversation history for this session
    if (!conversationHistory.has(sessionId)) {
      conversationHistory.set(sessionId, { messages: [], lastAccessed: Date.now() });
    }

    const history = conversationHistory.get(sessionId)!;
    history.lastAccessed = Date.now();

    // Add new messages to history
    history.messages.push(...messages);

    // Keep only the last MAX_HISTORY_MESSAGES
    if (history.messages.length > MAX_HISTORY_MESSAGES) {
      history.messages = history.messages.slice(-MAX_HISTORY_MESSAGES);
    }

    // Generate the system prompt from data
    const systemPrompt = generateSystemPrompt();

    // Try OpenAI first
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4.1-nano',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          ...history.messages.map(msg => ({
            role: msg.role,
            content: msg.content,
          })),
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
        const formattedMessages = [
          `System: ${systemPrompt}`,
          ...history.messages.map(
            msg => `${msg.role === 'user' ? 'Human' : 'Assistant'}: ${msg.content}`
          ),
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
    return NextResponse.json({ error: 'Failed to process your request' }, { status: 500 });
  }
}
