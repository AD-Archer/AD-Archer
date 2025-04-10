import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Antonio Archer Portfolio',
    short_name: 'Antonio Archer',
    description:
      'Portfolio website for Antonio Archer a software developer and DevOps engineer from phialdelphia showcasing projects, skills, and contact information',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icons/logo.webp',
        sizes: 'any',
        type: 'image/webp',
      },
    ],
  };
}
