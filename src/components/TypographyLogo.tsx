"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TypographyLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function TypographyLogo({ size = "md", className = "" }: TypographyLogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-28", 
    lg: "h-32"
  };

  const widthClasses = {
    sm: 80,
    md: 420,
    lg: 480
  };

  return (
    <motion.div 
      className={`relative ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src="/typography-new.png"
        alt="The Shah Media Typography Logo"
        width={widthClasses[size]}
        height={size === "sm" ? 24 : size === "md" ? 112 : 128}
        className="w-auto h-full object-contain"
        priority
      />
    </motion.div>
  );
}
