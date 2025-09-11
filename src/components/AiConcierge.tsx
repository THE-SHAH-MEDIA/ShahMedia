"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hello! I'm the Shah Media AI Assistant. I can help you understand our Local Growth Engine system. What would you like to know about our services?",
    sender: "ai",
    timestamp: new Date()
  }
];

const aiResponses: Record<string, string> = {
  "pricing": "Our investment model is designed for mutual success: ₹40,000 one-time setup fee plus ₹30,000 monthly retainer. The setup covers website, system integration, and initial campaigns. The monthly fee covers ongoing optimization and management.",
  "system": "Our Local Growth Engine has three pillars: 1) Digital Foundation (AI-enhanced website), 2) Lead Generation Machine (local SEO + Meta ads), 3) AI Sales Assistant (automated qualification). It's a complete end-to-end system.",
  "who": "We work exclusively with high-value local service professionals in Shivamogga: Interior Designers, Architects, Real Estate Developers, and high-end Custom Contractors.",
  "results": "Our clients typically see qualified leads within 30 days. The system is designed to replace unpredictable word-of-mouth with a steady stream of pre-qualified prospects.",
  "booking": "I'd love to connect you with our team for a free discovery call. You can book directly through our calendar or I can collect your details for a callback.",
  "default": "That's a great question! Our Local Growth Engine is specifically designed for Shivamogga's Master Craftsmen. Would you like to know more about our three-pillar system, pricing, or book a discovery call?"
};

export default function AiConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getAiResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("price") || message.includes("cost") || message.includes("fee")) {
      return aiResponses.pricing;
    }
    if (message.includes("system") || message.includes("pillar") || message.includes("how")) {
      return aiResponses.system;
    }
    if (message.includes("who") || message.includes("client") || message.includes("target")) {
      return aiResponses.who;
    }
    if (message.includes("result") || message.includes("time") || message.includes("when")) {
      return aiResponses.results;
    }
    if (message.includes("book") || message.includes("call") || message.includes("contact")) {
      return aiResponses.booking;
    }
    
    return aiResponses.default;
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: currentMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAiResponse(currentMessage),
        sender: "ai",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickMessage = (message: string) => {
    setCurrentMessage(message);
    // Auto-send the message after a short delay
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="btn-secondary px-6 py-3 text-lg font-medium rounded-md flex items-center gap-2 hover:scale-105 transition-transform duration-300"
        >
          <MessageCircle className="h-5 w-5" />
          Ask Our AI
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[650px] h-[700px] flex flex-col">
        <DialogHeader className="flex-shrink-0 pb-4">
          <DialogTitle className="font-montserrat font-bold text-xl text-[#111111] flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#007BFF] to-[#008080] rounded-full flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            Shah Media AI Assistant
          </DialogTitle>
        </DialogHeader>
        
        {/* Chat Messages - Fixed height with scroll */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="space-y-4 p-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-4 py-3 shadow-sm ${
                      message.sender === "user"
                        ? "bg-[#007BFF] text-white"
                        : "bg-[#F8F9FA] text-[#111111] border border-[#E5E5E5]"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === "ai" && (
                        <Bot className="h-4 w-4 mt-1 text-[#008080] flex-shrink-0" />
                      )}
                      {message.sender === "user" && (
                        <User className="h-4 w-4 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="font-inter text-sm leading-relaxed">
                          {message.content}
                        </p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#F8F9FA] text-[#111111] rounded-lg px-4 py-3 max-w-[85%] border border-[#E5E5E5] shadow-sm">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-[#008080]" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[#008080] rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-[#008080] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-[#008080] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Invisible element to scroll to */}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </div>
        
        {/* Input Section - Fixed at bottom */}
        <div className="flex-shrink-0 pt-4 border-t border-[#E5E5E5]">
          {/* Message Input */}
          <div className="flex gap-2 mb-3">
            <Input
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about our system, pricing, or book a call..."
              className="flex-1 font-inter"
              disabled={isTyping}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!currentMessage.trim() || isTyping}
              className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Quick Action Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              "Tell me about your system", 
              "What's the pricing?", 
              "Who do you work with?", 
              "Book a discovery call"
            ].map((suggestion) => (
              <Button
                key={suggestion}
                variant="outline"
                size="sm"
                onClick={() => handleQuickMessage(suggestion)}
                className="text-xs font-inter hover:bg-[#F8F9FA] transition-colors duration-300"
                disabled={isTyping}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}