'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin, Phone, AlertCircle, IdCard } from 'lucide-react';
import Link from 'next/link';
import AnimatedContactForm from './components/animated-contact-form';
import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Image from 'next/image';

export default function ContactPage() {
  const [showFallback, setShowFallback] = useState(false);

  return (
    <div className="container px-4 md:px-6 py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Get In Touch</h1>
          <p className="text-muted-foreground max-w-[800px] text-lg">
            Have a project in mind, want to collaborate, or hire? Feel free to reach out!
          </p>
        </motion.div>
      </div>

      {showFallback && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Alert variant="destructive" className="border-2">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle>Email Service Issue</AlertTitle>
            <AlertDescription>
              We&apos;re having trouble with our email service. Please email me directly at{' '}
              <a href="mailto:antonioarcher.dev@gmail.com" className="font-bold underline">
              antonioarcher.dev@gmail.com
              </a>{' '}
              or use one of the contact methods below.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}

      {/* Profile Image - Centered */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col justify-center items-center w-full mb-8 md:mb-10"
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
          <Image
            src="/images/antonioarcher.webp"
            alt="Antonio Archer"
            fill
            sizes="(max-width: 768px) 192px, 256px"
            className="object-cover"
            priority
          />
        </div>
        {/* Add Me To Contacts Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="https://s.blinq.me/z9wgm5sYJfBo43d4NS0y?n=Antonio&bs=iw&ida_v=control"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff6f61] via-[#ff4d4d] to-[#ff9966] px-7 py-3 text-sm md:text-base font-medium text-white shadow-lg shadow-[#ff6f6155] hover:shadow-[#ff4d4d66] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff6f61]"
          aria-label="Add Antonio Archer to your contacts"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
            <IdCard className="h-4 w-4" />
          </span>
          <span>Add Me To Your Contacts</span>
          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-white/80">→</span>
        </motion.a>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-sm text-center">Save my digital card so you always have my latest details.</p>
      </motion.div>

      {/* Two-column layout for form and contact info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            className="absolute -top-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <AnimatedContactForm onError={() => setShowFallback(true)} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle className="text-2xl">Connect With Me</CardTitle>
              <CardDescription>Reach out directly or follow me on social media</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-4">
                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <a
                      href="mailto:antonioarcher.dev@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      antonioarcher.dev@gmail.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <a
                      href="tel:+12672256778"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      +1 (267) 225-6778
                    </a>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">Philadelphia, PA, USA</span>
                  </div>

                  {/* Digital Card */}
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <a
                      href="https://s.blinq.me/z9wgm5sYJfBo43d4NS0y?n=Antonio&bs=iw&ida_v=control"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Save my contact card
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Response time: Usually within 48 hours
                  </p>
                  <div className="flex gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <Link
                        href="https://github.com/ad-archer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-background rounded-lg border hover:bg-muted transition-colors"
                      >
                        <Github className="h-6 w-6 text-primary" />
                        <span className="text-sm font-medium">GitHub</span>
                      </Link>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <Link
                        href="https://linkedin.com/in/antonio-archer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-background rounded-lg border hover:bg-muted transition-colors"
                      >
                        <Linkedin className="h-6 w-6 text-primary" />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
