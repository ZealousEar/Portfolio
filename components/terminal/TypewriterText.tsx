'use client';

import { ReactTyped } from "react-typed";

type TypewriterTextProps = {
  strings: string[];
  className?: string;
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
};

export default function TypewriterText({
  strings,
  className = "",
  typeSpeed = 46,
  backSpeed = 32,
  backDelay = 1400,
  loop = true,
}: TypewriterTextProps) {
  return (
    <span className={`inline-flex items-center text-terminal-white ${className}`}>
      <ReactTyped
        strings={strings}
        typeSpeed={typeSpeed}
        backSpeed={backSpeed}
        backDelay={backDelay}
        loop={loop}
        smartBackspace
        showCursor={false}
      />
      <span aria-hidden="true" className="cursor-blink" />
    </span>
  );
}

