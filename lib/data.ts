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
  description: string; // Short description for SEO, sharing, and hero section
  longDescription?: string; // Detailed description for project details section
  image: string;
  tags: string[];
  technologies?: Technology[];
  featured: boolean;
  featuredPriority?: number; // 1 = highest priority, 2 = second, etc. Lower numbers = higher priority
  link?: string;
  github?: string;
  slug?: string;
  features?: string[];
  // Optional extended case study fields (all optional, render only if present)
  gallery?: GalleryImage[];
  caseStudy?: CaseStudy;
  changelog?: ChangelogEntry[];
  milestones?: Milestone[];
  team?: TeamMember[];
  architecture?: ArchitectureSection;
  video?: VideoWalkthrough;
  codeSnippets?: CodeSnippet[];
};

// Extended optional content types
export type GalleryImage = {
  src: string;
  alt?: string;
  caption?: string;
};

export type CaseStudy = {
  problem?: string[];
  solution?: string[];
  architecture?: string[];
  results?: string[];
};

export type ChangelogEntry = {
  date: string; // ISO or readable date
  title: string;
  description?: string;
  version?: string;
};

export type Milestone = {
  date: string;
  title: string;
  description?: string;
  status?: 'planned' | 'in-progress' | 'done';
};

export type TeamMember = {
  name: string;
  role?: string;
  avatar?: string;
  link?: string; // personal site, LinkedIn, etc. (used for name)
  roleLink?: string; // GitHub or any link (used for role)
};

export type ArchitectureSection = {
  summary?: string;
  images?: GalleryImage[]; // diagrams/screens with captions
  notes?: string[];
};

export type VideoWalkthrough = {
  url: string; // YouTube, Loom, Vimeo
  title?: string;
  provider?: 'youtube' | 'vimeo' | 'loom' | 'file' | 'other';
};

export type CodeSnippet = {
  title?: string;
  language?: string; // e.g., ts, js, bash, sql
  code?: string | string[];
  markdown?: string;
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

/**
 * Project object properties (all optional except id, title, description, image, tags, featured, slug):
 *
 * id: string
 * title: string
 * description: string
 * image: string (URL or path)
 * tags: string[] (tag ids)
 * technologies?: { name: string; color: string }[]
 * featured: boolean
 * featuredPriority?: number
 * link?: string (live demo or site)
 * github?: string (repo URL)
 * slug?: string (URL slug)
 * features?: string[]
 * gallery?: { src: string; alt?: string; caption?: string }[]
 * caseStudy?: {
 *   problem?: string;
 *   solution?: string;
 *   architecture?: string;
 *   results?: string[];
 * }
 * changelog?: { date: string; title: string; description?: string; version?: string }[]
 * milestones?: { date: string; title: string; description?: string; status?: 'planned'|'in-progress'|'done' }[]
 * team?: { name: string; role?: string; avatar?: string; link?: string; roleLink?: string }[]
 * architecture?: {
 *   summary?: string;
 *   images?: { src: string; alt?: string; caption?: string }[];
 *   notes?: string[];
 * }
 * video?: { url: string; title?: string; provider?: 'youtube'|'vimeo'|'loom'|'file'|'other' }
 * codeSnippets?: { title?: string; language?: string; code: string }[]
 *
 * Example (see 'itwin' project for a full example):
 * {
 *   id: '20',
 *   title: 'itwin',
 *   ...
 *   gallery: [ { src: '/images/projects/itwin-grid-1.webp', alt: '...', caption: '...' } ],
 *   caseStudy: { problem: '...', solution: '...', architecture: '...', results: ['...'] },
 *   changelog: [ { date: '2025-07-15', title: '...', version: '1.2.0', description: '...' } ],
 *   milestones: [ { date: '2025-05-10', title: '...', status: 'done' } ],
 *   team: [ { name: 'Jane Doe', role: 'Product Designer', link: '...' } ],
 *   architecture: { summary: '...', images: [ { src: '...', caption: '...' } ], notes: ['...'] },
 *   video: { url: 'https://youtu.be/xyz', title: '...' },
 *   codeSnippets: [ { title: 'ECSQL filter', language: 'ts', code: '...' } ]
 * }
 */
export const projects: Project[] = [
  //This is the simple template
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
      'Real time social media platform for Philadelphia built in 30 hours during Philly Codefest 2025.',
    longDescription:
      'Philly Social is a real-time social media platform designed specifically for the Philadelphia community. Built in just 30 hours during the Philly Codefest 2025 hackathon, it aims to connect residents, promote local events, and support neighborhood businesses. With the help of Mohamed Souare, Bryan Gunawan, Sianni Strickland and a lot of caffeine I built this real time interact social media app.',
    image: '/images/projects/philly-social/phillysocial.webp',
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
    github: 'https://github.com/AD-Archer/PhillySocial',
    featured: true,
    featuredPriority: 2,
    gallery: [
      { src: '/images/projects/philly-social/home.webp', alt: 'Philly Social Screenshot 1', caption: 'Home Feed' },
      { src: '/images/projects/philly-social/events.webp', alt: 'Philly Social Screenshot 2', caption: 'Event Creation' },
      { src: '/images/projects/philly-social/discovery.webp', alt: 'Philly Social Screenshot 3', caption: 'Discovery' },
      { src: '/images/projects/philly-social/profile.webp', alt: 'Philly Social Screenshot 4', caption: 'Support Local' },
      { src: '/images/projects/philly-social/news.webp', alt: 'Philly Social Screenshot 5', caption: 'Another Screenshot' },
      { src: '/images/projects/philly-social/support-local.webp', alt: 'Philly Social Screenshot 5', caption: 'Another Screenshot' }
    ],
    features: [
      'Public and private channels',
      'Event creation and discovery',
      'Local news integration via RSS',
      'Support for local businesses',
      'Built with Mohamed Souare, Bryan Gunawan, and Sianni Strikland',
    ],
    caseStudy: {
      problem: [
        'Philadelphia residents lacked a dedicated platform to connect with their local community, discover neighborhood events, and support local businesses. Generic social media platforms failed to address the unique needs of city-specific community building.'
      ],
      solution: [
        'Developed a comprehensive social media platform specifically for Philadelphia during the 30-hour Philly Codefest 2025 hackathon. The platform features community channels, event discovery, local news integration, and business support tools.'
      ],
      architecture: [
        'Full-stack application built with React frontend, Node.js backend, Redis database, and TailwindCSS for responsive design. Integrated RSS feeds for local news and robust user authentication system.'
      ],
      results: [
        'Completed functional social platform in 30 hours',
        'Integrated local business discovery and support features',
        'Built collaborative community engagement tools',
        'Demonstrated rapid prototyping and team coordination skills',
        'Created scalable foundation for community growth'
      ]
    },
    team: [
      {
        name: 'Antonio Archer',
        role: 'Head Engineer',
        link: 'https://www.linkedin.com/in/antonio-archer/',
        roleLink: 'https://github.com/AD-Archer',
      },
      {
        name: 'Mohamed Souare',
        role: 'Developer',
        link: 'https://www.linkedin.com/in/mohamed-souare-8a61a2259/',
        roleLink: 'https://github.com/MSouare',
      },
      {
        name: 'Bryan Gunawan',
        role: 'Project Lead & Full-Stack Developer',
        link: 'https://www.linkedin.com/in/bryan-gunawan-a537132b9/',
        roleLink: 'https://github.com/CapnBryan',
      },
      {
        name: 'Sianni Strikland',
        role: 'Artistic Director',
        link: 'https://www.linkedin.com/in/sianni-strickland-934059284/',
      },
    ],
  },
  {
    id: '2',
    title: 'MoviesNoir',
    description:
      'Movie generator app celebrating Black culture through curated films and TV shows.',
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
    featured: false,
    featuredPriority: 4,
    features: [
      'Random movie & TV show generator',
      'Focus on Black culture and stories',
      'Locally stored movie data',
      'Simple, clean frontend experience',
    ],
    team: [
      {
        name: 'Antonio Archer',
        role: 'Developer & MovieSeer',
        link: 'https://www.linkedin.com/in/antonio-archer/',
      },
      {
        name: 'Mohamed Souare',
        role: 'Creative Developer',
        link: 'https://www.linkedin.com/in/mohamed-souare-8a61a2259/',
      },
      {
        name: 'Nasirah Solomon',
        role: 'Artist',
        link: 'https://www.linkedin.com/in/nasirah-solomon-abab91258/',
      },
    ],
  },
  {
    id: '3',
    title: 'TimeWise',
    description:
      'Mental health app with mood tracking, meditation, and Pomodoro timer integration.',
    image: '/images/projects/timewise/timewise.webp',
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
    featuredPriority: 3,
    gallery: [
      { src: '/images/projects/timewise/2.png', alt: 'TimeWise Screenshot 3', caption: 'Timewise' },
      { src: '/images/projects/timewise/3.png', alt: 'TimeWise Screenshot 2', caption: 'Timewise' },
      { src: '/images/projects/timewise/intro.png', alt: 'TimeWise Screenshot 2', caption: 'Timewise\'s intro' },
      { src: '/images/projects/timewise/4.png', alt: 'TimeWise Screenshot 1', caption: 'Timewise' },
      { src: '/images/projects/timewise/5.png', alt: 'TimeWise Screenshot 4', caption: 'Timewise' },
      { src: '/images/projects/timewise/6.png', alt: 'TimeWise Screenshot 5', caption: 'Timewise' },


    ],
    features: [
      'Mood tracking and journaling',
      'Pomodoro timer with custom playlists',
      'Integrated with YouTube and Spotify',
      'AI-enhanced suggestions',
      'Minimalist, cozy interface',
    ],
    caseStudy: {
      problem: [
        'Users struggle to balance productivity and mental wellness, often lacking tools that integrate time management with mental health tracking. Existing solutions are either too complex or treat productivity and wellness as separate concerns.'
      ],
      solution: [
        'Created a holistic wellness app that combines mood tracking, meditation features, and Pomodoro time management with personalized music integration. AI-enhanced suggestions provide personalized recommendations.'
      ],
      architecture: [
        'Full-stack React application with Node.js backend, MongoDB for data persistence, OpenAI API integration for personalized suggestions, and music streaming APIs (YouTube/Spotify) for enhanced focus sessions.'
      ],
      results: [
        'Unified productivity and wellness tracking',
        'Personalized AI recommendations for better habits',
        'Seamless music integration enhances focus sessions',
        'Cozy, minimalist design reduces cognitive overhead',
        'Holistic approach to time and mood management'
      ]
    },
  },
  {
    id: '4',
    title: 'LinkTree',
    description:
      'Personal link sharing platform with web and React Native versions.',
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
      'AI-powered stock recommendation tool with self-hosted deployment.',
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
    featured: false,
    features: [
      'AI-based stock recommendations',
      'User input or default stock data',
      'Self-hosted with Ubuntu & DuckDNS',
      'Caddy reverse proxy setup',
      'Great example of Flask & React integration',
    ],
    caseStudy: {
      problem: [
        'Individual investors lack access to sophisticated stock analysis tools and AI-powered insights that are typically available only to large financial institutions. Most retail platforms provide basic data without intelligent recommendations.'
      ],
      solution: [
        'Built a full-stack AI-powered stock recommendation system using OpenAI for analysis and insights. Self-hosted solution ensures data privacy and cost control while providing institutional-grade analysis.'
      ],
      architecture: [
        'Python Flask backend with OpenAI API integration, React frontend with TailwindCSS, self-hosted on Ubuntu server with Caddy reverse proxy and DuckDNS for dynamic DNS. Demonstrates full DevOps pipeline on budget hardware.'
      ],
      results: [
        'Democratized access to AI-powered stock analysis',
        'Achieved full self-hosting on 2011 MacBook hardware',
        'Integrated multiple APIs for comprehensive data',
        'Demonstrated cost-effective deployment strategies',
        'Created educational resource for Flask-React integration'
      ]
    },
  },
  {
    id: '6',
    title: 'Orange Field University',
    description:
      'Student management system with course enrollment and academic tracking.',
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
    caseStudy: {
      problem: [
        'Educational institutions need comprehensive student management systems that handle course enrollment, academic tracking, and user authentication. Many existing solutions are either too expensive or lack modern user interfaces.'
      ],
      solution: [
        'Developed a complete university management system using the T3 stack (Next.js, TypeScript, tRPC, Prisma) with PostgreSQL backend. Includes student/faculty authentication, course management, and academic progress tracking.'
      ],
      architecture: [
        'Modern T3 stack application with Next.js frontend, TypeScript for type safety, tRPC for end-to-end type safety, Prisma ORM for database management, PostgreSQL for data persistence, and TailwindCSS for responsive design.'
      ],
      results: [
        'Complete student lifecycle management',
        'Secure role-based authentication system',
        'Real-time academic progress tracking',
        'Modern, intuitive user interface',
        'Scalable architecture for institutional growth'
      ]
    },
  },
  {
    id: '7',
    title: 'PlatePedia',
    description:
      'Recipe sharing web app for creating, exploring, and saving meals.',
    image: '/images/projects/platepedia/platepedia.png',
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
    gallery: [
      { src: '/images/projects/platepedia/homepage.jpeg', alt: 'PlatePedia Screenshot 1', caption: 'Homepage' },
      { src: '/images/projects/platepedia/meal.jpeg', alt: 'PlatePedia Screenshot 2', caption: 'Recipe Detail' },
    ],
    features: [
      'Recipe creation and discovery',
      'User-generated content',
      'Database-backed app using PostgreSQL',
      'Responsive and modern design',
    ],
    caseStudy: {
      problem: [
        'Home cooks need a platform to organize, share, and discover recipes without the clutter and ads found on commercial recipe sites. Many existing platforms prioritize monetization over user experience.'
      ],
      solution: [
        'Created a clean, user-focused recipe sharing platform that prioritizes functionality and user experience. Built with modern web technologies to ensure fast loading and responsive design.'
      ],
      architecture: [
        'Full-stack application with React frontend, Node.js/Express backend, PostgreSQL database for data persistence, and TailwindCSS for responsive design. Focuses on clean data structure and user-friendly interfaces.'
      ],
      results: [
        'Ad-free, user-focused recipe sharing experience',
        'Fast, responsive web application',
        'Clean data structure for easy recipe management',
        'Community-driven content creation',
        'Scalable database architecture'
      ]
    },
  },
  {
    id: '16',
    title: 'Qoutey',
    description:
      'Automated email service for daily motivational quotes and journal reminders.',
    image:
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2023-11/short-quotes-swl-231117-11-e139f1.jpg',
    tags: ['backend', 'golang'],
    technologies: [{ name: 'GoLang', color: technologyColors.typescript }],
    slug: 'qoutey',
    github: 'https://github.com/AD-Archer/qoutey',
    featured: false,
    features: [
      'Automated email delivery system using cron jobs',
      'Morning, midday, and evening motivational quotes',
      'Built with GoLang',
      'Email integration using SMTP servers',
      'Customizable delivery schedule',
    ],
  },
  {
    id: '8',
    title: 'Corra',
    description:
      'AI-powered RPG game that creates personalized adventures based on personality tests.',
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
      'Modern finance dashboard for managing personal finances and investments.',
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
    description: 'IoT security alarm management system with visual dashboard.',
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
    description: 'Cybersecurity education platform for password security and 2FA.',
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
      'Retro browser game celebrating Philadelphia sports culture.',
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
      'Simple QR code generator for quick link sharing and presentations.',
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
      'Audio distortion tool for creating retro-style sound effects.',
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
    description: 'Fast file format converter supporting SVG, HEIC, WEBP to PNG.',
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
  {
    id: '17',
    title: 'GitHub Issue Automation Script',
    description:
      'Bash script for automating GitHub issue creation from CSV files.',
    image: '/images/projects/githubissues.jpg',
    tags: ['backend', 'bash'],
    technologies: [{ name: 'Bash', color: technologyColors.nodejs }],
    slug: 'github-issue-automation-script',
    github: 'https://github.com/AD-Archer/GitHub-Issue-Automation-Script',
    featured: false,
    features: [
      'Bulk issue creation from CSV',
      'Written in Bash works with any posix shell',
      'Automatic label creation',
      'Streamlines project planning',
      'Uses GitHub CLI for automation',
      'Great for managing large projects',
    ],
  },
  {
    id: '18',
    title: 'Social Metrics',
    description: 'Social media analytics dashboard with real-time YouTube insights.',
    image: 'https://socialmetrics.adarcher.app/img/exampleimageofsite.png',
    tags: ['fullstack', 'ai', 'frontend'],
    technologies: [
      { name: 'Next.js', color: technologyColors.react },
      { name: 'TypeScript', color: technologyColors.typescript },
      { name: 'Firebase', color: technologyColors.typescript },
      { name: 'Recharts', color: technologyColors.chartjs },
      { name: 'TailwindCSS', color: technologyColors.typescript },
      { name: 'OpenAI GPT-4o-mini', color: technologyColors.openai },
    ],
    slug: 'social-dashboard',
    link: 'https://socialmetrics.adarcher.app/',
    github: 'https://github.com/ad-archer/social-dash',
    featured: false,
    features: [
      'Google OAuth authentication',
      'Real-time YouTube analytics',
      'Responsive design with TailwindCSS',
      'AI assistant for insights and suggestions',
      'Customizable dashboard widgets',
      'Wikipedia API integration for topic research',
      'Recharts for data visualization',
      'Built with Next.js and TypeScript',
    ],
    caseStudy: {
      problem: [
        'Content creators struggle to analyze their social media performance across multiple platforms, lacking unified dashboards that provide actionable insights and AI-powered recommendations for content improvement.'
      ],
      solution: [
        'Built a comprehensive social media analytics dashboard focusing on YouTube metrics with AI-powered insights, real-time data visualization, and research tools to help creators optimize their content strategy.'
      ],
      architecture: [
        'Next.js application with TypeScript, Firebase for authentication and data storage, Google OAuth for YouTube API access, OpenAI GPT-4o-mini for insights, Recharts for visualizations, and Wikipedia API for topic research.'
      ],
      results: [
        'Unified dashboard for multiple social platforms',
        'Real-time analytics with actionable insights',
        'AI-powered content recommendations',
        'Streamlined content research workflow',
        'Responsive design for mobile and desktop use'
      ]
    },
  },
  {
    id: '19',
    title: 'Launchpad Student Interaction Form',
    description:
      'AI-powered student interaction tracking system for educational organizations.',
    image: '/images/projects/lsf(launchpadstudentform)/finaldashboard.webp',
    tags: ['fullstack', 'ai', 'frontend'],
    technologies: [
      { name: 'Next.js', color: technologyColors.react },
      { name: 'TypeScript', color: technologyColors.typescript },
      { name: 'PostgreSQL', color: technologyColors.typescript },
      { name: 'Recharts', color: technologyColors.chartjs },
      { name: 'TailwindCSS', color: technologyColors.typescript },
      { name: 'Gemini AI', color: technologyColors.openai },
    ],
    slug: 'lsf',
    link: 'https://lsf.adarcher.app/info',
    github: 'https://github.com/AD-Archer/Student_interaction',
    featured: false,
    features: [
      'Responsive design with TailwindCSS',
      'AI assistant for insights and suggestions',
      'Recharts for data visualization',
    ],
    caseStudy: {
      problem: [
        'Launchpad and Building 21 struggled with inefficient manual tracking of student interactions, leading to data inconsistencies, missed follow-ups, and difficulty measuring program effectiveness. Staff spent excessive time on administrative tasks instead of student support.'
      ],
      solution: [
        'Developed a fully automated interaction tracker using Next.js, Gemini AI, and PostgreSQL. The system streamlines data collection, provides AI-powered insights, and automates reporting processes.'
      ],
      architecture: [
        'Next.js application with server-side rendering, PostgreSQL database with Prisma ORM, Gemini AI integration for intelligent insights, Recharts for data visualization, and responsive TailwindCSS design.'
      ],
      results: [
        'Reduced administrative overhead by 70%',
        'Improved data accuracy and consistency',
        'Enhanced student support through better tracking',
        'Automated insights and reporting capabilities',
        'Increased organizational efficiency'
      ]
    },
    gallery: [
      {
        src: '/images/projects/lsf(launchpadstudentform)/finaldashboard.webp',
        alt: 'Final dashboard view',
        caption: 'Main dashboard showing student interaction data',
      },
      {
        src: '/images/projects/lsf(launchpadstudentform)/finalanalytics.webp',
        alt: 'Analytics dashboard',
        caption: 'Analytics and insights from student interactions',
      },
      {
        src: '/images/projects/lsf(launchpadstudentform)/Ai_insights.webp',
        alt: 'AI insights interface',
        caption: 'AI-powered insights and suggestions',
      },
      {
        src: '/images/projects/lsf(launchpadstudentform)/mobile-dash.webp',
        alt: 'Mobile dashboard',
        caption: 'Mobile-responsive dashboard design',
      },
      {
        src: '/images/projects/lsf(launchpadstudentform)/mobile-insights.webp',
        alt: 'Mobile insights view',
        caption: 'Mobile view of insights and analytics',
      },
      {
        src: '/images/projects/lsf(launchpadstudentform)/email.webp',
        alt: 'Email functionality',
        caption: 'Automated email system for notifications',
      },
    ],
    architecture: {
      summary: 'A fully automated interaction tracker built with Next.js, Gemini AI, and PostgreSQL to streamline student interaction management and improve organizational efficiency.',
      images: [
        {
          src: '/images/projects/lsf(launchpadstudentform)/wireframe.webp',
          alt: 'Wireframe design',
          caption: 'Initial wireframe and design concepts',
        },
        {
          src: '/images/projects/lsf(launchpadstudentform)/Schema.webp',
          alt: 'Database schema',
          caption: 'PostgreSQL database schema design',
        },
      ],
      notes: [
        'Uses Next.js for server-side rendering and API routes',
        'Gemini AI from playlab provides intelligent insights and suggestions',
        'PostgreSQL database stores interaction data and analytics',
        'Responsive design optimized for mobile and desktop use',
        'Automated email notifications for important events',
      ],
    },
  },
  {
    id: '20',
    title: 'Ecora',
    description:
      'iTwin.js platform extension with advanced ECSQL filters for 3D Revit model data querying.',
    image: '/images/projects/itwin/itwin.png',
    tags: ['frontend', 'fullstack'],
    technologies: [
      { name: 'TypeScript', color: technologyColors.typescript },
      { name: 'React', color: technologyColors.react },
      { name: 'SCSS', color: technologyColors.typescript },
      { name: 'ECSQL', color: technologyColors.typescript },
      { name: 'iTwin.js', color: technologyColors.typescript },
    ],
    slug: 'ecora',
    link: 'https://itwin-ecora.vercel.app/',
    github: 'https://github.com/Building21-iTwin/itwin-ecora',
    featured: true,
    featuredPriority: 1,
    features: [
      'Functional extension for iTwin.js platform',
      'Advanced frontend filters using ECSQL',
      '3D Revit model data querying',
      'Legacy React app migrated to modern React.js',
      'Live demo (requires free itwin.bentley.com account)',
      'Source code public, editing requires Bentley developer account',
    ],
    gallery: [
      {
        src: '/images/projects/itwin/image1.png',
        alt: 'Itwin revit iModel',
        caption: 'Itwin revit iModel',
      },
      {
        src: '/images/projects/itwin/image2.png',
        alt: '3D model view',
        caption: 'iTwin viewer with highlighted elements',
      },
      {
        src: '/images/projects/itwin/image3.png',
        alt: 'Paginated results with sorting',
        caption: 'Paginated results with sorting',
      },
      {
        src: '/images/projects/itwin/image4.png',
        alt: 'Most recent screenshot of ecora',
        caption: 'Most recent screenshot of ecora',
      },
    ],
    caseStudy: {
      problem: [
        'Legacy codebase made it difficult to extend filtering and search capabilities across large BIM datasets. Non-technical users needed dynamic querying tools for massive 3D Revit models but were limited by outdated frontend architecture and performance constraints.'
      ],
      solution: [
        'Rebuilt the UI with modern React + TypeScript architecture and introduced ECSQL-driven filters, enabling dynamic queries and performant results. Migrated legacy application to improve maintainability and user experience.'
      ],
      architecture: [
        'Next.js application with iTwin.js viewer integration. ECSQL queries are proxied through API routes with state management via React Context and URL parameters. Modern component architecture with TypeScript for type safety.'
      ],
      results: [
        'Non-technical users can now create complex queries without needing to understand the underlying data structure.',
        'Simplified addition of new filter types and functionality',
        'Improved code maintainability and developer experience',
        'Enhanced user interface responsiveness and usability',
        'Successful migration from legacy to modern architecture'
      ]
    },

    team: [
      {
        name: 'Antonio Archer',
        role: 'Full‑stack Developer',
        link: 'https://www.linkedin.com/in/antonio-archer/',
        roleLink: 'https://github.com/AD-Archer',
      },
      {
        name: 'Jamir Ong',
        role: 'Full‑stack Developer',
        link: 'https://www.linkedin.com/in/jamir-ong/',
        roleLink: 'https://github.com/JamirOng',
      },
    ],
    // architecture: {
    //   summary: 'Composable grid filters mapped to ECSQL, decoupled from the viewer, with API routes mediating data access.',
    //   images: [
    //     { src: '/images/diagrams/itwin-arch.webp', alt: 'High-level architecture', caption: 'Client, API, iTwin platform' },
    //   ],
    //   notes: ['Uses SSR for SEO on catalog pages', 'Caches query metadata in memory', 'Feature flags for beta filters'],
    // },
    // video: { url: 'https://youtu.be/dQw4w9WgXcQ', title: 'iTwin Grid Search Walkthrough' },
    codeSnippets: [
      {
        title: 'ECSQL filter builder',
        language: 'sql',
  markdown: "```sql\nSELECT ec_classname (c.ECInstanceId) className,\nCOALESCE(s.DisplayLabel, s.Name) schemaLabel,\nCOALESCE(c.DisplayLabel, c.Name) classLabel,\nCOUNT(*)\nFROM bis.GeometricElement3d ge\nJOIN ECDbMeta.ClassHasAllBaseClasses abc ON abc.SourceECInstanceId = ge.ECClassId\nJOIN ECDbMeta.ECClassDef c ON c.ECInstanceId = abc.TargetECInstanceId\nJOIN ECDbMeta.ECSchemaDef s ON s.ECInstanceId = c.Schema.Id\nWHERE s.Name != 'BisCore'\nGROUP BY c.ECInstanceId\n```",
      },
      {
        title: 'API route',
        language: 'ts',
  markdown: "```ts\nexport async function GET(req: Request) {\n  const { searchParams } = new URL(req.url);\n  const where = buildWhere(Object.fromEntries(searchParams));\n  const rows = await queryECSQL(`SELECT * FROM Elements WHERE ${where}`);\n  return Response.json({ rows });\n}\n```",
      },
    ],
  },
  {
    id: '21',
    title: 'N8N Job Search Dashboard',
    description:
      'Self-hostable job search automation with AI-powered resume matching and LinkedIn scraping.',
    image: '/images/projects/n8n-job-search.png',
    tags: ['fullstack', 'ai', 'backend'],
    technologies: [
      { name: 'Next.js', color: technologyColors.react },
      { name: 'TypeScript', color: technologyColors.typescript },
      { name: 'PostgreSQL', color: technologyColors.typescript },
      { name: 'Prisma', color: technologyColors.prisma },
      { name: 'TailwindCSS', color: technologyColors.typescript },
      { name: 'n8n', color: technologyColors.nodejs },
      { name: 'OpenAI API', color: technologyColors.openai },
      { name: 'Gemini AI', color: technologyColors.openai },
    ],
    slug: 'job-search-dashboard',
    github: 'https://github.com/AD-Archer/archersuite-n8n-job-dashboard',
    featured: true,
    featuredPriority: 5,
    features: [
      'Search Configuration Management for multiple job criteria',
      'Job Dashboard with AI-powered scoring and tracking',
      'n8n Integration with RESTful API endpoints',
      'Application Tracking (new, applied, interview, offer, rejected)',
      'AI-Powered Resume Matching via Gemini/OpenAI/Ollama',
      'Automated LinkedIn job scraping workflow',
      'Cover letter generation based on job descriptions',
      'Discord/Telegram notifications for high-scoring matches',
      'Self-hostable with Docker and PM2 support',
      'PostgreSQL database with Prisma ORM',
      'Ready-to-import n8n workflow template available',
    ],
    caseStudy: {
      problem: [
        'Job seekers struggle with manual application tracking, inconsistent job searching across platforms, and lack of intelligent matching between resumes and job requirements. The competitive job market demands constant monitoring and quick responses to opportunities.'
      ],
      solution: [
        'Built a comprehensive automation platform that integrates n8n workflows with AI-powered resume matching, automated LinkedIn scraping, and real-time application tracking. The system provides intelligent job scoring and automated notifications for high-potential opportunities.'
      ],
      architecture: [
        'Next.js frontend with PostgreSQL database, n8n workflow automation engine, multiple AI providers (Gemini, OpenAI, Ollama) for resume analysis, and notification systems via Discord/Telegram. Self-hostable with Docker and PM2 support.'
      ],
      results: [
        'Automated job discovery reduces manual search time by 80%',
        'AI-powered scoring improves job-resume matching accuracy',
        'Centralized tracking eliminates application status confusion',
        'Self-hostable solution provides complete data ownership',
        'Ready-to-import workflow templates accelerate setup'
      ]
    },
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
    {
      name: 'Bash Scripting',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
      power: 80,
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
    {name: 'docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      power: 85
    },
    {
      name: 'n8n',
      icon: 'https://n8n.io/favicon.ico',
      power: 80,
    }
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
    {
      name: 'Azure',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      power: 80,
    },
    {
      name: 'Digital Ocean',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
      power: 85,
    },
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

// Utility functions for project sorting
export const sortProjectsByFeaturedPriority = (projects: Project[]) => {
  return [...projects].sort((a, b) => {
    // First, separate featured from non-featured
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    
    // If both are featured, sort by priority (lower number = higher priority)
    if (a.featured && b.featured) {
      const aPriority = a.featuredPriority ?? 999; // Default to low priority if not set
      const bPriority = b.featuredPriority ?? 999;
      return aPriority - bPriority;
    }
    
    // If neither are featured, maintain original order (by id)
    return parseInt(a.id) - parseInt(b.id);
  });
};

export const getFeaturedProjects = (projectList: Project[] = projects) => {
  return projectList
    .filter(project => project.featured)
    .sort((a, b) => {
      const aPriority = a.featuredPriority ?? 999;
      const bPriority = b.featuredPriority ?? 999;
      return aPriority - bPriority;
    });
};

export const getNonFeaturedProjects = (projectList: Project[] = projects) => {
  return projectList.filter(project => !project.featured);
};
