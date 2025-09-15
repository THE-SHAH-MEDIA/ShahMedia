'use client';

import { ContainerScroll, CardSticky } from '@/components/blocks/cards-stack';

const GROWTH_PILLARS = [
  {
    id: "digital-foundation",
    title: "Digital Foundation",
    subtitle: "Your Digital Shopfront",
    description: "Transform your online presence with a visually stunning portfolio website that showcases your mastery. Complete with 24/7 AI Concierge, professional brand presentation, and integrated booking system - your digital showroom that works around the clock.",
    features: ["Portfolio website with modern design", "24/7 AI Concierge assistance", "Integrated booking system", "Mobile-first, fast-loading design"],
    gradient: "from-blue-500 to-teal-500"
  },
  {
    id: "lead-generation",
    title: "Lead Generation Machine", 
    subtitle: "The Engine",
    description: "Dominate Shivamogga&apos;s market with sophisticated Meta ad campaigns and complete Google Business Profile optimization. Geographic targeting that brings high-intent, qualified prospects directly to your door.",
    features: ["Google Business Profile optimization", "Meta ad campaigns (Instagram & Facebook)", "Geographic targeting for Shivamogga", "High-value client attraction"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "ai-sales-assistant",
    title: "AI Sales Assistant",
    subtitle: "The Qualifier", 
    description: "Intelligent lead qualification system that pre-screens prospects for budget, timeline, and project scope. Get pre-vetted, ready-to-buy clients delivered with complete context - no more tire-kickers.",
    features: ["Automatic lead enrichment", "AI-powered qualification", "Budget and timeline pre-screening", "WhatsApp integration"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: "local-domination",
    title: "Local Market Domination",
    subtitle: "The Results",
    description: "Become the undisputed #1 choice for premium projects in Shivamogga. Our hyper-local approach ensures you&apos;re the first name that comes to mind when someone needs a master craftsman.",
    features: ["Local search domination", "Premium brand positioning", "Market authority building", "Predictable lead flow"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: "growth-partnership",
    title: "Strategic Partnership",
    subtitle: "The Difference",
    description: "Work with a dedicated team that understands Shivamogga&apos;s market and your craft. We&apos;re not just service providers - we&apos;re invested in making you the market leader in your field.",
    features: ["Local market expertise", "Dedicated account management", "Monthly performance reporting", "Continuous optimization"],
    gradient: "from-indigo-500 to-purple-500"
  },
];

export default function CardsStackSection() {
  return (
    <section id="methodology" className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
          {/* Enhanced sticky left column */}
          <div className="left-0 top-0 md:sticky md:h-svh md:py-12">
            <div className="backdrop-blur-sm bg-white/90 rounded-3xl p-8 border border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-[#007BFF] to-[#00D4AA] rounded-full animate-pulse"></div>
                <h5 className="text-xs uppercase tracking-wider font-semibold text-gray-500">the local growth engine</h5>
              </div>
              
              <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Building your{" "}
                </span>
                <span className="bg-gradient-to-r from-[#007BFF] via-[#0056b3] to-[#00D4AA] bg-clip-text text-transparent font-extrabold animate-gradient">
                  customer acquisition
                </span>
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  {" "}system
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-prose">
                We don&apos;t just run ads or build websites. We install a complete, end-to-end customer acquisition 
                system that transforms unpredictable referrals into a steady stream of qualified prospects ready 
                to invest in quality work.
              </p>
              
              {/* Enhanced progress indicators */}
              <div className="flex gap-2 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div 
                    key={i}
                    className="h-1.5 bg-gradient-to-r from-[#007BFF] to-[#00D4AA] rounded-full flex-1 opacity-40 hover:opacity-100 transition-all duration-300 hover:scale-105"
                  />
                ))}
              </div>
              
              {/* Enhanced floating stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl border border-blue-100 hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00D4AA] bg-clip-text text-transparent">3</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Core Pillars</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">24/7</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Lead Capture</div>
                </div>
              </div>
              
              {/* Local focus badge */}
              <div className="mt-6 p-3 bg-gradient-to-r from-[#007BFF]/10 to-[#00D4AA]/10 rounded-xl border border-[#007BFF]/20">
                <div className="text-sm font-medium text-[#007BFF] text-center">
                  🎯 100% Shivamogga Focused
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced cards container with new content */}
          <ContainerScroll className="min-h-[500vh] space-y-8 py-12">
            {GROWTH_PILLARS.map((pillar, index) => (
              <CardSticky
                key={pillar.id}
                index={index + 1}
                incrementY={15}
                incrementZ={5}
                className="group relative rounded-3xl border border-white/60 p-8 shadow-xl backdrop-blur-md bg-gradient-to-br from-white/95 via-white/90 to-white/85 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden"
              >
                {/* Dynamic card background pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className={`absolute top-4 right-4 w-32 h-32 bg-gradient-to-br ${pillar.gradient} rounded-full filter blur-3xl`}></div>
                </div>
                
                {/* Enhanced card content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${pillar.gradient} text-white mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                        {pillar.subtitle}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-gray-800 group-hover:to-gray-600 transition-all duration-300">
                        {pillar.title}
                      </h2>
                    </div>
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${pillar.gradient} rounded-xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      <h3 className={`relative text-2xl md:text-3xl font-bold bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent px-4 py-2`}>
                        {String(index + 1).padStart(2, "0")}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg group-hover:text-gray-800 transition-colors duration-300 mb-6">
                    {pillar.description}
                  </p>
                  
                  {/* Feature list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {pillar.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pillar.gradient} opacity-60`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Card accent line */}
                  <div className={`h-0.5 bg-gradient-to-r ${pillar.gradient} rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                </div>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
      
      {/* Additional floating elements */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}