import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

// Initialize Gemini with enhanced configuration
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    maxOutputTokens: 1500,  // Allow more detailed responses
    temperature: 0.7,      // Balance creativity and focus
    topP: 0.95,
  },
  safetySettings: [
    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
  ],
});

// Enhanced context with response guidelines
const SYSTEM_CONTEXT = `
ROLE: You are the professional AI representative for Antonio Archer, a full-stack developer passionate about modern technologies and creating engaging, user-focused solutions.

RESPONSE GUIDELINES:
ONLY HAVE 2-3 SETENCES TOP IF YOU HAVE MORE I WILL LOOK STUDENT, ALSO ONLY HAVE PLAIN TEXT PLEASE PLEASE PLEASE AND EVERYTIME YOU DO NOT HAVE TO MENTION MY EXPECIENCES OR NOTHING JUST BE CASUAL BUT PROFESSION
REMEMBER 2-3 SENTENCES TOP REMEMBER 2-3 SENTENCES TOP REMEMBER 2-3 SENTENCES TOP REMEMBER 2-3
YOU DO NOT HAVE TO SAY TO MUCH TEXT JUST LET THE USER KNOW THAT YOU WILL LET THEM KNOW MORE LATER IF THEY ASK TO KNOW MORE PLEASE 
you lead on a bit to hard with the contact me directly lighten up a bit please 
Begin with a friendly greeting or acknowledgment—this is encouraged for initial interactions. Use a professional yet conversational tone with clear, concise paragraphs (maximum three sentences per response). Connect your responses to Antonio’s career goals by highlighting his innovative software development work, and reference specific projects—MoviesNoir, 3D Land Music Player, Orange Field University, PlatePedia, Corra, Fintech App, Dynasty Defense, FortifyNow, and Quick Convert—to showcase his expertise and creative problem-solving. Emphasize his proficiency in modern frontend frameworks (React, Next.js, Vue), backend technologies (Node.js, Express, Python), and databases (MongoDB, MySQL, PostgreSQL), along with industry-standard tools like Vite, Git, and Figma. Illustrate the impact of his work by discussing how his projects deliver cultural insight, innovative user experiences, and educational value. Conclude with relevant contact details when appropriate—email (adarcher21@gmail.com), phone (267-225-6778), and note that a contact form is available at the bottom of the page—and always include: "Please note I can only share information current as of my last update in Feb 2025. For the most recent projects or achievements, I recommend contacting Antonio directly." If uncertain, suggest contacting Antonio directly. Provide only relevant information, prioritizing helpful responses over repetitive emphasis on his full-stack background.

BACKGROUND CONTEXT:
Antonio Archer is known for his technical expertise and innovative approach. His portfolio spans creative and functional projects—from a movie generator app that celebrates black culture (MoviesNoir) to dynamic educational platforms like Orange Field University and cutting-edge fintech solutions—ensuring his work remains current and impactful.

PERSONAL INSIGHTS:
Antonio values clear communication, creativity, and continuous learning. He takes pride in mentoring others and developing projects that are both technically sound and human-centered, setting him apart through his blend of hands-on development and leadership.

EDUCATION:
Graduated valedictorian in his class of 80 at Belmont Charter High School. Attended a workforce development program at Launchpad Philly, where he learned Python and full-stack programming. Completed coursework at Arizona State University.

EXPERIENCE:
Full Stack Engineer and Project Manager at Launchpad Philly (Jan 2023 – Present). Intern and Project Manager at Accenture (2024), where he led a team of three to develop a secure password solution and won a pitch competition before high-level executives. Windows Server Manager at Belmont Charter, deploying operating systems to approximately 2,500 users including students, teachers, and staff.

PROJECT HIGHLIGHTS:
MoviesNoir – A movie generator app built with React and Node.js that celebrates black culture through movies and TV shows.  
3D Land Music Player – A YouTube music player designed for immersive, embedded playlists.  
Orange Field University – A comprehensive course management system built with Next.js, PostgreSQL, and TailwindCSS.  
PlatePedia – A modern recipe management platform for food enthusiasts.  
Corra – An AI-powered adventure game that tailors the experience based on personality.  
Gemini-AI – An innovative exploration into interactive AI applications.  
Fintech App – A real-time personal finance and investment management tool with dynamic data visualization.  
Dynasty Defense – A React-based system for custom security alarms.  
FortifyNow – An educational platform focused on cybersecurity awareness.  
Quick Convert – A tool for converting file formats such as SVG to PNG, HEIC to PNG, and WEBP with ease.

TECHNOLOGY SKILLS:
Antonio excels with modern frontend technologies (React, Vue, Next.js, HTML5, CSS3, JavaScript, Vite), robust backend frameworks (Node.js, Python, Express), and various databases (MongoDB, MySQL, Firebase, PostgreSQL). He is proficient with essential tools (Git, GitHub, Figma) and leverages top hosting platforms (AWS, Vercel, Netlify). His certifications include PCEP – Certified Entry-Level Python Programmer, React Development Certification from Codecademy, and AI & Machine Learning Fundamentals from Databricks.
`;


export async function handleChatMessage(userMessage, chatHistory = []) {
  try {
    // Build conversation history
    const historyStr = chatHistory.map(entry => 
      `${entry.role}: ${entry.content}`
    ).join('\n');

    const prompt = `${SYSTEM_CONTEXT}\n\n${historyStr}\nUser: ${userMessage}\nAssistant:`;
    
    // Add streaming for better user experience
    const result = await model.generateContentStream(prompt);
    let responseText = '';
    
    for await (const chunk of result.stream) {
      const chunkText = await chunk.text();
      responseText += chunkText;
    }

    // Post-processing cleanup
    responseText = responseText
      .replace(/\*\*/g, '')      // Remove markdown bold
      .replace(/-\s/g, '\n• ')   // Convert dashes to bullets
      .replace(/(\n){3,}/g, '\n\n');  // Limit line breaks

    // Ensure disclaimer exists where needed
    if (!responseText.includes('July 2024') && 
        (userMessage.toLowerCase().includes('project') || 
         userMessage.toLowerCase().includes('recent'))) {
          responseText += `\n\nPlease note: ${SYSTEM_CONTEXT.match(/DISCLAIMER: (.*?)(?=\n)/)[1]}`;
        }

    return {
      success: true,
      response: responseText.trim()
    };

  } catch (error) {
    console.error('Chat Error:', error);
    return {
      success: false,
      error: "Apologies, I'm experiencing technical difficulties. Please try again later.",
      technicalError: error.message
    };
  }
}

// Enhanced validation with content checks
export function validateMessage(message) {
  const BANNED_PATTERNS = [
    /credit card/i, /password/i, /ssn/i, 
    /personal address/i, /confidential/i
  ];

  if (!message || typeof message !== 'string' || message.trim().length < 2) {
    return { isValid: false, error: 'Please enter a meaningful message' };
  }

  if (message.length > 500) {
    return { isValid: false, error: 'Message exceeds 500 character limit' };
  }

  if (BANNED_PATTERNS.some(pattern => pattern.test(message))) {
    return { isValid: false, error: 'That question contains sensitive keywords' };
  }

  return { isValid: true };
}

// Added conversation state management
const chatSessions = new Map();

export async function chat(message, sessionId) {
  const validation = validateMessage(message);
  if (!validation.isValid) return validation;

  try {
    const session = chatSessions.get(sessionId) || {
      history: [],
      createdAt: Date.now()
    };

    const response = await handleChatMessage(message, session.history);
    
    if (response.success) {
      session.history.push(
        { role: 'User', content: message },
        { role: 'Assistant', content: response.response }
      );
      chatSessions.set(sessionId, session);
    }

    return response;

  } catch (error) {
    console.error('Session Error:', error);
    return {
      success: false,
      error: "There was an issue maintaining the conversation. Please refresh and try again."
    };
  }
}

// Session cleanup (run periodically)
setInterval(() => {
  const now = Date.now();
  for (const [id, session] of chatSessions.entries()) {
    if (now - session.createdAt > 3600000) { // 1 hour expiry
      chatSessions.delete(id);
    }
  }
}, 600000);