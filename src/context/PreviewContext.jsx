import React, { createContext, useContext, useState } from 'react';

const PreviewContext = createContext();

export const usePreview = () => useContext(PreviewContext);

export const PreviewProvider = ({ children }) => {
  const [isPreviewActive, setIsPreviewActive] = useState(false);

  return (
    <PreviewContext.Provider value={{ isPreviewActive, setIsPreviewActive }}>
      {children}
    </PreviewContext.Provider>
  );
}; 