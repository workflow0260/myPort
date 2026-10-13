"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export const SkillsSection: React.FC = () => {
  const { stack } = PORTFOLIO_DATA;
  const [activeChip, setActiveChip] = useState<string | null>("FLUTTER");

  return (
    <section
      id="stack"
      aria-label="Technical Skills and Stack"
      className="w-full py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 border-b border-[rgba(17,17,16,0.08)] bg-transparent"
    >
      <div className="max-w-[1200px] mx-auto space-y-6 sm:space-y-8 md:space-y-12">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-[rgba(17,17,16,0.08)] pb-5 sm:pb-8">
            <div>
              <p className="eyebrow mb-2">Technical Stack &amp; Tooling</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-[#111110] leading-tight">
                Tools and technologies{" "}
                <span className="text-[#173753] font-medium">we rely on.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm text-[#5a5a62] leading-relaxed">
              A battle-tested mobile and backend toolkit applied across production Flutter, Android SDK, and scalable cloud services.
            </p>
          </div>
        </Reveal>

        {/* Primary Interactive Technology Chips with Spring Morph */}
        <Reveal delay={0.1}>
          <div className="card-engineered rounded-xl sm:rounded-2xl p-4.5 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="status-dot" aria-hidden="true" />
                <span className="text-[#8b8b94] font-mono">Primary Core</span>
              </div>
              <span className="font-mono text-[11px] text-[#173753] font-semibold">
                FLUTTER • KOTLIN • STATE FLOW
              </span>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3" role="group" aria-label="Core technologies">
              {stack.primary.map((tech) => {
                const isActive = activeChip === tech;
                return (
                  <motion.button
                    key={tech}
                    type="button"
                    onClick={() => setActiveChip(tech)}
                    onMouseEnter={() => setActiveChip(tech)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    aria-pressed={isActive}
                    aria-label={`Highlight technology ${tech}`}
                    className={`relative isolate px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-mono font-medium transition-colors cursor-pointer select-none ${
                      isActive ? "text-white font-semibold" : "text-[#27272a] hover:text-[#173753]"
                    }`}
                    data-cursor="TECH"
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="active-skill-bg"
                        className="absolute inset-0 rounded-full bg-[#173753] shadow-md z-0 pointer-events-none"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    ) : (
                      <span className="absolute inset-0 rounded-full bg-[#f4f5f6] border border-[rgba(17,17,16,0.06)] z-0 pointer-events-none" />
                    )}
                    <span className="relative z-10">{tech}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Engineered Detail Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5 md:gap-6">
          {/* Architecture */}
          <Reveal delay={0.15}>
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-engineered rounded-xl sm:rounded-2xl p-4.5 sm:p-6 md:p-7 space-y-3.5 sm:space-y-5 h-full"
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="status-dot" aria-hidden="true" />
                <h3 className="font-mono text-[#173753] font-semibold text-xs uppercase">
                  Architecture &amp; Patterns
                </h3>
              </div>
              <p className="text-xs text-[#5a5a62] leading-relaxed">
                Unidirectional data flows, Clean Architecture, and modular layer boundaries to ensure testability and maintenance.
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
            </motion.div>
          </Reveal>

          {/* Testing & APIs */}
          <Reveal delay={0.2}>
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-engineered rounded-xl sm:rounded-2xl p-4.5 sm:p-6 md:p-7 space-y-3.5 sm:space-y-5 h-full"
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="status-dot" aria-hidden="true" />
                <h3 className="font-mono text-[#173753] font-semibold text-xs uppercase">
                  Testing &amp; Real-Time
                </h3>
              </div>
              <p className="text-xs text-[#5a5a62] leading-relaxed">
                Automated unit/widget tests and WebSocket/Firebase sync pipelines ensuring rock-solid feature reliability.
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
            </motion.div>
          </Reveal>

          {/* Tooling */}
          <Reveal delay={0.25}>
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-engineered rounded-xl sm:rounded-2xl p-4.5 sm:p-6 md:p-7 space-y-3.5 sm:space-y-5 h-full"
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="status-dot" aria-hidden="true" />
                <h3 className="font-mono text-[#173753] font-semibold text-xs uppercase">
                  Workflow &amp; IDEs
                </h3>
              </div>
              <p className="text-xs text-[#5a5a62] leading-relaxed">
                Professional version control, release orchestration, Android Studio, Xcode, and native build toolchains.
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
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
