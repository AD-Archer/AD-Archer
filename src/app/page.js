'use client'
import Head from 'next/head';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js'; // your theme object
import GlobalStyles from './styles/GlobalStyles.js'; // your existing global styles
import AppStyles from './styles/AppStyles.js'; // Now imported as default

import Layout from './components/Layout.jsx';
import LinkedInFeed from './components/linkedin/LinkedInFeed.jsx';
import GitHubProjects from './components/github-components/HomepageProjects.jsx';
import ProfileSections from './components/profile/ProfileSections.jsx';
import TechStack from './components/TechStack.jsx';
import SEO from './components/SEO.jsx';
import Hero from './components/hero/Hero.jsx';
import SocialButtons from './components/social/SocialButtons.jsx';
import SocialIcons from './components/social/SocialIcons.jsx';

// Updated imports
import GitHubStats from './components/github-components/GitHubStats.jsx';
import ChatBot from './components/ChatBot.jsx';

function App() {
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  return (
    <>
      <Head>
        {/* Bootstrap CDN link */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUa6mYh9+7E2TTGyPRq3Yj4hCZHsC3abS5ysF2E4fBEzgr3eQhDQ7O7+4HNo"
          crossOrigin="anonymous"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppStyles />
        <SEO />
        <Layout>
          <SocialIcons />
          {/* Your page content */}
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
    </>
  );
}

export default App;
