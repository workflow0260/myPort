"use client";

import React, { useEffect, useState } from "react";

interface CinematicLoaderProps {
  onComplete: () => void;
}

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              onComplete();
            }, 350);
          }, 150);
          return 100;
        }
        const diff = Math.floor(Math.random() * 25) + 15;
        return Math.min(prev + diff, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[9999] bg-white text-[#0a0a0a] flex flex-col justify-between p-8 sm:p-14 select-none transition-all duration-300 ${
        isFadingOut ? "opacity-0 pointer-events-none translate-y-[-10px]" : "opacity-100"
      }`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between text-meta text-[#71717a]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#173753]" aria-hidden="true" />
          <span className="text-[#173753] font-semibold">SAHIL MANSURI // LAB</span>
        </div>
        <div className="font-mono text-xs">{progress}%</div>
      </div>

      {/* Center Editorial Typography - changed from h1 to styled div to ensure single semantic H1 on page */}
      <div className="max-w-4xl">
        <span className="text-meta text-[#173753] block mb-3 font-semibold tracking-[0.2em]">
          {"// INITIALIZING MOBILE LAB"}
        </span>
        <div className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight text-[#0a0a0a] leading-none">
          ENGINEERING
          <br />
          <span className="text-[#173753]">EXPERIENCES.</span>
        </div>
      </div>

      {/* Bottom Status & Accent Line */}
      <div className="space-y-3">
        <div className="h-[2px] w-full bg-[#e4e4e7] overflow-hidden" aria-hidden="true">
          <div
            className="h-full bg-[#173753] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-meta text-[#71717a] text-[10px]">
          <span>FLUTTER • KOTLIN • PRODUCTION RELEASES</span>
          <span>1M+ DOWNLOADS VERIFIED</span>
        </div>
      </div>
    </div>
  );
};
