"use client";

import React, { useState } from "react";
import { Smartphone, Server, Database, Layers, ChevronDown, ChevronUp, CheckCircle, ArrowDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const ArchitectureFlowSection: React.FC = () => {
  const { architecturePipeline } = PORTFOLIO_DATA;
  const [expandedStep, setExpandedStep] = useState<string | null>("01");

  const stepIcons: Record<string, React.ReactNode> = {
    "01": <Smartphone className="w-5 h-5" />,
    "02": <Layers className="w-5 h-5" />,
    "03": <Server className="w-5 h-5" />,
    "04": <Database className="w-5 h-5" />,
  };

  const stepColors: Record<string, { accent: string; bg: string; border: string }> = {
    "01": { accent: "text-cyan-400", bg: "bg-cyan-400/5", border: "border-cyan-400/30" },
    "02": { accent: "text-indigo-400", bg: "bg-indigo-400/5", border: "border-indigo-400/30" },
    "03": { accent: "text-emerald-400", bg: "bg-emerald-400/5", border: "border-emerald-400/30" },
    "04": { accent: "text-amber-400", bg: "bg-amber-400/5", border: "border-amber-400/30" },
  };

  return (
    <section id="architecture" className="py-32 px-6 sm:px-12 relative bg-[#030303] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="text-meta text-ghost mb-3 block tracking-[0.3em]">
            FULL-STACK PIPELINE // ARCHITECTURE
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-display tracking-tight uppercase mb-4">
            From App to Backend
          </h2>
          <p className="text-sm sm:text-base text-dim max-w-2xl leading-relaxed">
            Every application connects a fluid client interface to a scalable backend service. Click each layer to inspect protocols, payloads, and validation mechanisms.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {architecturePipeline.map((step, idx) => {
            const isExpanded = expandedStep === step.step;
            const colors = stepColors[step.step] || stepColors["01"];
            const isLast = idx === architecturePipeline.length - 1;

            return (
              <div key={step.step} className="relative">
                {/* Vertical Data Connection Line */}
                {!isLast && (
                  <div className="absolute left-8 top-full w-px h-4 bg-white/10 z-0" />
                )}

                <button
                  onClick={() => setExpandedStep(isExpanded ? null : step.step)}
                  className={`w-full text-left rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? `${colors.border} ${colors.bg} shadow-lg`
                      : "border-white/10 bg-[#08080a] hover:border-white/20"
                  }`}
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4 p-5 sm:p-7">
                    {/* Step Icon */}
                    <div
                      className={`p-3.5 rounded-2xl border ${colors.border} ${colors.bg} ${colors.accent} shrink-0`}
                    >
                      {stepIcons[step.step]}
                    </div>

                    {/* Step Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-meta font-mono font-bold ${colors.accent}`}>
                          LAYER {step.step}
                        </span>
                        <span className="text-meta text-ghost hidden sm:inline">—</span>
                        <span className="text-meta text-ghost hidden sm:inline">{step.tech}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-display tracking-tight">
                        {step.name}
                      </h3>
                    </div>

                    {/* Toggle Icon */}
                    <div className="text-white/40">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-white" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Drawer Panel */}
                {isExpanded && (
                  <div
                    className={`mt-2 rounded-3xl border ${colors.border} ${colors.bg} p-6 sm:p-8 space-y-5 animate-in`}
                  >
                    <p className="text-sm text-pure/90 leading-relaxed font-light">
                      {step.description}
                    </p>

                    {/* Code / Payload Preview */}
                    <div>
                      <span className="text-meta text-ghost block mb-2 font-mono">
                        DATA CONTRACT // PAYLOAD PREVIEW:
                      </span>
                      <pre className="text-xs font-mono text-white/90 bg-black/60 border border-white/10 rounded-2xl p-5 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                        {step.payloadExample}
                      </pre>
                    </div>

                    <div className="flex items-center gap-2 text-meta text-ghost pt-2 border-t border-white/5">
                      <span className={`w-2 h-2 rounded-full ${colors.accent.replace("text-", "bg-")} animate-pulse`} />
                      <span>TECH STACK: {step.tech}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Global Architecture Diagram Summary */}
        <div className="mt-16 p-8 rounded-3xl bg-[#08080a] border border-white/10 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <span className="text-meta text-ghost block tracking-[0.25em]">
              COMPLETE END-TO-END DATA CONTRACT
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono">
              <span className="px-4 py-2 rounded-xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/25">
                Flutter / Kotlin Client
              </span>
              <span className="text-white/30">→</span>
              <span className="px-4 py-2 rounded-xl bg-indigo-400/10 text-indigo-300 border border-indigo-400/25">
                REST API Gateway
              </span>
              <span className="text-white/30">→</span>
              <span className="px-4 py-2 rounded-xl bg-emerald-400/10 text-emerald-300 border border-emerald-400/25">
                Node.js / Express
              </span>
              <span className="text-white/30">→</span>
              <span className="px-4 py-2 rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/25">
                MongoDB / Firebase
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
