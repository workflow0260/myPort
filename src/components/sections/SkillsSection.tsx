"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Smartphone, Server, Database, Wrench } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const groupIcons: Record<string, React.ReactNode> = {
    MOBILE: <Smartphone className="w-4 h-4 text-cyan-400" />,
    BACKEND: <Server className="w-4 h-4 text-indigo-400" />,
    DATABASE: <Database className="w-4 h-4 text-emerald-400" />,
    TOOLS: <Wrench className="w-4 h-4 text-amber-400" />,
  };

  const groupColors: Record<string, string> = {
    MOBILE: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
    BACKEND: "text-indigo-400 border-indigo-400/20 bg-indigo-400/5",
    DATABASE: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
    TOOLS: "text-amber-400 border-amber-400/20 bg-amber-400/5",
  };

  return (
    <section id="skills" className="py-32 px-6 sm:px-12 relative bg-[#030303] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-meta text-ghost mb-3 block tracking-[0.3em]">
            TECHNICAL EXPERTISE // CAPABILITIES
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-display tracking-tight uppercase mb-4">
            Technical Stack
          </h2>
          <p className="text-sm sm:text-base text-dim max-w-2xl leading-relaxed">
            Real technologies utilized across production mobile and backend architectures. Contextual descriptions and project associations without arbitrary percentage bars.
          </p>
        </div>

        {/* 4 Core Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category) => {
            const icon = groupIcons[category.title] || <Smartphone className="w-4 h-4" />;
            const colorClass = groupColors[category.title] || "text-white border-white/20 bg-white/5";

            return (
              <div
                key={category.title}
                className="p-8 sm:p-10 rounded-3xl bg-[#08080a] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${colorClass}`}>
                        {icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-display tracking-tight">
                          {category.title}
                        </h3>
                        <span className="text-meta text-ghost text-[10px]">
                          PRODUCTION CAPABILITIES
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-dim mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skill Items List */}
                  <div className="space-y-3">
                    {category.items.map((skill) => {
                      const isHovered = hoveredSkill === skill.name;
                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`p-4 rounded-2xl border transition-all duration-200 cursor-default ${
                            isHovered
                              ? "bg-white/[0.06] border-white/25 shadow-md"
                              : "bg-white/[0.02] border-white/5 hover:border-white/15"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-bold text-white tracking-tight">
                              {skill.name}
                            </h4>
                            {skill.projectAssociation && (
                              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                                {skill.projectAssociation}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-dim leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
