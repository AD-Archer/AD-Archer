'use client';

import type React from 'react';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, Send, X, Loader2, Trash2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useChat } from '@/components/context/ChatContext';

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, addMessage, clearMessages, isLoading, setIsLoading } = useChat();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const suppressInitial = useRef(false);

  // Initialize with a welcome message if no messages exist
  useEffect(() => {
    if (messages.length === 0 && !suppressInitial.current) {
      addMessage({
        role: 'assistant',
        content: "Hi there! I'm Antonio's AI assistant. How can I help you today?",
      });
    }
  }, [messages.length, addMessage]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();

    // Add user message
    addMessage({ role: 'user', content: userMessage });
    setInput('');
    setIsLoading(true);

    try {
      // Call the API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }],
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      // Add assistant message
      addMessage({
        role: 'assistant',
        content: data.content,
        model: data.model,
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to get a response. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    suppressInitial.current = true; // prevent effect from re-adding immediately
    clearMessages();
    toast({ title: 'Chat cleared', description: 'Conversation history removed.' });
    addMessage({
      role: 'assistant',
      content: "Hi there! I'm Antonio's AI assistant. How can I help you today?",
    });
    // Allow future clears to still work
    setTimeout(() => { suppressInitial.current = false; }, 0);
  };

  // Custom components for markdown rendering
  const markdownComponents = {
    // Style code blocks
    code: ({
      inline,
      className,
      children,
      ...props
    }: React.ComponentPropsWithoutRef<'code'> & { inline?: boolean }) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <div className="relative my-2 rounded-md bg-muted p-2 overflow-x-auto">
          <code className={className} {...props}>
            {children}
          </code>
        </div>
      ) : (
        <code className="bg-muted px-1 py-0.5 rounded text-sm" {...props}>
          {children}
        </code>
      );
    },
    // Style links
    a: (props: React.ComponentPropsWithoutRef<'a'>) => (
      <a className="text-primary underline" target="_blank" rel="noopener noreferrer" {...props} />
    ),
    // Style lists
    ul: (props: React.ComponentPropsWithoutRef<'ul'>) => (
      <ul className="list-disc pl-6 my-2" {...props} />
    ),
    ol: (props: React.ComponentPropsWithoutRef<'ol'>) => (
      <ol className="list-decimal pl-6 my-2" {...props} />
    ),
    // Style headings
    h1: (props: React.ComponentPropsWithoutRef<'h1'>) => (
      <h1 className="text-xl font-bold my-2" {...props} />
    ),
    h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
      <h2 className="text-lg font-bold my-2" {...props} />
    ),
    h3: (props: React.ComponentPropsWithoutRef<'h3'>) => (
      <h3 className="text-md font-bold my-2" {...props} />
    ),
    // Style paragraphs
    p: (props: React.ComponentPropsWithoutRef<'p'>) => <p className="my-2" {...props} />,
    // Style blockquotes
    blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => (
      <blockquote className="border-l-4 border-muted pl-4 italic my-2" {...props} />
    ),
    // Style tables
    table: (props: React.ComponentPropsWithoutRef<'table'>) => (
      <div className="overflow-x-auto my-2">
        <table className="border-collapse border border-muted" {...props} />
      </div>
    ),
    th: (props: React.ComponentPropsWithoutRef<'th'>) => (
      <th className="border border-muted p-2 bg-muted/50" {...props} />
    ),
    td: (props: React.ComponentPropsWithoutRef<'td'>) => (
      <td className="border border-muted p-2" {...props} />
    ),
  };

  return (
    <>
      {/* Chat button - responsive positioning */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        className="fixed bottom-4 left-4 z-50 md:bottom-6 md:left-6"
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-12 w-12 md:h-14 md:w-14 shadow-lg"
          aria-label="Open AI Assistant"
        >
          <Bot className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </motion.div>

      {/* Chat window - responsive sizing and positioning */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:left-6 md:right-auto md:w-full md:max-w-md"
          >
            <Card className="border shadow-xl comic-border">
              <CardHeader className="flex flex-row items-center justify-between p-3 md:p-4 border-b gap-2">
                <CardTitle className="text-base md:text-lg font-medium flex-1">
                  Antonio&apos;s AI Assistant
                </CardTitle>
                <div className="flex items-center gap-1 md:gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClear}
                    aria-label="Clear conversation"
                    className="text-destructive hover:text-destructive"
                    disabled={messages.length === 0}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close AI Assistant"
                  >
                    <X className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[300px] md:h-[350px] overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] md:max-w-[80%] rounded-lg p-2 md:p-3 text-sm md:text-base ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground ml-2 md:ml-4'
                            : 'bg-muted mr-2 md:mr-4'
                        }`}
                      >
                        {message.role === 'user' ? (
                          message.content
                        ) : (
                          <div className="prose prose-sm dark:prose-invert max-w-none">
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={markdownComponents}
                            >
                              {message.content}
                            </ReactMarkdown>
                          </div>
                        )}
                        {message.model && (
                          <div className="text-xs opacity-70 mt-1 text-right">
                            Powered by {message.model === 'openai' ? 'OpenAI' : 'Gemini'}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {/* Loading indicator */}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="max-w-[85%] md:max-w-[80%] rounded-lg p-2 md:p-3 text-sm md:text-base bg-muted mr-2 md:mr-4">
                        <div className="flex items-center space-x-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Thinking...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="p-3 md:p-4 border-t">
                <form
                  className="flex w-full gap-2"
                  onSubmit={e => {
                    e.preventDefault();
                    handleSend();
                  }}
                >
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 text-sm md:text-base"
                    disabled={isLoading}
                  />
                  <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
