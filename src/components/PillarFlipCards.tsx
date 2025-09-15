"use client"

import { useState } from "react"
import { Building, Target, Bot, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface PillarCard {
  id: string
  title: string
  shortDescription: string
  concisePoints: string[]
  fullDescription: string
  detailedFeatures: string[]
  benefits: string[]
  icon: React.ComponentType<{ className?: string; size?: number }>
  color: string
  category: string
}

const pillars: PillarCard[] = [
  {
    id: "digital-foundation",
    title: "The Digital Foundation",
    shortDescription: "AI-enhanced website with stunning portfolio",
    concisePoints: [
      "Professional portfolio showcase",
      "24/7 AI chatbot assistance", 
      "Integrated booking system",
      "Mobile-optimized design"
    ],
    fullDescription: "A complete digital presence solution that serves as your premium online 'shopfront'. Our AI-enhanced websites are specifically designed for Interior Designers, Architects, and Premium Contractors to showcase their mastery and attract high-value clients through sophisticated design and intelligent automation.",
    detailedFeatures: [
      "Stunning visual portfolio to showcase your best work",
      "Clear calls-to-action and lead capture forms optimized for conversions", 
      "AI Chatbot trained on your services and philosophy available 24/7",
      "Integrated booking system for seamless consultation scheduling",
      "Mobile-first, fast-loading design that impresses on any device",
      "SEO-optimized content structure for better search visibility",
      "Custom branding that reflects your premium positioning",
      "Analytics dashboard to track visitor behavior and conversions"
    ],
    benefits: [
      "Establish credibility with potential high-value clients",
      "Generate qualified leads even while you sleep",
      "Reduce time spent on initial client inquiries",
      "Showcase your portfolio in the best possible light",
      "Build trust through professional online presence"
    ],
    icon: Building,
    color: "#007BFF",
    category: "The 'Shopfront'"
  },
  {
    id: "lead-generation",
    title: "The Lead Generation Machine", 
    shortDescription: "Hyper-local SEO and managed Meta Ads",
    concisePoints: [
      "Google Business optimization",
      "Targeted social media ads",
      "Local search domination",
      "High-income audience targeting"
    ],
    fullDescription: "A sophisticated customer acquisition engine that combines hyper-local SEO with intelligent Meta advertising to deliver a steady stream of qualified prospects. We focus exclusively on Shivamogga and surrounding areas to ensure every lead is geographically relevant and ready to invest in premium services.",
    detailedFeatures: [
      "Complete Google Business Profile optimization for local search dominance",
      "Sophisticated Instagram & Facebook ad campaigns with visual focus",
      "Precise geographic targeting within Shivamogga and surrounding districts",
      "Local search optimization for high-intent keywords and phrases",
      "Visually-driven ad creative targeting high-income homeowners",
      "Competitor analysis and market positioning strategies",
      "Monthly performance optimization and campaign refinement",
      "Detailed reporting on lead quality and conversion rates"
    ],
    benefits: [
      "3x increase in qualified inquiries within 60 days",
      "Attract premium clients willing to invest in quality",
      "Dominate local search results for your services",
      "Build market authority in your geographic area",
      "Predictable lead flow for consistent business growth"
    ],
    icon: Target,
    color: "#007BFF",
    category: "The 'Engine'"
  },
  {
    id: "ai-assistant",
    title: "The AI Sales Assistant",
    shortDescription: "Automated lead qualification system",
    concisePoints: [
      "Automatic lead screening",
      "Budget & timeline qualification",
      "Email/WhatsApp follow-up",
      "Pre-vetted lead delivery"
    ],
    fullDescription: "An intelligent lead qualification system that automatically screens, nurtures, and delivers only the highest-quality prospects to your inbox. This AI-powered assistant works around the clock to ensure you spend your valuable time only with clients who are ready to move forward with premium projects.",
    detailedFeatures: [
      "Automatic lead enrichment with contact and project details",
      "AI-powered qualification via intelligent email/WhatsApp sequences",
      "Budget and timeline pre-screening to filter out tire-kickers",
      "Project scope assessment to match leads with your expertise",
      "Complete lead handoff with full context and conversation history",
      "Follow-up automation for leads not ready to commit immediately",
      "Integration with your existing CRM or project management tools",
      "Detailed lead scoring and qualification reports"
    ],
    benefits: [
      "45% reduction in time spent with unqualified leads",
      "Higher conversion rates from pre-screened prospects",
      "Never miss a potential client inquiry again",
      "Focus your time on billable work, not lead qualification",
      "Build a pipeline of qualified prospects for consistent growth"
    ],
    icon: Bot,
    color: "#007BFF",
    category: "The 'Qualifier'"
  }
]

export default function PillarFlipCards() {
  const [selectedPillar, setSelectedPillar] = useState<PillarCard | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {pillars.map((pillar) => (
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

              {/* Back of card - now with concise bullet points */}
              <div 
                className="brand-card-back"
                style={{ 
                  backgroundColor: '#111111',
                }}
              >
                {/* Title with icon */}
                <div className="flex items-center justify-center mb-3">
                  <pillar.icon className="h-5 w-5 mr-2 text-white" />
                  <h3 className="font-montserrat font-bold text-white text-sm text-center">
                    {pillar.title}
                  </h3>
                </div>
                  
                {/* Concise bullet points */}
                <div className="px-4 mb-4">
                  <ul className="space-y-2">
                    {pillar.concisePoints.map((point, idx) => (
                      <li key={idx} className="flex items-start text-white/90 text-xs">
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0" 
                          style={{ backgroundColor: pillar.color }}
                        ></div>
                        <span className="leading-tight">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <div className="px-4 mt-auto pb-4">
                  <Button
                    onClick={() => setSelectedPillar(pillar)}
                    className="w-full bg-white text-gray-900 hover:bg-gray-100 text-xs py-2 h-8"
                    size="sm"
                  >
                    Learn More
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Learn More Modal */}
      <Dialog open={!!selectedPillar} onOpenChange={() => setSelectedPillar(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedPillar && (
            <>
              <DialogHeader>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: selectedPillar.color }}
                  >
                    <selectedPillar.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-xl font-montserrat font-bold">
                      {selectedPillar.title}
                    </DialogTitle>
                    <p className="text-sm text-gray-600">{selectedPillar.category}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Full Description */}
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-2">Overview</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedPillar.fullDescription}</p>
                </div>

                {/* Detailed Features */}
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-3">Detailed Features</h4>
                  <ul className="space-y-2">
                    {selectedPillar.detailedFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" 
                          style={{ backgroundColor: selectedPillar.color }}
                        ></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {selectedPillar.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" 
                          style={{ backgroundColor: selectedPillar.color }}
                        ></div>
                        <span className="text-gray-700 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-3">
                    Ready to implement {selectedPillar.title.toLowerCase()} for your business?
                  </p>
                  <Button 
                    className="w-full"
                    style={{ backgroundColor: selectedPillar.color }}
                    onClick={() => {
                      // Scroll to contact section or open contact form
                      setSelectedPillar(null)
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Get Started Today
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
