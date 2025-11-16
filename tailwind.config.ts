import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#0a0e14",
          primary: "#00ff41",
          accent: "#00d4ff",
          white: "#ffffff",
          success: "#00ff88",
          error: "#ff0040",
          muted: "#4a5568",
        },
      },
      fontFamily: {
        mono: ["var(--font-terminal)", "JetBrains Mono", "Fira Code", "SFMono-Regular", "Menlo", "monospace"],
        handwritten: ["var(--font-handwritten)", "Permanent Marker", "Indie Flower", "cursive"],
      },
      boxShadow: {
        "terminal-green": "0 0 20px rgba(0, 255, 65, 0.5)",
        "terminal-cyan": "0 0 20px rgba(0, 212, 255, 0.5)",
      },
      borderRadius: {
        terminal: "8px",
      },
    },
  },
  plugins: [],
};

export default config;

