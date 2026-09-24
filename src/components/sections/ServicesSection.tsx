"use client";

import React from "react";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="w-full py-20 px-6 sm:px-12 border-b border-[#e4e4e7] bg-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <span className="text-meta text-[#173753] font-bold text-xs">
          {"// PRODUCTION CAPABILITIES"}
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-[#e4e4e7] rounded-sm bg-[#fafbfc]">
            <h3 className="font-display font-bold text-lg text-[#0a0a0a] uppercase mb-2">
              Cross-Platform Mobile Development
            </h3>
            <p className="text-xs text-[#52525b] leading-relaxed">
              End-to-end iOS and Android development using Flutter, Dart, Kotlin, and Jetpack Compose.
            </p>
          </div>
          <div className="p-6 border border-[#e4e4e7] rounded-sm bg-[#fafbfc]">
            <h3 className="font-display font-bold text-lg text-[#0a0a0a] uppercase mb-2">
              API Integration &amp; Real-Time Data
            </h3>
            <p className="text-xs text-[#52525b] leading-relaxed">
              Connecting mobile clients with Firebase, Supabase, RESTful APIs, and WebSockets for real-time synchronization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
