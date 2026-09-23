"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Layers, ShieldCheck, Wrench, Cpu } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const { stack } = PORTFOLIO_DATA;
  const [activeChip, setActiveChip] = useState<string | null>("FLUTTER");

  return (
    <section id="stack" className="w-full py-24 px-6 sm:px-12 border-b border-[rgba(17,17,16,0.08)] bg-[var(--bg-background)]">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[rgba(17,17,16,0.08)] pb-8">
          <div>
            <p className="eyebrow mb-3">// 03 • TECHNICAL STACK</p>
            <h2 className="text-3xl sm:text-5xl font-display font-normal text-[#111110] leading-tight">
              Tools and technologies{" "}
              <span className="text-[#173753] font-medium">we rely on.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#5a5a62] leading-relaxed">
            A battle-tested mobile and backend toolkit applied across production Flutter, Android SDK, and scalable cloud services.
          </p>
        </div>

        {/* Primary Interactive Technology Chips */}
        <div className="card-engineered rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="status-dot" />
              <span className="text-[#8b8b94] font-mono">Primary Core</span>
            </div>
            <span className="font-mono text-[11px] text-[#173753] font-semibold">
              FLUTTER • KOTLIN • STATE FLOW
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {stack.primary.map((tech) => {
              const isActive = activeChip === tech;
              return (
                <button
                  key={tech}
                  onClick={() => setActiveChip(tech)}
                  onMouseEnter={() => setActiveChip(tech)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-mono font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#173753] text-white shadow-md -translate-y-0.5"
                      : "bg-[#f4f5f6] text-[#27272a] hover:bg-[#173753]/10 hover:text-[#173753] hover:-translate-y-0.5"
                  }`}
                  data-cursor="TECH"
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

        {/* Engineered Detail Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Architecture */}
          <div className="card-engineered rounded-2xl p-7 space-y-5">
            <div className="flex items-center gap-2 text-xs">
              <span className="status-dot" />
              <span className="font-mono text-[#173753] font-semibold">
                Architecture &amp; Patterns
              </span>
            </div>
            <p className="text-xs text-[#5a5a62] leading-relaxed">
              Unidirectional data flows and modular layer boundaries to ensure testability and maintenance.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {stack.architecture.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md bg-[#f8f9fa] border border-[rgba(17,17,16,0.06)] text-[11px] font-mono text-[#111110]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Testing & APIs */}
          <div className="card-engineered rounded-2xl p-7 space-y-5">
            <div className="flex items-center gap-2 text-xs">
              <span className="status-dot" />
              <span className="font-mono text-[#173753] font-semibold">
                Testing &amp; Real-Time
              </span>
            </div>
            <p className="text-xs text-[#5a5a62] leading-relaxed">
              Automated tests and WebSocket/Firebase sync pipelines ensuring rock-solid feature reliability.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {[...stack.testing, ...stack.additional].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md bg-[#f8f9fa] border border-[rgba(17,17,16,0.06)] text-[11px] font-mono text-[#111110]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Tooling */}
          <div className="card-engineered rounded-2xl p-7 space-y-5">
            <div className="flex items-center gap-2 text-xs">
              <span className="status-dot" />
              <span className="font-mono text-[#173753] font-semibold">
                Workflow &amp; IDEs
              </span>
            </div>
            <p className="text-xs text-[#5a5a62] leading-relaxed">
              Professional version control, release orchestration, and native build toolchains.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {stack.tools.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md bg-[#f8f9fa] border border-[rgba(17,17,16,0.06)] text-[11px] font-mono text-[#111110]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
