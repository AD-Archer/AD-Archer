'use client';

import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

interface LoadingAnimationProps {
  type?: 'default' | 'card' | 'text' | 'full';
}

export default function LoadingAnimation({ type = 'default' }: LoadingAnimationProps) {
  if (type === 'card') {
    return (
      <div className="grid gap-4">
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    );
  }

  if (type === 'full') {
    return (
      <div className="w-full space-y-4">
        <Skeleton className="h-[300px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[80%]" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
          className="font-bold text-2xl text-primary"
        >
          Loading...
        </motion.div>
      </div>
    </div>
  );
}
