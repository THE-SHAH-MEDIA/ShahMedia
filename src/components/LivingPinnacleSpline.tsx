"use client";

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

interface LivingPinnacleSplineProps {
  className?: string;
}

const LivingPinnacleSpline: React.FC<LivingPinnacleSplineProps> = ({ className = "" }) => {
  return (
    <motion.div 
      className={`relative w-full h-full min-h-[600px] ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Suspense fallback={
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gradient-start"></div>
        </div>
      }>
        {/* Spline 3D Scene */}
        <iframe
          src="https://my.spline.design/3dcube-49eb2e8f2b5f2e8a3d8b5f2e8a3d8b5f"
          width="100%"
          height="100%"
          frameBorder="0"
          className="rounded-lg"
          style={{ minHeight: '600px' }}
          title="Living Pinnacle 3D Model"
        />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-sm font-medium text-white">AI-Powered</div>
          <div className="text-xs text-white/70">Brand Intelligence</div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-4 border border-white/20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="text-sm font-medium text-white">360° Digital</div>
          <div className="text-xs text-white/70">Ecosystem</div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/4 bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-lg p-3 border border-white/20"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1] 
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="text-sm font-medium text-white">ROI</div>
          <div className="text-xs text-white/70">Optimization</div>
        </motion.div>

        {/* Interactive Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-lg" />
      </Suspense>
    </motion.div>
  );
};

export default LivingPinnacleSpline;
