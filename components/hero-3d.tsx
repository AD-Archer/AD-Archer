"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap, ArrowDown, Code } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import LoadingAnimation from "./loading-animation"

// Dynamically import ThreeBackground with no SSR
const ThreeBackground = dynamic(() => import("./three-background"), { 
  ssr: false,
  loading: () => <LoadingAnimation type="full" />
})

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  if (!isLoaded) {
    return <LoadingAnimation type="full" />
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
      <ThreeBackground mousePosition={mousePosition} />

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Full Stack Developer & AI Enthusiast
          </h1>
          <p className="mt-4 text-muted-foreground">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="animate-bounce" />
        </motion.div>
      </div>
    </motion.section>
  )
}
