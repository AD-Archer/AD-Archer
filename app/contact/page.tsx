"use client"

import { CardFooter } from "@/components/ui/card"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import AnimatedContactForm from "@/components/animated-contact-form"

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-[800px]">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <AnimatedContactForm />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <Card className="comic-border">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Here are the ways you can reach me directly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">adarcher21@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-muted-foreground">+1 (267) 225-6778</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-sm text-muted-foreground">Philadelphia, PA, USA</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="comic-border">
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
              <CardDescription>Follow me on social media and professional networks.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="https://github.com/ad-archer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-background rounded-lg border hover:bg-muted transition-colors"
                >
                  <Github className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">GitHub</span>
                </Link>

                <Link
                  href="https://linkedin.com/in/antonio-archer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-background rounded-lg border hover:bg-muted transition-colors"
                >
                  <Linkedin className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </Link>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-4">
              <p className="text-sm text-muted-foreground">Response time: Usually within 48 hours</p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
