"use client";

import React from "react";

export const MobileStorySection: React.FC = () => {
  return (
    <section id="mobile-story" className="w-full py-20 px-6 sm:px-12 border-b border-[#e4e4e7] bg-[#fafafa]">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center gap-2 text-meta text-[#173753] font-bold text-xs">
          <span>{"// MOBILE ARCHITECTURE SUMMARY"}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-[#e4e4e7] rounded-sm">
            <h4 className="font-mono font-bold text-sm text-[#0a0a0a] mb-2 uppercase">
              01 / Cross-Platform &amp; Native
            </h4>
            <p className="text-xs text-[#52525b] leading-relaxed">
              Flutter and Jetpack Compose responsive interfaces with Clean Architecture.
            </p>
          </div>
          <div className="p-6 bg-white border border-[#e4e4e7] rounded-sm">
            <h4 className="font-mono font-bold text-sm text-[#0a0a0a] mb-2 uppercase">
              02 / State Management
            </h4>
            <p className="text-xs text-[#52525b] leading-relaxed">
              Predictable reactive state flow with Bloc and Cubit for robust production apps.
            </p>
          </div>
          <div className="p-6 bg-white border border-[#e4e4e7] rounded-sm">
            <h4 className="font-mono font-bold text-sm text-[#0a0a0a] mb-2 uppercase">
              03 / 1M+ Scale Verification
            </h4>
            <p className="text-xs text-[#52525b] leading-relaxed">
              Balaji Astro Guide deployed to 1,000,000+ users on Google Play.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
