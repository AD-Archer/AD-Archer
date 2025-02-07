import styled from 'styled-components';
import { motion } from 'framer-motion';

const ComicPanel = styled(motion.div)`
  background: ${props => props.theme.colors.panelBg};
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(0,0,0,0.03) 10px,
      rgba(0,0,0,0.03) 20px
    );
    pointer-events: none;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 2;
`;

const Layout = ({ children }) => {
  return (
    <ComicPanel
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </ComicPanel>
  );
};

export default Layout; 