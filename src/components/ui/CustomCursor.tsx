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
    // Disable on non-fine pointer or prefers-reduced-motion
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

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor]") as HTMLElement | null;
      const buttonOrLink = target?.closest("button, a, [role='button']");

      if (interactiveEl) {
        const text = interactiveEl.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovering(true);
      } else if (buttonOrLink) {
        setCursorText("→");
        setIsHovering(true);
      } else {
        setCursorText("");
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    const animateTrailing = () => {
      setTrailing((prev) => ({
        x: prev.x + (targetX - prev.x) * 0.22,
        y: prev.y + (targetY - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(animateTrailing);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    animationFrameId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouch || !isVisible) return null;

  const hasText = cursorText.length > 0;
  const isViewMode = cursorText === "VIEW" || cursorText === "EXPLORE" || cursorText === "RESUME";

  return (
    <>
      {/* Center Precision Dot - Highest Z-Index so never hidden behind modals */}
      <div
        className="custom-cursor-dot w-2 h-2 bg-[#173753] pointer-events-none transition-opacity duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: hasText ? 0 : 1,
          zIndex: 1000000,
        }}
      />

      {/* Trailing Fluid Ring / Interactive Badge */}
      <div
        className="custom-cursor-ring pointer-events-none"
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`,
          width: isViewMode ? "68px" : hasText ? "46px" : isHovering ? "38px" : "24px",
          height: isViewMode ? "68px" : hasText ? "46px" : isHovering ? "38px" : "24px",
          backgroundColor: hasText ? "#173753" : isHovering ? "rgba(23, 55, 83, 0.08)" : "transparent",
          borderColor: hasText ? "#173753" : isHovering ? "#173753" : "rgba(23, 55, 83, 0.25)",
          borderWidth: "1px",
          borderStyle: "solid",
          zIndex: 999999,
        }}
      >
        {hasText && (
          <span className="text-[10px] font-bold font-mono tracking-widest text-white uppercase select-none">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
