"use client"

import { ContainerScroll, CardSticky } from "@/components/blocks/cards-stack"

const GROWTH_PILLARS = [
  {
    id: "pillar-1",
    title: "Digital Foundation",
    description: "Transform your online presence with a visually stunning portfolio website that showcases your mastery. Complete with 24/7 AI Concierge, professional brand presentation, and integrated booking system - your digital showroom that works around the clock.",
  },
  {
    id: "pillar-2",
    title: "Lead Generation Machine",
    description: "Dominate Shivamogga's market with sophisticated Meta ad campaigns and complete Google Business Profile optimization. Geographic targeting that brings high-intent, qualified prospects directly to your door.",
  },
  {
    id: "pillar-3",
    title: "AI Sales Assistant",
    description: "Intelligent lead qualification system that pre-screens prospects for budget, timeline, and project scope. Get pre-vetted, ready-to-buy clients delivered with complete context - no more tire-kickers.",
  },
  {
    id: "pillar-4",
    title: "Local Market Domination",
    description: "Become the undisputed #1 choice for premium projects in Shivamogga. Our hyper-local approach ensures you're the first name that comes to mind when someone needs a master craftsman.",
  },
  {
    id: "pillar-5",
    title: "Strategic Partnership",
    description: "Work with a dedicated team that understands Shivamogga's market and your craft. We're not just service providers - we're invested in making you the market leader in your field.",
  },
]

const CardsStackSection = () => {
  return (
    <div className="w-full min-h-svh bg-gradient-to-br from-[#F8F9FA] via-white to-[#E8F4FD] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-20 lg:py-8">
            <h5 className="text-xs uppercase tracking-wide text-[#007BFF] font-semibold mb-4">the local growth engine</h5>
            <h2 className="mb-6 text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
              Building your{" "}
              <span className="text-[#007BFF]">customer acquisition</span> system
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed max-w-lg">
              We don&apos;t just run ads or build websites. We install a complete, end-to-end customer acquisition system that transforms unpredictable referrals into a steady stream of qualified prospects ready to invest in quality work.
            </p>
          </div>
          <div className="w-full">
            <ContainerScroll className="min-h-[200vh] space-y-8">
              {GROWTH_PILLARS.map((pillar, index) => (
                <CardSticky
                  key={pillar.id}
                  index={index + 2}
                  className="rounded-2xl border p-8 shadow-md backdrop-blur-md"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="my-6 text-2xl font-bold tracking-tighter">
                      {pillar.title}
                    </h2>
                    <h3 className="text-2xl font-bold text-indigo-500">
                      {String(index + 1).padStart(2, "0")}
                    </h3>
                  </div>
                  <p className="text-foreground">{pillar.description}</p>
                </CardSticky>
              ))}
            </ContainerScroll>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsStackSection