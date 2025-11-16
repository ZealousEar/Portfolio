"use client";

import { useEffect, useState } from "react";

const TARGET_SELECTOR = '[data-annotation-target="resume"]';
const HEADER_SELECTOR = '[data-resume-header="true"]';
const ARROW_TIP_X = 45; // SVG arrow tip X coordinate
const ARROW_TIP_Y = 32; // SVG arrow tip Y coordinate

export default function ResumeAnnotation() {
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const target = document.querySelector<HTMLElement>(TARGET_SELECTOR);
    const header = target?.closest<HTMLElement>(HEADER_SELECTOR);

    if (!target || !header) {
      return;
    }

    const update = () => {
      const targetRect = target.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();

      const top = targetRect.top - headerRect.top + targetRect.height / 2 - ARROW_TIP_Y;
      const left = targetRect.left - headerRect.left + targetRect.width - ARROW_TIP_X;

      setPosition({ top, left });
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(target);
    observer.observe(header);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!position) {
    return null;
  }

  return (
    <div
      className="pointer-events-none flex items-center gap-4 font-handwritten text-terminal-primary"
      style={{ position: "absolute", top: position.top, left: position.left }}
    >
      <svg width="240" height="150" viewBox="0 0 240 150" className="-mr-2">
        <path
          d="M 230 140 Q 170 90, 120 65 Q 75 45, 45 32"
          stroke="#00ff41"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="5 3"
          opacity="0.85"
        />
        <path
          d="M 45 32 L 57 30 M 45 32 L 51 42"
          stroke="#00ff41"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
      <div
        className="pointer-events-none"
        style={{
          fontSize: "1.4rem",
          transform: "rotate(-4deg)",
          textShadow: "0 0 12px rgba(0, 255, 65, 0.55)",
          opacity: 0.92,
        }}
      >
        Find my resume here!
      </div>
    </div>
  );
}
