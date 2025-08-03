'use client';

import { withClientSide } from './client-component';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">GitHub Activity</h2>
            <p className="text-muted-foreground max-w-[800px]">
              Check out my open source contributions and coding activity on GitHub.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <Card className="comic-border border-primary/30">
            <CardContent className="p-6">
              <Link
                href="https://github.com/ad-archer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-full h-[200px]">
                  <Image
                    src="https://github-readme-stats.vercel.app/api?username=ad-archer&show_icons=true&hide_border=true&theme=transparent&title_color=E86100&text_color=333333&icon_color=ff6b4a&bg_color=ffffff"
                    alt="Antonio Archer's GitHub Stats ad-archer"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </Link>
            </CardContent>
          </Card>

          <Card className="comic-border border-primary/30">
            <CardContent className="p-6">
              <Link
                href="https://github.com/ad-archer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-full h-[200px]">
                  <Image
                    src="https://streaks.adarcher.app?user=ad-archer&theme=E86100&hide_border=true&mode=weekly&color=E86100"
                    alt="Antonio Archer's GitHub Weekly Streak ad-archer"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </Link>
            </CardContent>
          </Card>

          <Card className="comic-border border-primary/30">
            <CardContent className="p-6">
              <Link
                href="https://github.com/ad-archer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-full h-[200px]">
                  <Image
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=ad-archer&layout=compact&bg_color=00000000&text_color=000000&title_color=E86100&hide_border=true"
                    alt="Antonio Archer's Top Programming Languages ad-archer"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </Link>
            </CardContent>
          </Card>

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
        </div>
      </div>
    </section>
  );
}

export default withClientSide(GithubStats, { loadingType: 'card' });
