import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { theme } from './styles/theme';
import Layout from './components/Layout';
import Projects from './components/Projects';
import antonioImage from './assets/images/antonioarcher.jpeg';
import LinkedInFeed from './components/LinkedInFeed';

const HeroTitle = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.title};
  font-size: clamp(3rem, 8vw, 6rem);
  color: ${props => props.theme.colors.primary};
  text-shadow: 3px 3px 0 #000;
  margin: 2rem 0;
  text-align: center;
`;

const SpeechBubble = styled(motion.div)`
  background: white;
  border: 3px solid black;
  border-radius: 30px;
  padding: 2rem;
  position: relative;
  margin: 3rem auto;
  max-width: 800px;
  box-shadow: ${props => props.theme.shadows.comic};
  
  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: black;
    transform: translateX(-50%);
  }

  h2 {
    font-family: ${props => props.theme.fonts.accent};
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.accent};
  }

  p {
    font-family: ${props => props.theme.fonts.body};
    font-size: clamp(1rem, 2vw, 1.2rem);
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.title};
  font-size: clamp(2rem, 6vw, 4rem);
  color: ${props => props.theme.colors.accent};
  text-align: center;
  margin: 4rem 0;
  text-shadow: 2px 2px 0 #000;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: min(150px, 50%);
    height: 3px;
    background: ${props => props.theme.colors.primary};
  }
`;

const SocialLinks = styled(motion.div)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 100;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    position: static;
    justify-content: center;
    margin: 1rem 0;
  }
`;

const SocialIcon = styled(motion.a)`
  background: ${props => props.theme.colors.secondary};
  color: black;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  box-shadow: ${props => props.theme.shadows.comic};
  transition: transform 0.3s ease;
  position: relative;
  
  &:hover {
    transform: scale(1.1) rotate(5deg);
    color: black;
  }

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: ${props => props.theme.colors.secondary}40;
    border-radius: 50%;
    z-index: -1;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scale(1.2);
  }
`;

const RevealButton = styled(motion.button)`
  background: ${props => props.theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 2rem auto;
  display: block;
  transition: background 0.3s;

  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

function App() {
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SocialLinks
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <SocialIcon 
            href="https://linkedin.com/in/antonio-archer" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </SocialIcon>
          <SocialIcon 
            href="https://github.com/AD-Archer" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </SocialIcon>
        </SocialLinks>

        <div className="container">
          <HeroTitle
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ANTONIO ARCHER
          </HeroTitle>
          
          <img 
            src={antonioImage} 
            alt="Antonio Archer" 
            style={{ width: '200px', borderRadius: '10px', margin: '1rem auto', display: 'block' }} 
          />

          <SpeechBubble
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2>Web Developer Extraordinaire!</h2>
            <p>Fighting bugs and crafting awesome web experiences!</p>
          </SpeechBubble>

          <SectionTitle
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            MY SUPER PROJECTS!
          </SectionTitle>
        </div>
        
        <Projects />

        <RevealButton
          onClick={() => setShowLinkedIn(!showLinkedIn)}
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
        >
          {showLinkedIn ? 'Hide LinkedIn Feed' : 'Unwrap the LinkedIn!'}
        </RevealButton>

        {showLinkedIn && <LinkedInFeed />}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
