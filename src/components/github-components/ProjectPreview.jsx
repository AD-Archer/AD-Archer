import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Analytics } from '../../services/analytics';

// Modal overlay for the preview
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(5px);
`;

// Modal content container
const ModalContent = styled(motion.div)`
  background: white;
  width: 95%;
  max-width: 1400px;
  height: 90vh;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 90vh;
    border-radius: 8px;
  }
`;

// Site preview iframe
const SitePreview = styled.iframe`
  flex: 1;
  width: 100%;
  border: none;
  border-radius: 0;
`;

// Close button at the bottom
const CloseButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  background: #1a1a1a;
  color: white;
  font-weight: bold;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background: #333;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Close button at the top right
const TopCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background: white;
  border: none;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 5;
  
  &:hover {
    background: #f0f0f0;
    transform: scale(1.05);
  }
`;

// First time message for new users
const FirstTimeMessage = styled(motion.div)`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: #4a4a4a;
  color: white;
  padding: 10px;
  text-align: center;
  z-index: 5;
  
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

const ProjectPreview = ({ 
  previewUrl, 
  isOpen, 
  onClose, 
  projectTitle = '',
  hasSeenPreview = false, 
  setHasSeenPreview = () => {},
  analyticsCategory = 'Projects'
}) => {
  // Track preview open and set up body styles
  useEffect(() => {
    if (isOpen) {
      // Apply effects when preview opens
      document.documentElement.style.setProperty('--header-visibility', 'hidden');
      
      // Track preview open with project title for analytics
      if (projectTitle) {
        Analytics.trackEvent(analyticsCategory, 'Preview Opened', projectTitle);
      }
      
      // Save the current scroll position
      const scrollY = window.scrollY;
      document.body.dataset.scrollY = scrollY;
      
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      
      // Fix the body in place
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
      // Mark that user has seen preview
      if (!hasSeenPreview && setHasSeenPreview) {
        setHasSeenPreview(true);
        localStorage.setItem('hasSeenPreview', 'true');
      }
    } else if (previewUrl) {
      // Cleanup when preview closes
      document.documentElement.style.setProperty('--header-visibility', 'visible');
      
      // Track preview close event
      if (projectTitle) {
        Analytics.trackEvent(analyticsCategory, 'Close Preview', projectTitle);
      }
      
      // Restore scrolling to both body and html
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.classList.remove('modal-open');
      
      // Restore scroll position
      const scrollY = parseInt(document.body.dataset.scrollY || '0');
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollY);
    }
    
    // Cleanup function
    return () => {
      if (isOpen) {
        document.documentElement.style.setProperty('--header-visibility', 'visible');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.classList.remove('modal-open');
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.height = '';
        document.body.style.top = '';
        
        // Restore scroll position
        const scrollY = parseInt(document.body.dataset.scrollY || '0');
        window.scrollTo(0, scrollY);
      }
    };
  }, [isOpen, hasSeenPreview, setHasSeenPreview, projectTitle, analyticsCategory, previewUrl]);

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
    
    // Track close action
    Analytics.trackEvent({
      category: analyticsCategory,
      action: 'Close Preview',
      label: projectTitle
    });
  };
  
  if (!isOpen) return null;
  
  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
      <ModalContent
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
      >
        {!hasSeenPreview && (
          <FirstTimeMessage
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p>Click outside the preview window or the button below to exit</p>
          </FirstTimeMessage>
        )}
        <SitePreview
          src={previewUrl}
          title="Site Preview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <CloseButton onClick={handleClose}>Close Preview</CloseButton>
        <TopCloseButton onClick={handleClose} aria-label="Close preview">✕</TopCloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

ProjectPreview.propTypes = {
  previewUrl: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  projectTitle: PropTypes.string,
  hasSeenPreview: PropTypes.bool,
  setHasSeenPreview: PropTypes.func,
  analyticsCategory: PropTypes.string
};

export default ProjectPreview; 