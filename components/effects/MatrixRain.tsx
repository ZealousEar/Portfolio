'use client';

import { useEffect, useRef, useState } from "react";

type MatrixRainProps = {
  opacity?: number;
  disabled?: boolean;
};

const CHARSET = "01$#@&%*+".split("");

export default function MatrixRain({ opacity = 0.05, disabled = false }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || disabled) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const evaluate = () => {
      const allowed = !mediaQuery.matches && window.innerWidth >= 768;
      frame = window.requestAnimationFrame(() => {
        setShouldRender(allowed);
      });
    };

    evaluate();
    mediaQuery.addEventListener("change", evaluate);
    window.addEventListener("resize", evaluate);

    return () => {
      window.cancelAnimationFrame(frame);
      mediaQuery.removeEventListener("change", evaluate);
      window.removeEventListener("resize", evaluate);
    };
  }, [disabled]);

  useEffect(() => {
    if (!shouldRender) {
      return undefined;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return undefined;
    }

    let animationFrame = 0;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / 16);
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * canvas.height));
    };

    const draw = () => {
      context.fillStyle = `rgba(10, 14, 20, ${Math.max(opacity, 0.04)})`;
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "rgba(0, 255, 65, 0.5)";
      context.font = "14px JetBrains Mono, monospace";

      drops.forEach((drop, index) => {
        const text = CHARSET[Math.floor(Math.random() * CHARSET.length)] ?? "0";
        context.fillText(text, index * 16, drop * 16);

        if (drop * 16 > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        } else {
          drops[index] = drop + 1;
        }
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [opacity, shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 mix-blend-screen"
      style={{ opacity }}
    />
  );
}

