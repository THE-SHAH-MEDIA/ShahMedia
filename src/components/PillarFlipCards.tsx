"use client"

import { useState } from "react"
import { Building, Target, Bot, Instagram, MessageCircle, Phone, Mail } from "lucide-react"

interface PillarCard {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  features: string[]
  icon: React.ComponentType<any>
  color: string
  category: string
}

const pillars: PillarCard[] = [
  {
    id: "digital-foundation",
    title: "The Digital Foundation",
    shortDescription: "AI-enhanced website with stunning portfolio",
    fullDescription: "A high-converting, AI-enhanced website with stunning portfolio, clear CTAs, integrated booking system, and 24/7 AI chatbot.",
    features: [
      "Stunning visual portfolio to showcase your work",
      "Clear calls-to-action and lead capture forms", 
      "AI Chatbot trained on your services 24/7",
      "Integrated booking system for consultations",
      "Mobile-first, fast-loading design"
    ],
    icon: Building,
    color: "#007BFF",
    category: "The 'Shopfront'"
  },
  {
    id: "lead-generation",
    title: "The Lead Generation Machine", 
    shortDescription: "Hyper-local SEO and managed Meta Ads",
    fullDescription: "Complete Google Business Profile optimization with sophisticated Meta ad campaigns targeting qualified local traffic.",
    features: [
      "Complete Google Business Profile optimization",
      "Targeted Instagram & Facebook ad campaigns",
      "Geographic targeting within Shivamogga",
      "Local search domination for high-intent keywords",
      "Visually-driven ads targeting high-income homeowners"
    ],
    icon: Target,
    color: "#008080",
    category: "The 'Engine'"
  },
  {
    id: "ai-assistant",
    title: "The AI Sales Assistant",
    shortDescription: "Automated lead qualification system",
    fullDescription: "Automated lead qualification through enrichment and email/WhatsApp sequences, delivering only pre-vetted leads.",
    features: [
      "Automatic lead enrichment and data collection",
      "AI qualification via email/WhatsApp sequences",
      "Pre-vetted, high-value leads delivered to inbox",
      "Budget and timeline pre-screening",
      "Complete lead handoff with full context"
    ],
    icon: Bot,
    color: "#00A0A0",
    category: "The 'Qualifier'"
  }
]

export default function PillarFlipCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {pillars.map((pillar, index) => (
        <div
          key={pillar.id}
          className="brand-flip-card group cursor-pointer h-80"
        >
          <div className="brand-card-inner">
            {/* Front of card */}
            <div 
              className="brand-card-front"
              style={{ 
                backgroundColor: `${pillar.color}`,
              }}
            >
              {/* Top label matching the brand */}
              <div 
                className="brand-card-top"
                style={{ 
                  backgroundColor: 'transparent',
                  borderColor: 'white'
                }}
              >
                <p className="brand-card-top-para font-montserrat font-bold text-white">
                  {pillar.category}
                </p>
              </div>

              {/* Main icon */}
              <div className="brand-icon-container">
                <pillar.icon className="h-12 w-12 text-white" />
              </div>

              {/* Title */}
              <h3 className="brand-heading font-montserrat font-bold text-white text-center px-4">
                {pillar.title}
              </h3>

              {/* Short description */}
              <p className="brand-follow font-inter text-white/90 text-center px-4">
                {pillar.shortDescription}
              </p>

              {/* Hover hint */}
              <p className="brand-hover-hint font-inter text-white/70 text-sm">
                Hover to see details...
              </p>
            </div>

            {/* Back of card */}
            <div 
              className="brand-card-back"
              style={{ 
                backgroundColor: '#111111',
              }}
            >
              {/* Title with icon */}
              <div className="flex items-center justify-center mb-4">
                <pillar.icon className="h-6 w-6 mr-3 text-white" />
                <h3 className="brand-heading font-montserrat font-bold text-white text-center">
                  {pillar.title}
                </h3>
              </div>
                
              {/* Description with overflow handling */}
              <div className="brand-description-container">
                <p className="font-inter text-sm leading-relaxed text-white/90 text-center px-2">
                  {pillar.fullDescription}
                </p>
              </div>

              {/* Features list with proper overflow */}
              <div className="brand-features-container">
                <h4 className="font-montserrat font-semibold text-sm mb-3 text-white text-center">
                  Key Features:
                </h4>
                <div className="brand-features-scroll">
                  <ul className="space-y-2 text-xs">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-white/90">
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0" 
                          style={{ backgroundColor: pillar.color }}
                        ></div>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social icons matching brand */}
              <div className="brand-icons">
                <Instagram className="h-6 w-6 text-white/70 hover:text-white transition-colors" />
                <MessageCircle className="h-6 w-6 text-white/70 hover:text-white transition-colors" />
                <Phone className="h-6 w-6 text-white/70 hover:text-white transition-colors" />
                <Mail className="h-6 w-6 text-white/70 hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
