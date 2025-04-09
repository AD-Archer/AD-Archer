"use client"

import { motion } from "framer-motion"

export default function LoadingAnimation() {
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
            ease: "easeInOut",
          }}
          className="font-bangers text-4xl text-primary"
        >
          LOADING...
        </motion.div>

        {/* Comic-style action lines */}
        <div className="absolute inset-0 -z-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 1,
              }}
              className="absolute w-full h-0.5 bg-primary/30 origin-center"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 45}deg) translateX(50%)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
