"use client";

import React from "react";
import { ArrowUpRight, GitBranch, Code2, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const CodeSection: React.FC = () => {
  const { personal, projects } = PORTFOLIO_DATA;

  const codePhilosophy = [
    {
      icon: <GitBranch className="w-4 h-4 text-cyan-400" />,
      title: "Clean Git Workflow",
      description: "Feature branches, meaningful commits, and structured pull request workflows.",
    },
    {
      icon: <Code2 className="w-4 h-4 text-indigo-400" />,
      title: "Readable Architecture",
      description: "Clean Architecture with separated Presentation, Domain, and Data layers.",
    },
    {
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      title: "Tested & Documented",
      description: "Unit and widget tests, API documentation, and well-commented modules.",
    },
  ];

  return (
    <section id="code" className="py-32 px-6 sm:px-12 relative bg-[#030303] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-meta text-ghost mb-3 block tracking-[0.3em]">
              SOURCE CODE // REPOSITORIES
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-monumental tracking-tight uppercase">
              Code &amp; Open Source
            </h2>
          </div>
        </div>

        {/* Code Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {codePhilosophy.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#08080a] border border-white/10 hover:border-white/20 transition group"
            >
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-white tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-[11px] text-dim leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* GitHub Profile CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#08080a] border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-monumental tracking-tight mb-1">
                  GitHub Profile
                </h3>
                <p className="text-xs text-dim">
                  Browse repositories, contributions, and open-source projects.
                </p>
              </div>
            </div>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-black text-meta font-bold tracking-widest uppercase hover:bg-white/90 transition flex items-center gap-2 shrink-0"
              data-cursor="GITHUB"
            >
              <span>VIEW GITHUB</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
