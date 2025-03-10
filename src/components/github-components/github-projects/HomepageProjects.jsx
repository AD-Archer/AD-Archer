import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useTechFilter } from '../../../context/TechFilterContext';
import { Analytics } from '../../../services/analytics';
import { usePreview } from '../../../context/PreviewContext';
import ProjectPreview from './ProjectPreview';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  scroll-margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem 0;
  }
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
  min-height: 350px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 1.2rem;
    min-height: auto;
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
  font-size: clamp(1.5rem, 5vw, 2rem);
  color: ${props => props.theme.colors.accent};
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${props => props.theme.colors.secondary}40;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-bottom: 0.3rem;
  }
`;

const ProjectDescription = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.1rem;
  line-height: 1.6;
  flex-grow: 1;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
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
    siteLink: "https://phillysocial.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/Philly-Social",
  },
  {
    title: "MoviesNoir",
    description: "A movie generator app built with react and node.js to share black culture through movies and tv shows. Find your next favorite movie or tv show.",
    techStack: ["React", "Node.js", "Express","Python"],
    siteLink: "https://moviesnoir.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/MoviesNoir",

  },
  {
    title: "TimeWise",
    description: "A cozy time management tool with a pomodoro timer and youtube playlists for music.",
    techStack: ["React", "Node.js", "YouTube API"],
    siteLink: "https://timewise.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/TimeWise",
  },
  {
    title: "Orange Field University",
    description: "A Next.js web application for managing student courses and academic progress. Features user authentication, course enrollment, academic progress tracking, and responsive design.",
    techStack: ["Next.js", "PostgreSQL", "TailwindCSS", "T3 Stack", "Typescript"],
    siteLink: "https://university-orange-field.vercel.app/",
    repoLink: "https://github.com/AD-Archer/University-OrangeField"
  },
  {
    title: "PlatePedia",
    description: "A modern recipe management web application built with Node.js, Express, and PostgreSQL. Create, discover, and share recipes while connecting with other food enthusiasts.",
    techStack: ["Node.js", "Express", "PostgreSQL"],
    siteLink: "https://platepedia.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/PlatePedia-recipeapp"
  },
  {
    title: "Corra",
    description: "Create your Own Really Real Adventure game using AI to figure out your personality test and create an adventure for you based off of it.",
    techStack: ["React", "Gemini-AI", "Node.js","Express"],
    siteLink: "https://corra.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/corra"
  },
  {
    title: "Fintech App",
    description: "A modern financial technology application for managing personal finances and investments with real-time data visualization.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL"],
    siteLink: "https://fintech.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/fintech-app"
  },
  {
    title: "Dynasty Defense",
    description: "A system for managing and creating custom alarms for fire, smoke, and security, built with React.",
    techStack: ["React", "Node.js", "IoT"],
    siteLink: "https://dynasty-defense.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/dynasty-defense"
  },
  {
    title: "FortifyNow",
    description: "An educational platform aimed at improving cybersecurity awareness. Teaches strong password creation, 2FA, and account protection with USB security keys.",
    techStack: ["React", "Have I Been Pwned API", "Cybersecurity"],
    siteLink: "https://fortifynow.adarcher.app/",
    repoLink: "https://github.com/AD-Archer/FortifyNow"
  },
 
];

const HomepageProjects = () => {
  const { selectedTech, setAvailableTech, setSelectedTech } = useTechFilter();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewTitle, setPreviewTitle] = useState('');
  const [hasSeenPreview, setHasSeenPreview] = useState(() => {
    return localStorage.getItem("hasSeenPreview") === "true";
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const projectsRef = useRef(null);
  const gridRef = useRef(null);
  const { setIsPreviewActive } = usePreview();
  
  // Check if the grid is in view to trigger animations - lower threshold for mobile
  const gridInView = useInView(gridRef, { 
    amount: isMobile ? 0.05 : 0.2, 
    once: true,
    rootMargin: isMobile ? '0px 0px -50px 0px' : '0px'
  });

  useEffect(() => {
    const uniqueTech = [...new Set(
      projects.flatMap(project => project.techStack)
    )].filter(tech => tech !== "");
    
    setAvailableTech(uniqueTech);
  }, [setAvailableTech]);

  // Handle resize events to update mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Force a re-render after component mounts to ensure proper layout on mobile
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      
      // Instead of dispatching a scroll event which causes errors,
      // directly trigger any layout updates needed
      setTimeout(() => {
        if (gridRef.current) {
          // Force a repaint/reflow if needed
          // This is safer than dispatching a scroll event
          gridRef.current.offsetHeight; // Access property to force reflow without storing in unused variable
          
          // If you need to run specific animations or updates that
          // were previously triggered by the scroll event, do them directly here
        }
      }, 500);
    }, 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const filteredProjects = selectedTech 
    ? projects.filter(project => project.techStack.includes(selectedTech)) || projects
    : projects;

  const displayProjects = filteredProjects.length > 0 ? filteredProjects : projects;

  // Animation variants for the project cards - simplified for mobile
  const cardVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: isMobile ? Math.min(index * 0.05, 0.3) : Math.min(index * 0.1, 0.5),
        duration: isMobile ? 0.3 : 0.4,
        type: isMobile ? "tween" : "spring",
        stiffness: isMobile ? 70 : 100,
        damping: isMobile ? 10 : 15
      }
    })
  };

  const handlePreviewClick = (project) => {
    setPreviewUrl(project.siteLink);
    setPreviewTitle(project.title);
    setIsPreviewActive(true);
    
    Analytics.trackEvent({
      category: 'Projects',
      action: 'Preview Site',
      label: project.title
    });
  };

  const handleClosePreview = () => {
    setPreviewUrl(null);
    setIsPreviewActive(false);
    
    // Fix: Don't try to scroll immediately after closing preview
    // Delay scrolling until after modal cleanup is complete
    setTimeout(() => {
      // Only scroll if we're not on mobile, to avoid positioning issues
      if (!isMobile && projectsRef.current) {
        projectsRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'nearest' // Only scroll the minimum amount needed
        });
      }
    }, 300); // Longer timeout to ensure modal cleanup is complete
  };

  const handleExternalLinkClick = (url, projectTitle, linkType) => {
    Analytics.trackExternalLink(url, `${projectTitle} - ${linkType}`);
  };

  // Add this useEffect to ensure proper rendering on mobile
  useEffect(() => {
    // Force a re-render after component mounts to ensure proper layout
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      
      // Remove scroll adjustment for mobile
      if (isMobile && projectsRef.current) {
        // Just check visibility without scrolling
        const rect = projectsRef.current.getBoundingClientRect();
        console.log('Projects section visibility:', rect);
      }
    }, 300);
    
    // Handle orientation changes
    const handleOrientationChange = () => {
      // Force layout recalculation on orientation change
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 200);
    };
    
    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [isMobile]);

  return (
    <ProjectsSection>
      <ProjectsHeader>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsDescription>
          Filter through my projects by clicking the tech tags below each project 
          or explore by tech stack powers above ⚡
        </ProjectsDescription>
      </ProjectsHeader>
      
      <ProjectsGrid ref={(el) => { projectsRef.current = el; gridRef.current = el; }}>
        {displayProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            custom={index}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
            variants={cardVariants}
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
                    delay: index * 0.1 + (techIndex * 0.05),
                    type: "spring",
                    stiffness: 200
                  }}
                  onClick={() => {
                    const newTech = selectedTech === tech ? null : tech;
                    setSelectedTech(newTech);
                    
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

      <ProjectPreview 
        previewUrl={previewUrl}
        isOpen={!!previewUrl}
        onClose={handleClosePreview}
        projectTitle={previewTitle}
        hasSeenPreview={hasSeenPreview}
        setHasSeenPreview={setHasSeenPreview}
        analyticsCategory="Projects"
      />
    </ProjectsSection>
  );
};

export default HomepageProjects;