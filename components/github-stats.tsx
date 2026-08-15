'use client';

import { withClientSide } from '../app/contact/components/client-component';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Github, ImageOff } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const STATS = [
  {
    src: 'https://github-readme-stats.vercel.app/api?username=ad-archer&show_icons=true&hide_border=true&theme=transparent&title_color=E86100&text_color=333333&icon_color=ff6b4a&bg_color=ffffff',
    alt: "Antonio Archer's GitHub Stats ad-archer",
  },
  {
    src: 'https://streak-stats.demolab.com?user=ad-archer&theme=E86100&hide_border=true&mode=weekly&color=E86100',
    alt: "Antonio Archer's GitHub Weekly Streak ad-archer",
    // This widget renders as a wide banner (~2.5:1), unlike the other two.
    // Squeezed into a half/third-width column it shrinks to a sliver with
    // huge letterboxing, so it always gets the full row width instead.
    wide: true,
  },
  {
    src: 'https://github-readme-stats.vercel.app/api/top-langs/?username=ad-archer&layout=compact&bg_color=00000000&text_color=000000&title_color=E86100&hide_border=true',
    alt: "Antonio Archer's Top Programming Languages ad-archer",
  },
];

// Tailwind needs full class strings to appear literally somewhere for its
// scanner to pick them up, so the grid layout per visible-card-count is a
// lookup table rather than a computed string. Each count already forms a
// balanced, centered shape on its own (a single card, a pair, or a full
// row of three), so the profile CTA below only needs to appear when a
// count would otherwise leave the section empty or a single card looking
// stranded next to nothing.
const GRID_LAYOUT: Record<number, string> = {
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  2: 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto',
  1: 'grid-cols-1 max-w-sm mx-auto',
};

function GithubStatCard({
  src,
  alt,
  wide,
  onFail,
}: {
  src: string;
  alt: string;
  wide?: boolean;
  onFail: () => void;
}) {
  return (
    <Card className="comic-border border-primary/30">
      <CardContent className="p-6">
        <Link href="https://github.com/ad-archer" target="_blank" rel="noopener noreferrer">
          <div className={`relative w-full ${wide ? 'h-[160px] sm:h-[200px]' : 'h-[200px]'}`}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes={wide ? '100vw' : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
              className="object-contain"
              unoptimized
              onError={onFail}
            />
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}

function GithubProfileCard() {
  return (
    <Card className="comic-border border-primary/30 flex items-center justify-center cursor-pointer">
      <Link
        href="https://github.com/ad-archer"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center w-full h-full p-6 text-primary"
      >
        <Github className="mb-2 h-10 w-10 text-[#E86100]" />
        <span className="text-lg font-bold text-[#E86100]">View GitHub Profile</span>
      </Link>
    </Card>
  );
}

function GithubStats() {
  const [failed, setFailed] = useState<boolean[]>(() => STATS.map(() => false));
  const failCount = failed.filter(Boolean).length;
  const allFailed = failCount === STATS.length;

  const visibleWide = STATS.filter((s, i) => s.wide && !failed[i]);
  const visibleNarrow = STATS.filter((s, i) => !s.wide && !failed[i]);

  // The profile CTA is otherwise redundant (GitHub is already linked from
  // the footer and contact page) so it only reappears when every widget is
  // down and the section would otherwise be just an error message with no
  // way to actually reach the profile.
  const gridCols = GRID_LAYOUT[allFailed ? 2 : visibleNarrow.length] ?? GRID_LAYOUT[3];

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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">GitHub Activity</h2>
            <p className="text-muted-foreground max-w-[800px]">
              Check out my open source contributions and coding activity on GitHub.
            </p>
          </motion.div>
        </div>

        {!allFailed && visibleWide.length > 0 && (
          <div className="grid grid-cols-1 gap-8 mb-8">
            {visibleWide.map(stat => {
              const i = STATS.indexOf(stat);
              return (
                <GithubStatCard
                  key={stat.src}
                  src={stat.src}
                  alt={stat.alt}
                  wide
                  onFail={() => setFailed(prev => prev.map((f, idx) => (idx === i ? true : f)))}
                />
              );
            })}
          </div>
        )}

        {allFailed ? (
          <div className={`grid gap-12 ${gridCols}`}>
            <Card className="comic-border border-primary/30">
              <CardContent className="flex h-[200px] flex-col items-center justify-center gap-2 p-6 text-muted-foreground">
                <ImageOff className="h-8 w-8" />
                <span className="text-sm">GitHub stats are temporarily unavailable</span>
              </CardContent>
            </Card>
            <GithubProfileCard />
          </div>
        ) : (
          visibleNarrow.length > 0 && (
            <div className={`grid gap-12 ${gridCols}`}>
              {visibleNarrow.map(stat => {
                const i = STATS.indexOf(stat);
                return (
                  <GithubStatCard
                    key={stat.src}
                    src={stat.src}
                    alt={stat.alt}
                    onFail={() => setFailed(prev => prev.map((f, idx) => (idx === i ? true : f)))}
                  />
                );
              })}
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default withClientSide(GithubStats, { loadingType: 'card' });
