import type { Metadata } from "next";
import { JetBrains_Mono, Permanent_Marker } from "next/font/google";
import "./globals.css";
import "@/styles/terminal.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-terminal",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-handwritten",
});

export const metadata: Metadata = {
  title: "Farhad Chichgar's Portfolio",
  description: "Quantitative finance portfolio for Farhad Chichgar.",
  keywords: [
    "quantitative finance",
    "systematic trading",
    "derivatives pricing",
    "machine learning",
    "portfolio",
  ],
  authors: [{ name: "Farhad Chichgar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-terminal-bg">
      <body
        className={`${jetbrainsMono.variable} ${permanentMarker.variable} bg-terminal-bg text-terminal-primary font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
