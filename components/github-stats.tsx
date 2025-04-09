"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github } from "lucide-react"
import Link from "next/link"

export default function GitHubStats() {
  return (
    <section className="py-16 bg-muted/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">GitHub Activity</h2>
            <p className="text-muted-foreground max-w-[800px] mb-8">
              Check out my coding activity and most used languages.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="comic-border overflow-hidden h-full">
              <CardContent className="p-6 flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Github className="h-5 w-5" /> Most Used Languages
                </h3>
                <div className="relative w-full aspect-[2/1] mt-4">
                  <Image
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=ad-archer&layout=compact&theme=dracula&bg_color=fff&text_color=000&title_color="
                    alt="Top Languages"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  These are the programming languages I use most frequently in my projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="comic-border overflow-hidden h-full">
              <CardContent className="p-6 flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Github className="h-5 w-5" /> Contribution Streak
                </h3>
                <div className="relative w-full aspect-[2/1] mt-4">
                  <Image
                    src="https://streaks.adarcher.app?user=ad-archer&theme=blood&mode=weekly&exclude_days=Sun%2CTue%2CSat&font_size=1.2rem&border=0"
                    alt="GitHub Streak"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  My GitHub contribution streak shows my consistent coding activity.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="https://github.com/AD-Archer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Github className="h-5 w-5" />
              View my GitHub profile
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
