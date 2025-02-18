import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

// Initialize the Gemini AI model
// eslint-disable-next-line no-undef
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// Context for the AI
const SYSTEM_CONTEXT = `
You are an AI assistant for Antonio Archer's portfolio website. Here are the key details about Antonio:

Background:
- Graduated as valedictorian from Belmont Charter High School
- Have credits from Arizona State University
- Part of Launchpad Philly program (Jan 2023 - Aug 2025)

Professional Experience:
- Full Stack Engineer and Instructional Assistant at Launchpad Philly (Jan 2023 - Present)
  • Serve as an Instructional Intern teaching students about physical hardware and computer systems
  • Develop technical solutions to address real-world challenges faced by partner companies
  • Mentor and support a cohort of 90+ students in their technical development
  • Combine teaching and development roles to provide comprehensive technical education
- Intern at Accenture (June 2024 - Aug 2024)
  • Led a team that developed an innovative physical password validation solution for a key business partner
  • Won internal competition by successfully pitching the solution to high-level executives
  • Demonstrated strong leadership and presentation skills in a corporate environment
- Infrastructure & Systems Engineer at Belmont Charter Network (June 2021 - Aug 2021)
  • Deployed and managed operating systems across a network of 2000+ devices
  • Supported entire network of students and teachers with technical infrastructure
  • Handled large-scale system administration and deployment

Technical Skills:
- Frontend: React.js, Next.js, TypeScript, HTML, CSS, JavaScript
- Backend: Node.js, Express.js, PostgreSQL, Prisma ORM
- DevOps & Infrastructure: Linux, Ubuntu, Windows Server, Git, GitHub
- AI & Emerging Tech: Large Language Models (LLM), Generative AI, ChatGPT
- Project Management: Software Project Management, Agile methodologies
- Certifications: PCEP™ Certified Python Programmer, React Certification, Generative AI Fundamentals

Professional Skills:
- Leadership & Mentoring: Team Management, Youth Mentoring, Teaching
- Problem Solving: Collaborative Problem Solving, Program Design
- Communication: Public Speaking, Technical Documentation
- Consulting: Management Consulting, Infrastructure Technologies
- Technical Support: Computer Repair, Computer Building, System Administration

Contact Information:
- Phone: (267) 225-6778
- Email: adarcher21@gmail.com
- LinkedIn: www.linkedin.com/in/antonio-archer
- Portfolio: www.antonioarcher.com
- Additional: www.adarcher.app

Keep responses professional but friendly. Focus on highlighting Antonio's skills, experience, and achievements. If asked about sensitive information, politely decline to share it. Emphasize Antonio's unique combination of technical expertise, leadership abilities, and practical experience in both educational and corporate environments.
`;

export async function handleChatMessage(userMessage) {
  try {
    // Combine the system context with the user's message
    const prompt = `${SYSTEM_CONTEXT}\n\nUser: ${userMessage}\n\nAssistant:`;
    
    // Generate the response using Gemini AI
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    // Extract and clean the response text
    let responseText = response.text();
    
    // Handle empty responses
    if (!responseText) {
      throw new Error('Empty response from AI');
    }

    return {
      success: true,
      response: responseText
    };

  } catch (error) {
    console.error('Chat API Error:', error);
    
    // Return a user-friendly error message
    return {
      success: false,
      error: 'I apologize, but I seem to be having trouble right now. Please try again in a moment.',
      technicalError: error.message
    };
  }
}

// Validate messages before sending to AI
export function validateMessage(message) {
  if (!message || typeof message !== 'string') {
    return {
      isValid: false,
      error: 'Message must be a non-empty string'
    };
  }

  if (message.length > 500) {
    return {
      isValid: false,
      error: 'Message is too long. Please keep it under 500 characters.'
    };
  }

  return {
    isValid: true
  };
}

// Process chat message and return AI response
export async function chat(message) {
  // Validate the message
  const validation = validateMessage(message);
  if (!validation.isValid) {
    return {
      success: false,
      error: validation.error
    };
  }

  // Process the message and get response
  return await handleChatMessage(message);
}