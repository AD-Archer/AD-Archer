import { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const ResumeContainer = styled(motion.div)`
  width: 100%;
  height: ${props => props.isResumePage ? '100vh' : 'calc(100vh - 8rem)'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.isResumePage ? '0' : '1rem'};
  margin-top: ${props => props.isResumePage ? '3.5rem' : '0'};

  @media (max-width: 768px) {
    height: ${props => props.isResumePage ? '100vh' : 'calc(100vh - 6rem)'};
    margin-top: ${props => props.isResumePage ? '3rem' : '0'};
    padding: 0;
  }
`;

const PDFFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: ${props => props.isResumePage ? '0' : '8px'};
  box-shadow: ${props => props.isResumePage ? 'none' : props.theme.shadows.comic};

  @media (max-width: 768px) {
    box-shadow: none;
    border-radius: 0;
  }
`;

const Resume = () => {
  const location = useLocation();
  const isResumePage = location.pathname === '/resume';

  useEffect(() => {
    // Update document title when component mounts
    document.title = 'Antonio Archer - Resume';
    return () => {
      // Reset title when component unmounts
      document.title = 'Antonio Archer';
    };
  }, []);

  return (
    <ResumeContainer
      isResumePage={isResumePage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <PDFFrame
        isResumePage={isResumePage}
        src="/resume.pdf"
        title="Antonio Archer Resume"
        type="application/pdf"
      />
    </ResumeContainer>
  );
};

export default Resume; 