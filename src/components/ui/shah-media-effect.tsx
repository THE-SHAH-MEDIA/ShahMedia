"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const initialProps = {
  pathLength: 0,
  opacity: 0,
} as const;

const animateProps = {
  pathLength: 1,
  opacity: 1,
} as const;

type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

function ShahMediaEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;
  
  // Debug: Log when component renders
  console.log('ShahMediaEffect rendering with speed:', speed);

  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="12"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>SHAH MEDIA</title>

      {/* S */}
      <motion.path
        d="M60 80C60 50 80 30 110 30C140 30 160 50 160 80C160 110 140 120 110 120C80 120 60 140 60 170C60 180 70 190 110 190C140 190 160 170 160 150"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          opacity: { duration: 0.4 },
        }}
      />

      {/* H */}
      <motion.path
        d="M180 30L180 190M180 110L240 110M240 30L240 190"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeInOut",
          delay: calc(0.3),
          opacity: { duration: 0.3, delay: calc(0.3) },
        }}
      />

      {/* A */}
      <motion.path
        d="M280 190L310 30L340 190M290 140L330 140"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: "easeInOut",
          delay: calc(0.6),
          opacity: { duration: 0.35, delay: calc(0.6) },
        }}
      />

      {/* H */}
      <motion.path
        d="M360 30L360 190M360 110L420 110M420 30L420 190"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeInOut",
          delay: calc(0.9),
          opacity: { duration: 0.3, delay: calc(0.9) },
        }}
      />

      {/* M */}
      <motion.path
        d="M460 190L460 30L490 80L520 30L520 190"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(1.2),
          opacity: { duration: 0.4, delay: calc(1.2) },
        }}
      />

      {/* E */}
      <motion.path
        d="M540 30L540 190M540 30L600 30M540 110L590 110M540 190L600 190"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: "easeInOut",
          delay: calc(1.5),
          opacity: { duration: 0.35, delay: calc(1.5) },
        }}
      />

      {/* D */}
      <motion.path
        d="M620 30L620 190M620 30C650 30 680 50 680 110C680 170 650 190 620 190"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(1.8),
          opacity: { duration: 0.4, delay: calc(1.8) },
        }}
      />

      {/* I */}
      <motion.path
        d="M700 30L700 190M680 30L720 30M680 190L720 190"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.5),
          ease: "easeInOut",
          delay: calc(2.1),
          opacity: { duration: 0.25, delay: calc(2.1) },
        }}
      />

      {/* A */}
      <motion.path
        d="M740 190L770 30L800 190M750 140L790 140"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: "easeInOut",
          delay: calc(2.4),
          opacity: { duration: 0.35, delay: calc(2.4) },
        }}
        onAnimationComplete={() => {
          console.log('Animation completed for final letter');
          onAnimationComplete?.();
        }}
      />
    </motion.svg>
  );
}

export { ShahMediaEffect };