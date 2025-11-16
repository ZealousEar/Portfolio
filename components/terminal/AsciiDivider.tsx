type AsciiDividerProps = {
  label?: string;
  className?: string;
  length?: number;
};

export default function AsciiDivider({
  label,
  className = "",
  length = 62,
}: AsciiDividerProps) {
  const line = "═".repeat(Math.max(0, length));
  const content = label
    ? `╞═ ${label.toUpperCase()} ${"═".repeat(Math.max(0, length - label.length - 4))}`
    : line;

  return (
    <pre
      aria-hidden="true"
      className={`overflow-hidden text-xs tracking-[0.35em] text-terminal-muted ${className}`}
    >
      {content}
    </pre>
  );
}





