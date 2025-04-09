"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export default function AnimatedContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="comic-border overflow-hidden">
        <CardHeader>
          <CardTitle className="relative">
            <span className="relative z-10">Get In Touch</span>
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-0 left-0 h-3 bg-primary/30 -z-10"
            />
          </CardTitle>
          <CardDescription>Fill out the form below and I&#39;ll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mb-4 text-accent"
              >
                <CheckCircle className="h-16 w-16" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. I&#39;ll respond to your message as soon as possible.
              </p>
              <Button variant="outline" className="mt-6" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="comic-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="comic-border"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className="comic-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="comic-border"
                />
              </div>
              <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </span>
                <motion.span
                  initial={{ x: "-100%" }}
                  animate={{ x: isSubmitting ? "0%" : "-100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-accent"
                />
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex justify-between border-t p-4">
          <div className="text-xs text-muted-foreground">All fields are required</div>
          <div className="text-xs text-muted-foreground">Response time: Usually within 24 hours</div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
