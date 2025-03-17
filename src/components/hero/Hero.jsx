import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import antonioImage from '/images/antonioarcher.jpeg';

// Main container with a transparent background
const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 8rem 2rem 2rem;
  background: transparent;
  
  @media (max-width: 768px) {
    padding: 6rem 1rem 2rem;
  }
`;

// Animated background elements
// Removed unused BackgroundCircle styled component

// Card containing profile content
const ProfileCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 1rem;
    text-align: center;
  }
`;

// Left column with image
const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

// Right column with text content
const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

// Profile image with border
const ProfileImg = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    border-width: 3px;
  }
`;

// Name heading with gradient text
const Name = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 0.3rem;
  }
`;

// Role title
const Role = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 1rem 0;
  color: ${props => props.theme.colors.primary};
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
  }
`;

// Bio text
const Bio = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #555;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

// Skills tags container
const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

// Individual skill tag
const SkillTag = styled(motion.span)`
  background: ${props => props.theme.colors.accent}15;
  color: ${props => props.theme.colors.accent};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primary}20;
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
`;

// Social links container
const SocialContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

// Social media icon links
const SocialLink = styled(motion.a)`
  color: ${props => props.theme.colors.primary};
  font-size: 1.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
    transform: translateY(-3px) rotate(5deg);
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Credentials text
const Credentials = styled(motion.p)`
  font-size: 1rem;
  color: #777;
  margin-top: 1rem;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }
`;

// Project teaser section at the bottom
const ProjectTeaser = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 3rem 0 1rem;
  }
`;




const ScrollArrow = styled(motion.div)`
  color: ${props => props.theme.colors.accent};
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Floating particles
const Particle = styled(motion.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.theme.colors.accent}40;
  z-index: 0;
`;

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Delay visibility for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  // Skills to display
  const skills = ['Next.js', 'TypeScript', 'Python', 'MongoDB', 'Express'];
  
  // Generate random positions for particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    duration: Math.random() * 20 + 10
  }));
  
  // Detect if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <HeroContainer>
      {/* Floating particles - reduce number on mobile */}
      {particles.slice(0, isMobile ? 10 : 20).map(particle => (
        <Particle
          key={particle.id}
          initial={{ 
            x: `${particle.x}vw`, 
            y: `${particle.y}vh`, 
            opacity: 0 
          }}
          animate={{ 
            y: [`${particle.y}vh`, `${particle.y - 30}vh`, `${particle.y}vh`],
            opacity: [0, 0.7, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: particle.duration,
            delay: particle.id * 0.2
          }}
          style={{ width: particle.size, height: particle.size }}
        />
      ))}
      
      {/* Main profile card */}
      <ProfileCard
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ImageColumn>
          <ProfileImg 
            src={antonioImage} 
            alt="Antonio Archer"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: isVisible ? 1 : 0.8, 
              opacity: isVisible ? 1 : 0,
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{ 
              delay: 0.3, 
              duration: 0.5,
              rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" }
            }}
          />
        </ImageColumn>
        
        <ContentColumn>
          <Name
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            ANTONIO ARCHER
          </Name>
          
          <Role
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Full Stack Software Engineer
          </Role>
          
          <Bio
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Crafting innovative web solutions with React.js, JavaScript, and Python. 
            Dedicated to making technology both fun and practical while improving human lives.
          </Bio>
          
          <SkillsContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <SkillTag 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  scale: isVisible ? 1 : 0.8,
                  y: [0, -3, 0]
                }}
                transition={{ 
                  delay: 0.9 + (index * 0.1),
                  y: { 
                    repeat: Infinity, 
                    duration: 2 + index, 
                    ease: "easeInOut",
                    repeatDelay: index * 0.2
                  }
                }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </SkillTag>
            ))}
          </SkillsContainer>
          
          <Credentials
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 1.1 }}
          >
            Certified in Python | React.js Expert | JavaScript Developer
          </Credentials>
          
          <SocialContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ delay: 1.2 }}
          >
            <SocialLink 
              href="https://github.com/ad-archer" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
            
            <SocialLink 
              href="https://linkedin.com/in/antonio-archer" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink>
            
            <SocialLink 
              href="https://twitter.com/ad_archer_" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </SocialLink>
          </SocialContainer>
        </ContentColumn>
      </ProfileCard>
      
      {/* Project teaser section */}
      <ProjectTeaser
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ y: -5 }}
      >
        
        <ScrollArrow
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </ScrollArrow>
      </ProjectTeaser>
    </HeroContainer>
  );
};

export default Hero;
