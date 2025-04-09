"use client"

import React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

type Testimonial = {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Antonio&#39;s work is exceptional! He&#39;s a true professional.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupHub",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "I highly recommend Antonio&#39;s services. He&#39;s reliable and talented.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    company: "DesignStudio",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "As a designer, I appreciate how Antonio brings designs to life with precision and adds thoughtful interactions that enhance the user experience.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Project Lead",
    company: "WebSolutions",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Antonio's ability to understand complex requirements and translate them into elegant code is remarkable. He's a valuable asset to any development team.",
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay, next])

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-[800px]">Here's what people are saying about working with me.</p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="comic-border p-8 md:p-12 relative overflow-visible">
                {/* Comic-style speech bubble pointer */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 left-0 w-16 h-16 bg-background transform rotate-45 translate-y-1/2 border-r-2 border-b-2 border-black"></div>
                </div>

                <Quote className="h-12 w-12 text-primary/20 mb-4" />

                <blockquote className="text-xl md:text-2xl font-medium mb-6 font-bangers">
                  "{testimonials[current].quote}"
                </blockquote>

                <div className="flex items-center justify-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden comic-border mr-4">
                    <Image
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">{testimonials[current].name}</div>
                    <div className="text-muted-foreground">
                      {testimonials[current].role}, {testimonials[current].company}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-12 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    current === index ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  onMouseEnter={() => setAutoplay(false)}
                  onMouseLeave={() => setAutoplay(true)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
