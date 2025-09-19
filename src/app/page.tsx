"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CardsStackSectionNew from "@/components/CardsStackSectionNew";
import { ThreeDPricingCards } from "@/components/ThreeDPricingCards";
import { ClientShowcase } from "@/components/ClientShowcase";
import EnhancedHero from "@/components/EnhancedHero";
import AnimatedSection from "@/components/AnimatedSection";
import { AppleCardsCarousel } from "@/components/AppleCardsCarousel";
import { AiConcierge } from "@/components/interactive/AiConcierge";

export default function Home() {
  const [selectedInvestment, setSelectedInvestment] = useState<string>("growth");

  return (
    <main>
    {/* Hero Section with Enhanced Hero Component */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        <EnhancedHero />
      </section>

      {/* Problem & Promise Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E8F4FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#111111] mb-8">
                  Your Craft is World-Class. Is Your Client Pipeline?
                </h2>
                <ul className="space-y-6">
                  <AnimatedSection animation="fadeInUp" delay={0.1}>
                    <li className="flex items-start hover-lift p-4 rounded-lg transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#007BFF] mt-3 mr-4 flex-shrink-0 pulse-glow"></div>
                      <p className="font-inter text-lg text-[#111111]">
                        <strong>Inconsistent Leads:</strong> You rely on word-of-mouth, which is unpredictable and not scalable.
                      </p>
                    </li>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInUp" delay={0.2}>
                    <li className="flex items-start hover-lift p-4 rounded-lg transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#007BFF] mt-3 mr-4 flex-shrink-0 pulse-glow"></div>
                      <p className="font-inter text-lg text-[#111111]">
                        <strong>Wasted Time:</strong> Hours spent on phone calls with unqualified &ldquo;tire-kicker&rdquo; leads instead of billable work.
                      </p>
                    </li>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInUp" delay={0.3}>
                    <li className="flex items-start hover-lift p-4 rounded-lg transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#007BFF] mt-3 mr-4 flex-shrink-0 pulse-glow"></div>
                      <p className="font-inter text-lg text-[#111111]">
                        <strong>Weak Online Presence:</strong> Your digital &quot;shopfront&quot; fails to convert the few visitors you get.
                      </p>
                    </li>
                  </AnimatedSection>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInRight">
              <div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#111111] mb-8">
                  Stop Chasing Leads. Start Attracting Your Ideal Projects.
                </h2>
                <p className="font-inter text-lg text-[#111111] leading-relaxed mb-8">
                  Our mission is to replace unpredictability with a reliable, automated engine for attracting 
                  a steady stream of high-quality clients. We don&apos;t just run ads or build websites; we install 
                  a complete, end-to-end customer acquisition system into your business.
                </p>
                <p className="font-inter text-lg text-[#111111] leading-relaxed">
                  In Shivamogga and our surrounding districts, there are masters of their craft—brilliant 
                  interior designers, visionary architects, and builders who create masterpieces. But their 
                  growth is often left to chance, held back by inconsistent referrals and the constant 
                  headache of finding the next great client.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 9-Pillar System Section with Apple-Style Carousel */}
      <AppleCardsCarousel />

      {/* Cards Stack Section - Growth System Components */}
      <CardsStackSectionNew />

      {/* Client Showcase - Animated Testimonials */}
      <ClientShowcase />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E8F4FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <div>
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#111111] mb-6">
                The Local Growth Engine
              </h2>
              <p className="font-inter text-xl text-[#111111] max-w-3xl mx-auto">
                Complete customer acquisition system for Master Craftsmen
              </p>
            </div>
          </AnimatedSection>

          {/* Three-Tier Pricing Structure with 3D Cards */}
          <div className="mb-16">
            <h3 className="font-montserrat font-bold text-3xl text-[#111111] text-center mb-12">Choose Your Growth Path</h3>
            
            <AnimatedSection animation="fadeInUp">
              <ThreeDPricingCards />
            </AnimatedSection>
          </div>

          {/* Why This Investment Works */}
          <AnimatedSection animation="fadeInUp">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 mb-16 border border-white/20">
              <h3 className="font-montserrat font-bold text-2xl text-[#111111] text-center mb-8">Why This Investment Works</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4 icon-bounce">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="font-inter text-sm text-[#111111]">One premium client covers the monthly investment</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4 icon-bounce">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="font-inter text-sm text-[#111111]">No more unqualified tire-kicker leads</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4 icon-bounce">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="font-inter text-sm text-[#111111]">Predictable growth replaces word-of-mouth</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4 icon-bounce">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="font-inter text-sm text-[#111111]">Focus returns to your craft, not client acquisition</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Unified Investment & Growth Section */}
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <AnimatedSection animation="scaleIn" delay={0.3}>
                <h3 className="font-montserrat font-bold text-3xl text-[#111111] mb-4">Ready to Build Your Growth Engine & Transform Your Business?</h3>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={0.4}>
                <p className="font-inter text-lg text-[#111111] mb-8">
                  Choose the investment level that matches your growth ambitions and let&apos;s discuss how we can be your strategic partner
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="slideInBottom" delay={0.5}>
                <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
                  <div 
                    className={`rounded-lg p-4 transition-all duration-300 hover:scale-105 cursor-pointer ${
                      selectedInvestment === "digital" 
                        ? "bg-[#007BFF] text-white shadow-lg scale-105" 
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    onClick={() => setSelectedInvestment("digital")}
                  >
                    <div className={`font-bold ${selectedInvestment === "digital" ? "text-white" : "text-[#007BFF]"}`}>Digital Atelier</div>
                    <div className={selectedInvestment === "digital" ? "text-white" : "text-[#111111]"}>₹50,000 one-time</div>
                  </div>
                  <div 
                    className={`rounded-lg p-4 transition-all duration-300 hover:scale-105 cursor-pointer ${
                      selectedInvestment === "growth" 
                        ? "bg-[#007BFF] text-white shadow-lg scale-105 ring-2 ring-[#007BFF]" 
                        : "bg-white/80 border-2 border-[#007BFF] hover:scale-110"
                    }`}
                    onClick={() => setSelectedInvestment("growth")}
                  >
                    <div className={`font-bold ${selectedInvestment === "growth" ? "text-white" : "text-[#007BFF]"}`}>Growth Engine</div>
                    <div className={selectedInvestment === "growth" ? "text-white" : "text-[#111111]"}>₹30,000/month + ₹40,000 setup</div>
                  </div>
                  <div 
                    className={`rounded-lg p-4 transition-all duration-300 hover:scale-105 cursor-pointer ${
                      selectedInvestment === "enterprise" 
                        ? "bg-[#007BFF] text-white shadow-lg scale-105" 
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    onClick={() => setSelectedInvestment("enterprise")}
                  >
                    <div className={`font-bold ${selectedInvestment === "enterprise" ? "text-white" : "text-[#007BFF]"}`}>Enterprise Level</div>
                    <div className={selectedInvestment === "enterprise" ? "text-white" : "text-[#111111]"}>₹50,000/month + ₹60,000 setup</div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={0.6}>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
                  <p className="font-inter text-[#111111] font-medium">
                    This growth engine is designed for ambitious Master Craftsmen who know they are the best at what they do and are ready to build a brand that proves it. Let&apos;s have a conversation about your growth goals—no pressure, just strategic partnership.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="scaleIn" delay={0.7}>
                <Button 
                  asChild 
                  className="btn-primary px-12 py-6 text-xl font-medium rounded-md pulse-glow hover:scale-110 transition-all duration-300"
                  size="lg"
                >
                  <Link href="mailto:hello@shahmedia.in?subject=Discovery Call Request">
                    Book Your Free Discovery Call
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E8F4FD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#111111] mb-8">
                  Why Shah Media Exists
                </h2>
                <div className="space-y-6 text-lg font-inter text-[#111111] leading-relaxed">
                  <AnimatedSection animation="fadeInUp" delay={0.1}>
                    <p>
                      We founded Shah Media because we saw incredible talent in Shivamogga being held back by 
                      outdated growth methods. Master craftsmen relying on word-of-mouth and hoping for the next referral.
                    </p>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInUp" delay={0.2}>
                    <p>
                      Our local champions deserve the same sophisticated growth systems that power major companies 
                      in metro cities. That&apos;s exactly what we deliver—enterprise-level customer acquisition technology, 
                      tailored for our community.
                    </p>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInUp" delay={0.3}>
                    <p>
                      We don&apos;t just run ads or build websites. We install a complete growth engine that transforms 
                      unpredictable lead flow into a steady stream of qualified prospects who are ready to invest 
                      in quality work.
                    </p>
                  </AnimatedSection>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInRight" className="card-hover">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-white/20">
                <h3 className="font-montserrat font-bold text-2xl text-[#111111] mb-6">
                  The Strategic Partner Difference
                </h3>
                <ul className="space-y-4 font-inter text-[#111111]">
                  <li className="flex items-start gap-3 hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-[#007BFF] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <span><strong>Local Focus:</strong> We understand Shivamogga&apos;s market and speak your clients&apos; language</span>
                  </li>
                  <li className="flex items-start gap-3 hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-[#007BFF] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <span><strong>Proven System:</strong> One complete package, not pieced-together services</span>
                  </li>
                  <li className="flex items-start gap-3 hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-[#007BFF] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <span><strong>Mutual Success:</strong> We only win when you win, creating true partnership</span>
                  </li>
                  <li className="flex items-start gap-3 hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-[#007BFF] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <span><strong>Elite Standards:</strong> We work exclusively with high-value service professionals</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* AI Concierge Chat Assistant */}
      <AiConcierge />
    </main>
  );
}
