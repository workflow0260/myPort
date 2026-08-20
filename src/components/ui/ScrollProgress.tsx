"use client";

import React, { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "01", name: "HOME" },
  { id: "mobile-story", label: "02", name: "MOBILE" },
  { id: "work", label: "03", name: "PROJECTS" },
  { id: "architecture", label: "04", name: "SYSTEM" },
  { id: "skills", label: "05", name: "SKILLS" },
  { id: "about", label: "06", name: "ABOUT" },
  { id: "contact", label: "07", name: "CONTACT" },
];

export const ScrollProgress: React.FC = () => {
  const [activeSection, setActiveSection] = useState("01");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }

      // Check current section in viewport
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].label);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-3 select-none pointer-events-none"
      aria-hidden="true"
    >
      <span className="text-[10px] font-mono font-bold text-white tracking-widest">
        {activeSection}
      </span>
      <div className="w-0.5 h-20 bg-white/10 rounded-full relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bg-cyan-400 rounded-full transition-all duration-150"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
      <span className="text-[10px] font-mono text-ghost tracking-widest">07</span>
    </div>
  );
};
