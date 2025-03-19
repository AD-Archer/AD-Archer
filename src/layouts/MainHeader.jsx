import { useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styled from 'styled-components';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { usePreview } from '../context/PreviewContext';
import { useChatContext } from '../context/ChatContext';

// Custom hook for managing external link warning
const useExternalLinkWarning = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [pendingUrl, setPendingUrl] = useState('');

  const handleExternalLink = (url) => {
    setPendingUrl(url);
    setShowWarning(true);
  };

  const handleConfirm = () => {
    window.open(pendingUrl, '_blank', 'noopener,noreferrer');
    setShowWarning(false);
  };

  const handleCancel = () => {
    setShowWarning(false);
    setPendingUrl('');
  };

  return { showWarning, handleExternalLink, handleConfirm, handleCancel };
};

// Styled components for the warning dialog
const WarningDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-width: 400px;
  width: 90%;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  
  &.confirm {
    background: #007bff;
    color: white;
  }
  
  &.cancel {
    background: #e9ecef;
    color: #212529;
  }
`;

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: ${props => props.$isPreviewActive ? -1 : 10};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  pointer-events: ${props => props.$isPreviewActive ? 'none' : 'auto'};
  opacity: ${props => {
    if (props.$isPreviewActive) return 0;
    if (props.$isContactFormOpen) return 0;
    return 1;
  }};
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

const NavLink = styled(RouterNavLink)`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1.1rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  
  &:hover, &.active {
    color: ${props => props.theme.colors.accent};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${props => props.theme.colors.accent};
    transition: width 0.3s ease;
  }
  
  &:hover::after, &.active::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// External link styled like NavLink for consistency
const ExternalLink = styled.a`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1.1rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${props => props.theme.colors.accent};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const MainHeader = () => {
  const { scrollY } = useScroll();
  const { isPreviewActive } = usePreview();
  const { isChatOpen } = useChatContext();
  const location = useLocation();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  useEffect(() => {
    console.log("Preview active state:", isPreviewActive);
  }, [isPreviewActive]);
  
  // Check if contact form is open by looking for the modal overlay
  useEffect(() => {
    const checkForContactForm = () => {
      const modalOverlay = document.querySelector('[data-contact-form-modal="true"]');
      setIsContactFormOpen(!!modalOverlay);
    };
    
    // Initial check
    checkForContactForm();
    
    // Set up a mutation observer to detect when the contact form is added or removed
    const observer = new MutationObserver(checkForContactForm); // Provides the ability to watch for changes being made to the DOM tree
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, []);
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.92)", "rgba(255, 255, 255, 0.96)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 1px 2px rgba(0,0,0,0.1)", "0 2px 4px rgba(0,0,0,0.15)"]
  );

  return (
    <HeaderContainer
      $isPreviewActive={isPreviewActive}
      $isContactFormOpen={isContactFormOpen}
      $isChatOpen={isChatOpen}
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <ExternalLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (window.confirm('You are about to be redirected to view the resume on adarcher.app. Do you wish to continue?')) {
              window.open('https://adarcher.app/resume', '_blank', 'noopener,noreferrer');
            }
          }}
        >
          Resume
        </ExternalLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default MainHeader; 