import type { ReactNode } from "react";

type TerminalWindowProps = {
  title?: string;
  children: ReactNode;
  className?: string;
  accent?: "green" | "cyan" | "neutral";
  actions?: ReactNode;
};

const accentStyles: Record<Required<TerminalWindowProps>["accent"], string> = {
  green: "border-terminal-primary/60 shadow-terminal-green",
  cyan: "border-terminal-primary/40 shadow-terminal-cyan",
  neutral: "border-terminal-muted/40",
};

export default function TerminalWindow({
  title,
  children,
  className = "",
  accent = "green",
  actions,
}: TerminalWindowProps) {
  const baseClasses = "terminal-window rounded-terminal border bg-terminal-bg/80 backdrop-blur-sm";
  const composedClasses = `${baseClasses} ${accentStyles[accent]} ${className}`.trim();

  return (
    <section className={composedClasses}>
      <header className="flex items-center justify-between border-b border-terminal-primary/15 bg-terminal-bg/70 px-4 py-2 text-xs uppercase tracking-widest text-terminal-muted">
        <span className="font-semibold text-terminal-white">
          {title ?? "session.log"}
        </span>
        {actions ? <div className="flex items-center gap-2 text-terminal-accent">{actions}</div> : null}
      </header>
      <div className="border border-terminal-primary/15 px-5 py-4 text-sm leading-relaxed text-terminal-primary">
        {children}
      </div>
      <footer className="border-t border-terminal-primary/15 bg-terminal-bg/70 px-4 py-2 text-[0.68rem] tracking-[0.4em] text-terminal-muted uppercase">
        └────────────────────────────────────────┘
      </footer>
    </section>
  );
}

