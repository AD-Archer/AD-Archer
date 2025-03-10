import { createContext, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const AnimationContext = createContext();

// This is a fallback for any imports that haven't been updated yet
export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }) => {
  // Check if we're on a mobile device
  const isMobile = window.innerWidth <= 768;

  // Helper function to create animation configuration
  const createScrollAnimation = (options = {}) => {
    const { 
      threshold = isMobile ? 0.05 : 0.1, // Lower threshold for mobile
      triggerOnce = true,
      rootMargin = isMobile ? '0px 0px -50px 0px' : '0px' // Adjust rootMargin for mobile
    } = options;
    
    // Return the configuration for useInView
    return { threshold, triggerOnce, rootMargin };
  };

  // The actual hook usage is now in the component
  const useInViewHook = (options) => {
    const config = createScrollAnimation(options);
    return useInView(config);
  };

  return (
    <AnimationContext.Provider value={{ createScrollAnimation: useInViewHook, isMobile }}>
      {children}
    </AnimationContext.Provider>
  );
};

// Add prop validation
AnimationProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Export the context for use in the hook file
export { AnimationContext }; 