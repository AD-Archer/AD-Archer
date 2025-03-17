import { createContext, useState, useContext, useEffect } from 'react';
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
  const [sessionId, setSessionId] = useState(null);
  const [chatHistory, setChatHistory] = useState({});

  // Generate a session ID on initial load
  useEffect(() => {
    if (!sessionId) {
      // Generate a unique session ID
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      setSessionId(newSessionId);
      
      // Try to load existing chat history from localStorage
      try {
        const savedSessions = localStorage.getItem('chat_sessions');
        if (savedSessions) {
          setChatHistory(JSON.parse(savedSessions));
        }
      } catch (error) {
        console.error('Error loading chat sessions:', error);
      }
    }
  }, [sessionId]);

  // Save chat history to localStorage when it changes
  useEffect(() => {
    if (Object.keys(chatHistory).length > 0) {
      localStorage.setItem('chat_sessions', JSON.stringify(chatHistory));
    }
  }, [chatHistory]);

  // Function to reset the session
  const resetSession = () => {
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    setSessionId(newSessionId);
    
    // Update chat history to remove the old session
    if (sessionId) {
      setChatHistory(prev => {
        const updated = { ...prev };
        delete updated[sessionId];
        return updated;
      });
    }
  };

  return (
    <ChatContext.Provider value={{ 
      isChatOpen, 
      setIsChatOpen, 
      sessionId, 
      setSessionId,
      chatHistory,
      setChatHistory,
      resetSession
    }}>
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