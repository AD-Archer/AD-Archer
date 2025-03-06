import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Layout from './layouts/MainLayout.jsx';
import LinkedInFeed from './components//linkedin/LinkedInFeed';
import GitHubProjects from './components/github-components/HomepageProjects.jsx';
import ProfileSections from './components/profile/ProfileSections';
import TechStack from './components/TechStack';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Hero from './components/hero/Hero';
import SocialButtons from './components/social/SocialButtons';
import GlobalStyles from './styles/GlobalStyles';
import { TechFilterProvider } from './context/TechFilterContext';
import { Analytics } from './services/analytics';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatBot from './layouts/ChatBot.jsx';
import ProjectsPage from "./pages/ProjectsPage.jsx";
import GitHubStats from './components/github-components/GitHubStats.jsx';
import Resume from "./pages/Resume.jsx";
import Contact from './pages/Contact.jsx';
import DoesNotExist from './pages/DoesNotExist.jsx';
import { ChatProvider } from './context/ChatContext';
import { AnimationProvider } from './context/AnimationContext';
import { PreviewProvider } from './context/PreviewContext';
import BackgroundBubbles from './components/BackgroundBubbles';

function App() {
  const [showLinkedIn, setShowLinkedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Track initial site visit
    Analytics.trackSiteEntry();
    Analytics.trackPageView(window.location.pathname);
    
    // Set proper viewport for mobile devices
    const setViewportMeta = () => {
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (viewportMeta) {
        if (window.innerWidth <= 768) {
          viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
        } else {
          viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
      }
    };
    
    // Handle resize events
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setViewportMeta();
    };
    
    // Set initial viewport
    setViewportMeta();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Force a re-render after component mounts to ensure proper layout
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <ChatProvider>
            <PreviewProvider>
              <AnimationProvider>
                <TechFilterProvider>
                  <GlobalStyles />
                  <SEO />
                  <BackgroundBubbles />
                  <Layout>
                    <ChatBot />
                    <Routes>
                      {/* Home Page */}
                      <Route path="/" element={
                        <div className="container">
                          <Hero />
                          <GitHubStats />
                          
                          <ProfileSections key={`profile-${isMobile}`} />
                          <TechStack />
                          <GitHubProjects key={`projects-${isMobile}`} />
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
                      {/* Add 404 route at the end */}
                      <Route path="*" element={<DoesNotExist />} />
                    </Routes>
                  </Layout>
                </TechFilterProvider>
              </AnimationProvider>
            </PreviewProvider>
          </ChatProvider>
        </ThemeProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;
