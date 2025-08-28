import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Bangers } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AiAssistant from '@/components/homepage/ai-assistant';
import ScrollToTop from '@/components/homepage/scroll-to-top';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { ChatProvider } from '@/components/context/ChatContext';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bangers',
});

export const metadata: Metadata = {
  title: 'Antonio Archer | Software Developer | Portfolio',
  description:
    'Portfolio website for Antonio Archer a software developer and DevOps engineer from Philadelphia showcasing projects, skills, and contact information',
  metadataBase: new URL('https://www.antonioarcher.com'),
  alternates: {
    canonical: 'https://www.antonioarcher.com',
  },
  openGraph: {
    title: 'Antonio Archer | Portfolio',
    description:
      'Portfolio website for Antonio Archer a software developer and DevOps engineer from Philadelphia showcasing projects, skills, and contact information',
    url: 'https://www.antonioarcher.com',
    siteName: 'Antonio Archer Portfolio',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Antonio Archer logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antonio Archer | Portfolio',
    description:
      'Portfolio website for Antonio Archer a software developer and DevOps engineer from Philadelphia showcasing projects, skills, and contact information',
    images: ['/logo.webp'],
    creator: '@ad_archer_',
  },
  keywords: [
    'Antonio Archer',
    'Software Developer',
    'DevOps Engineer',
    'Portfolio',
    'Philadelphia',
    'Web Development',
  ],
  authors: [{ name: 'Antonio Archer' }],
  creator: 'Antonio Archer',
  publisher: 'Antonio Archer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Site-level structured data */}
        <Script
          id="website-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Antonio Archer',
              url: 'https://www.antonioarcher.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.google.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
              sameAs: [
                'https://github.com/ad-archer',
                'https://www.linkedin.com/in/antonio-archer',
                'https://twitter.com/ad_archer_',
                'https://www.youtube.com/@ad-archer',
                'https://www.instagram.com/Antonio_DArcher',
              ],
            }),
          }}
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Antonio Archer',
              url: 'https://www.antonioarcher.com',
              image: 'https://www.antonioarcher.com/logo.webp',
              jobTitle: 'Software Developer & DevOps Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'Self-employed',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Philadelphia',
                addressRegion: 'PA',
                addressCountry: 'US',
              },
              sameAs: [
                'https://github.com/ad-archer',
                'https://www.linkedin.com/in/antonio-archer',
                'https://twitter.com/ad_archer_',
                'https://www.linktr.ee/adarcher',
                'https://www.adarcher.app',
                'https://www.youtube.com/@ad-archer',
                'https://www.instagram.com/Antonio_DArcher',
                
              ],
            }),
          }}
        />
        <link rel="icon" href="/logo.webp" type="image/webp" />
      </head>
      <body className={`${inter.variable} ${bangers.variable} font-sans bg-white`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ChatProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <AiAssistant />
              <ScrollToTop />
              <Toaster />
            </div>
          </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import './globals.css';
