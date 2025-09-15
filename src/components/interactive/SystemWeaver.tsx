"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Building, Target, Bot, ArrowRight } from "lucide-react"

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface SystemNode {
  id: string
  title: string
  description: string
  position: { x: number; y: number }
  icon: React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>
  color: string
}

const systemNodes: SystemNode[] = [
  {
    id: "digital-atelier",
    title: "The Digital Foundation",
    description: "A high-converting, AI-enhanced website with stunning portfolio, clear CTAs, integrated booking system, and 24/7 AI chatbot.",
    position: { x: 20, y: 50 },
    icon: Building,
    color: "#007BFF"
  },
  {
    id: "reputation-magnet",
    title: "The Lead Generation Machine",
    description: "Hyper-local SEO and managed Meta Ads to drive qualified local traffic with visuals of your project photos.",
    position: { x: 50, y: 20 },
    icon: Target,
    color: "#008080"
  },
  {
    id: "velvet-rope",
    title: "The AI Sales Assistant",
    description: "Automated lead qualification through enrichment and email/WhatsApp sequences, delivering only pre-vetted leads.",
    position: { x: 80, y: 50 },
    icon: Bot,
    color: "#00A0A0"
  }
]

export function SystemWeaver() {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [selectedNode, setSelectedNode] = useState<string>("digital-atelier")

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return

    const ctx = gsap.context(() => {
      // Animate connection lines on scroll using strokeDasharray instead of pathLength
      gsap.fromTo(
        ".connection-line",
        { 
          strokeDasharray: "1000 1000",
          strokeDashoffset: "1000",
          opacity: 0 
        },
        {
          strokeDashoffset: "0",
          opacity: 1,
          duration: 2,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate nodes
      gsap.fromTo(
        ".system-node",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="py-24 bg-[#F1F1F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#111111] mb-6">
            The &ldquo;Local Growth Engine&rdquo; Package
          </h2>
          <p className="font-inter text-xl text-[#111111] max-w-3xl mx-auto leading-relaxed">
            We are not a &ldquo;freelance agency&rdquo;; we sell one product. For a fixed price, 
            you get a complete system built on three pillars:
          </p>
        </div>

        {/* Interactive System Diagram */}
        <div ref={containerRef} className="relative w-full h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #008080 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          {/* SVG for connection lines */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#008080" />
                <stop offset="100%" stopColor="#00A0A0" />
              </linearGradient>
            </defs>

            {/* Connection Lines */}
            <path
              className="connection-line"
              d="M 20 50 Q 35 30 50 20"
              stroke="url(#connectionGradient)"
              strokeWidth="0.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              className="connection-line"
              d="M 50 20 Q 65 35 80 50"
              stroke="url(#connectionGradient)"
              strokeWidth="0.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* System Nodes */}
          <TooltipProvider>
            {systemNodes.map((node) => (
              <Tooltip key={node.id}>
                <TooltipTrigger asChild>
                  <div
                    className={`system-node absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                      selectedNode === node.id ? 'scale-110 z-20' : 'hover:scale-105 z-10'
                    }`}
                    style={{
                      left: `${node.position.x}%`,
                      top: `${node.position.y}%`,
                    }}
                    onClick={() => setSelectedNode(node.id)}
                  >
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 transition-all duration-300 ${
                      selectedNode === node.id 
                        ? 'border-white bg-gradient-to-br from-[#008080] to-[#00A0A0]' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}>
                      <node.icon 
                        className={`h-8 w-8 transition-all duration-300 ${
                          selectedNode === node.id ? 'text-white' : 'text-[#008080]'
                        }`} 
                      />
                    </div>
                    
                    {/* Node Label */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 text-center">
                      <h3 className="font-montserrat font-semibold text-sm text-[#111111] whitespace-nowrap">
                        {node.title}
                      </h3>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">{node.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>

          {/* Flow Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-[#008080]">
            <span className="font-inter text-sm">Digital Foundation</span>
            <ArrowRight className="h-4 w-4" />
            <span className="font-inter text-sm">Lead Generation</span>
            <ArrowRight className="h-4 w-4" />
            <span className="font-inter text-sm">AI Qualification</span>
          </div>
        </div>

        {/* Detailed View */}
        {selectedNode && (
          <div className="bg-white rounded-xl p-8 shadow-lg">
            {(() => {
              const node = systemNodes.find(n => n.id === selectedNode)
              if (!node) return null
              
              return (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                        style={{ backgroundColor: `${node.color}20` }}
                      >
                        <node.icon className="h-6 w-6" style={{ color: node.color }} />
                      </div>
                      <h3 className="font-montserrat font-bold text-2xl text-[#111111]">
                        {node.title}
                      </h3>
                    </div>
                    <p className="font-inter text-lg text-[#666666] leading-relaxed mb-6">
                      {node.description}
                    </p>
                    
                    {/* Feature List based on node */}
                    <ul className="space-y-3">
                      {node.id === 'digital-atelier' && (
                        <>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-[#007BFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="font-inter text-[#111111]">Stunning visual portfolio to showcase your work</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-[#007BFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="font-inter text-[#111111]">Clear calls-to-action and lead capture forms</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-[#007BFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="font-inter text-[#111111]">AI Chatbot trained on your services 24/7</span>
                          </li>
                        </>
                      )}
                      {node.id === 'reputation-magnet' && (
                        <>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="font-inter text-[#111111]">Complete Google Business Profile optimization</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="font-inter text-[#111111]">Targeted Instagram & Facebook ad campaigns</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="font-inter text-[#111111]">Geographic targeting within Shivamogga</span>
                          </li>
                        </>
                      )}
                      {node.id === 'velvet-rope' && (
                        <>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-[#00A0A0] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="font-inter text-[#111111]">Automatic lead enrichment and data collection</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-[#00A0A0] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="font-inter text-[#111111]">AI qualification via email/WhatsApp</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-[#00A0A0] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="font-inter text-[#111111]">Pre-vetted leads with full context</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                  
                  <div className="relative">
                    {/* Placeholder for node illustration */}
                    <div 
                      className="w-full h-64 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${node.color}10` }}
                    >
                      <node.icon 
                        className="h-24 w-24"
                        style={{ color: node.color }}
                      />
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        )}
      </div>
    </div>
  )
}
