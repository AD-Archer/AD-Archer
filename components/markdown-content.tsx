'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string | undefined;
  className?: string;
}

export function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  if (!content) return null;

  return (
    <div className={`prose max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ node, ...props }) => (
            <a
              {...props}
              className="text-primary hover:text-primary/80 underline"
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
          p: ({ node, ...props }) => (
            <p {...props} className="text-muted-foreground leading-relaxed" />
          ),
          h1: ({ node, ...props }) => <h1 {...props} className="text-3xl font-bold mt-6 mb-3" />,
          h2: ({ node, ...props }) => <h2 {...props} className="text-2xl font-bold mt-6 mb-3" />,
          h3: ({ node, ...props }) => <h3 {...props} className="text-xl font-bold mt-4 mb-2" />,
          ul: ({ node, ...props }) => (
            <ul {...props} className="list-disc list-inside space-y-2 ml-2" />
          ),
          ol: ({ node, ...props }) => (
            <ol {...props} className="list-decimal list-inside space-y-2 ml-2" />
          ),
          li: ({ node, ...props }) => <li {...props} className="text-muted-foreground" />,
          code: ({ node, inline, ...props }: any) =>
            inline ? (
              <code {...props} className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm" />
            ) : (
              <code
                {...props}
                className="block bg-muted p-3 rounded-lg font-mono text-sm overflow-auto"
              />
            ),
          pre: ({ node, ...props }) => (
            <pre {...props} className="bg-muted p-3 rounded-lg overflow-auto" />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              {...props}
              className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
