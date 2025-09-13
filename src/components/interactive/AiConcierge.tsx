"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { MessageCircle, Send, Bot, User, X, Minimize2 } from "lucide-react"
import { gsap } from "gsap"

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

interface QuickAction {
  id: string
  label: string
  message: string
}

const quickActions: QuickAction[] = [
  {
    id: "pricing",
    label: "Get Pricing",
    message: "What are your pricing packages?"
  },
  {
    id: "portfolio",
    label: "View Portfolio",
    message: "Can you show me some examples of your work?"
  },
  {
    id: "consultation",
    label: "Book Consultation",
    message: "I'd like to schedule a free consultation"
  },
  {
    id: "services",
    label: "Our Services",
    message: "What services do you offer for construction companies?"
  }
]

const botResponses: Record<string, string> = {
  "pricing": "Our Local Growth Engine package is ₹5,99,999 (one-time setup) with ₹99,999/month ongoing. This includes your complete digital foundation, lead generation system, and AI sales assistant. Would you like to see what's included?",
  "portfolio": "I'd love to show you our work! We've helped construction companies across Shivamogga increase their leads by 300-500%. You can view our case studies in the portfolio section above, or I can schedule a call to walk you through specific examples relevant to your business.",
  "consultation": "Perfect! I can help you book a free 30-minute consultation with our team. We'll analyze your current digital presence and show you exactly how our system can work for your construction business. What's the best time to reach you?",
  "services": "Our Local Growth Engine focuses on three core pillars: 1) A high-converting website with AI chatbot, 2) Hyper-local SEO and Meta Ads for lead generation, 3) Automated lead qualification system. Everything is designed specifically for construction companies in Shivamogga. Which area interests you most?",
  "default": "Thanks for reaching out! I'm here to help you understand how our Local Growth Engine can transform your construction business. We specialize in helping local construction companies generate qualified leads automatically. What would you like to know more about?"
}

export function AiConcierge() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "bot",
      content: "Hi! I'm your AI assistant from The Shah Media. I'm here to help you understand how our Local Growth Engine can transform your construction business. What would you like to know?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatButtonRef = useRef<HTMLButtonElement>(null)

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Animate chat button on mount
  useEffect(() => {
    if (chatButtonRef.current) {
      gsap.fromTo(
        chatButtonRef.current,
        { scale: 0, rotation: 180 },
        { 
          scale: 1, 
          rotation: 0, 
          duration: 0.8, 
          ease: "back.out(1.7)",
          delay: 2
        }
      )
    }
  }, [])

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = getBotResponse(content)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: botResponse,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("pricing")) {
      return botResponses.pricing
    } else if (lowerMessage.includes("portfolio") || lowerMessage.includes("work") || lowerMessage.includes("examples")) {
      return botResponses.portfolio
    } else if (lowerMessage.includes("consultation") || lowerMessage.includes("meeting") || lowerMessage.includes("call")) {
      return botResponses.consultation
    } else if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("do")) {
      return botResponses.services
    } else {
      return botResponses.default
    }
  }

  const handleQuickAction = (action: QuickAction) => {
    handleSendMessage(action.message)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        ref={chatButtonRef}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#008080] hover:bg-[#006666] text-white shadow-2xl z-50 flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Open AI Chat Assistant"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-[#008080] animate-ping opacity-30"></div>
      </Button>

      {/* Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden">
          {/* Chat Header */}
          <DialogHeader className="bg-gradient-to-r from-[#008080] to-[#00A0A0] text-white p-4 flex-row items-center justify-between space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <DialogTitle className="text-white font-montserrat">AI Assistant</DialogTitle>
                <p className="text-white/80 text-sm">The Shah Media</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-2"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <ScrollArea className="h-96 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${
                        message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === 'user' 
                            ? 'bg-[#007BFF] text-white' 
                            : 'bg-[#008080] text-white'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="h-4 w-4" />
                          ) : (
                            <Bot className="h-4 w-4" />
                          )}
                        </div>
                        
                        <div className={`rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-[#007BFF] text-white ml-auto'
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.content}</p>
                          <p className="text-xs mt-1 opacity-70">
                            {message.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-[#008080] text-white flex items-center justify-center">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Quick Actions */}
              {messages.length === 1 && (
                <div className="px-4 py-2 border-t bg-gray-50">
                  <p className="text-xs text-gray-600 mb-2">Quick actions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action) => (
                      <Button
                        key={action.id}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickAction(action)}
                        className="text-xs h-8 justify-start"
                      >
                        {action.label}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage(inputValue)
                      }
                    }}
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage(inputValue)}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-[#008080] hover:bg-[#006666] text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Powered by The Shah Media AI
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
