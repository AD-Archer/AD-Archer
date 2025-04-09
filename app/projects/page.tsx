"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects, tags } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredProjects =
    selectedTags.length > 0
      ? projects.filter((project) => selectedTags.some((tag) => project.tags.includes(tag)))
      : projects

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) => (prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]))
  }

  return (
    <div className="container px-4 md:px-6 py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">All Projects</h1>
          <p className="text-muted-foreground max-w-[800px] mb-8">
            Browse through my complete portfolio of projects. Use the filters below to find specific types of projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {tags.map((tag) => (
            <Badge
              key={tag.id}
              variant={selectedTags.includes(tag.id) ? "default" : "outline"}
              className={`cursor-pointer text-sm py-1 px-3 ${
                selectedTags.includes(tag.id) ? tag.color + " text-white" : ""
              }`}
              onClick={() => toggleTag(tag.id)}
            >
              {tag.name}
            </Badge>
          ))}
          {selectedTags.length > 0 && (
            <Button variant="ghost" size="sm" onClick={() => setSelectedTags([])} className="text-xs">
              Clear filters
            </Button>
          )}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <Card className="overflow-hidden h-full comic-panel">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-secondary text-secondary-foreground font-bangers px-3 py-1 rounded-full transform rotate-12">
                      Featured!
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tagId) => {
                      const tag = tags.find((t) => t.id === tagId)
                      return tag ? (
                        <Badge key={tag.id} variant="secondary" className="text-xs">
                          {tag.name}
                        </Badge>
                      ) : null
                    })}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.slug && (
                    <Button asChild size="sm" variant="default">
                      <Link href={`/projects/${project.slug}`}>View Details</Link>
                    </Button>
                  )}
                  {project.link && (
                    <Button asChild size="sm" variant="outline">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Link>
                    </Button>
                  )}
                  {project.github && (
                    <Button asChild size="sm" variant="outline">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <p className="text-muted-foreground">
            No projects match your selected filters. Try selecting different tags.
          </p>
        </motion.div>
      )}
    </div>
  )
}
