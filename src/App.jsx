import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Layout from './components/Layout';
import LinkedInFeed from './components//linkedin/LinkedInFeed';
import GitHubProjects from './components/github-components/HomepageProjects.jsx';
import ProfileSections from './components/profile/ProfileSections';
import TechStack from './components/TechStack';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Hero from './components/hero/Hero';
import SocialButtons from './components/social/SocialButtons';
import SocialIcons from './components/social/SocialIcons';
import GlobalStyles from './styles/GlobalStyles';
import { TechFilterProvider } from './context/TechFilterContext';
import { Analytics } from './services/analytics';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatBot from './components/ChatBot.jsx';
// Update the import in App.jsx
import ProjectsPage from "./components/pages/ProjectsPage.jsx";
import GitHubStats from './components/github-components/GitHubStats.jsx';
import Resume from "./components/pages/Resume";
import Contact from './components/pages/Contact';

function App() {
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  useEffect(() => {
    // Track initial site visit
    Analytics.trackSiteEntry();
    Analytics.trackPageView(window.location.pathname);
  }, []);

  return (
    <Router>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <TechFilterProvider>
            <GlobalStyles />
            <SEO />
            <Layout>
              <ChatBot />
              {window.location.pathname !== '/resume' && <SocialIcons />}
              <Routes>
                {/* Home Page */}
                <Route path="/" element={
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
                  </div>
                } />
                
                {/* Projects Page */}
                <Route path="/projects" element={<ProjectsPage />} />
                {/* Add new resume route */}
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          </TechFilterProvider>
        </ThemeProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;
