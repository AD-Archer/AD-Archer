export type Tag = {
  id: string;
  name: string;
  color: string;
};

export type Technology = {
  name: string;
  color: string;
};

// Standardized technology colors for consistent styling
export const technologyColors = {
  react: 'bg-blue-500',
  nodejs: 'bg-green-500',
  python: 'bg-yellow-600',
  mongodb: 'bg-green-600',
  typescript: 'bg-blue-500',
  express: 'bg-gray-600',
  openai: 'bg-purple-600',
  prisma: 'bg-gray-800',
  chartjs: 'bg-red-500',
  phaser: 'bg-purple-500',
  qrcode: 'bg-black',
  webAudio: 'bg-yellow-500',
  sharp: 'bg-red-500',
  golang: 'bg-blue-500',  
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  technologies?: Technology[];
  featured: boolean;
  link?: string;
  github?: string;
  slug?: string;
  features?: string[];
};

export type Skill = {
  name: string;
  icon: string;
  power: number;
};

export type SkillCategory = {
  frontend: Skill[];
  backend: Skill[];
  databases: Skill[];
  tools: Skill[];
  hosting: Skill[];
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  credentialId?: string;
  skills?: string[];
  highlight?: string;
};

export type Job = {
  title: string;
  company: string;
  duration: string;
  location: string;
  achievements: string[];
  techStack: string[];
};

export type Education = {
  institution: string;
  degree: string;
  field: string;
  years: string;
};

export const tags: Tag[] = [
  { id: 'fullstack', name: 'Full Stack', color: 'bg-purple-600' },
  { id: 'frontend', name: 'Frontend', color: 'bg-blue-500' },
  { id: 'backend', name: 'Backend', color: 'bg-green-600' },
  { id: 'ai', name: 'AI', color: 'bg-pink-600' },
  { id: 'node', name: 'Node.js', color: 'bg-green-500' },
  { id: 'python', name: 'Python', color: 'bg-yellow-600' },
  { id: 'golang', name: 'GoLang', color: 'bg-blue-500' },
];

export const projects: Project[] = [
  //This is the template
  // {
  //   id: "0",
  //   title: "",
  //   description: "",
  //   image: "",
  //   tags: [],
  //   featured: false,
  //   slug: "",
  //   link: "",
  //   features: []
  // },
  {
    id: '1',
    title: 'Philly Social',
    description:
      'A social media platform for the city of Philadelphia. Built in 30 hours for Philly Codefest 2025 with public/private channels, events, RSS news, and local business support.',
    image: '/images/projects/phillysocial.webp',
    tags: ['fullstack', 'node'],
    technologies: [
      { name: 'React', color: technologyColors.react },
      { name: 'Node.js', color: technologyColors.nodejs },
      { name: 'MongoDB', color: technologyColors.mongodb },
      { name: 'TailwindCSS', color: technologyColors.typescript },
      { name: 'Typescript', color: technologyColors.typescript },
    ],
    slug: 'philly-social',
    link: 'https://phillysocial.adarcher.app/',
    github: 'https://github.com/AD-Archer/Philly-Social',
    featured: true,
    features: [
      'Public and private channels',
      'Event creation and discovery',
      'Local news integration via RSS',
      'Support for local businesses',
      'Built with Mohamed Souare, Bryan Gunawan, and Sianni Strikland',
    ],
  },
  {
    id: '2',
    title: 'MoviesNoir',
    description:
      'A movie generator app to share Black culture through films and TV shows. Uses a JSON file as the movie database.',
    image: '/images/projects/moviesnoir.webp',
    tags: ['frontend', 'backend', 'node'],
    technologies: [
      { name: 'React', color: technologyColors.react },
      { name: 'Node.js', color: technologyColors.nodejs },
      { name: 'Express', color: technologyColors.express },
    ],
    slug: 'moviesnoir',
    link: 'https://moviesnoir.vercel.app/',
    github: 'https://github.com/AD-Archer/MoviesNoir',
    featured: true,
    features: [
      'Random movie & TV show generator',
      'Focus on Black culture and stories',
      'Locally stored movie data',
      'Simple, clean frontend experience',
    ],
  },
  {
    id: '3',
    title: 'TimeWise',
    description:
      'A mental health app with mood tracking, meditation, and a cozy time management tool with Pomodoro + music.',
    image: '/images/projects/timewise.webp',
    tags: ['fullstack', 'ai', 'node'],
    technologies: [
      { name: 'React', color: technologyColors.react },
      { name: 'Node.js', color: technologyColors.nodejs },
      { name: 'OpenAI API', color: technologyColors.openai },
      { name: 'MongoDB', color: technologyColors.mongodb },
      { name: 'Typescript', color: technologyColors.typescript },
      { name: 'AI', color: technologyColors.openai },
    ],
    slug: 'timewise',
    link: 'https://timewise.adarcher.app/',
    github: 'https://github.com/AD-Archer/TimeWise',
    featured: true,
    features: [
      'Mood tracking and journaling',
      'Pomodoro timer with custom playlists',
      'Integrated with YouTube and Spotify',
      'AI-enhanced suggestions',
      'Minimalist, cozy interface',
    ],
  },
  {
    id: '4',
    title: 'LinkTree',
    description:
      'A personal linktree for easier sharing of links, later rebuilt as a React Native app.',
    image: '/images/projects/tree.png',
    tags: ['frontend', 'node'],
    technologies: [
      { name: 'React', color: technologyColors.react },
      { name: 'React Native', color: technologyColors.react },
    ],
    slug: 'linktree',
    link: 'https://www.adarcher.app/',
    github: 'https://github.com/AD-Archer/tree',
    featured: false,
    features: [
      'Personal link collection',
      'Hosted on your main site',
      'Includes a mobile version (React Native)',
      'Lightweight and easy to maintain',
    ],
  },
  {
    id: '5',
    title: 'AI Stock Market Analysis',
    description:
      'A full-stack stock recommendation tool powered by OpenAI. Hosted locally on a 2011 MacBook with Caddy and DuckDNS.',
    image: '/images/projects/stockapp.jpg',
    tags: ['fullstack', 'ai', 'python'],
    technologies: [
      { name: 'Python', color: technologyColors.python },
      { name: 'Flask', color: technologyColors.python },
      { name: 'React', color: technologyColors.react },
      { name: 'OpenAI API', color: technologyColors.openai },
      { name: 'TailwindCSS', color: technologyColors.typescript },
    ],
    slug: 'ai-stock-market-analysis',
    link: 'https://stocks.adarcher.app/',
    github: 'https://github.com/AD-Archer/ai-stock-market-analysis',
    featured: true,
    features: [
      'AI-based stock recommendations',
      'User input or default stock data',
      'Self-hosted with Ubuntu & DuckDNS',
      'Caddy reverse proxy setup',
      'Great example of Flask & React integration',
    ],
  },
  {
    id: '6',
    title: 'Orange Field University',
    description:
      'A student/course management app with user auth, academic tracking, and course enrollment.',
    image: '/images/projects/uof.png',
    tags: ['fullstack', 'backend', 'node'],
    technologies: [
      { name: 'Next.js', color: technologyColors.react },
      { name: 'TypeScript', color: technologyColors.typescript },
      { name: 'PostgreSQL', color: technologyColors.typescript },
      { name: 'Prisma', color: technologyColors.typescript },
      { name: 'TailwindCSS', color: technologyColors.typescript },
      { name: 'AI', color: technologyColors.openai },
    ],
    slug: 'orange-field-university',
    link: 'https://university-orange-field.vercel.app/',
    github: 'https://github.com/AD-Archer/University-OrangeField',
    featured: false,
    features: [
      'Course and user management',
      'Secure authentication',
      'Academic progress tracker',
      'PostgreSQL backend with T3 stack',
      'Clean, responsive design',
      'AI assistant',
    ],
  },
  {
    id: '7',
    title: 'PlatePedia',
    description:
      'Modern recipe sharing web app with Node and PostgreSQL. Create, explore, and save meals.',
    image: '/images/projects/platepedia.png',
    tags: ['fullstack', 'node'],
    technologies: [
      { name: 'React', color: technologyColors.react },
      { name: 'Node.js', color: technologyColors.nodejs },
      { name: 'PostgreSQL', color: technologyColors.typescript },
      { name: 'Express', color: technologyColors.express },
      { name: 'TailwindCSS', color: technologyColors.typescript },
    ],
    slug: 'platepedia',
    link: 'https://platepedia.vercel.app/',
    github: 'https://github.com/AD-Archer/PlatePedia-recipeapp',
    featured: false,
    features: [
      'Recipe creation and discovery',
      'User-generated content',
      'Database-backed app using PostgreSQL',
      'Responsive and modern design',
    ],
  },
  {
    id: '16',
    title: 'Qoutey',
    description:
      'Recently I have taken to journaling and I thought it would be neat to have a way for me to reread my journal entries or focus on certain days. So I made this app to send me a quote every day or a date/entry to focus on.',
    image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2023-11/short-quotes-swl-231117-11-e139f1.jpg',
    tags: ['backend', 'golang'],
    technologies: [
      { name: 'GoLang', color: technologyColors.typescript },
    ],
    slug: 'qoutey',
    github: 'https://github.com/AD-Archer/qoutey',
    featured: false,
    features: [
      'Automated email delivery system using cron jobs',
      'Morning, midday, and evening motivational quotes',
      'Built with GoLang',
      'Email integration using SMTP servers',
      'Customizable delivery schedule'
    ],
  },
  {
    id: '8',
    title: 'Corra',
    description:
      'AI-powered game that builds a personalized RPG experience based on your personality test.',
    image: '/images/projects/corra.png',
    tags: ['frontend', 'ai', 'node'],
    technologies: [
      { name: 'React', color: technologyColors.react },
      { name: 'OpenAI API', color: technologyColors.openai },
      { name: 'AI', color: technologyColors.openai },
    ],
    slug: 'corra',
    link: 'https://corra-tau.vercel.app/',
    github: 'https://github.com/AD-Archer/corra',
    featured: false,
    features: [
      'AI-based RPG adventure generator',
      'Personality test integration',
      'Fun, interactive gameplay',
      'Unique game for each user',
    ],
  },
  {
    id: '9',
    title: 'Fintech App',
    description:
      'Manage your personal finances and investments with this modern finance dashboard.',
    image: '/images/projects/fintech.png',
    tags: ['fullstack', 'node'],
    technologies: [
      { name: 'React', color: technologyColors.react },
      { name: 'Node.js', color: technologyColors.nodejs },
      { name: 'PostgreSQL', color: technologyColors.typescript },
      { name: 'Chart.js', color: technologyColors.chartjs },
      { name: 'TailwindCSS', color: technologyColors.typescript },
    ],
    slug: 'fintech-app',
    link: 'https://fintech-app-blond.vercel.app/',
    github: 'https://github.com/AD-Archer/fintech-app',
    featured: false,
    features: [
      'Budgeting and investment tools',
      'Live data visualization',
      'Secure data storage',
      'Clean UI/UX',
    ],
  },
  {
    id: '10',
    title: 'Dynasty Defense',
    description: 'System for managing custom security alarms (fire, smoke, security).',
    image: '/images/projects/dynasty-defense.png',
    tags: ['frontend', 'node'],
    technologies: [{ name: 'React', color: technologyColors.react }],
    slug: 'dynasty-defense',
    link: 'https://dynasty-defense.vercel.app/',
    github: 'https://github.com/AD-Archer/dynasty-defense',
    featured: false,
    features: [
      'Custom alarm creation',
      'Visual management dashboard',
      'Designed for IoT-based security systems',
    ],
  },
  {
    id: '11',
    title: 'FortifyNow',
    description: 'Cybersecurity awareness platform focused on passwords, 2FA, and USB keys.',
    image: '/images/projects/fortifynow.png',
    tags: ['frontend', 'node'],
    technologies: [
      { name: 'React', color: technologyColors.react },
      { name: 'Cyber Security', color: technologyColors.typescript },
    ],
    slug: 'fortifynow',
    link: 'https://fortify-now.vercel.app/',
    github: 'https://github.com/AD-Archer/FortifyNow',
    featured: false,
    features: [
      'Password strength checker',
      'password generator',
      '2FA education',
      'USB key tutorial',
      'Cybersecurity for everyone',
    ],
  },
  {
    id: '12',
    title: 'Win or Lose Philly',
    description:
      'A joke game celebrating Philly sports spirit: whether we win or lose, the city burns.',
    image: '/images/projects/winorlosephilly.png',
    tags: ['frontend', 'node'],
    technologies: [
      { name: 'React', color: technologyColors.react },
      { name: 'phraser', color: technologyColors.typescript },
    ],
    slug: 'win-or-lose-philly',
    link: 'https://winorlosephilly.verecl.app/',
    github: 'https://github.com/AD-Archer/winorlosephilly',
    featured: false,
    features: ['Retro-styled browser game', 'Built for 2024 Super Bowl', 'Built with Phaser.js'],
  },
  {
    id: '13',
    title: 'Qr Code Generator',
    description:
      'A personal QR code generator created while making slides for OrangeField University.',
    image: '/images/projects/qr.png',
    tags: ['frontend', 'node'],
    technologies: [
      { name: 'React', color: technologyColors.react },
      { name: 'qrcode.react', color: technologyColors.react },
      { name: 'bootstrap', color: technologyColors.react },
    ],
    slug: 'qr-code-generator',
    link: 'https://qr.adarcher.app/',
    github: 'https://github.com/AD-Archer/Qr-code-generator',
    featured: false,
    features: ['Generate QR codes on the fly', 'Simple UI', 'Great for quick link sharing'],
  },
  {
    id: '14',
    title: 'Retro Audio Maker',
    description:
      'Transforms your audio files into retro-style distorted versions for fun or music creation. originally built for Win or Lose Philly soundtrack.',
    image: '/images/projects/retro.png',
    tags: ['backend', 'node'],
    technologies: [
      { name: 'Node.js', color: technologyColors.nodejs },
      { name: 'Express', color: technologyColors.express },
    ],
    slug: 'retro-audio-maker',
    link: 'https://retroaudiomaker.adarcher.app/',
    github: 'https://github.com/AD-Archer/retroaudiomaker',
    featured: false,
    features: [
      'Audio distortion tool',
      'Built for Win or Lose Philly soundtrack',
      'Node.js powered backend',
    ],
  },
  {
    id: '15',
    title: 'Quick Convert',
    description: 'A fork of T3 Convert SVG, HEIC, WEBP files to PNG in seconds.',
    image: '/images/projects/quickconvert.png',
    tags: ['frontend', 'node'],
    technologies: [
      { name: 'React', color: technologyColors.react },
      { name: 'TailwindCSS', color: technologyColors.react },
      { name: 'Typescript', color: technologyColors.typescript },
    ],
    slug: 'quick-convert',
    link: 'https://quickconvert.adarcher.app/',
    github: 'https://github.com/AD-Archer/Quick-Convert',
    featured: false,
    features: [
      'Convert multiple file formats',
      'Supports HEIC, SVG, WEBP → PNG',
      'Drag and drop interface',
    ],
  },
];

export const skills: SkillCategory = {
  frontend: [
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      power: 100,
    },
    { name: 'EJS', icon: '/icons/ejs.svg', power: 85 },
    {
      name: 'Vite',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
      power: 99,
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      power: 90,
    },
    { name: 'TailwindCSS', icon: '/images/tailwindcss-original.svg', power: 99 },
    {
      name: 'Typescript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      power: 99,
    },
  ],
  backend: [
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      power: 100,
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      power: 90,
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      power: 99,
    },
    {
      name: 'Express',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      power: 90,
    },
  ],
  databases: [
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      power: 85,
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      power: 80,
    },
    {
      name: 'Firebase',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      power: 75,
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      power: 100,
    },
  ],
  tools: [
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      power: 90,
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      power: 95,
    },
    {
      name: 'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      power: 75,
    },
    {
      name: 'Linux',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
      power: 75,
    },
  ],
  hosting: [
    {
      name: 'AWS',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      power: 70,
    },
    {
      name: 'Vercel',
      icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png',
      power: 100,
    },
    { name: 'Netlify', icon: 'https://www.netlify.com/icon.svg', power: 85 },
  ],
};

// For backward compatibility with existing components
export const skillsList: Skill[] = [
  ...skills.frontend.map(skill => ({ ...skill, category: 'frontend' as const })),
  ...skills.backend.map(skill => ({ ...skill, category: 'backend' as const })),
  ...skills.databases.map(skill => ({ ...skill, category: 'backend' as const })),
  ...skills.tools.map(skill => ({ ...skill, category: 'tools' as const })),
  ...skills.hosting.map(skill => ({ ...skill, category: 'tools' as const })),
];

export const certifications: Certification[] = [
  {
    title: 'PCEP™ – Certified Entry-Level Python Programmer',
    issuer: 'Python Institute',
    date: 'Issued Jun 2024',
    credentialId: 'PCEP-30-02',
    link: 'https://www.credly.com/badges/c97d5448-24e6-4f37-80c1-b83ab768bbdd/linked_in_profile',
    skills: ['Python Programming', 'Algorithm Design', 'Problem Solving'],
    highlight: 'Mastered core Python concepts and best practices',
  },
  {
    title: 'React Development Certification',
    issuer: 'Codecademy',
    date: 'Issued Feb 2025',
    link: 'https://www.codecademy.com/profiles/Ad-Archer/certificates/af00e5032d0a68cc84879983f5d8333b',
    skills: ['React.js', 'State Management', 'Component Architecture'],
    highlight: 'Built 5+ production-ready React applications',
  },
  {
    title: 'AI & Machine Learning Fundamentals',
    issuer: 'Databricks',
    date: 'Issued Nov 2024 · Expires Nov 2026',
    credentialId: '121496255',
    link: 'https://credentials.databricks.com/03505993-f39c-4a0e-9b60-d63684c156b6',
    skills: ['AI Development', 'ML Models', 'Data Analysis'],
    highlight: 'Applied AI concepts in real-world projects',
  },
];

export const jobs: Job[] = [
  {
    title: 'Full Stack Developer',
    company: 'Launchpad Philly',
    duration: 'Jan 2023 - Present',
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
    duration: 'Jan 2025 - Present',
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
    duration: 'Jun 2021 - Aug 2021',
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
    years: 'Jan 2023 - Present',
  },
  {
    institution: 'Belmont Charter High School',
    degree: 'High School Diploma',
    field: 'General Education',
    years: '2020-2024',
  },
];
