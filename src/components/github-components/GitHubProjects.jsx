import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border: 3px solid black;
  padding: 2rem;
  position: relative;
  transform: rotate(-1deg);
  transition: transform 0.3s ease;
  box-shadow: ${props => props.theme.shadows.comic};

  &:nth-child(even) {
    transform: rotate(1deg);
  }

  &:hover {
    transform: rotate(0) scale(1.02);
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: -10px;
    bottom: -10px;
    background: ${props => props.theme.colors.secondary}40;
    z-index: -1;
  }
`;

const ProjectTitle = styled.h3`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.accent};
`;

const ProjectDescription = styled.p`
  font-family: ${props => props.theme.fonts.body};
  margin-bottom: 1.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechBadge = styled(motion.span)`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 2px solid black;
`;

const projects = [
  {
    title: "MoviesNoir",
    description: "A movie generator app built with modern web technologies",
    techStack: ["React", "Node.js", "Express"],
    siteLink: "https://moviesnoir.vercel.app/",
    repoLink: "https://github.com/AD-Archer/MoviesNoir"
  },
  {
    title: "3D Land Music Player",
    description: "A YouTube music player designed to play embedded YouTube playlists. Enjoy a seamless listening experience with a visually appealing 3D land interface.",
    techStack: ["React", "Node.js", "YouTube API"],
    siteLink: "https://ad-archer.github.io/3d-land-player/",
    repoLink: "https://github.com/AD-Archer/3d-land-player"
  },
  {
    title: "Orange Field University",
    description: "A Next.js web application for managing student courses and academic progress. Features user authentication, course enrollment, academic progress tracking, and responsive design.",
    techStack: ["Next.js", "PostgreSQL", "TailwindCSS"],
    siteLink: "https://university-orange-field.vercel.app/",
    repoLink: "https://github.com/AD-Archer/University-OrangeField"
  },
  {
    title: "PlatePedia",
    description: "A modern recipe management web application built with Node.js, Express, and PostgreSQL. Create, discover, and share recipes while connecting with other food enthusiasts.",
    techStack: ["Node.js", "Express", "PostgreSQL"],
    siteLink: "https://platepedia.vercel.app/",
    repoLink: "https://github.com/AD-Archer/PlatePedia-recipeapp"
  },
  {
    title: "Corra",
    description: "Create your Own Really Real Adventure game using AI to figure out your personality test and create an adventure for you based off of it.",
    techStack: ["React", "Gemini-AI", "Node.js"],
    siteLink: "https://corra-tau.vercel.app/",
    repoLink: "https://github.com/AD-Archer/corra"
  },
  {
    title: "Fintech App",
    description: "A modern financial technology application for managing personal finances and investments with real-time data visualization.",
    techStack: ["React", "Node.js", "Express"],
    siteLink: "https://fintech-app-blond.vercel.app/",
    repoLink: "https://github.com/AD-Archer/fintech-app"
  },
  {
    title: "Dynasty Defense",
    description: "A system for managing and creating custom alarms for fire, smoke, and security, built with React.",
    techStack: ["React", "Firebase", "IoT"],
    siteLink: "https://dynasty-defense.vercel.app/",
    repoLink: "https://github.com/AD-Archer/dynasty-defense"
  },
  {
    title: "FortifyNow",
    description: "An educational platform aimed at improving cybersecurity awareness. Teaches strong password creation, 2FA, and account protection with USB security keys.",
    techStack: ["Next.js", "Have I Been Pwned API", "Cybersecurity"],
    siteLink: "https://fortify-now.vercel.app/",
    repoLink: "https://github.com/AD-Archer/FortifyNow"
  },
  {
    title: "Quick Convert",
    description: "Convert SVGs to high-resolution PNGs, HEICs to PNGs, and WEBPs in a few clicks. Built to simplify file format conversions.",
    techStack: ["Next.js", "File Conversion", "T3 Stack"],
    siteLink: "https://quick-convert-chi.vercel.app/",
    repoLink: "https://github.com/AD-Archer/Quick-Convert"
  }
];

const GitHubProjects = () => {
  return (
    <ProjectsGrid>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectLinks>
            <ProjectLink href={project.siteLink} target="_blank" rel="noopener noreferrer">
              Visit Site
            </ProjectLink>
            <ProjectLink href={project.repoLink} target="_blank" rel="noopener noreferrer">
              View Code
            </ProjectLink>
          </ProjectLinks>
          <TechStack>
            {project.techStack.map((tech, techIndex) => (
              <TechBadge
                key={tech}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.5 + (techIndex * 0.1) }}
              >
                {tech}
              </TechBadge>
            ))}
          </TechStack>
        </ProjectCard>
      ))}
    </ProjectsGrid>
  );
};

export default GitHubProjects;