import { Project } from './types';
import { technologyColors } from './constants';

export const projects: Project[] = [
  // {
  //   id: "",
  //   title: "",
  //   description: "",
  //   retiredSlugs: [''],
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
      'Archer Life is a simple concept page documenting the wellness journey that helped me lose 60 pounds of fat and gain 10 pounds of muscle between November 2024 and November 2025. Today it replaces endless app hunting with one honest introduction to the Archer philosophy, outlines our paywall-free commitment, and sends visitors straight to Archer Fitness, Archer Health, and Archer Aqua. It is not a full-fledged hub just the mission, the story, and clean links to the products that already work.\n\n## Explore the Archer Ecosystem\n\nArcher Life connects to three specialized applications:\n\n- **[Archer Fitness](https://fitness.adarcher.app/)** - AI-powered workout planning and progress tracking for strength and conditioning\n- **[Archer Health](https://health.adarcher.app/)** - Comprehensive nutrition tracking and macro management for your fitness goals  \n- **[Archer Aqua](https://aqua.adarcher.app/)** - Intelligent hydration tracking with personalized daily goals\n\nEach app works independently but together they form a complete wellness system.',
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
    featured: false,
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
    video: {
      url: 'https://youtu.be/t3H_zQwvR-M',
      title: 'Archer Life Walkthrough',
      provider: 'youtube',
    },
    showVideoInPublications: true,
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
    video: {
      url: 'https://youtu.be/t3H_zQwvR-M',
      title: 'Archer Fitness Walkthrough',
      provider: 'youtube',
    },
    showVideoInPublications: false,
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
    video: {
      url: 'https://youtu.be/t3H_zQwvR-M',
      title: 'Archer Aqua Walkthrough',
      provider: 'youtube',
    },
    showVideoInPublications: false,
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
    featured: false,
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
        caption: 'Archer Health progress tracking feature with visual analytics and insights',
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
        "I developed an app that would've all the features I wanted when I was losing weight. Built a full-featured health platform from scratch using modern web technologies. Implemented detailed progress tracking with visual analytics, and deployed on a self-hosted Kubernetes cluster for complete control and privacy.",
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
    video: {
      url: 'https://youtu.be/t3H_zQwvR-M',
      title: 'Archer Health Walkthrough',
      provider: 'youtube',
    },
    showVideoInPublications: false,
  },
  {
    id: '26',
    title: 'RustySound',
    description:
      'Cross-platform music player UI concept with desktop and mobile themes, built as a portfolio design system experiment.',
    longDescription:
      'RustySound is a visual and UX concept for a modern music player interface featuring dark mode gradients, album carousels, and responsive layouts. It was created as part of a brand identity exploration for digital audio experiences and includes themeable desktop/mobile layouts.',
    image: '/images/projects/rustysound/desktop/desktoptheme1.webp',
    tags: ['design', 'ui', 'frontend'],
    technologies: [
      { name: 'Figma', color: technologyColors.typescript },
      { name: 'Next.js', color: technologyColors.react },
      { name: 'TypeScript', color: technologyColors.typescript },
      { name: 'TailwindCSS', color: technologyColors.typescript },
    ],
    slug: 'rustysound',
    link: 'https://www.antonioarcher.com/projects/rustysound',
    github: 'https://github.com/AD-Archer/rustysound',
    featured: true,
    featuredPriority: 2,
    gallery: [
      {
        src: '/images/projects/rustysound/desktop/desktoptheme1.webp',
        alt: 'RustySound desktop theme 1',
        caption: 'RustySound desktop theme 1 preview',
      },
      {
        src: '/images/projects/rustysound/desktop/desktoptheme2.webp',
        alt: 'RustySound desktop theme 2',
        caption: 'RustySound desktop theme 2 dark mode',
      },
      {
        src: '/images/projects/rustysound/mobile/mobiletheme1.webp',
        alt: 'RustySound mobile theme',
        caption: 'RustySound mobile layout with responsive controls',
      },
    ],
    features: [
      'Desktop and mobile theme exploration for modern music playback UI',
      'Immersive album carousel and recently played widgets',
      'Clear low-contrast visual hierarchy for night mode aesthetics',
      'Responsive controls and mobile-first navigation patterns',
    ],
    showVideoInPublications: false,
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
    link: 'https://winorlosephilly.vercel.app/',
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
    featured: false,
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
    architecture: {
      summary:
        'Composable ECSQL-driven filters are mapped into a modern React UI, with API routes mediating data access between the iTwin viewer and large BIM query results.',
      notes: [
        'iTwin.js viewer integration keeps 3D exploration and query results tightly connected',
        'React and TypeScript components replaced legacy patterns and improved maintainability',
        'ECSQL filter composition made it easier to add new search controls for non-technical users',
        'API routes mediate query execution and result shaping before data reaches the frontend',
        'URL-driven state and modern component architecture improved deep-linking and debugging',
      ],
    },
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
    id: '28',
    title: 'The Anime Stock Market',
    description:
      'Have you ever said the phrase "I take stock in that" or "my stock in *blank* is going to the moon" about something that isn\'t really stock? Well, this is an app for that. While mostly based on anime, this is a market to trade whatever you want.',
    longDescription:
      'The Anime Stock Market is a unique trading platform where users can create and trade "stocks" in anything imaginable - anime characters, memes, hobbies, or even abstract concepts. Built with a self-hosted Appwrite instance for real-time data management, it features live stock buys, calls, puts, and social media integration with comments and direct messages. Whether you\'re investing in your favorite anime waifu or betting on the next viral trend, this platform turns opinions into tradable assets.',
    image: '/images/projects/animestockmarket/banner.webp',
    tags: ['fullstack', 'realtime', 'social', 'finance'],
    technologies: [
      { name: 'Appwrite', color: technologyColors.nodejs },
      { name: 'Next.js', color: technologyColors.react },
      { name: 'TypeScript', color: technologyColors.typescript },
      { name: 'TailwindCSS', color: technologyColors.typescript },
    ],
    slug: 'stockmarket',
    link: 'https://animestockmarket.tech',
    retiredSlugs: ['animestockmarket'],
    featured: true,
    featuredPriority: 2,
    features: [
      'Real-time stock trading with buys, calls, and puts',
      'Self-hosted Appwrite instance for data management',
      'Social media features including comments and direct messages',
      'Anime-themed stock market framework',
      'Trade stocks in anything - characters, memes, concepts',
      'Real-time market updates and notifications',
    ],
    gallery: [
      {
        src: '/images/projects/animestockmarket/banner.webp',
        alt: 'Banner',
        caption: 'Banner for the Anime Stock Market project',
      },
      {
        src: '/images/projects/animestockmarket/lander.webp',
        alt: 'Landing page',
        caption: 'Main landing page showcasing the anime stock market concept',
      },
      {
        src: '/images/projects/animestockmarket/market.webp',
        alt: 'Market interface',
        caption: 'Trading dashboard with real-time stock prices',
      },
      {
        src: '/images/projects/animestockmarket/all-charcters.webp',
        alt: 'Character collection',
        caption: 'Browse and invest in anime characters as tradable stocks',
      },
      {
        src: '/images/projects/animestockmarket/lander2.webp',
        alt: 'Alternative landing design',
        caption: 'Alternative landing page with different visual approach',
      },
    ],
    team: [
      {
        name: 'Antonio Archer',
        role: 'Full-Stack Developer & Product Designer',
        link: 'https://www.linkedin.com/in/antonio-archer/',
        roleLink: 'https://github.com/AD-Archer',
      },
    ],
  },

  {
    id: '26',
    title: 'LLM RAG Visualization Dashboard',
    description:
      'React dashboard for visualizing JSON-based RAG pipeline output, with optional n8n orchestration and support for open-source model runtimes like Ollama and llama.cpp.',
    longDescription:
      'The LLM RAG Visualization Dashboard is a lightweight React and Node.js application built to make Retrieval-Augmented Generation pipelines easier to inspect, explain, and debug. It can run as a simple raw Node backend or plug into n8n when a workflow layer makes orchestration easier. The dashboard renders JSON pipeline data into a readable interface so teams can trace retrieval, generation, and response flow without digging through logs.\n\nThis implementation was deployed on DigitalOcean, but the architecture is intentionally portable. It supports open-source model runtimes including Ollama and llama.cpp, making it practical for private infrastructure, budget-friendly hosting, and teams that want control over their own AI stack.',
    image: '/images/projects/llm-visi/example.webp',
    tags: ['fullstack', 'ai', 'node', 'devops'],
    technologies: [
      { name: 'React.js', color: technologyColors.react },
      { name: 'Node.js', color: technologyColors.nodejs },
      { name: 'n8n', color: technologyColors.nodejs },
      { name: 'Ollama', color: technologyColors.python },
      { name: 'llama.cpp', color: technologyColors.python },
      { name: 'JSON', color: technologyColors.typescript },
      { name: 'DigitalOcean', color: technologyColors.typescript },
    ],
    slug: 'llm-rag-visualization-dashboard',
    featured: false,
    featuredPriority: 4,
    retiredSlugs: ['llm-vision'],
    features: [
      'JSON-driven dashboard for visualizing RAG pipeline state and outputs',
      'Works as a plain Node.js backend or with n8n for workflow orchestration',
      'Supports open-source model runtimes including Ollama and llama.cpp',
      'Portable infrastructure design despite the original DigitalOcean deployment',
      'Simple React frontend for explaining complex AI flows to non-technical stakeholders',
      'Useful for tracing retrieval, prompt context, generation steps, and final responses',
    ],
    gallery: [
      {
        src: '/images/projects/llm-visi/example.webp',
        alt: 'LLM RAG Visualization Dashboard interface',
        caption: 'Dashboard view showing JSON-backed RAG pipeline visualization.',
      },
    ],
    video: {
      url: 'https://youtu.be/nhqPZ9hSjs8',
      title: 'LLM RAG Visualization Dashboard Walkthrough',
      provider: 'youtube',
    },
    caseStudy: {
      problem: [
        'RAG workflows are hard to inspect when the only source of truth is raw JSON, logs, or disconnected automation runs.',
        'Teams using open-source models need a simpler way to explain and validate how retrieval and generation steps are behaving.',
        'Some deployments need the flexibility to run directly on a small Node backend, while others benefit from n8n orchestration.',
      ],
      solution: [
        'Built a React dashboard that turns raw JSON pipeline output into a readable visualization for debugging and demos.',
        'Kept the backend simple so the project can run standalone or attach to n8n workflows when orchestration is useful.',
        'Designed the system around open-source model runtimes so teams can self-host with Ollama, llama.cpp, or comparable stacks.',
      ],
      architecture: [
        'React frontend renders JSON payloads from RAG executions into a dashboard-oriented interface.',
        'Node.js backend exposes the pipeline data directly and can also act as a bridge for n8n-driven workflows.',
        'Deployment ran on DigitalOcean, but the stack stays portable across VPS, homelab, or other cloud environments.',
      ],
      results: [
        'Made it easier to understand RAG behavior without reading raw logs line by line.',
        'Reduced setup friction by supporting both direct Node usage and optional n8n integration.',
        'Created a practical demo surface for open-source LLM workflows powered by self-hosted infrastructure.',
      ],
    },
    team: [
      {
        name: 'Antonio Archer',
        role: 'Full-Stack Developer & AI Engineer',
        link: 'https://www.linkedin.com/in/antonio-archer/',
        roleLink: 'https://github.com/AD-Archer',
      },
      {
        name: 'Mohamed Souare',
        role: 'Data Source Team',
        link: 'https://www.linkedin.com/in/mohamed-souare-8a61a2259/',
        roleLink: 'https://github.com/mo-fr',
      },
      {
        name: 'Demitri DeLuca-Lyons',
        role: 'Full-Stack Developer',
        link: 'https://www.linkedin.com/in/demitri-deluca-lyons-747312319/',
        roleLink: 'https://github.com/DDeluca06',
      },
      {
        name: 'Bryan Gunawan',
        role: 'Data Source Team',
        link: 'https://www.linkedin.com/in/bryan-gunawan-a537132b9/',
        roleLink: 'https://github.com/manineedtosleep',
      },
    ],
    architecture: {
      summary:
        'Portable RAG visualization stack using a React frontend, Node.js backend, optional n8n orchestration, and open-source model runtimes such as Ollama and llama.cpp.',
      notes: [
        'React.js frontend translates raw JSON execution data into a readable dashboard',
        'Node.js backend can run standalone without workflow tooling',
        'n8n support adds optional orchestration rather than being a hard dependency',
        'DigitalOcean was used for the original deployment, but the architecture is provider-agnostic',
        'Open-source runtime support keeps the stack compatible with Ollama and llama.cpp',
        'Useful for debugging retrieval flow, context construction, and generation output',
      ],
    },
  },

  {
    id: '27',
    title: 'Siri Shortcuts RAG Template',
    description:
      'A Siri shortcuts RAG template that allows you to extend Siri using n8n for automated voice interactions and intelligent responses.',
    longDescription:
      'This project provides a comprehensive template for building Retrieval-Augmented Generation (RAG) systems that integrate with Siri Shortcuts and n8n workflow automation. It enables users to create intelligent voice-activated workflows that can retrieve relevant information and generate contextual responses through natural language processing.',
    image:
      'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png',
    tags: ['ai', 'automation', 'ios', 'rag'],
    technologies: [
      { name: 'n8n', color: technologyColors.nodejs },
      { name: 'Siri Shortcuts', color: technologyColors.react },
      { name: 'RAG', color: technologyColors.openai },
      { name: 'Node.js', color: technologyColors.nodejs },
    ],
    slug: 'siri-shortcuts-rag-n8n',
    github: 'https://github.com/AD-Archer/Siri-Shortcuts-Rag-N8N',
    featured: false,
    features: [
      'Siri Shortcuts integration for voice-activated workflows',
      'n8n-powered automation pipelines',
      'Retrieval-Augmented Generation for intelligent responses',
      'Template-based setup for quick deployment',
      'Extensible architecture for custom voice commands',
    ],
  },
  {
    id: '29',
    title: 'RustySound',
    description:
      'RustySound is a lightweight (<15MB) cross-platform music player available on Android, iOS, macOS, Windows, and Linux. It connects to Subsonic-compatible servers like Navidrome and delivers a native, responsive experience across devices.',
    longDescription:
      'RustySound is a lightweight music player (under 10MB) that connects to Subsonic-compatible servers like Navidrome. Built with Rust and the Dioxus framework, it provides a native-like experience across Android, iOS, macOS, Windows, and Linux. The application features a clean, responsive interface styled with Tailwind CSS and offers seamless music streaming and library management. You can connect multiple clients to different servers, View Lyrics, Apply custom themes, share lyric previews, and download music  .',
    image: '/images/projects/rustysound/desktop/sound_menu.webp',
    tags: ['frontend', 'rust'],
    technologies: [
      { name: 'Rust', color: technologyColors.rust },
      { name: 'Dioxus', color: technologyColors.rust },
      { name: 'TailwindCSS', color: technologyColors.typescript },
    ],
    slug: 'rustysound',
    // the demo / live preview for RustySound
    link: 'https://rustysound-demo.adarcher.app/',
    // repository for the project so we can render the "Code" button alongside demo/visit
    github: 'https://github.com/AD-Archer/RustySound',
    featured: false,
    gallery: [
      {
        src: '/images/projects/rustysound/desktop/shot.gif',
        alt: 'RustySound playback animation',
        caption: 'Animated playback controls demo (gif)',
      },
      {
        src: '/images/projects/rustysound/desktop/preview-shot.gif',
        alt: 'RustySound browsing animation',
        caption: 'Animated browsing through playlists and library (gif)',
      },
      {
        src: '/images/projects/rustysound/mobile/lyrics.webp',
        alt: 'RustySound Lyrics View',
        caption: 'Lyrics display for the currently playing song',
      },
      {
        src: '/images/projects/rustysound/mobile/song_menu.webp',
        alt: 'RustySound Song Menu',
        caption: 'Song actions menu for adding/delete/queue controls',
      },
      {
        src: '/images/projects/rustysound/desktop/main.webp',
        alt: 'RustySound Home Screen',
        caption: 'Main interface showing music library and controls',
      },
      {
        src: '/images/projects/rustysound/desktop/home.webp',
        alt: 'RustySound Home Screen',
        caption: 'Main interface showing music library and controls',
      },
      {
        src: '/images/projects/rustysound/mobile/album.webp',
        alt: 'RustySound Album View',
        caption: 'Album browsing and track listing',
      },
      {
        src: '/images/projects/rustysound/mobile/favorites.webp',
        alt: 'RustySound Favorites',
        caption: 'Favorite songs and playlists management',
      },
      {
        src: '/images/projects/rustysound/desktop/radio.webp',
        alt: 'RustySound Radio',
        caption: 'Radio stations and streaming features',
      },
    ],
    features: [
      'Lightweight install (<10MB) across all platforms',
      'Available on Android, iOS, macOS, Windows, and Linux',
      'Cross-platform support (desktop, mobile, web)',
      'Subsonic API integration for Navidrome compatibility',
      'Native performance with Rust',
      'Responsive design with Tailwind CSS',
      'Seamless music streaming and playback',
      'Clean, modern user interface',
      'Multiple client connections support',
    ],
  },
];
