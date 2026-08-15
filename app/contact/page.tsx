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
          whileHover={{ scale: 1.03, rotate: -1 }}
          whileTap={{ scale: 0.97 }}
          href="https://s.blinq.me/z9wgm5sYJfBo43d4NS0y?n=Antonio&bs=iw&ida_v=control"
          target="_blank"
          rel="noopener noreferrer"
          className="group comic-border mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm md:text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Add Antonio Archer to your contacts"
        >
          <IdCard className="h-4 w-4" />
          <span>Add Me To Your Contacts</span>
          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
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
          <Card className="comic-border h-full">
            <CardHeader>
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
          <Card className="comic-border h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Connect With Me</CardTitle>
              <CardDescription>Reach out directly or follow me on social media</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col divide-y divide-border">
                  {/* Email */}
                  <a
                    href="mailto:antonioarcher.dev@gmail.com"
                    className="group flex items-center gap-4 py-3 first:pt-0 text-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-primary" />
                    <span>antonioarcher.dev@gmail.com</span>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+12672256778"
                    className="group flex items-center gap-4 py-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-primary" />
                    <span>+1 (267) 225-6778</span>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 py-3 text-foreground">
                    <MapPin className="h-5 w-5 shrink-0 text-primary" />
                    <span>Philadelphia, PA, USA</span>
                  </div>

                  {/* Digital Card */}
                  <a
                    href="https://s.blinq.me/z9wgm5sYJfBo43d4NS0y?n=Antonio&bs=iw&ida_v=control"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-3 last:pb-0 text-foreground hover:text-primary transition-colors"
                  >
                    <IdCard className="h-5 w-5 shrink-0 text-primary" />
                    <span>Save my contact card</span>
                  </a>
                </div>

                <div className="pt-2">
                  <p className="text-sm text-muted-foreground mb-4">
                    Response time: Usually within 48 hours
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/ad-archer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="comic-border flex items-center gap-2 rounded-lg px-4 py-3 hover:bg-muted transition-colors"
                    >
                      <Github className="h-6 w-6 text-primary" />
                      <span className="text-sm font-medium">GitHub</span>
                    </Link>

                    <Link
                      href="https://linkedin.com/in/antonio-archer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="comic-border flex items-center gap-2 rounded-lg px-4 py-3 hover:bg-muted transition-colors"
                    >
                      <Linkedin className="h-6 w-6 text-primary" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </Link>
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
