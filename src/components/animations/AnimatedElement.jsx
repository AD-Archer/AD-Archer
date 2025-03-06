import React from 'react';
import styled, { css } from 'styled-components';
import { useAnimation } from '../../context/AnimationContext';

// Animation styles
const fadeIn = css`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = css`
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = css`
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
  &.visible {
    opacity: 1;
    transform: scale(1);
  }
`;

const animations = {
  fadeIn,
  slideIn,
  scaleIn
};

// Use $animation and $delay to avoid DOM warnings
const StyledAnimatedElement = styled.div`
  ${props => animations[props.$animation] || animations.fadeIn}
  transition-delay: ${props => props.$delay || '0s'};
`;

const AnimatedElement = ({ 
  children, 
  animation = 'fadeIn', 
  delay = '0s',
  threshold = 0.1,
  rootMargin = '0px',
  className = '',
  ...props 
}) => {
  const { createScrollAnimation } = useAnimation();
  const [ref, inView] = createScrollAnimation({ 
    threshold, 
    triggerOnce: true,
    rootMargin
  });

  return (
    <StyledAnimatedElement
      ref={ref}
      $animation={animation}
      $delay={delay}
      className={`${className} ${inView ? 'visible' : ''}`}
      {...props}
    >
      {children}
    </StyledAnimatedElement>
  );
};

export default AnimatedElement; 