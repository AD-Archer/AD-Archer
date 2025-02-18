import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  scroll-margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border: 3px solid black;
  padding: 2rem;
  position: relative;
  transform: none;
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme.shadows.comic};
  border-radius: 8px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 1.5rem;
    box-shadow: ${props => props.theme.shadows.comicMobile};
  }

  &:hover {
    transform: scale(1.02);
    z-index: 1;
    box-shadow: ${props => props.theme.shadows.hover};
  }

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: -10px;
    bottom: -10px;
    background: rgba(0, 0, 0, 0.03);
    z-index: -1;
    border-radius: 8px;

    @media (max-width: 768px) {
      top: 4px;
      left: 4px;
      right: -4px;
      bottom: -4px;
    }
  }
`;

const ProjectTitle = styled.h3`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 2rem;
  color: ${props => props.theme.colors.accent};
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${props => props.theme.colors.secondary}40;
`;

const ProjectDescription = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.1rem;
  line-height: 1.6;
  flex-grow: 1;
  margin: 0;
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

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 2px solid ${props => props.theme.colors.secondary}40;
`;

const TechBadge = styled(motion.span)`
  background: ${props => `${props.theme.colors.primary}15`};
  color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: 2px solid ${props => `${props.theme.colors.primary}30`};
  transition: all 0.2s ease;
  cursor: default;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const PreviewButton = styled.button`
  background: #2ECC71;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1.5rem;
  transition: background 0.3s ease, transform 0.2s ease;
  font-weight: 600;

  &:hover {
    background: #27AE60;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  padding: 0;
  transform-origin: center center;
  touch-action: none;
  -webkit-overflow-scrolling: touch;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  width: 95vw;
  height: 95vh;
  background: white;
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.shadows.strong};
  z-index: 100000;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    border: 3px solid ${props => props.theme.colors.primary};
  }
`;

const SitePreview = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  margin: 0;
  padding: 0;
  background: white;
`;

const CloseButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 100001;
  box-shadow: ${props => props.theme.shadows.subtle};
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: translateX(-50%) translateY(-2px);
    box-shadow: ${props => props.theme.shadows.hover};
  }

  &:active {
    transform: translateX(-50%) translateY(0);
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: env(safe-area-inset-bottom, 20px);
    padding: 1rem 2rem;
    width: auto;
    min-width: 150px;
    font-size: 1.1rem;
  }
`;

const FirstTimeMessage = styled(motion.div)`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.subtle};
  text-align: center;
  z-index: 100002;
  border: 2px solid ${props => props.theme.colors.primary};

  p {
    margin: 0;
    font-size: 1.1rem;
    color: ${props => props.theme.colors.accent};
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 0.8rem 1rem;
  }
`;

const ProjectsSection = styled.section`
  margin: 2rem auto;
  max-width: 1400px;
`;

const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectsTitle = styled.h2`
  font-family: ${props => props.theme.fonts.accent};
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: ${props => props.theme.colors.accent};
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.2);
`;

const ProjectsDescription = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.1rem;
  color: ${props => props.theme.colors.primary};
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
`;

// Category filter UI (kept as is, filtering by category only)
const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CategoryButton = styled.button`
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primary : `${theme.colors.primary}15`};
  color: ${({ isSelected, theme }) =>
    isSelected ? 'white' : theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const projects = [
  {
    title: "MoviesNoir",
    description: "A movie generator app built with react and node.js to share black culture through movies and tv shows. Movies are stored in a json file, which is the only reason this is not a full stack application.",
    techStack: ["React", "Node.js", "Express", "Python"],
    category: "Frontend Apps",
    siteLink: "https://moviesnoir.vercel.app/",
    repoLink: "https://github.com/AD-Archer/MoviesNoir",
  },
  {
    title: "Win or Lose Philly",
    description: "A web-based game created to celebrate the 2025 Super Bowl, based off the joke that philly gets destroyed if we win or lose.",
    techStack: ["Node.js", "Express", "Phaser"],
    category: "Frontend Apps",
    siteLink: "https://winorlosephilly.vercel.app/",
    repoLink: "https://github.com/AD-Archer/winorlosephilly",
  },
  {
    title: "Orange Field University",
    description: "A Next.js web application for managing student courses and academic progress. Features user authentication, course enrollment, academic progress tracking, and responsive design.",
    techStack: ["Next.js", "PostgreSQL", "TailwindCSS", "T3 Stack"],
    category: "Full-stack Apps",
    siteLink: "https://university-orange-field.vercel.app/",
    repoLink: "https://github.com/AD-Archer/University-OrangeField",
  },
  {
    title: "PlatePedia",
    description: "A modern recipe management web application built with Node.js, Express, and PostgreSQL. Create, discover, and share recipes while connecting with other food enthusiasts.",
    techStack: ["Node.js", "Express", "PostgreSQL"],
    category: "Full-stack Apps",
    siteLink: "https://platepedia.vercel.app/",
    repoLink: "https://github.com/AD-Archer/PlatePedia-recipeapp",
  },
  {
    title: "Corra",
    description: "Create your Own Really Real Adventure game using AI to figure out your personality test and create an adventure for you based off of it.",
    techStack: ["React", "Gemini-AI", "Node.js", "Express"],
    category: "Frontend Apps",
    siteLink: "https://corra-tau.vercel.app/",
    repoLink: "https://github.com/AD-Archer/corra",
  },
  {
    title: "Fintech App",
    description: "A modern financial technology application for managing personal finances and investments with real-time data visualization.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL"],
    category: "Full-stack Apps",
    siteLink: "https://fintech-app-blond.vercel.app/",
    repoLink: "https://github.com/AD-Archer/fintech-app",
  },
  {
    title: "Dynasty Defense",
    description: "A system for managing and creating custom alarms for fire, smoke, and security, built with React.",
    techStack: ["React", "Node.js", "IoT"],
    category: "Frontend Apps",
    siteLink: "https://dynasty-defense.vercel.app/",
    repoLink: "https://github.com/AD-Archer/dynasty-defense",
  },
  {
    title: "FortifyNow",
    description: "An educational platform aimed at improving cybersecurity awareness. Teaches strong password creation, 2FA, and account protection with USB security keys.",
    techStack: ["React", "Have I Been Pwned API", "Cybersecurity"],
    category: "Frontend Apps",
    siteLink: "https://fortify-now.vercel.app/",
    repoLink: "https://github.com/AD-Archer/FortifyNow",
  },
  {
    title: "Linehan Family Foundation Preview Site",
    description: "A simple webpage created for the Linehan Family Foundation.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "Frontend Apps",
    siteLink: "https://ad-archer.github.io/Linehan-Family-Foundation-Preview-Site/",
    repoLink: "https://github.com/AD-Archer/Linehan-Family-Foundation-Preview-Site",
  },
];

const hiddenProjects = [
  {
    title: "Qr Code Generator",
    description: "Every should have their own QR Code Generator right, I Created this while creating the slides for OrangeField University",
    techStack: ["JavaScript", "HTML"],
    category: "Utilities",
    siteLink: "https://qr.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/Qr-code-generator",
  },
  {
    title: "3D Land Music Player",
    description: "A YouTube music player designed to play embedded YouTube playlists.",
    techStack: ["React", "Node.js", "YouTube API"],
    category: "Frontend Apps",
    siteLink: "https://ad-archer.github.io/3d-land-player/",
    repoLink: "https://github.com/AD-Archer/3d-land-player",
  },
  {
    title: "Retro Audio Maker",
    description: "Transform your own audio files into a distorted version of itself to give it a retro feel. This application was created to aid with creating the music for Win or Lose Philly.",
    techStack: ["Express", "Node.js"],
    category: "Utilities",
    siteLink: "https://retroaudiomaker.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/retroaudiomaker",
  },
  {
    title: "Quick Convert",
    description: "Convert SVGs to high-resolution PNGs, HEICs to PNGs, and WEBPs in a few clicks. Built to simplify file format conversions.",
    techStack: ["Next.js", "File Conversion", "T3 Stack"],
    category: "Utilities",
    siteLink: "https://quickconvert.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/Quick-Convert",
  },
  {
    title: "LinkTree",
    description: "I wanted my own linktree to make sharing important links alot easier.",
    techStack: ["React"],
    category: "Utilities",
    siteLink: "https://www.antonioarcher.com/",
    repoLink: "https://github.com/AD-Archer/tree",
  },
  {
    title: "LinkTree",
    description: "I wanted my own linktree to make sharing important links alot easier.",
    techStack: ["React"],
    category: "Frontend Apps",
    siteLink: "https://www.antonioarcher.com/",
    repoLink: "https://github.com/AD-Archer/tree",
  },
];

const GitHubProjects = () => {
  // Removed tech filter functionality
  const [previewUrl, setPreviewUrl] = useState(null);
  const [hasSeenPreview, setHasSeenPreview] = useState(() => {
    return localStorage.getItem("hasSeenPreview") === "true";
  });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    // No longer setting available tech as tech filtering has been removed
  }, []);

  // Use only category filtering
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    return matchesCategory;
  });

  const filteredHiddenProjects = selectedCategory
    ? hiddenProjects.filter((project) => {
        const matchesCategory = project.category === selectedCategory;
        return matchesCategory;
      })
    : [];

  const displayProjects = selectedCategory
    ? [...filteredProjects, ...filteredHiddenProjects]
    : projects;

  const handlePreviewClick = (project) => {
    setPreviewUrl(project.siteLink);
    if (!hasSeenPreview) {
      setHasSeenPreview(true);
      localStorage.setItem("hasSeenPreview", "true");
    }
  };

  const handleClosePreview = (e) => {
    e?.preventDefault();
    setPreviewUrl(null);
    document.body.style.overflow = "unset";
    document.body.classList.remove("modal-open");

    setTimeout(() => {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <ProjectsSection>
      <ProjectsHeader>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsDescription>
          Filter through my projects by category ⚡
        </ProjectsDescription>
      </ProjectsHeader>

      {/* Category Filter Buttons */}
      <CategoryFilter>
        <CategoryButton
          isSelected={!selectedCategory}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </CategoryButton>
        {["Frontend Apps", "Full-stack Apps", "Utilities"].map((category) => (
          <CategoryButton
            key={category}
            isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryFilter>

      <ProjectsGrid ref={projectsRef}>
        {displayProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinks>
              <ProjectLink
                href={project.siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </ProjectLink>
              <ProjectLink
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </ProjectLink>
            </ProjectLinks>
            <PreviewButton onClick={() => handlePreviewClick(project)}>
              Preview Site
            </PreviewButton>
            <TechStackContainer>
              {project.techStack.map((tech) => (
                <TechBadge
                  key={tech}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {tech}
                </TechBadge>
              ))}
            </TechStackContainer>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {previewUrl && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClosePreview}
          onTouchEnd={handleClosePreview}
        >
          <ModalContent
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            {!hasSeenPreview && (
              <FirstTimeMessage
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p>
                  Click outside the preview window or the button below to exit
                </p>
              </FirstTimeMessage>
            )}
            <SitePreview
              src={previewUrl}
              title="Site Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <CloseButton onClick={handleClosePreview}>Close Preview</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </ProjectsSection>
  );
};

export default GitHubProjects;

