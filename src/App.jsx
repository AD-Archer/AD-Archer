import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Layout from './components/Layout';
import LinkedInFeed from './components/LinkedInFeed';
import GitHubProjects from './components/github-components/GitHubProjects';
import ProfileSections from './components/profile/ProfileSections';
import TechStack from './components/TechStack';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Hero from './components/hero/Hero';
import GitHubActivity from './components/github-components/GitHubActivity';
import SocialButtons from './components/social/SocialButtons';
import SocialIcons from './components/social/SocialIcons';
import GlobalStyles from './styles/GlobalStyles';
import { TechFilterProvider } from './context/TechFilterContext';
import { Analytics } from './services/analytics';

function App() {
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  useEffect(() => {
    // Track initial site visit
    Analytics.trackSiteEntry();
    Analytics.trackPageView(window.location.pathname);
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <TechFilterProvider>
          <GlobalStyles />
          <SEO />
          <Layout>
            <SocialIcons />
            <div className="container">
              <Hero />
              <GitHubActivity />
              <ProfileSections />
              <TechStack />
              <GitHubProjects />
              <SocialButtons 
                showLinkedIn={showLinkedIn}
                setShowLinkedIn={setShowLinkedIn}
              />
              {showLinkedIn && <LinkedInFeed />}
            </div>
          </Layout>
        </TechFilterProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
