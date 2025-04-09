export type Tag = {
  id: string
  name: string
  color: string
}

export type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  featured: boolean
  link?: string
  github?: string
  slug?: string
}

export type Skill = {
  name: string
  icon: string
  power: number
}

export type SkillCategory = {
  frontend: Skill[]
  backend: Skill[]
  databases: Skill[]
  tools: Skill[]
  hosting: Skill[]
}

export type Certification = {
  title: string
  issuer: string
  date: string
  link?: string
  credentialId?: string
  skills?: string[]
  highlight?: string
}

export type Job = {
  title: string
  company: string
  duration: string
  location: string
  achievements: string[]
  techStack: string[]
}

export type Education = {
  institution: string
  degree: string
  field: string
  years: string
}

export const tags: Tag[] = [
  { id: "react", name: "React", color: "bg-blue-500" },
  { id: "nextjs", name: "Next.js", color: "bg-black" },
  { id: "typescript", name: "TypeScript", color: "bg-blue-700" },
  { id: "tailwind", name: "Tailwind CSS", color: "bg-cyan-500" },
  { id: "node", name: "Node.js", color: "bg-green-600" },
  { id: "mongodb", name: "MongoDB", color: "bg-green-500" },
  { id: "firebase", name: "Firebase", color: "bg-yellow-500" },
  { id: "graphql", name: "GraphQL", color: "bg-pink-600" },
  { id: "aws", name: "AWS", color: "bg-orange-500" },
  { id: "ui", name: "UI/UX", color: "bg-purple-500" },
]

export const projects: Project[] = [
  {
    id: "1",
    title: "PhillySocial",
    description:
      "A social media platform for the city of Philadelphia with built-in public and private channels, events, RSS news feed, and local business support. Built in 30 hours for Philly Codefest 2025 with Next.js, TypeScript, and Firebase.",
    image: "/images/projects/phillysocial.webp",
    tags: ["nextjs", "typescript", "firebase"],
    featured: true,
    slug: "phillysocial",
    link: "https://phillysocial.adarcher.app",
  },
  {
    id: "2",
    title: "MoviesNoir",
    description: "A movie generator app built with React and Node.js to share black culture through movies and TV shows. Find your next favorite movie or TV show.",
    image: "/images/projects/moviesnoir.webp",
    tags: ["react", "node"],
    featured: true,
    slug: "moviesnoir",
    link: "https://moviesnoir.adarcher.app",
  },
  {
    id: "3",
    title: "TimeWise",
    description: "A mental health app with a mood tracker, meditation mode, and a cozy time management tool with a pomodoro timer with YouTube or Spotify playlists for music. Includes an AI chatbot, built with Next.js, TypeScript, and Firebase.",
    image: "/images/projects/timewise.webp",
    tags: ["nextjs", "typescript", "firebase"],
    featured: true,
    slug: "timewise",
    link: "https://timewise.adarcher.app",
  },
]

export const skills: SkillCategory = {
  frontend: [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', power: 100 },
    { name: 'EJS', icon: '/icons/ejs.svg', power: 85 },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', power: 99 },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', power: 90 },
    { name: 'TailwindCSS', icon: '/images/tailwindcss-original.svg', power: 99 },
    { name: 'Typescript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', power: 99 },
  ],
  backend: [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', power: 100 },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', power: 90 },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', power: 99 },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', power: 90 },
  ],
  databases: [
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', power: 85 },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', power: 80 },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', power: 75 },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', power: 100 },
  ],
  tools: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', power: 90 },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', power: 95 },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', power: 75 },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', power: 75 },
  ],
  hosting: [
    { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', power: 70 },
    { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png', power: 100 },
    { name: 'Netlify', icon: 'https://www.netlify.com/icon.svg', power: 85 },
  ],
}

// For backward compatibility with existing components
export const skillsList: Skill[] = [
  ...skills.frontend.map(skill => ({ ...skill, category: "frontend" as const })),
  ...skills.backend.map(skill => ({ ...skill, category: "backend" as const })),
  ...skills.databases.map(skill => ({ ...skill, category: "backend" as const })),
  ...skills.tools.map(skill => ({ ...skill, category: "tools" as const })),
  ...skills.hosting.map(skill => ({ ...skill, category: "tools" as const })),
]

export const certifications: Certification[] = [
  {
    title: "PCEP™ – Certified Entry-Level Python Programmer",
    issuer: "Python Institute",
    date: "Issued Jun 2024",
    credentialId: "PCEP-30-02",
    link: "https://www.credly.com/badges/c97d5448-24e6-4f37-80c1-b83ab768bbdd/linked_in_profile",
    skills: ["Python Programming", "Algorithm Design", "Problem Solving"],
    highlight: "Mastered core Python concepts and best practices"
  },
  {
    title: "React Development Certification",
    issuer: "Codecademy",
    date: "Issued Feb 2025",
    link: "https://www.codecademy.com/profiles/Ad-Archer/certificates/af00e5032d0a68cc84879983f5d8333b",
    skills: ["React.js", "State Management", "Component Architecture"],
    highlight: "Built 5+ production-ready React applications"
  },
  {
    title: "AI & Machine Learning Fundamentals",
    issuer: "Databricks",
    date: "Issued Nov 2024 · Expires Nov 2026",
    credentialId: "121496255",
    link: "https://credentials.databricks.com/03505993-f39c-4a0e-9b60-d63684c156b6",
    skills: ["AI Development", "ML Models", "Data Analysis"],
    highlight: "Applied AI concepts in real-world projects"
  },
]

export const jobs: Job[] = [
  {
    title: "Full Stack Developer",
    company: "Launchpad Philly",
    duration: "Jan 2023 - Present",
    location: "Philadelphia, PA",
    achievements: [
      "Developed muliple full stack applications to solve issues faced by organization",
      "Engineered solutions using modern web stack (React, Node.js, MongoDB)",
      "Led technical workshops on web development fundamentals and DevOps practices",
      "Integrated AI tools (ChatGPT) to enhance development workflows",
      "Collaborated on projects using Git/GitHub for version control",
      "Earned PCEP Python certification with 200+ coding hours"
    ],
    techStack: ["React", "Node.js", "Python", "MongoDB", "Git", "AI/LLM", "DevOps"]
  },
  {
    title: "Technical Mentor",
    company: "Launchpad Philly",
    duration: "Jan 2025 - Present",
    location: "Philadelphia, PA",
    achievements: [
      "Supported 90+ students through personalized technical learning",
      "Developed curriculum for career transition workshops",
      "Provided progress tracking and growth strategy development",
      "Facilitated technical interview preparation sessions",
      "Hosted professional development workshops"
    ],
    techStack: ["Career Coaching", "Technical Mentoring", "Workshop Development", "Progress Analytics"]
  },
  {
    title: "Cybersecurity Solutions Engineer (Intern)",
    company: "Accenture",
    duration: "Jun 2024 - Aug 2024",
    location: "Philadelphia, PA",
    achievements: [
      "Led team development of password security solution",
      "Integrated security APIs for vulnerability detection",
      "Presented cybersecurity strategies to leadership",
      "Implemented authentication best practices"
    ],
    techStack: ["Security APIs", "React", "Node.js", "Authentication Systems"]
  },
  {
    title: "Infrastructure & Systems Engineer",
    company: "Belmont Charter Network",
    duration: "Jun 2021 - Aug 2021",
    location: "Philadelphia, PA",
    achievements: [
      "Optimized multi-location network infrastructure",
      "Implemented automated system backups",
      "Developed IT documentation and procedures",
      "Maintained enterprise-level device networks"
    ],
    techStack: ["Network Administration", "Server Management", "Windows Server"]
  }
]

export const education: Education[] = [
  {
    institution: "Launchpad Philly",
    degree: "Workforce Development Program",
    field: "Software Development",
    years: "Jan 2023 - Present",
  },
  {
    institution: "Belmont Charter High School",
    degree: "High School Diploma",
    field: "General Education",
    years: "2020-2024",
  },
]
