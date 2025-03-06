import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import { useLocation } from 'react-router-dom';
import { useChatContext } from '../context/ChatContext';

const ComicPanel = styled(motion.div)`
  background: ${props => props.$pathname === '/resume' ? 'white' : props.theme.colors.panelBg};
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
    background: ${props => props.$pathname === '/resume' ? 'none' : `repeating-linear-gradient(
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
  padding-top: ${props => props.$pathname === '/resume' ? '0' : '3.5rem'};

  @media (max-width: 768px) {
    padding-top: ${props => props.$pathname === '/resume' ? '0' : '2rem'};
  }
`;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.3s ease;
  transform: translateY(${props => props.$hideHeader ? '-100%' : '0'});
  height: auto;
  
  @media (max-width: 768px) {
    height: auto;
  }
`;

const MainLayout = ({ children }) => {
  const location = useLocation();
  const { isChatOpen } = useChatContext();
  const pathname = location.pathname;
  
  return (
    <ComicPanel 
      $pathname={pathname}
      className={isChatOpen ? 'chat-open' : ''}
    >
      <HeaderWrapper $hideHeader={pathname === '/resume'}>
        <MainHeader />
      </HeaderWrapper>
      
      <ContentWrapper $pathname={pathname}>
        {children}
      </ContentWrapper>
      
      <MainFooter />
    </ComicPanel>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout; 