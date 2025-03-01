import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Header from './Header';
import { useLocation } from 'react-router-dom';

const ComicPanel = styled(motion.div)`
  background: ${props => props.isResumePage ? 'white' : props.theme.colors.panelBg};
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (min-width: 1024px) {
    transform: none;
    min-height: 100vh;
    margin-bottom: 0;

    &.modal-open {
      transform: none;
      margin-bottom: 0;
    }
  }
  
  &::before {
    content: '';
    position: fixed;
    inset: 0;
    background: ${props => props.isResumePage ? 'none' : `repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(0,0,0,0.03) 10px,
      rgba(0,0,0,0.03) 20px
    )`};
    pointer-events: none;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  flex: 1;
  padding-top: ${props => props.isResumePage ? '0' : '4rem'};

  @media (max-width: 768px) {
    padding-top: ${props => props.isResumePage ? '0' : '3rem'};
  }
`;

const Layout = ({ children }) => {
  const location = useLocation();
  const isResumePage = location.pathname === '/resume';

  return (
    <ComicPanel
      isResumePage={isResumePage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <ContentWrapper isResumePage={isResumePage}>
        {children}
        {!isResumePage && <Footer />}
      </ContentWrapper>
    </ComicPanel>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout; 