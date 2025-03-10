import { useContext } from 'react';
import { ChatContext } from '../ChatContext';

/**
 * Custom hook to access chat context
 * @returns {Object} Chat context values
 * @throws {Error} If used outside of ChatProvider
 */
export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
}; 