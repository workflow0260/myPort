"use client";

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-[#173753] origin-left will-change-transform shadow-[0_1px_3px_rgba(23,55,83,0.3)]"
      style={{ scaleX }}
    />
  );
};
