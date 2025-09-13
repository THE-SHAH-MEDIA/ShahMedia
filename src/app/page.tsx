"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection, { StaggeredList } from "@/components/AnimatedSection";
import EnhancedHero from "@/components/EnhancedHero";
import PillarFlipCards from "@/components/PillarFlipCards";
import TestimonialsSection from "@/components/TestimonialsSection";

// New Interactive Components
import { LivingPinnacle } from "@/components/interactive/LivingPinnacle";
import { AiConcierge as InteractiveAiConcierge } from "@/components/interactive/AiConcierge";

export default function Home() {
  const [selectedInvestment, setSelectedInvestment] = useState<string>("growth");

  return (
    <main>
      {/* Hero Section with Enhanced Hero Component */}
      <section className="relative min-h-screen bg-[#F1F1F1] overflow-hidden">
        <EnhancedHero />
      </section>

      {/* Problem & Promise Section */}
      <section className="py-20 bg-white">
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
                        <strong>Wasted Time:</strong> Hours spent on phone calls with unqualified "tire-kicker" leads instead of billable work.
                      </p>
                    </li>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInUp" delay={0.3}>
                    <li className="flex items-start hover-lift p-4 rounded-lg transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#007BFF] mt-3 mr-4 flex-shrink-0 pulse-glow"></div>
                      <p className="font-inter text-lg text-[#111111]">
                        <strong>Weak Online Presence:</strong> Your digital "shopfront" fails to convert the few visitors you get.
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

      {/* System Section with System Weaver */}
      <section id="system" className="py-20 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="scaleIn" className="text-center mb-16">
            <div>
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#111111] mb-6">
                Our Three-Pillar System
              </h2>
              <p className="font-inter text-xl text-[#111111] max-w-3xl mx-auto leading-relaxed">
                We are not a "freelance agency"; we sell one product. For a fixed price, 
                you get a complete system built on three pillars:
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="scaleIn" delay={0.2}>
            <PillarFlipCards />
          </AnimatedSection>
        </div>
      </section>

      {/* Results / Case Studies Section */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <div>
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#111111] mb-6">
                Results that Build Confidence
              </h2>
              <p className="font-inter text-lg text-[#111111] max-w-3xl mx-auto">
                A snapshot of outcomes our system is designed to achieve for Master Craftsmen.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeInUp" delay={0.1}>
              <div className="bg-[#F8FAFC] rounded-xl p-8 card-hover h-full">
                <div className="text-4xl font-bold text-[#007BFF] mb-2">3×</div>
                <div className="font-inter text-[#111111]">Increase in qualified inquiries in 60 days</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="bg-[#F8FAFC] rounded-xl p-8 card-hover h-full">
                <div className="text-4xl font-bold text-[#008080] mb-2"><span className="align-middle">↓</span> 45%</div>
                <div className="font-inter text-[#111111]">Reduction in time spent with unqualified leads</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={0.3}>
              <div className="bg-[#F8FAFC] rounded-xl p-8 card-hover h-full">
                <div className="text-4xl font-bold text-[#111111] mb-2">+95</div>
                <div className="font-inter text-[#111111]">Local search visibility score (GBP optimization)</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
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

          {/* Three-Tier Pricing Structure */}
          <div className="mb-16">
            <h3 className="font-montserrat font-bold text-3xl text-[#111111] text-center mb-12">Choose Your Growth Path</h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Digital Atelier Only */}
              <AnimatedSection animation="fadeInLeft">
                <div className="bg-white border-2 border-[#E5E5E5] rounded-xl p-8 hover:border-[#007BFF] transition-all duration-300 card-hover cursor-pointer group">
                  <div className="text-center mb-6">
                    <h4 className="font-montserrat font-bold text-2xl text-[#111111] mb-2">Digital Atelier</h4>
                    <p className="font-inter text-[#888888] mb-4">Perfect Portfolio Foundation</p>
                    <div className="text-5xl font-bold text-[#007BFF] mb-2 group-hover:scale-110 transition-transform duration-300">₹50,000</div>
                    <p className="font-inter text-sm text-[#888888]">One-time investment</p>
                  </div>
                  
                  <ul className="space-y-3 font-inter text-sm text-[#111111] mb-8">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Stunning portfolio website built on modern stack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Dream Project intake form with inspiring questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>24/7 AI Concierge trained on your philosophy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Integrated booking system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mobile-first, fast-loading design</span>
                    </li>
                  </ul>
                  
                  <Button 
                    asChild 
                    className="w-full border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white transition-all duration-300 hover:scale-105"
                    variant="outline"
                  >
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </div>
              </AnimatedSection>

              {/* Growth Engine - Most Popular */}
              <AnimatedSection animation="fadeInUp">
                <div className="bg-white border-2 border-[#007BFF] rounded-xl p-8 relative card-hover transform scale-105 hover:scale-110 transition-transform duration-300 cursor-pointer group">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#007BFF] text-white px-4 py-2 rounded-full text-sm font-medium pulse-glow">Most Popular</span>
                  </div>
                  
                  <div className="text-center mb-6 mt-4">
                    <h4 className="font-montserrat font-bold text-2xl text-[#111111] mb-2">Growth Engine</h4>
                    <p className="font-inter text-[#888888] mb-4">Complete Customer Acquisition System</p>
                    <div className="text-5xl font-bold text-[#007BFF] mb-2 group-hover:scale-110 transition-transform duration-300">₹30,000</div>
                    <p className="font-inter text-sm text-[#888888]">per month + ₹40,000 setup</p>
                  </div>
                  
                  <ul className="space-y-3 font-inter text-sm text-[#111111] mb-8">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Everything in Digital Atelier</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Complete Google Business Profile optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Sophisticated Meta ad campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Geographic targeting within Shivamogga</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>AI-powered lead qualification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Monthly performance reporting</span>
                    </li>
                  </ul>
                  
                  <Button 
                    asChild 
                    className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white transition-all duration-300 hover:scale-105"
                  >
                    <Link href="#contact">Start Growing</Link>
                  </Button>
                </div>
              </AnimatedSection>

              {/* Enterprise Level */}
              <AnimatedSection animation="fadeInRight">
                <div className="bg-white border-2 border-[#E5E5E5] rounded-xl p-8 hover:border-[#008080] transition-all duration-300 card-hover cursor-pointer group">
                  <div className="text-center mb-6">
                    <h4 className="font-montserrat font-bold text-2xl text-[#111111] mb-2">Enterprise Level</h4>
                    <p className="font-inter text-[#888888] mb-4">Maximum Market Domination</p>
                    <div className="text-5xl font-bold text-[#008080] mb-2 group-hover:scale-110 transition-transform duration-300">₹50,000</div>
                    <p className="font-inter text-sm text-[#888888]">per month + ₹60,000 setup</p>
                  </div>
                  
                  <ul className="space-y-3 font-inter text-sm text-[#111111] mb-8">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Everything in Growth Engine</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Multi-platform advertising (Google, Meta, LinkedIn)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Advanced marketing automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Weekly strategy calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Brand expansion consulting</span>
                    </li>
                  </ul>
                  
                  <Button 
                    asChild 
                    className="w-full border-[#008080] text-[#008080] hover:bg-[#008080] hover:text-white transition-all duration-300 hover:scale-105"
                    variant="outline"
                  >
                    <Link href="#contact">Go Enterprise</Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Why This Investment Works */}
          <AnimatedSection animation="fadeInUp">
            <div className="bg-[#F1F1F1] rounded-xl p-8 mb-16">
              <h3 className="font-montserrat font-bold text-2xl text-[#111111] text-center mb-8">Why This Investment Works</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          {/* Complete System Includes */}
          <div className="mb-16">
            <h3 className="font-montserrat font-bold text-3xl text-[#111111] text-center mb-12">Complete System Includes</h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Digital Atelier */}
              <div className="bg-white border-2 border-[#007BFF] rounded-lg p-8">
                <div className="w-12 h-12 bg-[#E3F2FD] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#007BFF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-montserrat font-bold text-xl text-[#111111] mb-2">Digital Atelier</h4>
                <p className="font-inter text-[#007BFF] font-medium mb-4">The 'Shopfront'</p>
                
                <ul className="space-y-3 font-inter text-sm text-[#111111]">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Visually stunning portfolio website built on modern stack</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>The 'Dream Project' intake form with inspiring questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>24/7 AI Concierge trained on your services and philosophy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Integrated booking system for consultations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mobile-first, fast-loading design showcasing your best work</span>
                  </li>
                </ul>
              </div>

              {/* Reputation Magnet */}
              <div className="bg-white border-2 border-[#007BFF] rounded-lg p-8">
                <div className="w-12 h-12 bg-[#E3F2FD] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#007BFF]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h4 className="font-montserrat font-bold text-xl text-[#111111] mb-2">Reputation Magnet</h4>
                <p className="font-inter text-[#007BFF] font-medium mb-4">The 'Engine'</p>
                
                <ul className="space-y-3 font-inter text-sm text-[#111111]">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Complete Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sophisticated Meta ad campaigns on Instagram and Facebook</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Geographic targeting within Shivamogga region</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Local search domination for high-intent keywords</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Visually-driven ads targeting high-income homeowners</span>
                  </li>
                </ul>
              </div>

              {/* AI Sales Assistant */}
              <div className="bg-white border-2 border-[#007BFF] rounded-lg p-8">
                <div className="w-12 h-12 bg-[#E3F2FD] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#007BFF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-montserrat font-bold text-xl text-[#111111] mb-2">AI Sales Assistant</h4>
                <p className="font-inter text-[#007BFF] font-medium mb-4">The 'Qualifier'</p>
                
                <ul className="space-y-3 font-inter text-sm text-[#111111]">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Automatic lead enrichment and data collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>AI-powered qualification via email/WhatsApp sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Pre-vetted, high-value leads delivered to your inbox</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Budget and timeline pre-screening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Complete lead handoff with full context</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Investment Summary */}
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="bg-gradient-to-r from-[#F1F1F1] to-[#E3F2FD] rounded-xl p-8 text-center">
              <AnimatedSection animation="scaleIn" delay={0.3}>
                <h3 className="font-montserrat font-bold text-2xl text-[#111111] mb-4">Ready to Transform Your Business?</h3>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={0.4}>
                <p className="font-inter text-lg text-[#111111] mb-6">
                  Choose the investment level that matches your growth ambitions
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
                        ? "bg-[#008080] text-white shadow-lg scale-105" 
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    onClick={() => setSelectedInvestment("enterprise")}
                  >
                    <div className={`font-bold ${selectedInvestment === "enterprise" ? "text-white" : "text-[#008080]"}`}>Enterprise Level</div>
                    <div className={selectedInvestment === "enterprise" ? "text-white" : "text-[#111111]"}>₹50,000/month + ₹60,000 setup</div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={0.6}>
                <div className="bg-white rounded-lg p-6 mb-8">
                  <p className="font-inter text-[#111111] font-medium">
                    This system is not for every business. It's for the ambitious Master Craftsmen who know they are the best at what they do and are ready to build a brand that proves it.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="scaleIn" delay={0.7}>
                <Button 
                  asChild 
                  className="btn-primary px-12 py-6 text-xl font-medium rounded-md pulse-glow hover:scale-110 transition-all duration-300"
                  size="lg"
                >
                  <Link href="#contact">Schedule Your Discovery Call</Link>
                </Button>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F1F1F1]">
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
                      in metro cities. That's exactly what we deliver—enterprise-level customer acquisition technology, 
                      tailored for our community.
                    </p>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInUp" delay={0.3}>
                    <p>
                      We don't just run ads or build websites. We install a complete growth engine that transforms 
                      unpredictable lead flow into a steady stream of qualified prospects who are ready to invest 
                      in quality work.
                    </p>
                  </AnimatedSection>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInRight" className="card-hover">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="font-montserrat font-bold text-2xl text-[#111111] mb-6">
                  The Strategic Partner Difference
                </h3>
                <ul className="space-y-4 font-inter text-[#111111]">
                  <li className="flex items-start gap-3 hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <span><strong>Local Focus:</strong> We understand Shivamogga's market and speak your clients' language</span>
                  </li>
                  <li className="flex items-start gap-3 hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <span><strong>Proven System:</strong> One complete package, not pieced-together services</span>
                  </li>
                  <li className="flex items-start gap-3 hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <span><strong>Mutual Success:</strong> We only win when you win, creating true partnership</span>
                  </li>
                  <li className="flex items-start gap-3 hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <span><strong>Elite Standards:</strong> We work exclusively with high-value service professionals</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#111111] mb-8">
              Ready to Build Your Growth Engine?
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <p className="font-inter text-xl text-[#111111] mb-12 max-w-2xl mx-auto">
              Book a free discovery call to see if we&apos;re the right strategic partner for your business. 
              No pressure, just a conversation about your growth goals.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="scaleIn" delay={0.4}>
            <Button 
              asChild 
              className="btn-primary hover-lift px-12 py-6 text-xl font-medium rounded-md"
              size="lg"
            >
              <Link href="mailto:hello@shahmedia.in?subject=Discovery Call Request">
                Book Your Free Discovery Call
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
      
      {/* AI Concierge Chat Assistant */}
      <InteractiveAiConcierge />
    </main>
  );
}
