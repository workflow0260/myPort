"use client";

import React, { useState, useEffect } from "react";

interface CinematicLoaderProps {
  onComplete: () => void;
}

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING SCENE ENGINE");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const statuses = [
      "INITIALIZING SCENE ENGINE",
      "COMPILING PROCEDURAL SHADERS",
      "BUILDING VOLUMETRIC ATMOSPHERE",
      "SYNCING GLOBAL LIGHT VECTORS",
      "CALIBRATING OPTICAL DEPTH",
      "WORLD READY",
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(interval);
          setStatusText("WORLD READY");
          setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }

        const statusIdx = Math.min(
          Math.floor((next / 100) * statuses.length),
          statuses.length - 1
        );
        setStatusText(statuses[statusIdx]);
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between p-8 sm:p-14 bg-[#030303] text-white transition-opacity duration-700 pointer-events-none ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between text-meta text-ghost">
        <span>AETHERIA VFX STUDIO</span>
        <span>SYS.BUILD // 2026.08</span>
      </div>

      {/* Center Cinematic Title & Percentage */}
      <div className="max-w-4xl">
        <div className="text-meta text-white/50 mb-3 tracking-[0.3em] font-mono">
          {statusText}
        </div>
        <div className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-pure font-monumental select-none">
          {progress.toString().padStart(3, "0")}%
        </div>
      </div>

      {/* Bottom Minimal Progress Bar */}
      <div className="space-y-3">
        <div className="h-[1px] w-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-meta text-ghost">
          <span>LATENCY // 0.04ms</span>
          <span>GPU ACCELERATED</span>
        </div>
      </div>
    </div>
  );
};
