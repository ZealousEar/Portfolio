import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/terminal.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-terminal",
});

export const metadata: Metadata = {
  title: "Farhad Chichgar | Quantitative Finance Portfolio",
  description: "Terminal-inspired quantitative finance portfolio for Farhad Chichgar.",
  keywords: [
    "quantitative finance",
    "systematic trading",
    "derivatives pricing",
    "machine learning",
    "portfolio",
  ],
  authors: [{ name: "ZealousEar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-terminal-bg">
      <body
        className={`${jetbrainsMono.variable} bg-terminal-bg text-terminal-primary font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
