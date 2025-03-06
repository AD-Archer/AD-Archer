import Certifications from './Certifications';
import Jobs from './Jobs';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { Analytics } from '../../services/analytics';
import { motion, useInView } from 'framer-motion';

const ProfileGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 4px;
      background: repeating-linear-gradient(
        to bottom,
        ${props => props.theme.colors.primary}20,
        ${props => props.theme.colors.primary}20 10px,
        transparent 10px,
        transparent 20px
      );
      transform: translateX(-50%);
    }
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
  }
`;

const Panel = styled(motion.div)`
  position: relative;
  background: white;
  border: 3px solid black;
  box-shadow: ${props => props.theme.shadows.comic};
  padding: 2rem;

  @media (max-width: 768px) {
    box-shadow: ${props => props.theme.shadows.comicMobile};
  }

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: -10px;
    bottom: -10px;
    background: rgba(0, 0, 0, 0.03);
    z-index: -1;
    border-radius: 8px;

    @media (max-width: 768px) {
      top: 4px;
      left: 4px;
      right: -4px;
      bottom: -4px;
    }
  }
`;

const ProfileSections = () => {
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Set threshold to 0.1 for mobile to trigger earlier
  const leftPanelInView = useInView(leftPanelRef, { amount: isMobile ? 0.1 : 0.5, once: true });
  const rightPanelInView = useInView(rightPanelRef, { amount: isMobile ? 0.1 : 0.5, once: true });

  useEffect(() => {
    // Track profile section view
    Analytics.trackEvent({
      category: 'Profile',
      action: 'View',
      label: 'Profile Sections'
    });
    
    // Set up intersection observer for scroll depth tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            Analytics.trackScrollDepth(50); // Approximate middle of page
          }
        });
      },
      { threshold: 0.5 }
    );
    
    // Observe the profile grid
    const profileGrid = document.querySelector('#profile-grid');
    if (profileGrid) {
      observer.observe(profileGrid);
    }
    
    // Handle resize events to update mobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Force a re-render after component mounts to ensure proper layout on mobile
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    
    return () => {
      if (profileGrid) {
        observer.unobserve(profileGrid);
      }
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  // Animation variants
  const leftPanelVariants = {
    hidden: { x: isMobile ? -50 : -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: isMobile ? 70 : 100, 
        damping: isMobile ? 10 : 15,
        duration: isMobile ? 0.3 : 0.5
      }
    }
  };

  const rightPanelVariants = {
    hidden: { x: isMobile ? 50 : 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: isMobile ? 70 : 100, 
        damping: isMobile ? 10 : 15,
        duration: isMobile ? 0.3 : 0.5
      }
    }
  };

  return (
    <ProfileGrid id="profile-grid">
      <Panel
        ref={leftPanelRef}
        initial="hidden"
        animate={leftPanelInView ? "visible" : "hidden"}
        variants={leftPanelVariants}
      >
        <Certifications />
      </Panel>
      <Panel
        ref={rightPanelRef}
        initial="hidden"
        animate={rightPanelInView ? "visible" : "hidden"}
        variants={rightPanelVariants}
      >
        <Jobs />
      </Panel>
    </ProfileGrid>
  );
};

export default ProfileSections; 