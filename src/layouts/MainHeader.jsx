import { useScroll, useTransform, motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled(motion.header)`
  width: 100%;
  padding: 0.75rem;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    padding: 0.35rem 0.25rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 0.15rem;
    width: 100%;
    justify-content: space-between;
    padding: 0 0.35rem;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.15rem 0.25rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.15rem;
    font-weight: 600;
  }

  &:hover {
    color: ${props => props.theme.colors.accent};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${props => props.theme.colors.accent};
    transition: width 0.3s ease;

    @media (max-width: 768px) {
      bottom: -1px;
    }
  }

  &:hover::after {
    width: 100%;
  }
`;

const MainHeader = () => {
  const { scrollY } = useScroll();
  
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
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default MainHeader; 