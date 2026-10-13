"use client";

import React from "react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export const ArchitectureFlowSection: React.FC = () => {
  const { engineeringNotebook } = PORTFOLIO_DATA;

  return (
    <section
      id="engineering"
      aria-label="Engineering Standards and Architecture"
      className="w-full py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 border-b border-[rgba(17,17,16,0.08)] bg-transparent"
    >
      <div className="max-w-[1200px] mx-auto space-y-6 sm:space-y-8 md:space-y-12">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-[rgba(17,17,16,0.08)] pb-5 sm:pb-8">
            <div>
              <p className="eyebrow mb-2">Engineering Standards &amp; Principles</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-[#111110] leading-tight">
                Architectural principles &amp;{" "}
                <span className="text-[#173753] font-medium">standards.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm text-[#5a5a62] leading-relaxed">
              Documenting the engineering disciplines applied to build maintainable, resilient, and bug-resistant mobile software.
            </p>
          </div>
        </Reveal>

        {/* Engineering Lab Notebook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 md:gap-6">
          {engineeringNotebook.map((item, idx) => (
            <Reveal key={idx} delay={0.08 * (idx + 1)}>
              <motion.article
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-engineered rounded-xl sm:rounded-2xl p-4.5 sm:p-7 md:p-8 space-y-3.5 sm:space-y-5 h-full group hover:border-[#173753]/30 transition-colors"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[rgba(17,17,16,0.06)] pb-3 sm:pb-4">
                  <div className="flex items-center gap-2">
                    <span className="status-dot" aria-hidden="true" />
                    <span className="text-xs font-mono font-bold text-[#173753]">
                      {item.topic}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8b8b94] font-mono">
                    DISCIPLINE 0{idx + 1}
                  </span>
                </div>

                {/* Subtitle */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#111110] uppercase">
                  {item.subtitle}
                </h3>

                {/* Points */}
                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-[#5a5a62] leading-relaxed">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 sm:gap-2.5">
                      <span className="text-[#173753] font-bold" aria-hidden="true">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* Laboratory Architecture Summary Banner */}
        <Reveal delay={0.25}>
          <div className="card-engineered rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 flex flex-wrap items-center justify-between gap-3 sm:gap-4 font-mono text-xs bg-[#f8f9fa]">
            <div className="flex flex-wrap items-center gap-3 text-[#173753] font-semibold">
              <span>CLEAN ARCHITECTURE</span>
              <span aria-hidden="true">•</span>
              <span>BLOC / CUBIT</span>
              <span aria-hidden="true">•</span>
              <span>REST APIs</span>
              <span aria-hidden="true">•</span>
              <span>WEBSOCKETS</span>
              <span aria-hidden="true">•</span>
              <span>UNIT &amp; WIDGET TESTS</span>
            </div>
            <div className="text-[#5a5a62]">
              STATUS: PRODUCTION VALIDATED
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
