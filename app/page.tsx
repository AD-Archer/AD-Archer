import Hero3D from '@/components/hero-3d';
import ProjectShowcase from '@/components/project-showcase';
import SkillsSection from '@/components/skills-section';
import GitHubStats from '@/components/github-stats';

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
