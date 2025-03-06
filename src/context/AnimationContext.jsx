import React, { createContext, useContext } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimationContext = createContext();

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }) => {
  const createScrollAnimation = (options = {}) => {
    const { 
      threshold = 0.1, 
      triggerOnce = true,
      rootMargin = '0px'
    } = options;
    
    return useInView({
      threshold,
      triggerOnce,
      rootMargin
    });
  };

  return (
    <AnimationContext.Provider value={{ createScrollAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
}; 