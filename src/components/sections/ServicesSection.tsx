"use client";

import React from "react";
import { Check, Smartphone, Server, Layers, Cpu, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const ServicesSection: React.FC = () => {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="services" className="py-32 px-6 sm:px-12 relative bg-[#030303] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-meta text-ghost mb-3 block tracking-[0.3em]">
              SERVICES // CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-monumental tracking-tight uppercase">
              What I Build
            </h2>
          </div>
          <p className="text-meta text-dim max-w-sm">
            END-TO-END MOBILE CLIENTS, SCALABLE REST BACKENDS, AND INTEGRATED CLOUD PLATFORMS.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => (
            <div
              key={srv.title}
              className="p-8 sm:p-10 rounded-3xl bg-[#08080a] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 text-meta">
                  <span className="text-white font-bold font-mono text-sm">{srv.number}</span>
                  <span className="text-ghost">{srv.subtitle}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white font-monumental tracking-tight mb-3 group-hover:text-white/90">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-dim leading-relaxed mb-8">
                  {srv.description}
                </p>

                {/* Capability Checklist */}
                <div className="space-y-2.5">
                  <span className="text-meta text-ghost block mb-3">KEY DELIVERABLES:</span>
                  {srv.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2.5 text-xs text-pure font-light">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
