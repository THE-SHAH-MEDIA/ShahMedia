'use client';

import { ContainerScroll, CardSticky } from '@/components/ui/cards-stack';

const GROWTH_PHASES = [
  {
    id: "digital-atelier",
    title: "Digital Atelier",
    description: "Transform your online presence with modern, AI-powered websites that convert visitors into high-value clients. Your digital showroom that works 24/7 to attract and qualify prospects.",
  },
  {
    id: "growth-engine",
    title: "Growth Engine", 
    description: "Hyper-local domination that makes you the #1 choice in your market through strategic digital marketing. No more waiting for referrals - create predictable lead flow.",
  },
  {
    id: "ai-sales-assistant",
    title: "AI Sales Assistant",
    description: "Intelligent lead qualification system that saves time and delivers pre-vetted, high-value prospects. Focus on your craft while AI handles the initial conversations.",
  },
  {
    id: "proven-results",
    title: "Proven Results",
    description: "From local visibility to enterprise-level lead generation, our integrated approach delivers measurable growth across all business metrics. Join 60+ successful clients.",
  },
  {
    id: "expert-team",
    title: "Expert Team",
    description: "Work with seasoned professionals who understand your market and business goals. We're not just service providers - we're strategic partners invested in your success.",
  },
];

export default function CardsStackSection() {
  return (
    <section id="methodology" className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
          {/* Enhanced sticky left column */}
          <div className="left-0 top-0 md:sticky md:h-svh md:py-12">
            <div className="backdrop-blur-sm bg-white/80 rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-[var(--color-focus-blue)] to-[var(--color-ascendant-teal-end)] rounded-full animate-pulse"></div>
                <h5 className="text-xs uppercase tracking-wider font-semibold text-gray-500">our methodology</h5>
              </div>
              
              <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Building your{" "}
                </span>
                <span className="bg-gradient-to-r from-[var(--color-focus-blue)] via-[var(--color-ascendant-teal-start)] to-[var(--color-ascendant-teal-end)] bg-clip-text text-transparent font-extrabold animate-gradient">
                  growth system
                </span>
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  {" "}journey
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-prose">
                Our journey begins with understanding your craft and vision. Through our 5-component system, 
                we build a comprehensive growth engine that transforms how clients discover, evaluate, and choose your services.
              </p>
              
              {/* Progress indicators */}
              <div className="flex gap-2 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div 
                    key={i}
                    className="h-1.5 bg-gradient-to-r from-[var(--color-focus-blue)] to-[var(--color-ascendant-teal-end)] rounded-full flex-1 opacity-30 hover:opacity-100 transition-all duration-300 hover:scale-105"
                  />
                ))}
              </div>
              
              {/* Floating stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl border border-blue-100">
                  <div className="text-2xl font-bold bg-gradient-to-r from-[var(--color-focus-blue)] to-[var(--color-ascendant-teal-end)] bg-clip-text text-transparent">5</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Components</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">∞</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Growth</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced cards container */}
          <ContainerScroll className="min-h-[400vh] space-y-8 py-12">
            {GROWTH_PHASES.map((phase, index) => (
              <CardSticky
                key={phase.id}
                index={index + 2}
                className="group relative rounded-3xl border border-white/50 p-8 shadow-xl backdrop-blur-md bg-gradient-to-br from-white/90 via-white/80 to-white/70 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden"
              >
                {/* Card background pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-[var(--color-focus-blue)] to-[var(--color-ascendant-teal-end)] rounded-full filter blur-3xl"></div>
                </div>
                
                {/* Enhanced card content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-gray-800 group-hover:to-gray-600 transition-all duration-300">
                      {phase.title}
                    </h2>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-focus-blue)] to-[var(--color-ascendant-teal-end)] rounded-xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <h3 className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--color-focus-blue)] to-[var(--color-ascendant-teal-end)] bg-clip-text text-transparent px-4 py-2">
                        {String(index + 1).padStart(2, "0")}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg group-hover:text-gray-800 transition-colors duration-300">
                    {phase.description}
                  </p>
                  
                  {/* Card accent line */}
                  <div className="mt-6 h-0.5 bg-gradient-to-r from-[var(--color-focus-blue)] to-[var(--color-ascendant-teal-end)] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
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