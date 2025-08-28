'use client';

import type React from 'react';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Zap, Code } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import LoadingAnimation from '../loading-animation';
import Image from 'next/image';

// Dynamically import ThreeBackground with no SSR
const ThreeBackground = dynamic(() => import('./three-background'), {
  ssr: false,
  loading: () => <LoadingAnimation type="full" />,
});

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = () => {
    // We can keep this function for future use if needed
    // but we're not using the mousePosition state anymore
  };

  const handleMouseLeave = () => {
    // We can keep this function for future use if needed
  };

  if (!isLoaded) {
    return <LoadingAnimation type="full" />;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden py-20 md:py-28 min-h-[90vh] flex items-center"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Subtle gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/10 to-background/20 z-[1]" />

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative backdrop-blur-sm bg-background/50 rounded-2xl p-8 shadow-lg">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src="/images/antonioarcher.webp"
                  alt="Antonio Archer"
                  fill
                  className="rounded-full border-4 border-primary/10 shadow-xl object-cover"
                  priority
                />
              </div>
            </motion.div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-2 text-foreground drop-shadow-md font-sans">
              Antonio Archer
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-primary drop-shadow-md font-sans">
              Full Stack Developer & AI Enthusiast
            </h2>
            <p className="mt-4 text-foreground/90 text-lg leading-relaxed font-medium px-4 drop-shadow-sm font-sans">
              Building innovative web solutions with modern technologies
            </p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <Button asChild size="lg">
                <Link href="/projects">
                  <Code className="mr-2" />
                  View Projects
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  <Zap className="mr-2" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        ></motion.div>
      </div>
    </motion.section>
  );
}
