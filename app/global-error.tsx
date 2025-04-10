'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50">
          <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
          <h2 className="text-3xl font-semibold mb-6">Server Error</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            We apologize for the inconvenience. A server error has occurred. Our team has been
            notified and is working to fix the issue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={reset} variant="outline" className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
            <Button asChild variant="default" className="flex items-center gap-2">
              <Link href="/">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
