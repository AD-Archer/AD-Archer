'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, tags, sortProjectsByFeaturedPriority } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsSection() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects = sortProjectsByFeaturedPriority(
    selectedTags.length > 0
      ? projects.filter(project => selectedTags.some(tag => project.tags.includes(tag)))
      : projects
  );

  const toggleTag = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId) ? prev.filter(t => t !== tagId) : [...prev, tagId]
    );
  };

  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h2>
            <p className="text-muted-foreground max-w-[800px] mb-8">
              Check out some of my recent work. These projects showcase my skills and experience in
              building modern web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center mb-8"
          >
            {tags.map(tag => (
              <Badge
                key={tag.id}
                variant={selectedTags.includes(tag.id) ? 'default' : 'outline'}
                className={`cursor-pointer text-sm py-1 px-3 ${selectedTags.includes(tag.id) ? tag.color + ' text-white' : ''}`}
                onClick={() => toggleTag(tag.id)}
              >
                {tag.name}
              </Badge>
            ))}
            {selectedTags.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedTags([])}
                className="text-xs"
              >
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
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card className="overflow-hidden h-full comic-panel">
                  <div className="relative aspect-video overflow-hidden">
                    {project.slug ? (
                      <Link href={`/projects/${project.slug}`} aria-label={`Open ${project.title} details`} className="block cursor-pointer">
                        <Image
                          src={project.image || '/placeholder.svg'}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          priority={index < 3}
                        />
                      </Link>
                    ) : project.link ? (
                      <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} demo`} className="block cursor-pointer">
                        <Image
                          src={project.image || '/placeholder.svg'}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          priority={index < 3}
                        />
                      </Link>
                    ) : project.github ? (
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} repository`} className="block cursor-pointer">
                        <Image
                          src={project.image || '/placeholder.svg'}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          priority={index < 3}
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        priority={index < 3}
                      />
                    )}
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
                      {project.tags.map(tagId => {
                        const tag = tags.find(t => t.id === tagId);
                        return tag ? (
                          <Badge key={tag.id} variant="secondary" className="text-xs">
                            {tag.name}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2">
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
      </div>
    </section>
  );
}
