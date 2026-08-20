"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-32 px-6 sm:px-12 relative bg-[#030303] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="text-meta text-ghost mb-3 block tracking-[0.3em]">
            CAREER // TIMELINE
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-monumental tracking-tight uppercase">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-12 md:pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#030303] z-10" />

                {/* Content Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#08080a] border border-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Period & Location */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-meta text-ghost">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-dim" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-monumental tracking-tight mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-dim mb-4 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-dim leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] text-pure font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
