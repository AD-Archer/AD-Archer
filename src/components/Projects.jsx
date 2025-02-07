import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  position: relative;
  padding: 2rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 3px;
    background: black;
    transform: translateX(-50%);
    z-index: 1;
  }

  @media (max-width: 768px) {
    &::before {
      display: none;
    }
  }
`;

const ProjectPanel = styled(motion.div)`
  background: white;
  border: 3px solid black;
  padding: 2rem;
  position: relative;
  transform: rotate(-1deg);
  transition: transform 0.3s ease;
  box-shadow: ${props => props.theme.shadows.comic};
  height: 100%;
  margin-bottom: 2rem;

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
  text-transform: uppercase;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.6;
`;

const TechBadge = styled(motion.span)`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-family: ${props => props.theme.fonts.body};
  font-size: 0.9rem;
  margin: 0.3rem;
  display: inline-block;
  border: 2px solid black;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border: 2px solid black;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  
  ${ProjectPanel}:hover & {
    transform: scale(1.02);
  }
`;

const POW = styled(motion.div)`
  position: absolute;
  top: -20px;
  right: -20px;
  background: ${props => props.theme.colors.secondary};
  padding: 1rem;
  border: 2px solid black;
  transform: rotate(15deg);
  font-family: ${props => props.theme.fonts.title};
  font-size: 1.2rem;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, transparent 60%, black 60%, black 100%);
    z-index: -1;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A super-powered web application that saves the day!",
      image: "https://via.placeholder.com/300x200",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project Beta",
      description: "Fighting evil bugs with clean code and testing!",
      image: "https://via.placeholder.com/300x200",
      tech: ["TypeScript", "Next.js", "Firebase"],
      link: "#"
    },
    {
      title: "Project Alpha",
      description: "A super-powered web application that saves the day!",
      image: "https://via.placeholder.com/300x200",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project Beta",
      description: "Fighting evil bugs with clean code and testing!",
      image: "https://via.placeholder.com/300x200",
      tech: ["TypeScript", "Next.js", "Firebase"],
      link: "#"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsContainer>
        <div className="container">
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-12 col-md-6" key={index}>
                <ProjectPanel
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <POW
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  >
                    POW!
                  </POW>
                  <ProjectImage src={project.image} alt={project.title} />
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <div className="mt-3">
                    {project.tech.map((tech, techIndex) => (
                      <TechBadge
                        key={techIndex}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.5 + (techIndex * 0.1) }}
                      >
                        {tech}
                      </TechBadge>
                    ))}
                  </div>
                </ProjectPanel>
              </div>
            ))}
          </div>
        </div>
      </ProjectsContainer>
    </motion.div>
  );
};

export default Projects; 