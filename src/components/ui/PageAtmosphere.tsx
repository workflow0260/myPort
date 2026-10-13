"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const PageAtmosphere: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const isOnCardRef = useRef<boolean>(false);

  useEffect(() => {
    // Only enable on desktop pointer with normal motion
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || prefersReducedMotion || !glowRef.current) return;

    const el = glowRef.current;
    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power2.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power2.out" });

    let hasPositioned = false;

    // Detect if cursor is hovering over any card, article, navbar, modal, or interactive element
    const isOverCard = (target: HTMLElement | null): boolean => {
      if (!target) return false;
      return Boolean(
        target.closest(
          ".card-engineered, article, header, nav, [role='dialog'], [role='article'], button, a, input, textarea, select"
        )
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!hasPositioned) {
        hasPositioned = true;
        gsap.set(el, { x: e.clientX, y: e.clientY });
      }

      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target as HTMLElement | null;
      const hoveringCard = isOverCard(target);

      if (hoveringCard !== isOnCardRef.current) {
        isOnCardRef.current = hoveringCard;
        if (hoveringCard) {
          // Fade out lighting effect when hovering directly on cards
          gsap.to(el, {
            opacity: 0,
            scale: 0.85,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        } else {
          // Fade in lighting effect when hovering on open background
          gsap.to(el, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      }
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
      isOnCardRef.current = true;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Background Animated Gradient Mesh & Sub-Grid Lines */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-70"
        aria-hidden="true"
      >
        {/* Ambient accent orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(23,55,83,0.06)_0%,transparent_70%)] blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(23,55,83,0.04)_0%,transparent_70%)] blur-[140px]" />
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

      {/* Atmospheric Background Lighting & Shadow Aura - active ONLY on background */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-[600px] h-[600px] -ml-[300px] -mt-[300px] rounded-full pointer-events-none z-0 blur-3xl hidden lg:block will-change-transform opacity-0"
        style={{
          background: `radial-gradient(circle, rgba(23, 55, 83, 0.18) 0%, rgba(23, 55, 83, 0.08) 32%, rgba(15, 23, 42, 0.035) 54%, transparent 72%)`,
        }}
      />
    </>
  );
};
