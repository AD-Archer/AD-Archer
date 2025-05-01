'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { projects, jobs, skills, certifications, education } from '@/lib/data';

// Define the message type
export type Message = {
  role: 'user' | 'assistant';
  content: string;
  model?: 'openai' | 'gemini'; // Add optional model property
};

// Define the context type
type ChatContextType = {
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  userData: {
    projects: typeof projects;
    jobs: typeof jobs;
    skills: typeof skills;
    certifications: typeof certifications;
    education: typeof education;
  };
};

// Create the context with a default value
const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Create a provider component
export function ChatProvider({ children }: { children: ReactNode }) {
  // Initialize state from localStorage if available, otherwise use empty array
  const [messages, setMessages] = useState<Message[]>(() => {
    // Only access localStorage on the client side
    if (typeof window !== 'undefined') {
      const savedMessages = localStorage.getItem('chatMessages');
      return savedMessages ? JSON.parse(savedMessages) : [];
    }
    return [];
  });

  const [isLoading, setIsLoading] = useState(false);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  // Function to add a new message
  const addMessage = (message: Message) => {
    setMessages(prevMessages => [...prevMessages, message]);
  };

  // Function to clear all messages
  const clearMessages = () => {
    setMessages([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('chatMessages');
    }
  };

  // Provide the context value to children
  return (
    <ChatContext.Provider
      value={{
        messages,
        addMessage,
        clearMessages,
        isLoading,
        setIsLoading,
        userData: {
          projects,
          jobs,
          skills,
          certifications,
          education,
        },
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

// Custom hook to use the chat context
export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
