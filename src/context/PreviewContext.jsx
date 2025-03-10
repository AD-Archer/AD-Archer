import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const PreviewContext = createContext();

// This is a fallback for any imports that haven't been updated yet
export const usePreview = () => useContext(PreviewContext);

export const PreviewProvider = ({ children }) => {
  const [isPreviewActive, setIsPreviewActive] = useState(false);

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