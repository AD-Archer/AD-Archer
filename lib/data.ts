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
  { id: 'devops', name: 'DevOps', color: 'bg-cyan-500' },
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
    id: '25',
    title: 'Archer Life',
    description:
      'Concept landing page that tells the Archer Life story and connects people to Archer Fitness, Archer Health, and Archer Aqua without promising extra functionality.',
    longDescription:
      "Archer Life is a simple concept page documenting the wellness journey that helped me lose 60 pounds of fat and gain 10 pounds of muscle between November 2024 and November 2025. Today it replaces endless app hunting with one honest introduction to the Archer philosophy, outlines our paywall-free commitment, and sends visitors straight to Archer Fitness, Archer Health, and Archer Aqua. It is not a full-fledged hub just the mission, the story, and clean links to the products that already work.",
    image: '/images/projects/archer-life/archer-life.webp',
    tags: ['fullstack', 'ai', 'devops'],
    technologies: [
      { name: 'Next.js', color: technologyColors.react },
      { name: 'TypeScript', color: technologyColors.typescript },
      { name: 'TailwindCSS', color: technologyColors.typescript },
      { name: 'Docker', color: technologyColors.typescript },
      { name: 'Kubernetes', color: technologyColors.typescript },
    ],
    slug: 'archer-life',
    featured: true,
    featuredPriority: 0,
    features: [
      'Story-first landing page summarizing the 2024-25 transformation journey',
      'Direct links to Archer Fitness, Archer Health, and Archer Aquano extra sign ups required',
      'Transparent paywall-free philosophy with open-source roadmap callouts',
      'Expectation setting copy that explains future goals without overselling current capabilities',
      'Self-hosted Chromebook-powered Kubernetes cluster running the marketing experience',
      'Progressive Web App shell so the placeholder loads quickly on mobile devices',
    ],
    gallery: [
      {
        src: '/images/projects/archer-fitness/sitebanner.webp',
        alt: 'Archer Fitness dashboard',
        caption:
          'Strength and conditioning insights from Archer Fitness anchor the training pillar of Archer Life.',
      },
      {
        src: '/images/projects/archer-health/dashboard.webp',
        alt: 'Archer Health nutrition analytics',
        caption:
          'The Archer Health nutrition engine powers macro tracking and caloric periodization inside Archer Life.',
      },
      {
        src: '/images/projects/archer-aqua/desktop-home.webp',
        alt: 'Archer Aqua hydration goals',
        caption:
          'Hydration intelligence from Archer Aqua rounds out the daily rituals within Archer Life.',
      },
    ],
    caseStudy: {
      problem: [
        'Finding trustworthy health apps without subscriptions or hidden upsells made staying consistent unnecessarily stressful.',
        'Context switching between training, nutrition, and hydration tools meant the overall body recomposition story was fragmented.',
      ],
      solution: [
        'Published a placeholder landing page that links directly to Archer Fitness, Archer Health, and Archer Aqua without requiring new accounts.',
        'Documented every ritual, automation, and open-source stack that delivered real results so others can follow without chasing new apps.',
      ],
      architecture: [
        'Static Next.js page that surfaces curated content, transformation storytelling, and deep links to each Archer product.',
        'Shared design system and component library keeping every Archer product visually and accessibly aligned.',
        'Roadmap for lightweight service connectors that preserve independence while enabling future data sharing.',
      ],
      results: [
        'Documented the 60-pound fat loss and 10-pound muscle gain journey in a single, repeatable playbook.',
        'Reduced onboarding friction by pointing people to the exact routines, recipes, and hydration wins that matter.',
        'Set the foundation for future integrations by aligning branding, messaging, and infrastructure decisions early.',
      ],
    },
    team: [
      {
        name: 'Antonio Archer',
        role: 'Full-Stack Developer & Product Designer',
        link: 'https://www.linkedin.com/in/antonio-archer/',
        roleLink: 'https://github.com/AD-Archer',
      },
    ],
    architecture: {
      summary:
        'Concept landing architecture that keeps Archer Fitness, Archer Health, and Archer Aqua aligned under one story while leaving each app independent.',
      notes: [
        'Self-hosted Kubernetes infrastructure running on repurposed Chromebooks for cost-effective scale',
        'TypeScript-driven content modeling keeps narratives and playbooks consistent across channels',
        'TailwindCSS design system provides cohesive branding and accessibility across experiences',
        'OpenAI-powered copy assists storytelling and habit guidance without gating features behind subscriptions',
        'Deep-link architecture keeps individual apps independent while giving users a single starting point',
        'Future roadmap includes opt-in data bridges once trust and community needs are validated',
      ],
    },
  },
  {
    id: '22',
    title: 'Archer Fitness',
    description:
      'AI-powered fitness tracking application with workout planning, progress analytics, and personalized recommendations. Self-hosted on Kubernetes cluster.',
    longDescription:
      'Archer Fitness is a comprehensive fitness tracking platform born from my personal journey of losing 50 pounds in 10 months. Built to help others achieve their fitness goals the way apps helped me, it features AI-powered workout generation, detailed progress analytics, nutrition tracking, and intelligent insights. Self-hosted on a Kubernetes cluster running on 3 Chromebooks, demonstrating advanced DevOps capabilities and infrastructure management.',
    image: '/images/projects/archer-fitness/sitebanner.webp',
    tags: ['fullstack', 'ai', 'node', 'devops'],
    technologies: [
      { name: 'Next.js', color: technologyColors.react },
      { name: 'TypeScript', color: technologyColors.typescript },
      { name: 'PostgreSQL', color: technologyColors.typescript },
      { name: 'Prisma', color: technologyColors.prisma },
      { name: 'TailwindCSS', color: technologyColors.typescript },
      { name: 'Docker', color: technologyColors.typescript },
      { name: 'Kubernetes', color: technologyColors.typescript },
      { name: 'AI', color: technologyColors.openai },
    ],
    slug: 'archer-fitness',
    link: 'https://fitness.adarcher.app/',
    github: 'https://github.com/AD-Archer/archer-fitness',
    featured: true,
    featuredPriority: 1,
    gallery: [
      {
        src: '/images/projects/archer-fitness/archer-fitness-pods.webp',
        alt: 'Kubernetes Pods Dashboard',
        caption: 'Self-hosted Kubernetes cluster running Archer Fitness pods across 2 nodes',
      },
      {
        src: '/images/projects/archer-fitness/cluster-dashboard.webp',
        alt: 'Kubernetes Cluster Dashboard',
        caption: 'K3s cluster with 610 total resources, 2 nodes, and 21 deployments',
      },
      {
        src: '/images/projects/archer-fitness/rancher-deployment.webp',
        alt: 'Kubernetes Deployment Details',
        caption:
          'Archer Fitness deployment with 4 running pods across chronos-master and chronos-node1',
      },
      {
        src: 'https://fitness.adarcher.app/screens/exercise.png',
        alt: 'Exercise Library',
        caption: 'Comprehensive exercise database with detailed instructions',
      },
      {
        src: 'https://fitness.adarcher.app/screens/progress-analytics.png',
        alt: 'Progress Analytics',
        caption: 'Interactive charts and performance tracking',
      },
      {
        src: 'https://fitness.adarcher.app/screens/schedule-manager.png',
        alt: 'Schedule Manager',
        caption: 'Weekly workout planning and schedule management',
      },
      {
        src: 'https://fitness.adarcher.app/screens/weightprogress.png',
        alt: 'Weight Progress',
        caption: 'Body weight tracking and goal monitoring',
      },
      {
        src: 'https://fitness.adarcher.app/screens/workout-history.png',
        alt: 'Workout History',
        caption: 'Complete workout history with detailed logs',
      },
    ],
    features: [
      'AI-powered workout generation and recommendations',
      'Comprehensive exercise library with detailed instructions',
      'Real-time workout tracking with sets, reps, and weights',
      'Progress analytics with interactive charts and visualizations',
      'Custom workout templates and schedule management',
      'Body weight tracking and goal setting',
      'Muscle recovery feedback system',
      'Two-factor authentication (2FA) with TOTP support',
      'Progressive Web App with offline capabilities',
      'Self-hosted on Kubernetes cluster (3 Chromebooks)',
      'Docker containerization with CI/CD pipelines',
      'Responsive design optimized for mobile and desktop',
    ],
    caseStudy: {
      problem: [
        "After losing 50 pounds in 10 months, I realized the need for a comprehensive fitness tracking app that combines workout planning, progress analytics, and AI-powered recommendations. Existing apps were either too complex, lacked personalization, or didn't provide the level of detail needed for serious fitness tracking.",
      ],
      solution: [
        'Built a full-featured fitness platform from scratch using modern web technologies. Integrated AI for workout generation and personalized recommendations, implemented detailed progress tracking with visual analytics, and deployed on a self-hosted Kubernetes cluster for complete control and privacy.',
      ],
      architecture: [
        'Next.js 14 application with App Router, PostgreSQL database with Prisma ORM, NextAuth for authentication with 2FA support, Docker containerization, and Kubernetes orchestration on a 3-node Chromebook cluster. Includes automated CI/CD pipelines with GitHub Actions, security scanning, and dependency updates.',
      ],
      results: [
        'Created a production-ready fitness app used by real users',
        'Self-hosted infrastructure demonstrates advanced DevOps skills',
        'Kubernetes cluster running on budget hardware (Chromebooks)',
        'Comprehensive feature set rivaling commercial fitness apps',
        'Personal achievement: Lost 50 pounds in 10 months',
        'PWA capabilities enable offline workout tracking',
        'Automated CI/CD reduces deployment time by 80%',
      ],
    },
    team: [
      {
        name: 'Antonio Archer',
        role: 'Full-Stack Developer & DevOps Engineer',
        link: 'https://www.linkedin.com/in/antonio-archer/',
        roleLink: 'https://github.com/AD-Archer',
      },
    ],
    architecture: {
      summary:
        'Modern full-stack architecture with Next.js frontend, PostgreSQL database, Kubernetes orchestration on a 3-node Chromebook cluster, and comprehensive CI/CD pipelines for automated testing, building, and deployment.',
      notes: [
        'Next.js 14 with App Router for modern React patterns',
        'PostgreSQL with Prisma ORM for type-safe database access',
        'NextAuth.js for authentication with 2FA support',
        'Docker containerization for consistent deployments',
        'Kubernetes cluster on 3 Chromebooks for self-hosting',
        'GitHub Actions for CI/CD automation',
        'Trivy for Docker security scanning',
        'Progressive Web App with service workers',
        'Recharts for data visualization',
        'Radix UI for accessible components',
      ],
    },
  },
  {
    id: '23',
    title: 'Archer Aqua',
    description:
      'Intelligent hydration tracking app that personalizes your daily water goals using weather data, health metrics, and your activity patterns.',
    longDescription:
      'Archer Aqua is an intelligent hydration tracking application designed to help users stay properly hydrated through personalized recommendations. Built as part of the Archer Health Suite alongside Archer Fitness, it uses weather data, health metrics, and activity patterns to calculate optimal daily water intake goals. Features include a beautiful calendar view for tracking progress, achievement system for motivation, customizable drink logging, and smart reminders. The app promotes healthier living by making hydration tracking both intelligent and effortless.',
    image: '/images/projects/archer-aqua/archer-aqua-banner.webp',
    tags: ['fullstack', 'ai', 'golang'],
    technologies: [
      { name: 'React', color: technologyColors.react },
      { name: 'Vite', color: technologyColors.typescript },
      { name: 'Go', color: technologyColors.golang },
      { name: 'PostgreSQL', color: technologyColors.typescript },
      { name: 'TailwindCSS', color: technologyColors.typescript },
      { name: 'Docker', color: technologyColors.typescript },
      { name: 'AI', color: technologyColors.openai },
    ],
    slug: 'archer-aqua',
    link: 'https://aqua.adarcher.app/',
    github: 'https://github.com/AD-Archer/archer-aqua',
    featured: false,
    featuredPriority: 3,
    gallery: [
      {
        src: '/images/projects/archer-aqua/desktop-home.webp',
        alt: 'Hydration Dashboard',
        caption: 'Personalized hydration dashboard with daily goals and progress tracking',
      },
      {
        src: '/images/projects/archer-aqua/mobile-home.webp',
        alt: 'Hydration Dashboard',
        caption: 'Personalized hydration dashboard with daily goals and progress tracking',
      },
      {
        src: '/images/projects/archer-aqua/mobile-achievements.webp',
        alt: 'Achievement System',
        caption: 'Gamified achievement system to encourage consistent hydration habits',
      },
      {
        src: '/images/projects/archer-aqua/mobile-calendar.webp',
        alt: 'Calendar View',
        caption: 'Beautiful calendar interface showing hydration history and achievements',
      },
      {
        src: '/images/projects/archer-aqua/mobile-stats.webp',
        alt: 'Mobile Stats',
        caption: 'Mobile Stats with hydration insights and trends',
      },
    ],
    features: [
      'AI-powered personalized hydration goals based on weather, activity, and health data',
      'Beautiful calendar view for tracking daily and historical hydration progress',
      'Achievement system with badges and milestones for motivation',
      'Customizable drink logging with nutritional information',
      'Smart reminders and notifications for optimal timing',
      'Weather integration for adjusting goals based on temperature and humidity',
      'Health metrics integration with Archer Fitness for comprehensive wellness tracking',
      'Progressive Web App with offline capabilities',
      'Responsive design optimized for mobile and desktop',
      'Data visualization with charts and progress indicators',
    ],
    caseStudy: {
      problem: [
        'Many people struggle to stay properly hydrated due to inconsistent tracking, lack of personalization, and difficulty remembering to drink water throughout the day. Generic hydration apps fail to account for individual factors like weather conditions, activity levels, and health metrics that significantly impact water needs.',
      ],
      solution: [
        'Developed an intelligent hydration tracking app that uses AI to personalize daily water goals based on multiple data sources. Integrated weather APIs, health metrics, and activity patterns to provide accurate recommendations, while incorporating gamification elements and beautiful UI to make hydration tracking engaging and effortless.',
      ],
      architecture: [
        'Built with Vite + React frontend and Golang backend for a modern, high-performance web application. Uses PostgreSQL for data persistence, integrates with weather APIs for environmental data, and includes AI algorithms for personalized goal calculation. Containerized with Docker for consistent deployment and self-hosting capabilities.',
      ],
      results: [
        'Created a comprehensive hydration tracking solution with intelligent personalization',
        'Integrated with Archer Fitness for holistic health suite functionality',
        'Implemented gamification features to improve user engagement and retention',
        'Developed responsive PWA accessible across all devices',
        'Established foundation for AI-driven health and wellness applications',
        'Demonstrated ability to build interconnected health applications',
      ],
    },
    team: [
      {
        name: 'Antonio Archer',
        role: 'Full-Stack Developer & Product Designer',
        link: 'https://www.linkedin.com/in/antonio-archer/',
        roleLink: 'https://github.com/AD-Archer',
      },
    ],
    architecture: {
      summary:
        'Modern full-stack web application with Vite React frontend and Golang backend, featuring AI-powered personalization algorithms, weather API integration, and Docker containerization for optimal hydration management.',
      notes: [
        'Vite + React for fast, modern frontend development',
        'Golang backend for high-performance API services',
        'PostgreSQL database for reliable data persistence',
        'Docker containerization for consistent deployment',
        'Weather API integration for environmental factor consideration',
        'AI algorithms for personalized hydration goal calculation',
        'Progressive Web App with service workers for offline functionality',
        'Responsive design with TailwindCSS for cross-device compatibility',
        'Integration capabilities with Archer Fitness health suite',
      ],
    },
  },
  {
    id: '24',
    title: 'Archer Health',
    description:
      'Health and Calorie tracking application sourced from the USDA with daily meal logging, progress analytics, and personalized recommendations. Self-hosted on Kubernetes cluster.',
    longDescription:
      'Archer Health is a comprehensive health tracking platform born from my personal journey of losing 50 pounds in 10 months. Built to help others achieve their health goals the way apps helped me, it features detailed progress analytics, nutrition tracking, and intelligent insights. Self-hosted on a Kubernetes cluster, demonstrating advanced DevOps capabilities and infrastructure management.',
    image: '/images/projects/archer-health/banner.webp',
    tags: ['fullstack', 'node', 'devops'],
    technologies: [
      { name: 'Next.js', color: technologyColors.react },
      { name: 'TypeScript', color: technologyColors.typescript },
      { name: 'PostgreSQL', color: technologyColors.typescript },
      { name: 'Prisma', color: technologyColors.prisma },
      { name: 'TailwindCSS', color: technologyColors.typescript },
      { name: 'Docker', color: technologyColors.typescript },
      { name: 'Kubernetes', color: technologyColors.typescript },
      { name: 'AI', color: technologyColors.openai },
    ],
    slug: 'archer-health',
    link: 'https://health.adarcher.app/',
    github: 'https://github.com/AD-Archer/archer-health',
    featured: true,
    featuredPriority: 2,
    gallery: [
      {
        src: '/images/projects/archer-health/dashboard.webp',
        alt: 'Dashboard',
        caption: 'Comprehensive health dashboard with daily calorie intake and nutrition breakdown',
      },
      {
        src: '/images/projects/archer-health/goals.webp',
        alt: 'Goals',
        caption: 'Personalized health goals and progress tracking',
      },
      {
        src: '/images/projects/archer-health/meal-log.webp',
        alt: 'Meal Log',
        caption:
          'Archer Health meal logging feature with detailed food entries and nutritional analysis',
      },
      {
        src: '/images/projects/archer-health/progress.webp',
        alt: 'Progress Tracking',
        caption:
          'Archer Health progress tracking feature with visual analytics and insights',
      },
      {
        src: '/images/projects/archer-health/recipes.webp',
        alt: 'Recipes',
        caption:
          'Archer Health recipe feature with healthy meal suggestions and cooking instructions',
      },
    ],
    features: [
      'Comprehensive health dashboard with daily calorie intake and nutrition breakdown',
      'Personalized health goals and progress tracking',
      'Meal logging with detailed food entries and nutritional analysis',
      'Recipe suggestions with healthy meal ideas and cooking instructions',
      'Progress tracking with visual analytics and insights',
      'Two-factor authentication (2FA) with TOTP support',
      'Progressive Web App with offline capabilities',
      'Responsive design optimized for mobile and desktop',

    ],
    caseStudy: {
      problem: [
        "After losing 50 pounds in 10 months, I realized the need for a comprehensive health tracking app that combines nutrition tracking, progress analytics, and personalized recommendations. Existing apps were either too complex, lacked personalization, or didn't provide the level of detail needed for serious health tracking.",
      ],
      solution: [
        'I developed an app that would\'ve all the features I wanted when I was losing weight. Built a full-featured health platform from scratch using modern web technologies. Implemented detailed progress tracking with visual analytics, and deployed on a self-hosted Kubernetes cluster for complete control and privacy.',
      ],
      architecture: [
        'Next.js 14 application with App Router, PostgreSQL database with Prisma ORM, NextAuth for authentication with 2FA support, Docker containerization, and Kubernetes orchestration on a 3-node Chromebook cluster. Includes automated CI/CD pipelines with GitHub Actions, security scanning, and dependency updates.',
      ],
      results: [
        'Created a production-ready health app used by real users',
        'Self-hosted infrastructure demonstrates advanced DevOps skills',
        'Kubernetes cluster running on budget hardware',
        'Comprehensive feature set rivaling commercial health apps',
        'Personal achievement: Lost 50 pounds in 10 months',
        'PWA capabilities enable offline health tracking',
        'Automated CI/CD reduces deployment time by 80%',
      ],
    },
    team: [
      {
        name: 'Antonio Archer',
        role: 'Full-Stack Developer & DevOps Engineer',
        link: 'https://www.linkedin.com/in/antonio-archer/',
        roleLink: 'https://github.com/AD-Archer',
      },
    ],
    architecture: {
      summary:
        'Modern full-stack architecture with Next.js frontend, PostgreSQL database, Kubernetes orchestration and comprehensive CI/CD pipelines for automated testing, building, and deployment.',
      notes: [
        'Next.js 14 with App Router for modern React patterns',
        'PostgreSQL with Prisma ORM for type-safe database access',
        'NextAuth.js for authentication with 2FA support',
        'Docker containerization for consistent deployments',
        'Clerk for user management and authentication',
        'GitHub Actions for CI/CD automation',
        'Progressive Web App with service workers',
        'Recharts for data visualization',
      ],
    },
  },
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
    featuredPriority: 3,
    gallery: [
      {
        src: '/images/projects/philly-social/home.webp',
        alt: 'Philly Social Screenshot 1',
        caption: 'Home Feed',
      },
      {
        src: '/images/projects/philly-social/events.webp',
        alt: 'Philly Social Screenshot 2',
        caption: 'Event Creation',
      },
      {
        src: '/images/projects/philly-social/discovery.webp',
        alt: 'Philly Social Screenshot 3',
        caption: 'Discovery',
      },
      {
        src: '/images/projects/philly-social/profile.webp',
        alt: 'Philly Social Screenshot 4',
        caption: 'Support Local',
      },
      {
        src: '/images/projects/philly-social/news.webp',
        alt: 'Philly Social Screenshot 5',
        caption: 'Another Screenshot',
      },
      {
        src: '/images/projects/philly-social/support-local.webp',
        alt: 'Philly Social Screenshot 5',
        caption: 'Another Screenshot',
      },
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
        'Philadelphia residents lacked a dedicated platform to connect with their local community, discover neighborhood events, and support local businesses. Generic social media platforms failed to address the unique needs of city-specific community building.',
      ],
      solution: [
        'Developed a comprehensive social media platform specifically for Philadelphia during the 30-hour Philly Codefest 2025 hackathon. The platform features community channels, event discovery, local news integration, and business support tools.',
      ],
      architecture: [
        'Full-stack application built with React frontend, Node.js backend, Redis database, and TailwindCSS for responsive design. Integrated RSS feeds for local news and robust user authentication system.',
      ],
      results: [
        'Completed functional social platform in 30 hours',
        'Integrated local business discovery and support features',
        'Built collaborative community engagement tools',
        'Demonstrated rapid prototyping and team coordination skills',
        'Created scalable foundation for community growth',
      ],
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
    featured: false,
    featuredPriority: 4,
    gallery: [
      {
        src: '/images/projects/timewise/2.webp',
        alt: 'TimeWise Screenshot 3',
        caption: 'Timewise',
      },
      {
        src: '/images/projects/timewise/3.webp',
        alt: 'TimeWise Screenshot 2',
        caption: 'Timewise',
      },
      {
        src: '/images/projects/timewise/intro.webp',
        alt: 'TimeWise Screenshot 2',
        caption: "Timewise's intro",
      },
      {
        src: '/images/projects/timewise/4.webp',
        alt: 'TimeWise Screenshot 1',
        caption: 'Timewise',
      },
      {
        src: '/images/projects/timewise/5.webp',
        alt: 'TimeWise Screenshot 4',
        caption: 'Timewise',
      },
      {
        src: '/images/projects/timewise/6.webp',
        alt: 'TimeWise Screenshot 5',
        caption: 'Timewise',
      },
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
        'Users struggle to balance productivity and mental wellness, often lacking tools that integrate time management with mental health tracking. Existing solutions are either too complex or treat productivity and wellness as separate concerns.',
      ],
      solution: [
        'Created a holistic wellness app that combines mood tracking, meditation features, and Pomodoro time management with personalized music integration. AI-enhanced suggestions provide personalized recommendations.',
      ],
      architecture: [
        'Full-stack React application with Node.js backend, MongoDB for data persistence, OpenAI API integration for personalized suggestions, and music streaming APIs (YouTube/Spotify) for enhanced focus sessions.',
      ],
      results: [
        'Unified productivity and wellness tracking',
        'Personalized AI recommendations for better habits',
        'Seamless music integration enhances focus sessions',
        'Cozy, minimalist design reduces cognitive overhead',
        'Holistic approach to time and mood management',
      ],
    },
  },
  {
    id: '4',
    title: 'LinkTree',
    description: 'Personal link sharing platform with web and React Native versions.',
    image: '/images/projects/tree.webp',
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
    description: 'AI-powered stock recommendation tool with self-hosted deployment.',
    image: '/images/projects/stockapp.webp',
    tags: ['fullstack', 'ai', 'python', 'devops'],
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
        'Individual investors lack access to sophisticated stock analysis tools and AI-powered insights that are typically available only to large financial institutions. Most retail platforms provide basic data without intelligent recommendations.',
      ],
      solution: [
        'Built a full-stack AI-powered stock recommendation system using OpenAI for analysis and insights. Self-hosted solution ensures data privacy and cost control while providing institutional-grade analysis.',
      ],
      architecture: [
        'Python Flask backend with OpenAI API integration, React frontend with TailwindCSS, self-hosted on Ubuntu server with Caddy reverse proxy and DuckDNS for dynamic DNS. Demonstrates full DevOps pipeline on budget hardware.',
      ],
      results: [
        'Democratized access to AI-powered stock analysis',
        'Achieved full self-hosting on 2011 MacBook hardware',
        'Integrated multiple APIs for comprehensive data',
        'Demonstrated cost-effective deployment strategies',
        'Created educational resource for Flask-React integration',
      ],
    },
  },
  {
    id: '6',
    title: 'Orange Field University',
    description: 'Student management system with course enrollment and academic tracking.',
    image: '/images/projects/uof.webp',
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
        'Educational institutions need comprehensive student management systems that handle course enrollment, academic tracking, and user authentication. Many existing solutions are either too expensive or lack modern user interfaces.',
      ],
      solution: [
        'Developed a complete university management system using the T3 stack (Next.js, TypeScript, tRPC, Prisma) with PostgreSQL backend. Includes student/faculty authentication, course management, and academic progress tracking.',
      ],
      architecture: [
        'Modern T3 stack application with Next.js frontend, TypeScript for type safety, tRPC for end-to-end type safety, Prisma ORM for database management, PostgreSQL for data persistence, and TailwindCSS for responsive design.',
      ],
      results: [
        'Complete student lifecycle management',
        'Secure role-based authentication system',
        'Real-time academic progress tracking',
        'Modern, intuitive user interface',
        'Scalable architecture for institutional growth',
      ],
    },
  },
  {
    id: '7',
    title: 'PlatePedia',
    description: 'Recipe sharing web app for creating, exploring, and saving meals.',
    image: '/images/projects/platepedia/platepedia.webp',
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
      {
        src: '/images/projects/platepedia/homepage.webp',
        alt: 'PlatePedia Screenshot 1',
        caption: 'Homepage',
      },
      {
        src: '/images/projects/platepedia/meal.webp',
        alt: 'PlatePedia Screenshot 2',
        caption: 'Recipe Detail',
      },
    ],
    features: [
      'Recipe creation and discovery',
      'User-generated content',
      'Database-backed app using PostgreSQL',
      'Responsive and modern design',
    ],
    caseStudy: {
      problem: [
        'Home cooks need a platform to organize, share, and discover recipes without the clutter and ads found on commercial recipe sites. Many existing platforms prioritize monetization over user experience.',
      ],
      solution: [
        'Created a clean, user-focused recipe sharing platform that prioritizes functionality and user experience. Built with modern web technologies to ensure fast loading and responsive design.',
      ],
      architecture: [
        'Full-stack application with React frontend, Node.js/Express backend, PostgreSQL database for data persistence, and TailwindCSS for responsive design. Focuses on clean data structure and user-friendly interfaces.',
      ],
      results: [
        'Ad-free, user-focused recipe sharing experience',
        'Fast, responsive web application',
        'Clean data structure for easy recipe management',
        'Community-driven content creation',
        'Scalable database architecture',
      ],
    },
  },
  {
    id: '16',
    title: 'Qoutey',
    description: 'Automated email service for daily motivational quotes and journal reminders.',
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
    image: '/images/projects/corra.webp',
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
    description: 'Modern finance dashboard for managing personal finances and investments.',
    image: '/images/projects/fintech.webp',
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
    image: '/images/projects/dynasty-defense.webp',
    tags: ['frontend', 'node'],
    technologies: [{ name: 'React', color: technologyColors.react }],
    slug: 'dynasty-defense',
    link: 'https://dynasty-defense.vercel.app/',
    github: 'https://github.com/AD-Archer/dynasty-defense',
    gallery: [
      {
        src: '/images/projects/dynasty-defense/home.webp',
        alt: 'Dynasty Defense Screenshot 1',
        caption: 'Dashboard Overview',
      },
      {
        src: '/images/projects/dynasty-defense/home-alarms.webp',
        alt: 'Dynasty Defense Screenshot 2',
        caption: 'Alarm Management',
      },
      {
        src: '/images/projects/dynasty-defense/logs.webp',
        alt: 'Dynasty Defense Screenshot 3',
        caption: 'User logs',
      },
      {
        src: '/images/projects/dynasty-defense/settings.webp',
        alt: 'Dynasty Defense Screenshot 4',
        caption: 'User Settings',
      },
    ],
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
    image: '/images/projects/fortifynow.webp',
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
    description: 'Retro browser game celebrating Philadelphia sports culture.',
    image: '/images/projects/winorlosephilly.webp',
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
    description: 'Simple QR code generator for quick link sharing and presentations.',
    image: '/images/projects/qr.webp',
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
    description: 'Audio distortion tool for creating retro-style sound effects.',
    image: '/images/projects/retro.webp',
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
    image: '/images/projects/quickconvert.webp',
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
    description: 'Bash script for automating GitHub issue creation from CSV files.',
    image: '/images/projects/githubissues.webp',
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
    gallery: [
      {
        src: '/images/projects/socialmetrics/homedash.webp',
        alt: 'Social Metrics Screenshot 1',
        caption: 'Dashboard Overview',
      },
      {
        src: '/images/projects/socialmetrics/wiki.webp',
        alt: 'Social Metrics Screenshot 2',
        caption: 'Wikipedia Topics',
      },
      {
        src: '/images/projects/socialmetrics/calendar.webp',
        alt: 'Social Metrics Screenshot 3',
        caption: 'Calendar Events',
      },
    ],
    features: [
      'Google OAuth authentication',
      'Real-time YouTube analytics',
      'Responsive design with TailwindCSS',
      'AI assistant for insights and suggestions',
      'Customizable dashboard widgets',
      'Wikipedia API integration for topic research',
      'Recharts for data visualization',
      'Built with Next.js and TypeScript',
      'MCP integration for content calendar',
      'ICS integration for calendar events',
    ],
    caseStudy: {
      problem: [
        'Content creators struggle to analyze their social media performance across multiple platforms, lacking unified dashboards that provide actionable insights and AI-powered recommendations for content improvement.',
      ],
      solution: [
        'Built a comprehensive social media analytics dashboard focusing on YouTube metrics with AI-powered insights, real-time data visualization, and research tools to help creators optimize their content strategy.',
      ],
      architecture: [
        'Next.js application with TypeScript, Firebase for authentication and data storage, Google OAuth for YouTube API access, OpenAI GPT-4o-mini for insights, Recharts for visualizations, and Wikipedia API for topic research.',
      ],
      results: [
        'Unified dashboard for multiple social platforms',
        'Real-time analytics with actionable insights',
        'AI-powered content recommendations',
        'Streamlined content research workflow',
        'Responsive design for mobile and desktop use',
      ],
    },
  },
  {
    id: '19',
    title: 'Launchpad Student Interaction Form',
    description: 'AI-powered student interaction tracking system for educational organizations.',
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
        'Launchpad and Building 21 struggled with inefficient manual tracking of student interactions, leading to data inconsistencies, missed follow-ups, and difficulty measuring program effectiveness. Staff spent excessive time on administrative tasks instead of student support.',
      ],
      solution: [
        'Developed a fully automated interaction tracker using Next.js, Gemini AI, and PostgreSQL. The system streamlines data collection, provides AI-powered insights, and automates reporting processes.',
      ],
      architecture: [
        'Next.js application with server-side rendering, PostgreSQL database with Prisma ORM, Gemini AI integration for intelligent insights, Recharts for data visualization, and responsive TailwindCSS design.',
      ],
      results: [
        'Reduced administrative overhead by 70%',
        'Improved data accuracy and consistency',
        'Enhanced student support through better tracking',
        'Automated insights and reporting capabilities',
        'Increased organizational efficiency',
      ],
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
      summary:
        'A fully automated interaction tracker built with Next.js, Gemini AI, and PostgreSQL to streamline student interaction management and improve organizational efficiency.',
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
    image: '/images/projects/itwin/itwin.webp',
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
    featuredPriority: 2,
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
        src: '/images/projects/itwin/image1.webp',
        alt: 'Itwin revit iModel',
        caption: 'Itwin revit iModel',
      },
      {
        src: '/images/projects/itwin/image2.webp',
        alt: '3D model view',
        caption: 'iTwin viewer with highlighted elements',
      },
      {
        src: '/images/projects/itwin/image3.webp',
        alt: 'Paginated results with sorting',
        caption: 'Paginated results with sorting',
      },
      {
        src: '/images/projects/itwin/image4.webp',
        alt: 'Most recent screenshot of ecora',
        caption: 'Most recent screenshot of ecora',
      },
    ],
    caseStudy: {
      problem: [
        'Legacy codebase made it difficult to extend filtering and search capabilities across large BIM datasets. Non-technical users needed dynamic querying tools for massive 3D Revit models but were limited by outdated frontend architecture and performance constraints.',
      ],
      solution: [
        'Rebuilt the UI with modern React + TypeScript architecture and introduced ECSQL-driven filters, enabling dynamic queries and performant results. Migrated legacy application to improve maintainability and user experience.',
      ],
      architecture: [
        'Next.js application with iTwin.js viewer integration. ECSQL queries are proxied through API routes with state management via React Context and URL parameters. Modern component architecture with TypeScript for type safety.',
      ],
      results: [
        'Non-technical users can now create complex queries without needing to understand the underlying data structure.',
        'Simplified addition of new filter types and functionality',
        'Improved code maintainability and developer experience',
        'Enhanced user interface responsiveness and usability',
        'Successful migration from legacy to modern architecture',
      ],
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
        markdown:
          "```sql\nSELECT ec_classname (c.ECInstanceId) className,\nCOALESCE(s.DisplayLabel, s.Name) schemaLabel,\nCOALESCE(c.DisplayLabel, c.Name) classLabel,\nCOUNT(*)\nFROM bis.GeometricElement3d ge\nJOIN ECDbMeta.ClassHasAllBaseClasses abc ON abc.SourceECInstanceId = ge.ECClassId\nJOIN ECDbMeta.ECClassDef c ON c.ECInstanceId = abc.TargetECInstanceId\nJOIN ECDbMeta.ECSchemaDef s ON s.ECInstanceId = c.Schema.Id\nWHERE s.Name != 'BisCore'\nGROUP BY c.ECInstanceId\n```",
      },
      {
        title: 'API route',
        language: 'ts',
        markdown:
          '```ts\nexport async function GET(req: Request) {\n  const { searchParams } = new URL(req.url);\n  const where = buildWhere(Object.fromEntries(searchParams));\n  const rows = await queryECSQL(`SELECT * FROM Elements WHERE ${where}`);\n  return Response.json({ rows });\n}\n```',
      },
    ],
  },
  {
    id: '21',
    title: 'N8N Job Search Dashboard',
    description:
      'Self-hostable job search automation with AI-powered resume matching and LinkedIn scraping.',
    image: '/images/projects/n8n-job-search.webp',
    tags: ['fullstack', 'ai', 'backend', 'devops'],
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
    video: {
      url: 'https://youtu.be/UvvsHnCh4SU',
      title: 'N8N Job Search Dashboard Demo',
      provider: 'youtube',
    },
    caseStudy: {
      problem: [
        'Job seekers struggle with manual application tracking, inconsistent job searching across platforms, and lack of intelligent matching between resumes and job requirements. The competitive job market demands constant monitoring and quick responses to opportunities.',
      ],
      solution: [
        'Built a comprehensive automation platform that integrates n8n workflows with AI-powered resume matching, automated LinkedIn scraping, and real-time application tracking. The system provides intelligent job scoring and automated notifications for high-potential opportunities.',
      ],
      architecture: [
        'Next.js frontend with PostgreSQL database, n8n workflow automation engine, multiple AI providers (Gemini, OpenAI, Ollama) for resume analysis, and notification systems via Discord/Telegram. Self-hostable with Docker and PM2 support.',
      ],
      results: [
        'Automated job discovery reduces manual search time by 80%',
        'AI-powered scoring improves job-resume matching accuracy',
        'Centralized tracking eliminates application status confusion',
        'Self-hostable solution provides complete data ownership',
        'Ready-to-import workflow templates accelerate setup',
      ],
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
      name: 'Kubernetes',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      power: 80,
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
      icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.webp',
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
