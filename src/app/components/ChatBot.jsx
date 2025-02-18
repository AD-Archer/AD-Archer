'use client'

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Antonio's AI assistant. Ask me anything about his experience, skills, or background!, unfortunately I am not up to date on his projects so you should ask Antonio himself",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const myname = "Antonio's"; // i dont want to have an escaped characters

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle click outside the chat container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && chatContainerRef.current && 
          !chatContainerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleSend = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { role: "user", content: inputMessage };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputMessage,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.error },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I apologize, but I'm having trouble connecting right now. Please try again later.",
        },
      ]);
    }

    setIsLoading(false);
  };

  return (
    <div 
      ref={chatContainerRef} 
      className="position-fixed bottom-0 start-0 mb-4 ms-4" 
      style={{ zIndex: 1050 }}
    >
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-danger rounded-circle p-3 shadow"
        style={{ backgroundColor: "#FF6B6B", borderColor: "#FF6B6B" }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="position-absolute bottom-0 start-0 mb-16 bg-white rounded shadow-lg border" style={{ width: '350px', maxWidth: '90vw' }}>
          {/* Header with close button */}
          <div className="p-3 text-white rounded-top d-flex justify-content-between align-items-center" style={{ backgroundColor: "#FF6B6B" }}>
            <h5 className="mb-0 fw-semibold">Chat with {myname} AI Assistant</h5>
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-link p-0 text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="p-3" style={{ height: '400px', overflowY: 'auto' }}>
            <div className="d-flex flex-column gap-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`d-flex ${
                    message.role === "user" ? "justify-content-end" : "justify-content-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded ${
                      message.role === "user"
                        ? "text-white"
                        : "bg-light text-dark"
                    }`}
                    style={{
                      maxWidth: "80%",
                      backgroundColor: message.role === "user" ? "#FF6B6B" : null,
                      borderBottomRightRadius: message.role === "user" ? 0 : null,
                      borderBottomLeftRadius: message.role === "assistant" ? 0 : null
                    }}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="d-flex justify-content-start">
                  <div className="bg-light p-3 rounded" style={{ borderBottomLeftRadius: 0 }}>
                    <div className="d-flex gap-2">
                      <div className="spinner-grow spinner-grow-sm text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <div className="spinner-grow spinner-grow-sm text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <div className="spinner-grow spinner-grow-sm text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="border-top p-3">
            <div className="input-group">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="form-control"
                style={{ borderRadius: '0.375rem 0 0 0.375rem' }}
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="btn btn-danger"
                style={{ backgroundColor: "#FF6B6B", borderColor: "#FF6B6B" }}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;