'use client'
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js'; // corrected path
import Layout from './components/Layout.jsx';
import LinkedInFeed from './components/linkedin/LinkedInFeed.jsx';
import GitHubProjects from './components/github-components/HomepageProjects.jsx';
import ProfileSections from './components/profile/ProfileSections.jsx';
import TechStack from './components/TechStack.jsx';
import SEO from './components/SEO.jsx';
import Hero from './components/hero/Hero.jsx';
import SocialButtons from './components/social/SocialButtons.jsx';
import SocialIcons from './components/social/SocialIcons.jsx';
import GlobalStyles from './styles/GlobalStyles.js'; // corrected path

// Update the import in App.jsx
import GitHubStats from './components/github-components/GitHubStats.jsx';
import ChatBot from './components/ChatBot.jsx';

function App() {
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SEO />
      <Layout>
        <SocialIcons />
        {/* Next.js handles routing via file structure, so simply render your home page */}
        <div className="container">
          <Hero />
          <GitHubStats />
          <ProfileSections />
          <TechStack />
          <GitHubProjects />
          <SocialButtons 
            showLinkedIn={showLinkedIn}
            setShowLinkedIn={setShowLinkedIn}
          />
          {showLinkedIn && <LinkedInFeed />}
          <ChatBot />
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
