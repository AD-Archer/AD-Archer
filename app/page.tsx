import type { Metadata } from 'next';
import Hero3D from '@/components/hero-3d';
import ProjectShowcase from '@/components/project-showcase';
import SkillsSection from '@/components/skills-section';
import GitHubStats from '@/components/github-stats';

export const metadata: Metadata = {
  title: 'Antonio Archer | Full Stack Developer & AI Enthusiast',
  description:
    'Official site of Antonio Archer. Full Stack Developer and DevOps engineer in Philadelphia. Explore projects, skills, and contact details.',
  alternates: { canonical: 'https://www.antonioarcher.com' },
  openGraph: {
    title: 'Antonio Archer | Portfolio',
    description:
      'Full Stack Developer & DevOps engineer in Philadelphia. Explore projects and skills.',
    url: 'https://www.antonioarcher.com',
    images: [{ url: '/logo.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antonio Archer | Portfolio',
    description:
      'Full Stack Developer & DevOps engineer in Philadelphia. Explore projects and skills.',
    images: ['/logo.webp'],
  },
};
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero3D />
      <GitHubStats />
      <ProjectShowcase />
      <SkillsSection />
    </div>
  );
}
