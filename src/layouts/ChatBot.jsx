'use client'

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import DOMPurify from 'dompurify';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatContext } from '../context/ChatContext';

const ChatContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 1rem;
  z-index: 1050;

  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const ChatButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 50%;
  padding: 1rem;
  box-shadow: ${props => props.theme.shadows.subtle};
  transition: all 0.3s ease;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${props => props.theme.shadows.hover};
  }

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    padding: 0.75rem;
  }
`;

const ChatWindow = styled(motion.div)`
  position: absolute;
  bottom: 4rem;
  left: 0;
  width: 350px;
  max-width: 90vw;
  background: white;
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadows.comic};
  border: 2px solid ${props => props.theme.colors.primary};
  overflow: hidden;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 5rem;
    left: 0.5rem;
    right: 0.5rem;
    width: auto;
    max-height: calc(100vh - 7rem); // Prevent overlap with header
  }
`;

const ChatHeader = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;

  h5 {
    margin: 0;
    font-size: 1.1rem;
  }

  button {
    background: none;
    border: none;
    color: white;
    padding: 0.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const MessageContainer = styled.div`
  height: 400px;
  overflow-y: auto;
  padding: 1rem;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  * {
    pointer-events: auto;
  }

  @media (max-width: 768px) {
    height: calc(100vh - 13rem); // Adjust for mobile header and input
    padding: 0.75rem;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  margin: 0;
  width: 100%;
`;

const Message = styled.div`
  max-width: 85%;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  background: ${props => props.isUser ? props.theme.colors.primary : props.theme.colors.background};
  color: ${props => props.isUser ? 'white' : props.theme.colors.text};
  border-bottom-right-radius: ${props => props.isUser ? '4px' : '12px'};
  border-bottom-left-radius: ${props => !props.isUser ? '4px' : '12px'};
  line-height: 1.5;
  font-size: 0.95rem;
  box-shadow: ${props => props.theme.shadows.subtle};
  
  p {
    margin: 0;
    padding: 0;
  }

  a {
    color: ${props => props.isUser ? 'white' : props.theme.colors.primary};
    text-decoration: underline;
    cursor: pointer;
    pointer-events: all;
    position: relative;
    z-index: 10;
    font-weight: 500;
    
    &:hover {
      opacity: 0.8;
      text-decoration: none;
    }
    
    &:focus {
      outline: 2px solid ${props => props.theme.colors.accent};
      outline-offset: 2px;
    }
  }

  code {
    background: ${props => props.isUser ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'};
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9em;
  }
`;

const InputContainer = styled.div`
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  background: white; // Ensure background is visible
  position: relative; // Keep input on top
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0.75rem;
    position: sticky;
    bottom: 0;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  color: ${props => props.theme.colors.primary};
  background: white;
  font-family: ${props => props.theme.fonts.body};
  -webkit-appearance: none;
  appearance: none;

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => `${props.theme.colors.primary}20`};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0.6rem;
  }
`;

const SendButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 0.3rem;
  padding: 0.8rem 1rem;
  background: ${props => props.theme.colors.background};
  border-radius: 12px;
  border-bottom-left-radius: 4px;
  align-self: flex-start;
  box-shadow: ${props => props.theme.shadows.subtle};
  
  span {
    width: 6px;
    height: 6px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    animation: bounce 0.5s infinite alternate;

    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }

  @keyframes bounce {
    to { transform: translateY(-4px); }
  }
`;

const ChatBot = () => {
  const { isChatOpen, setIsChatOpen } = useChatContext();
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Charmi. Antonio's AI assistant. Ask me anything about his experience, skills, or background!",
      type: "text"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatContainerRef.current && !chatContainerRef.current.contains(event.target)) {
        setIsChatOpen(false);
      }
    };

    if (isChatOpen) {
      document.addEventListener("mousedown", handleClickOutside, true);
      document.addEventListener("touchstart", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, [isChatOpen]);

  const parseMessageContent = (content) => {
    // Convert markdown-style links to HTML with specific styling
    content = content.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g, 
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-link">$1</a>'
    );
    
    // Convert code blocks
    content = content.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Convert line breaks while preserving link functionality
    content = content.replace(/\n/g, '<br>');
    
    // Use DOMPurify with specific config to allow links
    return DOMPurify.sanitize(content, {
      ALLOWED_TAGS: ['a', 'br', 'code', 'strong', 'em', 'p'],
      ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
      ALLOW_DATA_ATTR: false,
      ADD_ATTR: ['target']
    });
  };

  const handleSend = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { role: "user", content: inputMessage, type: "text" };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();

      if (data.success) {
        const parsedContent = parseMessageContent(data.response);
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: parsedContent,
          type: "html"
        }]);
      } else {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: data.error,
          type: "text"
        }]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "I apologize, but I'm having trouble connecting right now. Please try again later.",
        type: "text"
      }]);
    }

    setIsLoading(false);
  };

  return (
    <ChatContainer ref={chatContainerRef}>
      <ChatButton onClick={() => setIsChatOpen(prev => !prev)}>
        {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </ChatButton>

      <AnimatePresence>
        {isChatOpen && (
          <ChatWindow
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <ChatHeader>
              <h5>Chat with Charmi</h5>
              <button onClick={() => setIsChatOpen(false)}>
                <X size={20} />
              </button>
            </ChatHeader>

            <MessageContainer>
              {messages.map((message, index) => (
                <MessageWrapper key={index} isUser={message.role === "user"}>
                  <Message
                    isUser={message.role === "user"}
                    dangerouslySetInnerHTML={{
                      __html: message.type === "html" 
                        ? message.content 
                        : DOMPurify.sanitize(message.content)
                    }}
                  />
                </MessageWrapper>
              ))}
              {isLoading && (
                <MessageWrapper>
                  <LoadingDots>
                    <span />
                    <span />
                    <span />
                  </LoadingDots>
                </MessageWrapper>
              )}
              <div ref={messagesEndRef} />
            </MessageContainer>

            <InputContainer>
              <Input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
              />
              <SendButton onClick={handleSend} disabled={isLoading}>
                <Send size={20} />
              </SendButton>
            </InputContainer>
          </ChatWindow>
        )}
      </AnimatePresence>
    </ChatContainer>
  );
};

export default ChatBot;
