'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useChat, Message } from '@/components/context/ChatContext';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Link from 'next/link';
import { projects } from '@/lib/data';
import type { Components } from 'react-markdown';

export default function Chat() {
  const { messages, addMessage, clearMessages, isLoading, setIsLoading } = useChat();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Create a map of project slugs for quick lookup
  const projectSlugs = new Map(
    projects.map(project => [project.title.toLowerCase(), project.slug])
  );

  // Scroll to bottom of messages when they change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Add user message to chat
    const userMessage: Message = { role: 'user', content: input };
    addMessage(userMessage);
    setInput('');
    setIsLoading(true);

    try {
      // Send message to API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      // Add assistant message to chat
      addMessage({ role: 'assistant', content: data.content });
    } catch (error) {
      console.error('Error sending message:', error);
      addMessage({
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Custom renderer for code blocks and project links in markdown
  const components: Components = {
    // @ts-expect-error - The type definition for the code component in react-markdown is incomplete
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          // @ts-expect-error - The type definition for react-syntax-highlighter is incorrect
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    // Custom link handler that checks for project references
    a({ href, children, ...props }) {
      // Check if this is a project reference
      const projectTitle = String(children).toLowerCase();
      const projectSlug = projectSlugs.get(projectTitle);

      if (projectSlug) {
        return (
          <Link
            href={`/projects/${projectSlug}`}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {children}
          </Link>
        );
      }

      // Regular external link
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
          {...props}
        >
          {children}
        </a>
      );
    },
    // Add styling for other markdown elements
    p: ({ children, ...props }) => (
      <p className="mb-4" {...props}>
        {children}
      </p>
    ),
    h1: ({ children, ...props }) => (
      <h1 className="text-2xl font-bold mb-4" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-xl font-bold mb-3" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-lg font-bold mb-2" {...props}>
        {children}
      </h3>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc pl-6 mb-4" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal pl-6 mb-4" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="mb-1" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote className="border-l-4 border-gray-200 pl-4 italic mb-4" {...props}>
        {children}
      </blockquote>
    ),
  };

  return (
    <div className="flex flex-col h-full max-h-[80vh] bg-gray-50 rounded-lg shadow-md">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Chat Assistant</h2>
        <button
          onClick={clearMessages}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Clear Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 my-8">
            <p>Ask me anything about your projects or coding!</p>
            <p className="text-sm mt-2">
              I know all about your work at Launchpad Philly and your various projects.
            </p>
            <div className="mt-4 text-sm">
              <p>Try asking about specific projects like:</p>
              <ul className="list-disc list-inside mt-2">
                {projects.slice(0, 3).map(project => (
                  <li key={project.id}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <ReactMarkdown components={components}>{message.content}</ReactMarkdown>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className={`px-4 py-2 rounded-lg ${
              isLoading || !input.trim()
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}
