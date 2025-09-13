"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TypographyLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function TypographyLogo({ size = "md", className = "" }: TypographyLogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12", 
    lg: "h-16"
  };

  const widthClasses = {
    sm: 120,
    md: 180,
    lg: 240
  };

  return (
    <motion.div 
      className={`relative ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src="/typography.webp"
        alt="The Shah Media Typography Logo"
        width={widthClasses[size]}
        height={size === "sm" ? 32 : size === "md" ? 48 : 64}
        className="w-auto h-full object-contain"
        priority
      />
    </motion.div>
  );
}
