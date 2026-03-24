import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About Antonio Archer | Developer Background and Experience',
  description:
    'Learn about Antonio Archer, a Philadelphia software developer and DevOps engineer, including work experience, education, certifications, and approach to building products.',
  alternates: {
    canonical: 'https://www.antonioarcher.com/about',
  },
  openGraph: {
    title: 'About Antonio Archer',
    description:
      'Background, work experience, education, certifications, and product approach for Antonio Archer.',
    url: 'https://www.antonioarcher.com/about',
    images: [{ url: '/logo.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Antonio Archer',
    description:
      'Background, work experience, education, certifications, and product approach for Antonio Archer.',
    images: ['/logo.webp'],
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
