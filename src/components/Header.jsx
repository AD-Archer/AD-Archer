import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.75rem 1rem;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  background-color: ${({ theme }) => `${theme.colors.background}F0`};
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    justify-content: space-around;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.accent};
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.25rem 0.5rem;
    white-space: nowrap;
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease;
    transform: translateX(-50%);

    @media (max-width: 768px) {
      height: 1px;
    }
  }

  &:hover:after {
    width: 100%;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    &:after {
      width: 100%;
    }
  }
`;

const Header = () => {
  const { scrollY } = useScroll();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.95)", "rgba(255, 255, 255, 0.98)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 2px 4px rgba(0,0,0,0.1)", "0 4px 8px rgba(0,0,0,0.15)"]
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
        {/* <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink> */}
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header; 