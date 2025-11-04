import type { ReactNode } from "react";

type ConsolePromptProps = {
  symbol?: string;
  path?: string;
  children?: ReactNode;
  status?: "default" | "success" | "error" | "muted";
  className?: string;
};

const statusColor: Record<Required<ConsolePromptProps>["status"], string> = {
  default: "text-terminal-white",
  success: "text-terminal-success",
  error: "text-terminal-error",
  muted: "text-terminal-muted",
};

export default function ConsolePrompt({
  symbol = ">",
  path,
  children,
  status = "default",
  className = "",
}: ConsolePromptProps) {
  return (
    <div
      className={`flex items-start gap-3 whitespace-pre-wrap text-sm leading-relaxed text-terminal-primary ${className}`}
    >
      <span className="text-terminal-accent">{symbol}</span>
      <div className="flex-1 space-y-1">
        {path ? <span className="block text-xs uppercase tracking-widest text-terminal-muted">{path}</span> : null}
        {children ? (
          <div className={`font-mono ${statusColor[status]}`}>{children}</div>
        ) : null}
      </div>
    </div>
  );
}


