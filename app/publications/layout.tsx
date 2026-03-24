import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Publications and Mentions | Antonio Archer',
  description:
    'Read Antonio Archer publications, interviews, mentions, and technical writing across software development, AI, community projects, and product work.',
  alternates: {
    canonical: 'https://www.antonioarcher.com/publications',
  },
  openGraph: {
    title: 'Antonio Archer Publications and Mentions',
    description:
      'Articles, interviews, mentions, and technical writing featuring Antonio Archer and his work.',
    url: 'https://www.antonioarcher.com/publications',
    images: [{ url: '/logo.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antonio Archer Publications and Mentions',
    description:
      'Articles, interviews, mentions, and technical writing featuring Antonio Archer and his work.',
    images: ['/logo.webp'],
  },
};

export default function PublicationsLayout({ children }: { children: ReactNode }) {
  return children;
}
