import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const ChatContext = createContext();

// This is a fallback for any imports that haven't been updated yet
export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ChatContext.Provider value={{ isChatOpen, setIsChatOpen }}>
      {children}
    </ChatContext.Provider>
  );
};

// Add prop validation
ChatProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Export the context for use in the hook file
export { ChatContext }; 