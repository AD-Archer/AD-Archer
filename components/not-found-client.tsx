'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

/**
 * Client component for the 404 Not Found page with animations
 * Provides a responsive and interactive error page with navigation options
 */
export default function NotFoundClient() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 md:px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        <div className="relative mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="font-bangers text-9xl text-primary"
          >
            404
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute top-0 right-0 -mr-4 -mt-4 bg-secondary text-secondary-foreground font-bangers p-4 rounded-full transform rotate-12 shadow-lg"
          >
            <span className="text-xl">OOPS!</span>
          </motion.div>
        </div>

        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Please check the
          URL or navigate back to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="default" className="flex items-center gap-2">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              View Projects
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
} 