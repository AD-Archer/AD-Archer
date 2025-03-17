import { useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Analytics } from '../../../services/analytics';

// Modal overlay for the preview
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100); /* Mobile viewport height fix */
  background: rgba(0, 0, 0, 0.85);
  z-index: 999; /* Ensure this is above everything */
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  isolation: isolate; /* Creates a new stacking context */
  
  /* Improved touch handling for mobile */
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  padding: 0; /* Remove any padding that might affect positioning */
  margin: 0; /* Remove any margin that might affect positioning */
  overflow: hidden;
`;

// Modal content container
const ModalContent = styled(motion.div)`
  background: white;
  width: 95%;
  max-width: 1400px;
  height: 90vh;
  height: calc(var(--vh, 1vh) * 90);
  max-height: calc(var(--vh, 1vh) * 90);
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border: 3px solid ${props => props.theme?.colors?.primary || '#333'};
  margin: 0 auto;
  
  /* Adjust for mobile */
  @media (max-width: 768px) {
    width: 96%;
    height: 92vh;
    height: calc(var(--vh, 1vh) * 92);
    max-height: calc(var(--vh, 1vh) * 92);
    border-radius: 10px;
    transform: none !important; /* Prevent any transforms affecting position */
  }
`;

// Site preview iframe
const SitePreview = styled.iframe`
  flex: 1;
  width: 100%;
  height: 0;
  min-height: 0;
  flex-grow: 1;
  border: none;
  background: #fff;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
`;

// Close button container - ensures it's always at the bottom
const ControlsContainer = styled.div`
  width: 100%;
  background: #fff;
  border-top: 1px solid #eee;
  
  @media (max-width: 768px) {
    border-top: 2px solid ${props => props.theme?.colors?.primary || '#333'};
  }
`;

// Close button at the bottom
const CloseButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  background: ${props => props.theme?.colors?.primary || '#1a1a1a'};
  color: white;
  font-weight: bold;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background: ${props => props.theme?.colors?.accent || '#333'};
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
  }
`;

// First time message for new users
const FirstTimeMessage = styled(motion.div)`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 400px;
  background: ${props => props.theme?.colors?.accent || '#4a4a4a'};
  color: white;
  padding: 10px;
  text-align: center;
  z-index: 10;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  
  p {
    margin: 0;
    font-size: 0.9rem;
    
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

/**
 * ProjectPreview component for displaying website previews in a modal
 * 
 * @param {Object} props - Component props
 * @param {string} props.previewUrl - URL of the site to preview
 * @param {boolean} props.isOpen - Whether the preview is open
 * @param {Function} props.onClose - Function to call when preview is closed
 * @param {string} props.projectTitle - Title of the project being previewed
 * @param {boolean} props.hasSeenPreview - Whether the user has seen a preview before
 * @param {Function} props.setHasSeenPreview - Function to update hasSeenPreview state
 * @param {string} props.analyticsCategory - Category for analytics tracking
 */
const ProjectPreview = ({ 
  previewUrl, 
  isOpen, 
  onClose, 
  projectTitle = '',
  hasSeenPreview = false, 
  setHasSeenPreview = () => {},
  analyticsCategory = 'Projects'
}) => {
  // Early return if preview is not open (this will always be the case when preview is disabled)
  if (!isOpen) return null;
  
  // Create a ref for the content wrapper
  const contentRef = useRef(null);
  
  // Set correct viewport height for mobile
  useEffect(() => {
    // First we get the viewport height and multiply it by 1% to get a value for a vh unit
    const setVhVariable = () => {
      const vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    // Set the vh variable initially
    setVhVariable();
    
    // Update the vh variable when the window is resized
    window.addEventListener('resize', setVhVariable);
    window.addEventListener('orientationchange', setVhVariable);
    
    return () => {
      window.removeEventListener('resize', setVhVariable);
      window.removeEventListener('orientationchange', setVhVariable);
    };
  }, []);
  
  // Memoize the close handler to prevent unnecessary re-renders
  const handleClose = useCallback((e) => {
    if (e) {
      e.stopPropagation();
    }
    onClose();
    
    // Track close action with error handling
    try {
      Analytics.trackEvent({
        category: analyticsCategory || 'Projects',
        action: 'Close Preview',
        label: projectTitle || 'Unknown Project'
      });
    } catch (error) {
      console.error('Analytics error:', error);
    }
  }, [onClose, analyticsCategory, projectTitle]);

  // Track preview open and set up body styles
  useEffect(() => {
    if (isOpen) {
      // Apply effects when preview opens
      document.documentElement.style.setProperty('--header-visibility', 'hidden');
      
      // Handle iOS Safari-specific issues
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      
      // Ensure we're at the top of the page for mobile
      window.scrollTo(0, 0);

      // Track preview open with project title for analytics
      try {
        Analytics.trackEvent({
          category: analyticsCategory || 'Projects',
          action: 'Preview Opened',
          label: projectTitle || 'Unknown Project'
        });
      } catch (error) {
        console.error('Analytics error:', error);
      }
      
      // Save the current scroll position and fix the viewport
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      
      // Store the original position
      document.body.dataset.scrollY = scrollY;
      document.body.dataset.scrollX = scrollX;
      
      // Fix position to prevent scrolling under modal
      document.body.style.position = 'fixed';
      
      // iOS needs special handling to avoid content shifting
      if (isIOS) {
        document.body.style.width = '100%';
        document.body.style.top = `0px`;
        window.scrollTo(0, 0);
      } else {
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = `-${scrollX}px`;
        document.body.style.width = '100%';
      }
      
      // Mark that user has seen preview
      if (!hasSeenPreview && setHasSeenPreview) {
        setHasSeenPreview(true);
        localStorage.setItem('hasSeenPreview', 'true');
        
        // Track first-time preview with error handling
        try {
          Analytics.trackEvent({
            category: analyticsCategory || 'Projects',
            action: 'First Preview Experience',
            label: projectTitle || 'Unknown Project'
          });
        } catch (error) {
          console.error('Analytics error:', error);
        }
      }
      
      // Add escape key handler for accessibility
      const handleEscKey = (e) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };
      
      window.addEventListener('keydown', handleEscKey);
      
      // Center modal on orientation change
      const handleResize = () => {
        // Force modal to center
        window.scrollTo(0, 0);
      };
      
      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);
      
      return () => {
        window.removeEventListener('keydown', handleEscKey);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
      };
    } else if (previewUrl) {
      // Cleanup when preview closes
      document.documentElement.style.setProperty('--header-visibility', 'visible');
      
      // Track preview close event with error handling
      try {
        Analytics.trackEvent({
          category: analyticsCategory || 'Projects',
          action: 'Close Preview',
          label: projectTitle || 'Unknown Project'
        });
      } catch (error) {
        console.error('Analytics error:', error);
      }
      
      // Restore scrolling to both body and html
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.classList.remove('modal-open');
      
      // Restore position
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      
      // Restore scroll position
      const scrollY = parseInt(document.body.dataset.scrollY || '0', 10);
      const scrollX = parseInt(document.body.dataset.scrollX || '0', 10);
      window.scrollTo(scrollX, scrollY);
    }
    
    // Cleanup function
    return () => {
      // Always clean up the body styles when component unmounts
      if (document.body.classList.contains('modal-open')) {
        document.documentElement.style.setProperty('--header-visibility', 'visible');
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        
        // Restore position
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.width = '';
        
        // Restore scroll position
        const scrollY = parseInt(document.body.dataset.scrollY || '0', 10);
        const scrollX = parseInt(document.body.dataset.scrollX || '0', 10);
        window.scrollTo(scrollX, scrollY);
      }
    };
  }, [isOpen, hasSeenPreview, setHasSeenPreview, projectTitle, analyticsCategory, handleClose, previewUrl]);

  // Handle touch events specifically for mobile
  const handleTouchEnd = useCallback((e) => {
    // Only close if the touch ended on the overlay itself
    if (e.target === e.currentTarget) {
      e.preventDefault();
      handleClose(e);
    }
  }, [handleClose]);
  
  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
      onTouchEnd={handleTouchEnd}
    >
      <ModalContent
        ref={contentRef}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
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
        <ControlsContainer>
          <CloseButton onClick={handleClose}>Close Preview</CloseButton>
        </ControlsContainer>
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