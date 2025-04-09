"use client"

import { withClientSide } from './client-component'
import { motion } from 'framer-motion'

function InteractiveTimeline() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience Timeline</h2>
            <p className="text-muted-foreground max-w-[800px]">
              A journey through my professional experience and key milestones.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2 pr-8 text-right">
                  {index % 2 === 0 && (
                    <TimelineContent
                      title={item.title}
                      date={item.date}
                      description={item.description}
                    />
                  )}
                </div>

                <div className="relative flex items-center justify-center w-8">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 rounded-full bg-primary"
                  />
                </div>

                <div className="w-1/2 pl-8">
                  {index % 2 !== 0 && (
                    <TimelineContent
                      title={item.title}
                      date={item.date}
                      description={item.description}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineContent({
  title,
  date,
  description,
}: {
  title: string
  date: string
  description: string
}) {
  return (
    <div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-muted-foreground mb-2">{date}</p>
      <p className="text-sm">{description}</p>
    </div>
  )
}

const timelineItems = [
  {
    title: "Senior Full Stack Developer",
    date: "2023 - Present",
    description:
      "Leading development of enterprise applications with Next.js and TypeScript.",
  },
  {
    title: "Full Stack Developer",
    date: "2021 - 2023",
    description:
      "Built and maintained scalable web applications using React and Node.js.",
  },
  {
    title: "Frontend Developer",
    date: "2019 - 2021",
    description:
      "Developed responsive web interfaces and improved user experiences.",
  },
  {
    title: "Junior Developer",
    date: "2018 - 2019",
    description: "Started career with web development and UI design projects.",
  },
]

export default withClientSide(InteractiveTimeline, { loadingType: 'full' })
