"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, X } from "lucide-react"

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hi there! I&#39;m Antonio&#39;s AI assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Thanks for your message! This is a simulated response. In a real implementation, this would connect to an AI service to provide helpful information about Antonio's work and experience.`,
        },
      ])
    }, 1000)

    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat button - moved to left side */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg"
          aria-label="Open AI Assistant"
        >
          <Bot className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat window - moved to left side */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-6 z-50 w-full max-w-md"
          >
            <Card className="border shadow-xl comic-border">
              <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                <CardTitle className="text-lg font-medium">Antonio&#39;s AI Assistant</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close AI Assistant">
                  <X className="h-5 w-5" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[350px] overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === "user" ? "bg-primary text-primary-foreground ml-4" : "bg-muted mr-4"
                        }`}
                      >
                        {message.content}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 border-t">
                <form
                  className="flex w-full gap-2"
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSend()
                  }}
                >
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" disabled={!input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
