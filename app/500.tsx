import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RefreshCw, Home } from 'lucide-react';

//** 500.tsx
// This is the 500 error page for the website.
// It is displayed when a server error occurs.
// It is a simple page with a message and a button to try again.
// If the button is clicked, the page will reload.
// If the button is not clicked, the page will redirect to the home page.
// */

export const metadata = {
  title: 'Server Error | Antonio Archer Portfolio',
  description: 'A server error has occurred. Please try again later.',
};

export default function ServerError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
      <h2 className="text-3xl font-semibold mb-6">Server Error</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        We apologize for the inconvenience. A server error has occurred. Our team has been notified
        and is working to fix the issue.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          className="flex items-center gap-2"
        >
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
  );
}
