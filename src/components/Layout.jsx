import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ComicPanel = styled(motion.div)`
  background: ${props => props.theme.colors.panelBg};
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (min-width: 1024px) {
    transform: scale(0.8);
    transform-origin: top center;
    height: 125vh;

    /* Ensure the scale doesn't affect modal */
    .modal-open & {
      transform: none;
      height: auto;
    }
  }
  
  &::before {
    content: '';
    position: fixed;
    inset: 0;
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
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
  z-index: 2;
  flex: 1;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout; 