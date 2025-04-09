"use client"

import { useEffect } from "react"

import { useState } from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

type Statistic = {
  value: number
  label: string
  icon: string
  color: string
  suffix?: string
}

const statistics: Statistic[] = [
  {
    value: 50,
    label: "Projects Completed",
    icon: "🚀",
    color: "bg-primary",
    suffix: "+",
  },
  {
    value: 15,
    label: "Happy Clients",
    icon: "😊",
    color: "bg-secondary",
    suffix: "+",
  },
  {
    value: 5,
    label: "Years Experience",
    icon: "⏱️",
    color: "bg-accent",
    suffix: "+",
  },
  {
    value: 99,
    label: "Satisfaction Rate",
    icon: "⭐",
    color: "bg-primary",
    suffix: "%",
  },
]

export default function StatisticsSection() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index }: { stat: Statistic; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="comic-border rounded-lg overflow-hidden"
    >
      <div className="p-6 text-center">
        <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
          {stat.icon}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="font-bangers text-4xl md:text-5xl text-primary mb-2"
        >
          <CountUp target={stat.value} suffix={stat.suffix} />
        </motion.div>

        <div className="text-muted-foreground">{stat.label}</div>
      </div>
    </motion.div>
  )
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / 2000, 1)

      setCount(Math.floor(progress * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
