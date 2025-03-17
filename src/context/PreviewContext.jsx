import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const PreviewContext = createContext();

// This is a fallback for any imports that haven't been updated yet
export const usePreview = () => useContext(PreviewContext);

export const PreviewProvider = ({ children }) => {
  // DISABLED: Preview functionality is temporarily disabled
  // const [isPreviewActive, setIsPreviewActive] = useState(false);
  
  // Always return false for isPreviewActive and a no-op function for setIsPreviewActive
  // This effectively disables the preview functionality
  const isPreviewActive = false;
  const setIsPreviewActive = () => {
    // No-op function - preview is disabled
    console.log('Preview functionality is temporarily disabled');
  };

  return (
    <PreviewContext.Provider value={{ isPreviewActive, setIsPreviewActive }}>
      {children}
    </PreviewContext.Provider>
  );
};

// Add prop validation
PreviewProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Export the context for use in the hook file
export { PreviewContext }; 