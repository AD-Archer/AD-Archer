import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Detects if a string contains markdown syntax
 */
export function isMarkdown(text: string | undefined): boolean {
  if (!text) return false;
  // Check for common markdown patterns
  const markdownPatterns = [
    /\[.*?\]\(.*?\)/, // Links [text](url)
    /\*\*.*?\*\*/, // Bold **text**
    /\*.*?\*/, // Italic *text*
    /__.*?__/, // Bold __text__
    /_.*?_/, // Italic _text_
    /^#+\s/m, // Headings # text
    /^-\s/m, // List items - text
    /^`{3}/m, // Code blocks ```
  ];
  return markdownPatterns.some(pattern => pattern.test(text));
}
