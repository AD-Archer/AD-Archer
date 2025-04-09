"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

type TimelineItem = {
  year: string
  title: string
  description: string
  icon: string
  color: string
}

const timelineData: TimelineItem[] = [
  {
    year: "2023",
    title: "Senior Frontend Developer",
    description:
      "Leading development of a major SaaS platform with React and Next.js, focusing on performance optimization and accessibility.",
    icon: "💻",
    color: "bg-primary",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    description:
      "Built and deployed multiple web applications using modern JavaScript frameworks and backend technologies.",
    icon: "🚀",
    color: "bg-secondary",
  },
  {
    year: "2021",
    title: "UI/UX Specialist",
    description:
      "Designed and implemented user interfaces for various clients, focusing on user experience and responsive design.",
    icon: "🎨",
    color: "bg-accent",
  },
  {
    year: "2020",
    title: "Frontend Developer",
    description: "Worked on responsive web applications and e-commerce platforms using React and CSS frameworks.",
    icon: "🌐",
    color: "bg-primary",
  },
  {
    year: "2019",
    title: "Junior Web Developer",
    description: "Started professional journey building websites and learning modern web development practices.",
    icon: "🔍",
    color: "bg-secondary",
  },
]

export default function InteractiveTimeline() {
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">My Journey</h2>
            <p className="text-muted-foreground max-w-[800px]">
              Explore my professional timeline and career milestones.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      >
        {/* Content */}
        <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
          <Card className="comic-panel overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="mb-2 font-bangers text-2xl text-primary">{item.year}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        </div>

        {/* Center dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15, delay: index * 0.1 + 0.2 }}
            className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-xl z-10 comic-border`}
          >
            {item.icon}
          </motion.div>

          {/* Connecting line animation */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: 100 } : { height: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className={`w-1 ${item.color} absolute top-12`}
            style={{ display: index === timelineData.length - 1 ? "none" : "block" }}
          ></motion.div>
        </div>

        {/* Empty space for alternating layout */}
        <div className="w-5/12"></div>
      </motion.div>
    </div>
  )
}
