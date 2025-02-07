import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { theme } from './styles/theme';
import Layout from './components/Layout';
import antonioImage from './assets/images/antonioarcher.jpeg';
import LinkedInFeed from './components/LinkedInFeed';
import GitHubProjects from './components/github-components/GitHubProjects';
import ProfileSections from './components/profile/ProfileSections';
import GitHubProfile from './components/github-components/GitHubProfile';
import TechStack from './components/TechStack';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import GitHubStreak from './components/github-components/github-widgets/GitHubStreak';
import {
  HeroTitle,
  SpeechBubble,
  SocialLinks,
  SocialIcon,
  ButtonContainer,
  RevealButton,
  ProfileImage
} from './styles/AppStyles';



function App() {
  const [showLinkedIn, setShowLinkedIn] = useState(false);
  const [showGitHubProfile, setShowGitHubProfile] = useState(false);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <SEO />
        <Layout>
          <div className="container">
            <HeroTitle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ANTONIO ARCHER
            </HeroTitle>
            
            <SpeechBubble
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <ProfileImage 
                src={antonioImage} 
                alt="Antonio Archer"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
              <h2>Full Stack Software Engineer</h2>
              <p>
                Crafting innovative web solutions with React.js, JavaScript, and Python. 
                Dedicated to making technology both fun and practical while improving human lives.
              </p>
              <p className="credentials">
                Certified in Python | React.js Expert | JavaScript Developer
              </p>
            </SpeechBubble>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                width: '100%',
                maxWidth: '1200px',
                margin: '4rem auto',
                padding: '2rem',
                background: 'white',
                border: '3px solid black',
                boxShadow: theme.shadows.comic,
                borderRadius: '10px'
              }}
            >
              <motion.h2
                style={{
                  fontFamily: theme.fonts.title,
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: theme.colors.accent,
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}
              >
                GITHUB ACTIVITY
              </motion.h2>
              <GitHubStreak />
            </motion.div>

            <TechStack />
            
            <ProfileSections />

            <GitHubProjects />
            <ButtonContainer>
              <RevealButton
                onClick={() => setShowGitHubProfile(!showGitHubProfile)}
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
              >
                {showGitHubProfile ? 'Hide GitHub Profile' : 'Show GitHub Profile'}
              </RevealButton>

              <RevealButton
                onClick={() => setShowLinkedIn(!showLinkedIn)}
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
              >
                {showLinkedIn ? 'Hide LinkedIn Feed' : 'Unwrap the LinkedIn!'}
              </RevealButton>
            </ButtonContainer>

            {showGitHubProfile && <GitHubProfile />}
            {showLinkedIn && <LinkedInFeed />}
          </div>
          
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
        </Layout>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
