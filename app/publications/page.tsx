'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPublicationsWithProjectVideos } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Search, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function PublicationsPage() {
  const publicationEntries = getPublicationsWithProjectVideos();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = ['All', 'Self', 'Mention', 'Quote', 'Article', 'Video'];

  const filteredByCategory =
    selectedCategory === 'All'
      ? publicationEntries
      : publicationEntries.filter(
          pub =>
            pub.category === selectedCategory ||
            pub.additionalCategories?.includes(selectedCategory)
        );

  const filteredPublications = searchQuery.trim()
    ? filteredByCategory.filter(pub => {
        const q = searchQuery.toLowerCase();
        return (
          pub.title.toLowerCase().includes(q) ||
          pub.description.toLowerCase().includes(q) ||
          pub.publisher.toLowerCase().includes(q)
        );
      })
    : filteredByCategory;

  const formatPublicationDate = (rawDate?: string) => {
    if (!rawDate) {
      return '';
    }

    const d = new Date(rawDate);
    if (Number.isNaN(d.getTime())) {
      return rawDate;
    }

    return d.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-muted/50 to-background">
      <div className="container px-4 md:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Publications &amp; Mentions</h1>
          <p className="text-muted-foreground max-w-[800px] mb-8 mx-auto">
            A collection of articles, mentions, technical writing, and project demos where I&apos;ve
            been featured or documented my work.
          </p>
        </motion.div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6">
          <div className="flex justify-center">
            <TabsList>
              {categories.map(cat => (
                <TabsTrigger key={cat} value={cat}>
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-md mb-8 mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search publications and demos..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </motion.div>

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
                  <Link
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer block"
                  >
                    {pub.image ? (
                      <Image
                        src={pub.image}
                        alt={pub.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        onError={e => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement?.classList.add(
                            'bg-gradient-to-br',
                            'from-primary/20',
                            'to-secondary/20'
                          );
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <span className="text-4xl">Video</span>
                      </div>
                    )}
                  </Link>
                  <CardHeader>
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-xl line-clamp-2">{pub.title}</CardTitle>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Badge variant="outline">{pub.publisher}</Badge>
                      {pub.date ? (
                        <>
                          <span>•</span>
                          <span>{formatPublicationDate(pub.date)}</span>
                        </>
                      ) : null}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{pub.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {pub.tags?.map(tag => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className={cn(
                            'text-xs',
                            tag.toLowerCase() === 'video' &&
                              'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300'
                          )}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className={cn(
                        'w-full',
                        pub.category === 'Video' && 'bg-green-600 text-white hover:bg-green-700'
                      )}
                    >
                      <Link href={pub.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {pub.category === 'Video' ? 'Watch Video' : 'Read Article'}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPublications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No publications match your search.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
