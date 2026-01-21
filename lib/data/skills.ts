import { Skill, SkillCategory } from './types';

export const skills: SkillCategory = {
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
      name: 'Rust',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg',
      power: 85,
    },
    {
      name: 'Go',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg',
      power: 80,
    },
    {
      name: 'Bash Scripting',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
      power: 80,
    },
  ],
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
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg', power: 99 },
    {
      name: 'Typescript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      power: 99,
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
    {
      name: 'Appwrite',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg',
      power: 75,
    },
    {
      name: 'Supabase',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
      power: 80,
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
    {
      name: 'docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      power: 85,
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
  ...skills.backend.map(skill => ({ ...skill, category: 'backend' as const })),
  ...skills.frontend.map(skill => ({ ...skill, category: 'frontend' as const })),
  ...skills.databases.map(skill => ({ ...skill, category: 'databases' as const })),
  ...skills.tools.map(skill => ({ ...skill, category: 'tools' as const })),
  ...skills.hosting.map(skill => ({ ...skill, category: 'tools' as const })),
];
