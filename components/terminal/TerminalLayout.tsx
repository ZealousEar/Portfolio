import Link from "next/link";
import type { ReactNode } from "react";

import MatrixBackground from "@/components/terminal/MatrixBackground";
import ScanLines from "@/components/effects/ScanLines";
import ResumeAnnotation from "@/components/terminal/ResumeAnnotation";
import {
  GithubIcon,
  KaggleIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/terminal/icons";

type TerminalLayoutProps = {
  children: ReactNode;
  showMatrix?: boolean;
  prompt?: string;
};

export default function TerminalLayout({
  children,
  showMatrix = false,
  prompt = "farhad@portfolio:~$",
}: TerminalLayoutProps) {
  const headerLinks = [
    {
      href: "https://github.com/ZealousEar",
      aria: "Open Farhad's GitHub profile",
      Icon: GithubIcon,
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/farhad-chichgar-9b7568175/",
      aria: "Open Farhad's LinkedIn profile",
      Icon: LinkedInIcon,
      external: true,
    },
    {
      href: "https://www.kaggle.com/farhadchichgar",
      aria: "Open Farhad's Kaggle profile",
      Icon: KaggleIcon,
      external: true,
    },
    {
      href: "mailto:farhad@chichgar.com",
      aria: "Email Farhad",
      Icon: MailIcon,
      external: false,
    },
  ];

  return (
    <>
      <ResumeAnnotation />

      <div className="relative min-h-screen bg-terminal-bg text-terminal-primary">
        {/* <ScanLines /> */}
        <MatrixBackground enabled={showMatrix} opacity={0.06} />

        <div className="relative z-10 mx-auto w-full max-w-[135rem] px-4 py-10 sm:px-6 lg:px-10">
          <div className="terminal-frame rounded-terminal border border-terminal-primary/25 bg-terminal-bg/80 p-4 shadow-terminal-green">
            <header data-resume-header="true" className="relative terminal-header mb-4 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-wide text-terminal-muted">
              <div className="flex items-center gap-2">
                <span className="text-[#ff5f57]">●</span>
                <span className="text-[#febb2e]">●</span>
                <span className="text-[#28c840]">●</span>
                <span className="ml-4 text-terminal-white">{prompt}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  {headerLinks.map(({ href, aria, Icon, external }) => (
                    <a
                      key={aria}
                      href={href}
                      aria-label={aria}
                      title={aria}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="group flex h-12 w-12 items-center justify-center rounded-terminal border border-terminal-accent/40 bg-terminal-bg/70 text-terminal-accent transition-colors hover:bg-terminal-accent/10 hover:text-terminal-white"
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
                <Link href="/resume.pdf" className="terminal-button" data-annotation-target="resume">
                  resume.pdf
                </Link>
              </div>
            </header>

            <div className="terminal-content rounded-terminal border border-terminal-primary/15 bg-terminal-bg/90 px-5 py-6 shadow-inner">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

