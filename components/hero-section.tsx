"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Zap } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Comic book style background elements */}
      <div className="absolute inset-0 -z-10 comic-dots opacity-10"></div>

      <div className="container px-4 md:px-6">
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
                Full-Stack Developer
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
                Creating Digital
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
              I build exceptional and accessible digital experiences for the web. Specializing in modern web
              technologies and creative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <Button asChild size="lg" className="font-medium">
                <Link href="/contact">
                  Get in Touch
                  <Zap className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium">
                <Link href="/projects">
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
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
            <div className="comic-border rounded-lg overflow-hidden bg-primary/10 w-full aspect-square max-w-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <span className="font-bangers text-4xl text-primary">Hero Image</span>
                  <p className="text-muted-foreground mt-2">Profile picture or illustration</p>
                </div>
              </div>
            </div>

            {/* Comic book style decorative elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground font-bangers p-4 rounded-full transform rotate-12 shadow-lg"
            >
              <span className="text-xl">POW!</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground font-bangers p-4 rounded-full transform -rotate-12 shadow-lg"
            >
              <span className="text-xl">ZOOM!</span>
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
