"use client";

import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery.matches || motionQuery.matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Detect cursor attributes on hovered element
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor]") as HTMLElement | null;
      const buttonOrLink = target?.closest("button, a, input, textarea, [role='button']");

      if (interactiveEl) {
        setCursorText(interactiveEl.getAttribute("data-cursor") || "");
        setIsHovering(true);
      } else if (buttonOrLink) {
        setCursorText("");
        setIsHovering(true);
      } else {
        setCursorText("");
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    const animateTrailing = () => {
      setTrailing((prev) => ({
        x: prev.x + (targetX - prev.x) * 0.2,
        y: prev.y + (targetY - prev.y) * 0.2,
      }));
      animationFrameId = requestAnimationFrame(animateTrailing);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    animationFrameId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouch || !isVisible) return null;

  const isViewMode = cursorText === "VIEW";

  return (
    <>
      {/* Center Precision Dot */}
      <div
        className="custom-cursor-dot w-1.5 h-1.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isViewMode ? 0 : 1,
        }}
      />

      {/* Trailing Fluid Ring */}
      <div
        className="custom-cursor-ring"
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`,
          width: isViewMode ? "72px" : isHovering ? "44px" : "28px",
          height: isViewMode ? "72px" : isHovering ? "44px" : "28px",
          backgroundColor: isViewMode
            ? "rgba(255, 255, 255, 0.95)"
            : isHovering
            ? "rgba(255, 255, 255, 0.08)"
            : "transparent",
          borderColor: isViewMode
            ? "transparent"
            : isHovering
            ? "rgba(255, 255, 255, 0.4)"
            : "rgba(255, 255, 255, 0.2)",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        {isViewMode && (
          <span className="text-[10px] font-bold font-mono tracking-widest text-black uppercase">
            VIEW
          </span>
        )}
      </div>
    </>
  );
};
