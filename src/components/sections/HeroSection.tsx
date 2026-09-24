"use client";

import React, { useState, useEffect } from "react";
import { ArrowDown, FileText, Activity, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const { metrics } = PORTFOLIO_DATA;
  const [copiedCoords, setCopiedCoords] = useState(false);
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kolkata",
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyCoords = () => {
    navigator.clipboard.writeText("26.9124° N, 75.7873° E (Jaipur, Rajasthan)");
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  return (
    <section
      id="hero"
      aria-label="Introduction & Overview"
      className="relative w-full pt-28 sm:pt-36 pb-20 px-6 sm:px-12 border-b border-[rgba(17,17,16,0.08)] bg-[var(--bg-background)]"
    >
      <div className="max-w-[1200px] mx-auto space-y-10">
        {/* Developer Telemetry / Status Ribbon */}
        <Reveal delay={0.05}>
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#8b8b94] font-mono border-b border-[rgba(17,17,16,0.06)] pb-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-[#173753] font-semibold">
                <Activity className="w-3.5 h-3.5 text-[#173753] animate-pulse" aria-hidden="true" />
                <span>SYS.READY // MOBILE LAB</span>
              </span>
              <span className="text-[#d4d4d8]" aria-hidden="true">|</span>
              <button
                onClick={copyCoords}
                className="hover:text-[#173753] transition cursor-pointer flex items-center gap-1 focus-visible:ring-1 focus-visible:ring-[#173753]"
                title="Click to copy location coordinates"
                aria-label="Copy Jaipur, Rajasthan coordinates to clipboard"
              >
                <span>26.9124° N, 75.7873° E</span>
                {copiedCoords ? <Check className="w-3 h-3 text-emerald-600" /> : null}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">LOCATION: JAIPUR, IN</span>
              <span aria-hidden="true">•</span>
              <span className="text-[#173753] font-semibold">{timeStr}</span>
            </div>
          </div>
        </Reveal>

        {/* Eyebrow badge */}
        <Reveal delay={0.1}>
          <div>
            <span className="eyebrow inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#173753]/10 text-[#173753] border border-[#173753]/15">
              <span className="status-dot animate-pulse" aria-hidden="true" />
              <span>SAHIL MANSURI // FLUTTER DEVELOPER</span>
            </span>
          </div>
        </Reveal>

        {/* Large Editorial Headline - Semantic H1 */}
        <div className="space-y-4 max-w-4xl">
          <Reveal delay={0.15}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-normal text-[#111110] leading-[1.05] tracking-tight">
              <span className="sr-only">Sahil Mansuri — Flutter Developer in Jaipur &amp; Mobile App Developer. </span>
              I build production{" "}
              <span className="text-[#173753] font-medium underline decoration-[rgba(23,55,83,0.25)] underline-offset-8">
                mobile experiences.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base sm:text-xl text-[#5a5a62] leading-relaxed max-w-2xl pt-2">
              Flutter Developer in Jaipur with 1+ year of hands-on experience building and maintaining production mobile applications for iOS and Android. Strong in Dart, Kotlin, Jetpack Compose, Bloc/Cubit, Firebase, REST APIs, and Clean Architecture.
            </p>
          </Reveal>
        </div>

        {/* Primary Action Buttons */}
        <Reveal delay={0.25}>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#work"
              className="group relative inline-flex select-none items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 bg-[#173753] text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_4px_12px_-4px_rgba(23,55,83,0.4)] hover:bg-[#0f2538] hover:-translate-y-0.5 h-10 px-5 text-xs font-mono tracking-wider uppercase cursor-pointer"
              data-cursor="WORK"
              aria-label="View selected Flutter mobile app projects"
            >
              <span>Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>

            <button
              onClick={onOpenResumeModal}
              className="group relative inline-flex select-none items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 border border-[rgba(17,17,16,0.12)] bg-white text-[#111110] hover:border-[#173753] hover:text-[#173753] hover:-translate-y-0.5 h-10 px-5 text-xs font-mono tracking-wider uppercase cursor-pointer shadow-sm"
              data-cursor="RESUME"
              aria-label="Open verified resume modal"
            >
              <FileText className="w-3.5 h-3.5 text-[#173753]" aria-hidden="true" />
              <span>View Resume</span>
            </button>
          </div>
        </Reveal>

        {/* Snowbros-style Engineered Metric & Focus Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
          {/* Card 1: 1M+ Downloads */}
          <Reveal delay={0.3}>
            <div className="card-engineered rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 h-full hover:scale-[1.01] transition-transform">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="status-dot animate-pulse" aria-hidden="true" />
                  <span className="text-[#8b8b94] font-mono">Milestone</span>
                </div>
                <span className="font-mono text-[11px] font-bold text-[#173753] px-2 py-0.5 rounded bg-[#173753]/10">
                  1M+ USERS
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-display font-black text-[#173753]">
                  {metrics.value}
                </div>
                <h2 className="text-sm font-semibold text-[#111110] uppercase tracking-wide mt-1 font-mono">
                  {metrics.project}
                </h2>
                <p className="text-xs text-[#5a5a62] leading-relaxed mt-2">
                  Vedic astrology mobile app featuring Janam Kundli, live spiritual streaming, and horoscope predictions scaled to over 1M+ downloads on Google Play.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Experience at Appic Software */}
          <Reveal delay={0.35}>
            <div className="card-engineered rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 h-full hover:scale-[1.01] transition-transform">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="status-dot" aria-hidden="true" />
                  <span className="text-[#8b8b94] font-mono">Active Role</span>
                </div>
                <span className="font-mono text-[10px] text-[#5a5a62]">
                  SEP 2025 — PRESENT
                </span>
              </div>
              <div>
                <h2 className="text-lg font-display font-bold text-[#111110] uppercase">
                  Flutter Developer
                </h2>
                <p className="text-xs text-[#173753] font-mono font-medium mt-0.5">
                  Appic Software LLP • Jaipur
                </p>
                <p className="text-xs text-[#5a5a62] leading-relaxed mt-2">
                  Developing and maintaining production Flutter applications with responsive UI, performance, Bloc state management, and Clean Architecture.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Architecture & Flow */}
          <Reveal delay={0.4}>
            <div className="card-engineered rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 h-full hover:scale-[1.01] transition-transform">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="status-dot" aria-hidden="true" />
                  <span className="text-[#8b8b94] font-mono">Core Tooling</span>
                </div>
                <span className="font-mono text-[10px] text-[#173753] font-semibold">
                  CROSS-PLATFORM
                </span>
              </div>
              <div>
                <h2 className="text-lg font-display font-bold text-[#111110] uppercase">
                  Flutter • Kotlin • Compose
                </h2>
                <p className="text-xs text-[#5a5a62] leading-relaxed mt-2">
                  Predictable reactive flows with Bloc/Cubit, Firebase, Supabase, REST APIs, WebSockets, and unit/widget testing.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
