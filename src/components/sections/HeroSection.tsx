"use client";

import React from "react";
import { ArrowDown, ArrowUpRight, FileText, Smartphone, Database, Server, Layers } from "lucide-react";
import { HeroCanvas } from "../canvas/HeroCanvas";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-28 pb-16 px-6 sm:px-12 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* 3D WebGL System Architecture Background */}
      <HeroCanvas />

      {/* Top Status Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-meta text-ghost pb-4">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/80">{personal.status}</span>
        </span>
        <span className="hidden sm:inline text-white/50">{personal.location}</span>
      </div>

      {/* Main Developer Headline & Intro Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8">
        {/* Technical Stack Line */}
        <div className="text-meta text-cyan-400 mb-5 tracking-[0.25em] font-bold">
          {personal.technicalLine}
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] font-black tracking-tight text-white uppercase font-display leading-[0.92] max-w-5xl mb-6">
          Flutter &amp; Kotlin
          <br />
          <span className="text-white/85">Developer</span>
        </h1>

        {/* Secondary Supporting Headline */}
        <h2 className="text-lg sm:text-2xl md:text-3xl text-pure/90 font-light tracking-tight max-w-3xl mb-5 leading-snug">
          {personal.secondaryHeadline}
        </h2>

        {/* Short Introduction */}
        <p className="text-sm sm:text-base text-dim max-w-2xl leading-relaxed mb-10">
          {personal.introduction}
        </p>

        {/* Working Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#work"
            className="px-7 py-3.5 rounded-full bg-white text-black text-meta font-bold tracking-widest uppercase hover:bg-white/90 transition shadow-2xl flex items-center gap-2 cursor-pointer"
            data-cursor="WORK"
          >
            <span>VIEW MY WORK</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full border border-white/20 text-white text-meta font-bold tracking-widest uppercase hover:bg-white hover:text-black transition cursor-pointer"
            data-cursor="CONTACT"
          >
            <span>CONTACT ME</span>
          </a>

          <button
            onClick={onOpenResumeModal}
            className="px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white text-meta tracking-widest uppercase hover:border-white/30 transition flex items-center gap-2 cursor-pointer"
            data-cursor="RESUME"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>DOWNLOAD RESUME</span>
          </button>
        </div>
      </div>

      {/* Bottom Technical Architecture Labels */}
      <div className="relative z-10 max-w-7xl mx-auto w-full border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-4 text-meta text-ghost">
        <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs">
          <span className="flex items-center gap-1.5 text-white/80">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            iOS &amp; Android Apps
          </span>
          <span>→</span>
          <span className="flex items-center gap-1.5 text-white/80">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            REST API
          </span>
          <span>→</span>
          <span className="flex items-center gap-1.5 text-white/80">
            <Server className="w-3.5 h-3.5 text-emerald-400" />
            Node.js
          </span>
          <span>→</span>
          <span className="flex items-center gap-1.5 text-white/80">
            <Database className="w-3.5 h-3.5 text-amber-400" />
            MongoDB
          </span>
        </div>

        <a
          href="#mobile-story"
          className="flex items-center gap-2 text-dim hover:text-white transition cursor-pointer text-[10px] sm:text-xs"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3 h-3 animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
};
