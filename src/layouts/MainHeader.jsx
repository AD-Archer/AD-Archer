import React, { useEffect } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { usePreview } from '../context/PreviewContext';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: ${props => props.$isPreviewActive ? -1 : 10}; /* Hide behind content when preview is active */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  pointer-events: ${props => props.$isPreviewActive ? 'none' : 'auto'}; /* Disable interactions when preview is active */
  opacity: ${props => props.$isPreviewActive ? 0 : 1}; /* Hide visually when preview is active */
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

const NavLink = styled(RouterNavLink)`
  font-family: ${props => props.theme.fonts.accent};
  font-size: 1.1rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  
  &:hover, &.active {
    color: ${props => props.theme.colors.accent};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${props => props.theme.colors.accent};
    transition: width 0.3s ease;
  }
  
  &:hover::after, &.active::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const MainHeader = () => {
  const { scrollY } = useScroll();
  const { isPreviewActive } = usePreview();
  
  useEffect(() => {
    console.log("Preview active state:", isPreviewActive);
  }, [isPreviewActive]);
  
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
      $isPreviewActive={isPreviewActive}
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