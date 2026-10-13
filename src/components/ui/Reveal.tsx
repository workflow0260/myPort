"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
}) => {
  const prefersReducedMotion = useReducedMotion();

  const getInitial = () => {
    if (prefersReducedMotion || direction === "none") return { opacity: 0 };
    switch (direction) {
      case "up":
        return { opacity: 0, y: 20, filter: "blur(4px)" };
      case "down":
        return { opacity: 0, y: -20, filter: "blur(4px)" };
      case "left":
        return { opacity: 0, x: 20, filter: "blur(4px)" };
      case "right":
        return { opacity: 0, x: -20, filter: "blur(4px)" };
      default:
        return { opacity: 0 };
    }
  };

  const getAnimate = () => {
    if (prefersReducedMotion || direction === "none") return { opacity: 1 };
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0, filter: "blur(0px)" };
      case "left":
      case "right":
        return { opacity: 1, x: 0, filter: "blur(0px)" };
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};
