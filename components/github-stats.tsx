"use client"

import { withClientSide } from './client-component'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github } from "lucide-react"
import Link from "next/link"

function GithubStats() {
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">GitHub Activity</h2>
            <p className="text-muted-foreground max-w-[800px]">
              Check out my open source contributions and coding activity on GitHub.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="comic-border">
            <CardContent className="p-6">
              <img
                src="https://github-readme-stats.vercel.app/api?username=ad-archer&show_icons=true&hide_border=true&theme=transparent"
                alt="GitHub Stats"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>

          <Card className="comic-border">
            <CardContent className="p-6">
              <img
                src="https://streaks.adarcher.app?user=ad-archer&theme=transparent&hide_border=true&mode=weekly&color=0066cc"
                alt="GitHub Weekly Streak"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link
              href="https://github.com/ad-archer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub Profile
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default withClientSide(GithubStats, { loadingType: 'card' })
