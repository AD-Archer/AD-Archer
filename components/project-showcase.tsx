'use client';

import type React from 'react';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { projects, tags } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { withClientSide } from './client-component';

function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Filter featured projects
  const featuredProjects = projects.filter(project => project.featured);

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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-[800px] mb-8">
              Check out some of my best work. These projects showcase my skills in building modern
              web applications.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Project selector */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {featuredProjects.map(project => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveProject(project)}
                  className={`cursor-pointer p-4 rounded-lg comic-border transition-colors ${
                    activeProject.id === project.id
                      ? 'bg-primary/10 border-primary'
                      : 'bg-background hover:bg-muted/50'
                  }`}
                >
                  <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3D Project card */}
          <div className="lg:col-span-3">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateY: mousePosition.x * 20,
                rotateX: -mousePosition.y * 20,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="w-full h-full perspective-1000"
            >
              <div className="comic-border rounded-lg overflow-hidden bg-background shadow-xl h-full transform-style-3d">
                <div className="relative aspect-video overflow-hidden">
                  {activeProject.slug ? (
                    <Link href={`/projects/${activeProject.slug}`}>
                      <Image
                        src={activeProject.image || '/placeholder.svg'}
                        alt={activeProject.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        priority
                      />
                    </Link>
                  ) : (
                    <Image
                      src={activeProject.image || '/placeholder.svg'}
                      alt={activeProject.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      priority
                    />
                  )}
                  <div className="absolute top-2 right-2 bg-secondary text-secondary-foreground font-bangers px-3 py-1 rounded-full transform rotate-12">
                    <Code className="h-4 w-4 inline-block mr-1" />
                    <span>Featured</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{activeProject.title}</h3>
                  <p className="text-muted-foreground mb-4">{activeProject.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeProject.tags.map(tagId => {
                      const tag = tags.find(t => t.id === tagId);
                      return tag ? (
                        <Badge key={tag.id} variant="secondary" className="text-xs">
                          {tag.name}
                        </Badge>
                      ) : null;
                    })}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {activeProject.slug && (
                      <Button asChild size="sm" variant="default">
                        <Link href={`/projects/${activeProject.slug}`}>View Details</Link>
                      </Button>
                    )}
                    {activeProject.link && (
                      <Button asChild size="sm" variant="outline">
                        <Link href={activeProject.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </Link>
                      </Button>
                    )}
                    {activeProject.github && (
                      <Button asChild size="sm" variant="outline">
                        <Link href={activeProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg">
            <Link href="/projects" className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default withClientSide(ProjectShowcase, { loadingType: 'card' });
