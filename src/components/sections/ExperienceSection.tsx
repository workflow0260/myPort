"use client";

import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const ExperienceSection: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="w-full py-24 px-6 sm:px-12 border-b border-[rgba(17,17,16,0.08)] bg-[var(--bg-background)]">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[rgba(17,17,16,0.08)] pb-8">
          <div>
            <p className="eyebrow mb-3">// 02 • EXPERIENCE</p>
            <h2 className="text-3xl sm:text-5xl font-display font-normal text-[#111110] leading-tight">
              Engineering in{" "}
              <span className="text-[#173753] font-medium">production environments.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#5a5a62] leading-relaxed">
            Hands-on software development at Appic Software LLP delivering scalable mobile features across iOS and Android.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="card-engineered rounded-2xl p-8 sm:p-10 space-y-8"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(17,17,16,0.06)] pb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span className="status-dot" />
                    <span className="text-[#8b8b94] font-mono">Present Role</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#111110] uppercase">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-[#173753] font-mono mt-1 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span className="text-[#5a5a62] font-normal">{exp.location}</span>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-[#173753]/10 text-[#173753] font-mono text-xs font-semibold w-fit">
                  {exp.period}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#173753] font-bold">
                  // Verified Responsibilities:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-4 rounded-xl bg-[#f8f9fa] border border-[rgba(17,17,16,0.04)] text-xs sm:text-sm text-[#3f3f46] leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="text-[#173753] font-bold mt-0.5">›</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="border-t border-[rgba(17,17,16,0.06)] pt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#8b8b94] mr-2">
                  Technologies:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-[#f4f5f6] text-xs font-mono text-[#173753] font-medium border border-[rgba(17,17,16,0.04)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
