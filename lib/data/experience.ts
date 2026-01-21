import { Job, Education } from './types';

export const jobs: Job[] = [
  {
    title: 'AI and Software Developer',
    company: 'Seer Interactive',
    duration: 'Oct 2025 - Present',
    location: 'Philadelphia, PA',
    achievements: [
      'Serve as AI overseer and ideation partner, translating leadership goals into actionable AI initiatives that support client growth',
      'Develop RAG mcp to streamline information retrieval and enhance AI-driven content generation for marketing campaigns',
      'Prototype retrieval-augmented generation (RAG) workflows that ground large language models in agency knowledge bases and campaign data',
      'Optimize data warehouse pipelines to ensure reliable, real-time context for internal AI copilots and experimentation sandboxes',
      'Facilitate cross-team discovery sessions to surface high-impact AI use cases and guide implementation roadmaps',
    ],
    techStack: [
      'AI/LLM',
      'RAG',
      'Vector Databases',
      'Python',
      'TypeScript',
      'Data Warehousing',
      'MLOps',
      'N8N',
    ],
  },
  {
    title: 'Platform Engineer',
    company: 'Bentley Systems',
    duration: 'Jul 2025 - Aug 2025',
    location: 'Philadelphia, PA',
    achievements: [
      'Migrated a legacy iTwin.js frontend application to a modern React.js architecture to improve maintainability and performance',
      'Developed dynamic frontend filters using ECSQL to query and display 3D Revit model data',
      'Shared the application’s key features and functionality with team members during internal demo sessions',
    ],
    techStack: ['TypeScript', 'React', 'SCSS', 'ECSQL', 'iTwin.js'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Launchpad Philly',
    duration: 'Jan 2023 - Jun 2025',
    location: 'Philadelphia, PA',
    achievements: [
      'Developed muliple full stack applications to solve issues faced by organization',
      'Engineered solutions using modern web stack (React, Node.js, MongoDB)',
      'Led technical workshops on web development fundamentals and DevOps practices',
      'Integrated AI tools (ChatGPT) to enhance development workflows',
      'Collaborated on projects using Git/GitHub for version control',
      'Earned PCEP Python certification with 200+ coding hours',
    ],
    techStack: ['React', 'Node.js', 'Python', 'MongoDB', 'Git', 'AI/LLM', 'DevOps'],
  },
  {
    title: 'Technical Mentor',
    company: 'Launchpad Philly',
    duration: 'Jan 2025 - May 2025',
    location: 'Philadelphia, PA',
    achievements: [
      'Supported 90+ students through personalized technical learning',
      'Developed curriculum for career transition workshops',
      'Provided progress tracking and growth strategy development',
      'Facilitated technical interview preparation sessions',
      'Hosted professional development workshops',
    ],
    techStack: [
      'Career Coaching',
      'Technical Mentoring',
      'Workshop Development',
      'Progress Analytics',
    ],
  },
  {
    title: 'Cybersecurity Solutions Engineer (Intern)',
    company: 'Accenture',
    duration: 'Jun 2024 - Aug 2024',
    location: 'Philadelphia, PA',
    achievements: [
      'Led team development of password security solution',
      'Integrated security APIs for vulnerability detection',
      'Presented cybersecurity strategies to leadership',
      'Implemented authentication best practices',
    ],
    techStack: ['Security APIs', 'React', 'Node.js', 'Authentication Systems'],
  },
  {
    title: 'Infrastructure & Systems Engineer',
    company: 'Belmont Charter Network',
    duration: 'Jun 2022 - Aug 2022',
    location: 'Philadelphia, PA',
    achievements: [
      'Optimized multi-location network infrastructure',
      'Implemented automated system backups',
      'Developed IT documentation and procedures',
      'Maintained enterprise-level device networks',
    ],
    techStack: ['Network Administration', 'Server Management', 'Windows Server'],
  },
];

export const education: Education[] = [
  {
    institution: 'Launchpad Philly',
    degree: 'Workforce Development Program',
    field: 'Software Development',
    years: 'Jan 2023 - Jun 2025',
  },
  {
    institution: 'Belmont Charter High School',
    degree: 'High School Diploma',
    field: 'General Education',
    years: '2020-2024',
  },
];
