import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useTechFilter } from '../../context/TechFilterContext';
import { Analytics } from '../../services/analytics';
import PropTypes from 'prop-types';

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

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 2px solid ${props => props.theme.colors.secondary}40;
`;

const TechBadge = styled(motion.span)`
  background: ${props => 
    props.isSelected 
      ? props.theme.colors.primary 
      : `${props.theme.colors.primary}15`
  };
  color: ${props => 
    props.isSelected 
      ? 'white' 
      : props.theme.colors.primary
  };
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: 2px solid ${props => 
    props.isSelected 
      ? props.theme.colors.accent 
      : `${props.theme.colors.primary}30`
  };
  transition: all 0.2s ease;
  cursor: pointer;

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

const projects = [
  {
    title: "Philly Social",
    description: "A social media platform for the city of Philadelphia. It has bulit in public and private channels as well as events and rss news feed as well as places to support local businesses. bulit with nextjs typescript and firebase. It was made in 30 hours for philly codefest 2025 with the help of Mohamed Souare, Bryan Gunawan, and Sianni Strikland.",
    techStack: ["Next.js", "Typescript", "Firebase"],
    categories: ["Full-stack Apps"],
    siteLink: "https://phillysocial.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/Philly-Social",
  },
  {
    title: "MoviesNoir",
    description: "A movie generator app built with react and node.js to share black culture through movies and tv shows. Find your next favorite movie or tv show. Movies are stored in a json file, which is the only reason this is not a full stack application.",
    techStack: ["React", "Node.js", "Express", "Python"],
    categories: ["Frontend Apps"],
    siteLink: "https://moviesnoir.vercel.app/",
    repoLink: "https://github.com/AD-Archer/MoviesNoir",
  },
  {
    title: "TimeWise",
    description: "A cozy time management tool with a pomodoro timer and youtube playlists for music.",
    techStack: ["React", "Node.js", "YouTube API"],
    categories: ["Frontend Apps", "Utilities"],
    siteLink: "https://timewise.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/TimeWise",
  },
  {
    title: "LinkTree",
    description: "I wanted my own linktree to make sharing important links alot easier.",
    techStack: ["React"],
    categories: ["Utilities", "Frontend Apps"],
    siteLink: "https://www.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/tree",
  },
  {
    title: "Orange Field University",
    description: "A Next.js web application for managing student courses and academic progress. Features user authentication, course enrollment, academic progress tracking, and responsive design.",
    techStack: ["Next.js", "PostgreSQL", "TailwindCSS", "T3 Stack", "Typescript"],
    categories: ["Full-stack Apps"],
    siteLink: "https://university-orange-field.vercel.app/",
    repoLink: "https://github.com/AD-Archer/University-OrangeField",
  },
  {
    title: "PlatePedia",
    description: "A modern recipe management web application built with Node.js, Express, and PostgreSQL. Create, discover, and share recipes while connecting with other food enthusiasts.",
    techStack: ["Node.js", "Express", "PostgreSQL"],
    categories: ["Full-stack Apps"],
    siteLink: "https://platepedia.vercel.app/",
    repoLink: "https://github.com/AD-Archer/PlatePedia-recipeapp",
  },
  {
    title: "Corra",
    description: "Create your Own Really Real Adventure game using AI to figure out your personality test and create an adventure for you based off of it.",
    techStack: ["React", "Gemini-AI", "Node.js", "Express"],
    categories: ["Frontend Apps"],
    siteLink: "https://corra-tau.vercel.app/",
    repoLink: "https://github.com/AD-Archer/corra",
  },
  {
    title: "Fintech App",
    description: "A modern financial technology application for managing personal finances and investments with real-time data visualization.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL"],
    categories: ["Full-stack Apps"],
    siteLink: "https://fintech-app-blond.vercel.app/",
    repoLink: "https://github.com/AD-Archer/fintech-app",
  },
  {
    title: "Dynasty Defense",
    description: "A system for managing and creating custom alarms for fire, smoke, and security, built with React.",
    techStack: ["React", "Node.js", "IoT"],
    categories: ["Frontend Apps"],
    siteLink: "https://dynasty-defense.vercel.app/",
    repoLink: "https://github.com/AD-Archer/dynasty-defense",
  },
  {
    title: "FortifyNow",
    description: "An educational platform aimed at improving cybersecurity awareness. Teaches strong password creation, 2FA, and account protection with USB security keys.",
    techStack: ["React", "Have I Been Pwned API", "Cybersecurity"],
    categories: ["Frontend Apps"],
    siteLink: "https://fortify-now.vercel.app/",
    repoLink: "https://github.com/AD-Archer/FortifyNow",
  },
  {
    title: "Linehan Family Foundation Preview Site",
    description: "A simple webpage created for the Linehan Family Foundation.",
    techStack: ["HTML", "CSS", "JavaScript"],
    categories: ["Frontend Apps"],
    siteLink: "https://ad-archer.github.io/Linehan-Family-Foundation-Preview-Site/",
    repoLink: "https://github.com/AD-Archer/Linehan-Family-Foundation-Preview-Site",
  },
  
  {
    title: "Win or Lose Philly",
    description: "A web-based game created to celebrate the 2025 Super Bowl, based off the joke that philly gets destroyed if we win or lose.",
    techStack: ["Node.js", "Express", "Phaser"],
    categories: ["Frontend Apps"],
    siteLink: "https://winorlosephilly.vercel.app/",
    repoLink: "https://github.com/AD-Archer/winorlosephilly",
  },
];

const hiddenProjects = [
  {
    title: "Qr Code Generator",
    description: "Every should have their own QR Code Generator right, I Created this while creating the slides for OrangeField University",
    techStack: ["JavaScript", "HTML"],
    categories: ["Utilities"],
    siteLink: "https://qr.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/Qr-code-generator",
  },
  {
    title: "3D Land Music Player",
    description: "A YouTube music player designed to play embedded YouTube playlists.",
    techStack: ["React", "Node.js", "YouTube API"],
    categories: ["Frontend Apps"],
    siteLink: "https://ad-archer.github.io/3d-land-player/",
    repoLink: "https://github.com/AD-Archer/3d-land-player",
  },
  {
    title: "Retro Audio Maker",
    description: "Transform your own audio files into a distorted version of itself to give it a retro feel. This application was created to aid with creating the music for Win or Lose Philly.",
    techStack: ["Express", "Node.js"],
    categories: ["Utilities"],
    siteLink: "https://retroaudiomaker.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/retroaudiomaker",
  },
  {
    title: "Quick Convert",
    description: "Convert SVGs to high-resolution PNGs, HEICs to PNGs, and WEBPs in a few clicks. Built to simplify file format conversions.",
    techStack: ["Next.js", "File Conversion", "T3 Stack", "Typescript"],
    categories: ["Utilities"],
    siteLink: "https://quickconvert.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/Quick-Convert",
  },
  
];

const GitHubProjects = ({ initialCategory }) => {
  const { selectedTech, setAvailableTech, setSelectedTech } = useTechFilter();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [hasSeenPreview, setHasSeenPreview] = useState(() => {
    return localStorage.getItem("hasSeenPreview") === "true";
  });
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const projectsRef = useRef(null);

  useEffect(() => {
    // Get unique tech stack and set available tech
    const uniqueTech = [
      ...new Set(projects.flatMap((project) => project.techStack)),
    ].filter((tech) => tech !== "");
    setAvailableTech(uniqueTech);
  }, [setAvailableTech]);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategories(new Set([initialCategory]));
      
      // Track initial category selection
      Analytics.trackEvent({
        category: 'Projects',
        action: 'Initial Category Filter',
        label: initialCategory
      });
    } else {
      setSelectedCategories(new Set());
    }
  }, [initialCategory]);

  // Update the categories array
  const categories = ["Frontend Apps", "Full-stack Apps", "Utilities"];

  // Determine if any filter is applied (categories or tech)
  const filterApplied = selectedCategories.size > 0 || selectedTech;

  // Updated filter logic to handle multiple categories
  const filterProjects = (projectsList) => {
    return projectsList.filter((project) => {
      const matchesCategories = selectedCategories.size === 0 || 
        project.categories.some(cat => selectedCategories.has(cat));
      const matchesTech = !selectedTech || project.techStack.includes(selectedTech);
      return matchesCategories && matchesTech;
    });
  };

  // Filter both regular and hidden projects
  const filteredProjects = filterProjects(projects);
  const filteredHiddenProjects = filterApplied ? filterProjects(hiddenProjects) : [];

  // Combine filtered projects
  const displayProjects = filterApplied
    ? [...filteredProjects, ...filteredHiddenProjects]
    : projects;

  const handlePreviewClick = (project) => {
    setPreviewUrl(project.siteLink);
    Analytics.trackProjectPreview(project.title);
    
    // Track if hidden project is revealed
    if (hiddenProjects.some(p => p.title === project.title)) {
      Analytics.trackEvent({
        category: 'Projects',
        action: 'Hidden Project Revealed',
        label: project.title
      });
    }
    
    // Track tech stack used in the previewed project
    project.techStack.forEach(tech => {
      Analytics.trackTechFilter(tech);
    });
    
    if (!hasSeenPreview) {
      setHasSeenPreview(true);
      localStorage.setItem("hasSeenPreview", "true");
      
      // Track first-time preview
      Analytics.trackFeatureUse('First Project Preview');
    }
  };

  const handleClosePreview = (e) => {
    e?.preventDefault();
    setPreviewUrl(null);
    document.body.style.overflow = "unset";
    document.body.classList.remove("modal-open");

    // Track preview close action
    Analytics.trackEvent({
      category: 'Projects',
      action: 'Close Preview',
      label: previewUrl
    });

    setTimeout(() => {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  
  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => {
      const newCategories = new Set(prev);
      if (newCategories.has(category)) {
        newCategories.delete(category);
      } else {
        newCategories.add(category);
      }
      
      // Track category filter changes
      Analytics.trackEvent({
        category: 'Projects',
        action: newCategories.has(category) ? 'Add Category Filter' : 'Remove Category Filter',
        label: category
      });
      
      return newCategories;
    });
  };
  
  const handleExternalLinkClick = (url, projectTitle, linkType) => {
    // Track external link clicks with specific data
    Analytics.trackExternalLink(url, `${projectTitle} - ${linkType}`);
  };

  return (
    <ProjectsSection>
      <ProjectsHeader>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsDescription>
          Filter through my projects by clicking the tech tags below each project 
          or explore by tech stack powers above ⚡
        </ProjectsDescription>
      </ProjectsHeader>
      
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
                onClick={() => handleExternalLinkClick(project.siteLink, project.title, 'Visit Site')}
              >
                Visit Site
              </ProjectLink>
              <ProjectLink
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleExternalLinkClick(project.repoLink, project.title, 'View Code')}
              >
                View Code
              </ProjectLink>
            </ProjectLinks>
            <PreviewButton onClick={() => handlePreviewClick(project)}>
              Preview Site
            </PreviewButton>
            <TechStack>
              {project.techStack.map((tech, techIndex) => (
                <TechBadge
                  key={tech}
                  isSelected={selectedTech === tech}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: index * 0.1 + techIndex * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                  onClick={() => {
                    const newTech = selectedTech === tech ? null : tech;
                    setSelectedTech(newTech);
                    
                    // Track tech filter changes
                    if (newTech) {
                      Analytics.trackTechFilter(tech);
                    }
                  }}
                >
                  {tech}
                </TechBadge>
              ))}
            </TechStack>
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

GitHubProjects.propTypes = {
  initialCategory: PropTypes.string
};

export default GitHubProjects;

