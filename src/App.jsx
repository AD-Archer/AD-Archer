import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Layout from './components/Layout';
import LinkedInFeed from './components/LinkedInFeed';
import GitHubProjects from './components/github-components/GitHubProjects';
import ProfileSections from './components/profile/ProfileSections';
import GitHubProfile from './components/github-components/GitHubProfile';
import TechStack from './components/TechStack';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Hero from './components/hero/Hero';
import GitHubActivity from './components/github-components/GitHubActivity';
import SocialButtons from './components/social/SocialButtons';
import SocialIcons from './components/social/SocialIcons';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const [showLinkedIn, setShowLinkedIn] = useState(false);
  const [showGitHubProfile, setShowGitHubProfile] = useState(false);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SEO />
        <Layout>
          <SocialIcons />
          <div className="container">
            <Hero />
            <GitHubActivity />
            <TechStack />
            <ProfileSections />
            <GitHubProjects />
            
            <SocialButtons 
              showGitHubProfile={showGitHubProfile}
              setShowGitHubProfile={setShowGitHubProfile}
              showLinkedIn={showLinkedIn}
              setShowLinkedIn={setShowLinkedIn}
            />

            {showGitHubProfile && <GitHubProfile />}
            {showLinkedIn && <LinkedInFeed />}
          </div>
        </Layout>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
