import { Tag } from './types';

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

export const tags: Tag[] = [
  { id: 'fullstack', name: 'Full Stack', color: 'bg-purple-600' },
  { id: 'frontend', name: 'Frontend', color: 'bg-blue-500' },
  { id: 'backend', name: 'Backend', color: 'bg-green-600' },
  { id: 'ai', name: 'AI', color: 'bg-pink-600' },
  { id: 'node', name: 'Node.js', color: 'bg-green-500' },
  { id: 'python', name: 'Python', color: 'bg-yellow-600' },
  { id: 'golang', name: 'GoLang', color: 'bg-blue-500' },
  { id: 'devops', name: 'DevOps', color: 'bg-cyan-500' },
  { id: 'typescript', name: 'TypeScript', color: 'bg-blue-500' },
  { id: 'websockets', name: 'WebSockets', color: 'bg-yellow-500' },
  { id: 'bash', name: 'Bash', color: 'bg-gray-700' },
];
