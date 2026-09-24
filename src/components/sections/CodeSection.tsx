"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const CodeSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="code" className="py-20 px-6 sm:px-12 relative bg-[#fafafa] border-b border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 bg-white border border-[#e4e4e7] rounded-sm">
          <div>
            <span className="text-meta text-[#173753] font-bold text-xs block mb-1">
              {"// REPOSITORIES & WORKFLOW"}
            </span>
            <h3 className="text-2xl font-display font-black uppercase text-[#0a0a0a]">
              OPEN SOURCE &amp; WORKFLOW
            </h3>
            <p className="text-xs text-[#52525b] font-mono mt-1">
              Git/GitHub • Clean Architecture • Bloc/Cubit • Unit Testing
            </p>
          </div>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#173753] text-white text-meta text-xs font-bold rounded hover:bg-[#12283d] transition flex items-center gap-2 shrink-0 cursor-pointer"
            data-cursor="GITHUB"
          >
            <span>VIEW ON GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
