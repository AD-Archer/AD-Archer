'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, tags, sortProjectsByFeaturedPriority } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ExternalLink, Github, Search, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Set loaded state after component mounts to trigger animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Filter by tags first
  let filteredProjects = sortProjectsByFeaturedPriority(
    selectedTags.length > 0
      ? projects.filter(project => selectedTags.some(tag => project.tags.includes(tag)))
      : projects
  );

  // Then filter by search query
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredProjects = filteredProjects.filter(
      project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
    );
  }

  const toggleTag = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId) ? prev.filter(t => t !== tagId) : [...prev, tagId]
    );
  };

  // Helper function to get color class from tag color
  const getColorClass = (colorClass: string) => {
    const colorMap: Record<string, string> = {
      'bg-purple-600': 'bg-purple-600 hover:bg-purple-700',
      'bg-blue-500': 'bg-blue-500 hover:bg-blue-600',
      'bg-green-600': 'bg-green-600 hover:bg-green-700',
      'bg-pink-600': 'bg-pink-600 hover:bg-pink-700',
      'bg-green-500': 'bg-green-500 hover:bg-green-600',
      'bg-yellow-600': 'bg-yellow-600 hover:bg-yellow-700',
      'bg-cyan-500': 'bg-cyan-500 hover:bg-cyan-600',
    };
    return colorMap[colorClass] || 'bg-gray-600 hover:bg-gray-700';
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-muted/50 to-background">
      <div className="container px-4 md:px-6 py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">All Projects</h1>
            <p className="text-muted-foreground max-w-[800px] mb-8">
              Browse through my complete portfolio of projects. Use the search and filters below to
              find specific types of projects.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full max-w-md mb-8"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects by name or description..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center mb-8"
          >
            {tags.map(tag => {
              const isSelected = selectedTags.includes(tag.id);
              return (
                <button
                  key={tag.id}
                  onClick={() => toggleTag(tag.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    isSelected
                      ? `${getColorClass(tag.color)} text-white shadow-md`
                      : 'bg-transparent border border-border hover:bg-muted text-foreground'
                  }`}
                >
                  {tag.name}
                </button>
              );
            })}
            {selectedTags.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedTags([])}
                className="text-xs hover:bg-muted"
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
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.2, // Shortened the animation duration
                  delay: isLoaded ? index * 0.03 : 0, // Adjusted delay for smoother effect
                }}
                layout
                whileHover={{ scale: 1.05 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                    {project.slug ? (
                      <Link
                        href={`/projects/${project.slug}`}
                        aria-label={`Open ${project.title} details`}
                        className="block cursor-pointer"
                      >
                        <Image
                          src={project.image || '/placeholder.svg'}
                          alt={project.title}
                          fill
                          className="object-contain transition-transform duration-300"
                        />
                      </Link>
                    ) : project.link ? (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} demo`}
                        className="block cursor-pointer"
                      >
                        <Image
                          src={project.image || '/placeholder.svg'}
                          alt={project.title}
                          fill
                          className="object-contain transition-transform duration-300"
                        />
                      </Link>
                    ) : project.github ? (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} repository`}
                        className="block cursor-pointer"
                      >
                        <Image
                          src={project.image || '/placeholder.svg'}
                          alt={project.title}
                          fill
                          className="object-contain transition-transform duration-300"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-300"
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
                          <Badge
                            key={tag.id}
                            variant="secondary"
                            className={`${tag.color} text-white text-xs`}
                          >
                            {tag.name}
                          </Badge>
                        ) : null;
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              No projects match your selected filters. Try selecting different tags.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
