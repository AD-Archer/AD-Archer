"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Mail } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
          <p className="text-muted-foreground max-w-[800px]">
            Get to know more about my background, experience, and what drives me as a developer.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="comic-border rounded-lg overflow-hidden bg-primary/10 aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <span className="font-bangers text-4xl text-primary">Profile Image</span>
                <p className="text-muted-foreground mt-2">Professional headshot or illustration</p>
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
            <span className="text-xl">Hello!</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Antonio Archer</h2>
            <p className="text-muted-foreground mb-4">
              Crafting innovative web solutions with React.js, JavaScript, and Python. Dedicated to making technology both fun and practical while improving human lives.
            </p>
            <p className="text-muted-foreground">
              When I&#39;m not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through blog posts and community events. I believe in continuous learning and pushing
              the boundaries of what&#39;s possible using technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="space-y-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold mb-6 text-center">My Journey</h2>
          <div className="relative border-l-2 border-primary/50 ml-4 pl-8 space-y-8">
            <div className="relative">
              <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-primary"></div>
              <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
              <p className="text-muted-foreground">TechCorp Inc. • 2021 - Present</p>
              <p className="mt-2">
                Leading the frontend development team, architecting scalable solutions, and implementing best practices
                for web accessibility and performance.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-primary"></div>
              <h3 className="text-xl font-bold">Full Stack Developer</h3>
              <p className="text-muted-foreground">WebSolutions • 2018 - 2021</p>
              <p className="mt-2">
                Developed and maintained multiple client projects, working with React, Node.js, and various database
                technologies to deliver comprehensive web solutions.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-primary"></div>
              <h3 className="text-xl font-bold">Junior Web Developer</h3>
              <p className="text-muted-foreground">StartupHub • 2016 - 2018</p>
              <p className="mt-2">
                Started my professional journey building responsive websites and learning the fundamentals of modern web
                development.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">My Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="comic-panel">
              <CardHeader>
                <CardTitle>User-Centered Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  I believe in creating applications that not only look good but also provide intuitive and accessible
                  experiences for all users.
                </p>
              </CardContent>
            </Card>

            <Card className="comic-panel">
              <CardHeader>
                <CardTitle>Performance First</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Optimizing for speed and efficiency is crucial. I focus on writing clean, efficient code that delivers
                  fast-loading and responsive applications.
                </p>
              </CardContent>
            </Card>

            <Card className="comic-panel">
              <CardHeader>
                <CardTitle>Continuous Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The tech landscape is always evolving. I stay current with the latest tools, frameworks, and best
                  practices to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Let&#39;s Work Together</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto mb-6">
            I&#39;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
