"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap, ArrowDown, Code } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import ThreeBackground with no SSR
const ThreeBackground = dynamic(() => import("./three-background"), { ssr: false })

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
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

  if (!isMounted) return null

  return (
    <section className="relative overflow-hidden py-20 md:py-28 min-h-[90vh] flex items-center">
      {/* Three.js Background */}
      <ThreeBackground />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="inline-block">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                className="bg-secondary px-4 py-1 rounded-md text-secondary-foreground font-medium text-sm inline-block mb-2"
              >
                Software Developer
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
            >
              <span className="text-primary">Antonio Archer</span>
              <br />
              <span className="relative">
                Building Digital
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-3 bg-accent/30 -z-10"
                />
              </span>
              <br />
              <span className="relative">
                Experiences
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-3 bg-accent/30 -z-10"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-[600px]"
            >
              Software developer specializing in modern web technologies and creative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <Button asChild size="lg" className="font-medium">
                <Link href="/projects">
                  View Projects
                  <Zap className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Code className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mx-auto lg:ml-auto relative"
          >
            <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateY: mousePosition.x * 20,
                rotateX: -mousePosition.y * 20,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="comic-border rounded-lg overflow-hidden bg-background/80 backdrop-blur-sm w-full aspect-square max-w-[500px] perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-full h-full flex items-center justify-center relative transform-style-3d p-8">
                <div className="text-center">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotateZ: [0, 5, -5, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 5,
                      ease: "easeInOut",
                    }}
                    className="mb-4"
                  >
                    <Code className="h-20 w-20 text-primary mx-auto" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Full-Stack Developer</h3>
                  <p className="text-muted-foreground">
                    Crafting beautiful, functional, and accessible web experiences
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
