import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Projects | Antonio Archer Portfolio',
  description:
    'Browse Antonio Archer projects across full-stack development, AI, DevOps, automation, and frontend engineering with case studies, demos, and source links.',
  alternates: {
    canonical: 'https://www.antonioarcher.com/projects',
  },
  openGraph: {
    title: 'Antonio Archer Projects',
    description:
      'Portfolio projects spanning AI, DevOps, frontend engineering, automation, and full-stack product development.',
    url: 'https://www.antonioarcher.com/projects',
    images: [{ url: '/logo.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antonio Archer Projects',
    description:
      'Portfolio projects spanning AI, DevOps, frontend engineering, automation, and full-stack product development.',
    images: ['/logo.webp'],
  },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
