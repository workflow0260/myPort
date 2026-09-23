"use client";

import React, { useEffect, useRef } from "react";

export const PageAtmosphere: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Background Animated Gradient Mesh & Lab Grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-70"
        aria-hidden="true"
      >
        {/* Deep navy accent gradient orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(23,55,83,0.06)_0%,transparent_70%)] blur-[120px] animate-pulse" />
        <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(23,55,83,0.04)_0%,transparent_70%)] blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-[radial-gradient(circle,rgba(23,55,83,0.05)_0%,transparent_70%)] blur-[100px]" />

        {/* Technical Sub-Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #173753 1px, transparent 1px), linear-gradient(to bottom, #173753 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Mouse Tracking Radial Spotlight Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[560px] h-[560px] -ml-[280px] -mt-[280px] rounded-full bg-[radial-gradient(circle,rgba(23,55,83,0.08)_0%,rgba(23,55,83,0.02)_45%,transparent_70%)] pointer-events-none z-10 transition-transform duration-75 ease-out blur-2xl hidden lg:block"
        aria-hidden="true"
      />
    </>
  );
};
