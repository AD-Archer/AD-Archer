import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Analytics } from '../services/analytics';

const ResumeContainer = styled(motion.div)`
  width: 100%;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  margin-top: 3.5rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
    margin-top: 3rem;
  }
`;

const ResumeHeader = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`;

const ResumeTitle = styled.h1`
  font-family: ${props => props.theme.fonts.accent};
  color: ${props => props.theme.colors.accent};
  margin: 0;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  text-shadow: 2px 2px 0 rgba(0,0,0,0.1);
`;

const ControlsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`;

const ControlButton = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  box-shadow: ${props => props.theme.shadows.subtle};
  
  &:hover {
    background: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.hover};
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const PageIndicator = styled.div`
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.subtle};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0.5rem;
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`;

const PageNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

const PageButton = styled(motion.button)`
  background: ${props => props.disabled ? '#e0e0e0' : props.theme.colors.primary};
  color: ${props => props.disabled ? '#888' : 'white'};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

const ResumeWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1000px;
  height: calc(100vh - 12rem);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    height: calc(100vh - 10rem);
  }
`;

const PDFFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.comic};
`;

const LoadingOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border-radius: 8px;
`;

const LoadingText = styled.div`
  font-family: ${props => props.theme.fonts.accent};
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  background: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.subtle};
  border: 2px solid ${props => props.theme.colors.primary}30;
`;

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const iframeRef = useRef(null);

  useEffect(() => {
    document.title = 'Antonio Archer - Resume';
    
    // Track page view
    Analytics.trackPageView('/resume');
    
    // Add PDF.js script to the document
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.integrity = 'sha512-q+4liFwdPC/bNdhUpZx6aXDx/h77yEQtn4I1slHydVKCaiX7jxmFkBZ7ZLCwRMJTlG0fJSYAGdKKYHURgCFypA==';
    script.crossOrigin = 'anonymous';
    script.referrerPolicy = 'no-referrer';
    
    script.onload = () => {
      // Initialize PDF.js after script is loaded
      initPDF();
    };
    
    document.head.appendChild(script);
    
    return () => {
      document.title = 'Antonio Archer';
      // Clean up script
      document.head.removeChild(script);
    };
  }, []);

  const initPDF = () => {
    // Create a hidden iframe to load the PDF
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = '/resume.pdf';
    
    iframe.onload = () => {
      // PDF is loaded, set total pages 
      setTotalPages(2); // i know its 3 but i dont want it to load all 3
      setIsLoading(false);
    };
    
    document.body.appendChild(iframe);
    
    // Clean up after loading
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 1000);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'AntonioArcherResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Track download event
    Analytics.trackEvent({
      category: 'Resume',
      action: 'Download',
      label: 'Resume PDF'
    });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      
      // Use postMessage to communicate with the PDF viewer iframe
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage({
          action: 'previousPage'
        }, '*');
      }
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      
      // Use postMessage to communicate with the PDF viewer iframe
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage({
          action: 'nextPage'
        }, '*');
      }
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <ResumeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ResumeHeader>
        <ResumeTitle>My Resume</ResumeTitle>
        <ControlsContainer>
          <ControlButton 
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faDownload} />
            Download PDF
          </ControlButton>
        </ControlsContainer>
      </ResumeHeader>

      <ResumeWrapper 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <AnimatePresence>
          {isLoading && (
            <LoadingOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingText>Loading Resume...</LoadingText>
            </LoadingOverlay>
          )}
        </AnimatePresence>
        
        <PDFFrame
          ref={iframeRef}
          src="/resume.pdf"
          title="Antonio Archer Resume"
          onLoad={handleIframeLoad}
        />
      </ResumeWrapper>

      {totalPages > 1 && (
        <PageNavigation>
          <PageButton 
            onClick={handlePrevPage} 
            disabled={currentPage === 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </PageButton>
          
          <PageIndicator>
            Page {currentPage} of {totalPages}
          </PageIndicator>
          
          <PageButton 
            onClick={handleNextPage} 
            disabled={currentPage === totalPages}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </PageButton>
        </PageNavigation>
      )}
    </ResumeContainer>
  );
};

export default Resume; 