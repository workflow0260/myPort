"use client";

import React, { useState } from "react";
import { Smartphone, Layers, Server, Database, ArrowRight, CheckCircle2, Zap, Shield, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const MobileStorySection: React.FC = () => {
  const { mobileStory } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState(0);

  const pillars = mobileStory.pillars;

  return (
    <section id="mobile-story" className="py-32 px-6 sm:px-12 relative bg-[#030303] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="text-meta text-ghost mb-3 block tracking-[0.3em]">
          MOBILE ENGINEERING // CORE PHILOSOPHY
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-display tracking-tight uppercase">
              {mobileStory.heading}
            </h2>
            <p className="text-meta text-cyan-400 mt-2 tracking-widest font-bold">
              {mobileStory.subheading}
            </p>
          </div>
          <p className="text-sm sm:text-base text-dim max-w-lg leading-relaxed">
            {mobileStory.description}
          </p>
        </div>

        {/* Interactive Mobile Pipeline Visual & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Simulated Mobile Device Frame (5 Cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#08080a] border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 text-meta">
                <span className="text-cyan-400 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  FLUTTER &amp; KOTLIN RUNTIME
                </span>
                <span className="text-ghost">60–120 FPS</span>
              </div>

              {/* Mobile Mockup Device Frame */}
              <div className="relative mx-auto w-full max-w-[280px] rounded-[36px] bg-[#0d0d12] border-2 border-white/20 p-4 shadow-2xl space-y-3">
                {/* Notch / Speaker */}
                <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>

                {/* Animated Screen Layers */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between text-[10px] text-dim font-mono">
                    <span>STATE: RIVERPOD</span>
                    <span className="text-emerald-400">READY</span>
                  </div>
                  <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                  <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                </div>

                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-pure space-y-1">
                  <span className="text-[10px] font-mono text-cyan-300 block">HTTP / REST CLIENT</span>
                  <div className="font-mono text-[10px] text-cyan-400 truncate">
                    Dio.get(&quot;/api/v1/sync&quot;)
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-pure space-y-1">
                  <span className="text-[10px] font-mono text-indigo-300 block">OFFLINE STORAGE</span>
                  <div className="font-mono text-[10px] text-indigo-400 truncate">
                    Room / Hive Cache: Validated
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-meta text-ghost">
              <span>NATIVE PLATFORM APIs</span>
              <span className="text-white font-mono">ANDROID &amp; iOS</span>
            </div>
          </div>

          {/* Right: 4 Core Pillars Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                onMouseEnter={() => setActiveTab(idx)}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#0c0c12] border-cyan-400/40 shadow-[0_0_30px_-10px_rgba(56,189,248,0.15)]"
                    : "bg-[#08080a] border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-meta font-mono font-bold text-white text-xs">
                      {pillar.number}
                    </span>
                    <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-400">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display tracking-tight mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-dim leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1 text-meta text-ghost">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>PRODUCTION READY</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
