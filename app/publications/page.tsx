'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { publications } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Search, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PublicationsPage() {
  // UI state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animation load flag
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Define available categories (including 'All')
  const categories = ['All', 'Self', 'Mention', 'Quote', 'Article'];

  // Filter by selected category first
  const filteredByCategory =
    selectedCategory === 'All'
      ? publications
      : publications.filter((pub) => pub.category === selectedCategory);

  // Apply search filter on top of category filter
  const filteredPublications = searchQuery.trim()
    ? filteredByCategory.filter((pub) => {
        const q = searchQuery.toLowerCase();
        return (
          pub.title.toLowerCase().includes(q) ||
          pub.description.toLowerCase().includes(q) ||
          pub.publisher.toLowerCase().includes(q)
        );
      })
    : filteredByCategory;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-muted/50 to-background">
      <div className="container px-4 md:px-6 py-16">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Publications &amp; Mentions</h1>
          <p className="text-muted-foreground max-w-[800px] mb-8 mx-auto">
            A collection of articles, mentions, and technical writing where I&apos;ve been featured or contributed.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6">
          <div className="flex justify-center">
            <TabsList>
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-md mb-8 mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2, delay: isLoaded ? index * 0.05 : 0 }}
                layout
                whileHover={{ scale: 1.02 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <Link href={pub.link} target="_blank" rel="noopener noreferrer" className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer block">
                    {pub.image ? (
                      <Image
                        src={pub.image}
                        alt={pub.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.classList.add('bg-gradient-to-br', 'from-primary/20', 'to-secondary/20');
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <span className="text-4xl">📰</span>
                      </div>
                    )}
                  </Link>
                  <CardHeader>
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-xl line-clamp-2">{pub.title}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Badge variant="outline">{pub.publisher}</Badge>
                      <span>•</span>
                      <span>{pub.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{pub.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {pub.tags?.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={pub.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read Article
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredPublications.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-muted-foreground">No publications match your search.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
