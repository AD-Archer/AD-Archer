import React, { createContext, useContext } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimationContext = createContext();

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }) => {
  // Check if we're on a mobile device
  const isMobile = window.innerWidth <= 768;

  const createScrollAnimation = (options = {}) => {
    const { 
      threshold = isMobile ? 0.05 : 0.1, // Lower threshold for mobile
      triggerOnce = true,
      rootMargin = isMobile ? '0px 0px -50px 0px' : '0px' // Adjust rootMargin for mobile
    } = options;
    
    return useInView({
      threshold,
      triggerOnce,
      rootMargin
    });
  };

  return (
    <AnimationContext.Provider value={{ createScrollAnimation, isMobile }}>
      {children}
    </AnimationContext.Provider>
  );
}; 