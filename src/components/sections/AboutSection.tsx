"use client";

import React from "react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export const AboutSection: React.FC = () => {
  const { personal, coreStrengths } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      aria-label="About Sahil Mansuri"
      className="w-full py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 border-b border-[rgba(17,17,16,0.08)] bg-transparent"
    >
      <div className="max-w-[1200px] mx-auto space-y-6 sm:space-y-8 md:space-y-12">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-[rgba(17,17,16,0.08)] pb-5 sm:pb-8">
            <div>
              <p className="eyebrow mb-2">Background &amp; Philosophy</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-[#111110] leading-tight">
                Engineering software that{" "}
                <span className="text-[#173753] font-medium">delivers impact.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm text-[#5a5a62] leading-relaxed">
              Based in Jaipur, Rajasthan. Specializing in cross-platform Flutter engineering, native Android SDK, and full release lifecycle management.
            </p>
          </div>
        </Reveal>

        {/* Narrative & Strengths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-start">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="card-engineered rounded-xl sm:rounded-2xl p-4.5 sm:p-7 md:p-10 space-y-4 sm:space-y-6"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="status-dot" aria-hidden="true" />
                  <span className="font-mono text-[#173753] font-semibold">
                    Professional Summary
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111110] leading-snug">
                  BUILDING MOBILE PRODUCTS WITH SCALE, PERFORMANCE, AND CLEAN ARCHITECTURE.
                </h3>

                <p className="text-sm sm:text-base text-[#5a5a62] leading-relaxed">
                  {personal.summary}
                </p>

                <div className="pt-4 border-t border-[rgba(17,17,16,0.06)] space-y-3">
                  <div className="text-xs font-mono font-bold text-[#173753] uppercase">
                    Primary Focus Areas:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#3f3f46]">
                    {personal.primaryFocus.map((focus, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-[#173753] font-bold" aria-hidden="true">›</span>
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>

          {/* Core Strengths Card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.18}>
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="card-engineered rounded-xl sm:rounded-2xl p-4.5 sm:p-7 md:p-8 space-y-4 sm:space-y-5"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="status-dot" aria-hidden="true" />
                  <h3 className="font-mono text-[#173753] font-semibold text-xs uppercase">
                    Core Strengths
                  </h3>
                </div>

                <div className="divide-y divide-[rgba(17,17,16,0.06)] border-y border-[rgba(17,17,16,0.06)]">
                  {coreStrengths.map((strength, sIdx) => (
                    <div
                      key={sIdx}
                      className="py-3.5 flex items-center justify-between text-xs sm:text-sm font-mono font-medium text-[#111110] hover:text-[#173753] transition-colors"
                    >
                      <span>{strength}</span>
                      <span className="text-[10px] text-[#8b8b94]" aria-hidden="true">0{sIdx + 1}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
