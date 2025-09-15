"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SystemNode {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const systemNodes: SystemNode[] = [
  {
    id: "pillar1",
    title: "The Digital Foundation",
    description: "A high-converting, AI-enhanced website with stunning portfolio, clear CTAs, integrated booking system, and 24/7 AI chatbot.",
    icon: "🏗️"
  },
  {
    id: "pillar2", 
    title: "The Lead Generation Machine",
    description: "Hyper-local SEO and managed Meta Ads to drive qualified local traffic with visuals of your project photos.",
    icon: "🎯"
  },
  {
    id: "pillar3",
    title: "The AI Sales Assistant", 
    description: "Automated lead qualification through enrichment and email/WhatsApp sequences, delivering only pre-vetted leads.",
    icon: "🤖"
  }
];

export default function SystemWeaver() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current || !svgRef.current) return;

    const container = containerRef.current;
    const svg = svgRef.current;

    // Create GSAP timeline for the connections animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate the connecting lines drawing
    const lines = svg.querySelectorAll(".connection-line");
    lines.forEach((line, index) => {
      gsap.set(line, { strokeDasharray: "100%", strokeDashoffset: "100%" });
      tl.to(line, {
        strokeDashoffset: "0%",
        duration: 1,
        ease: "power2.inOut"
      }, index * 0.3);
    });

    // Animate nodes appearing
    const nodes = container.querySelectorAll(".system-node");
    nodes.forEach((node, index) => {
      gsap.set(node, { opacity: 0, y: 50, scale: 0.8 });
      tl.to(node, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, index * 0.2);
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="text-[#111111] font-inter">Loading System...</div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full py-16">
      {/* Background SVG for connections */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connection lines between nodes */}
        <path
          className="connection-line"
          d="M 200 200 Q 300 150 400 200"
          stroke="#007BFF"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
        />
        <path
          className="connection-line"
          d="M 400 200 Q 500 150 600 200"
          stroke="#007BFF"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
        />
        
        {/* Central connection hub */}
        <circle
          cx="400"
          cy="200"
          r="8"
          fill="url(#blueGradient)"
          className="connection-hub"
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#007BFF" />
            <stop offset="100%" stopColor="#0056b3" />
          </linearGradient>
        </defs>
      </svg>

      {/* System Nodes */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {systemNodes.map((node, index) => (
          <div
            key={node.id}
            className={`system-node relative bg-white rounded-lg p-8 shadow-lg border-2 transition-all duration-300 cursor-pointer ${
              activeNode === node.id 
                ? 'border-[#007BFF] shadow-xl scale-105' 
                : 'border-[#888888]/20 hover:border-[#008080] hover:shadow-xl'
            }`}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            {/* Node Icon */}
            <div className="w-16 h-16 mx-auto mb-6 text-4xl flex items-center justify-center gradient-ascendant-teal rounded-full">
              <span className="text-white text-2xl">{node.icon}</span>
            </div>
            
            {/* Node Content */}
            <div className="text-center">
              <h3 className="font-montserrat font-bold text-xl text-[#111111] mb-4">
                {node.title}
              </h3>
              <p className="font-inter text-[#111111] leading-relaxed">
                {node.description}
              </p>
            </div>

            {/* Connection point */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 gradient-ascendant-teal rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>
        ))}
      </div>

      {/* Interactive tooltip */}
      {activeNode && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-[#111111] text-white px-6 py-3 rounded-lg shadow-xl z-50 max-w-md text-center">
          <p className="font-inter text-sm">
            {systemNodes.find(node => node.id === activeNode)?.title} - 
            Click to learn more about this pillar of our system.
          </p>
        </div>
      )}
    </div>
  );
}