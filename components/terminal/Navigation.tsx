'use client';

import type { ReactNode } from "react";
import Link from "next/link";
import { useMemo, useRef, useState, type ComponentType } from "react";

import ConsolePrompt from "@/components/terminal/ConsolePrompt";
import { projectList } from "@/content/projects/projectsData";
import { researchItems } from "@/content/research/researchData";
import {
  ContactIcon,
  MailIcon,
  GithubIcon,
  LinkedInIcon,
  ProjectsIcon,
  ResearchIcon,
  type IconProps,
} from "@/components/terminal/icons";
import { contactLinks } from "@/content/contact/contactLinks";

type NavItem = {
  key: string;
  label: string;
  accent?: "green" | "cyan";
  render: () => ReactNode;
};

const contactIconByLabel: Record<string, ComponentType<IconProps>> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedInIcon,
  Email: MailIcon,
};

const navItems: Record<"projects" | "research" | "contact", NavItem & { icon: ComponentType<IconProps> }> = {
  projects: {
    key: "projects",
    label: "projects",
    accent: "green",
    icon: ProjectsIcon,
    render: () => (
      <div className="space-y-4">
        <header className="space-y-2">
          <h2 id="projects-section" className="text-2xl font-semibold text-terminal-white">
            # projects
          </h2>
          <p className="text-terminal-muted">
            Quantitative platforms, analytics engines, and systematic trading research with production-grade implementations.
          </p>
        </header>
        <div className="space-y-4">
          {projectList.map((project) => (
            <a
              key={project.slug}
              href={`https://github.com/${project.github.owner}/${project.github.repo}`}
              target="_blank"
              rel="noreferrer"
              className="block rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 p-4 text-sm text-terminal-white transition-colors hover:border-terminal-accent/60 hover:bg-terminal-primary/10"
            >
              <h3 className="text-2xl font-semibold text-terminal-primary">
                {project.title}
              </h3>
              <p className="mt-2 text-terminal-white/90 whitespace-pre-wrap">
                {project.shortDesc}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-[#7f8bab]">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[#7f8bab]/40 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-[0.35em] text-[#7785a7]">
                <span>Languages: {project.stats.languages}</span>
                {project.stats.status ? <span>{project.stats.status}</span> : null}
                {project.stats.timeline ? <span>{project.stats.timeline}</span> : null}
              </div>
              <ConsolePrompt symbol=">" className="mt-4">
                <span>github://{project.github.owner}/{project.github.repo}</span>
              </ConsolePrompt>
            </a>
          ))}
        </div>
        <div className="flex justify-end pt-3">
          <Link href="/projects" className="terminal-button" target="_blank" rel="noreferrer">
            open /projects
          </Link>
        </div>
      </div>
    ),
  },
  research: {
    key: "research",
    label: "research",
    accent: "cyan",
    icon: ResearchIcon,
    render: () => (
      <div className="space-y-4">
        <header className="space-y-2">
          <h2 id="research-section" className="text-2xl font-semibold text-terminal-white">
            # research
          </h2>
          <p className="text-terminal-muted">
            Working papers and quantitative notes blending theory with deployment-focused experimentation.
          </p>
        </header>
        <div className="space-y-4">
          {researchItems.map((item) => {
            const Card = (
              <div
                className="rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 p-4 text-sm text-terminal-white transition-colors hover:border-terminal-accent/60 hover:bg-terminal-primary/10"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-[0.35em] text-terminal-muted/75">
                  <span>{item.status}</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="mt-2 text-2xl font-semibold text-terminal-primary">{item.title}</h3>
                <p className="mt-2 text-terminal-muted/90">{item.summary}</p>
                <ConsolePrompt symbol=">" status="muted" className="mt-4">
                  <span>{item.nextSteps}</span>
                </ConsolePrompt>
              </div>
            );

            if (item.link) {
              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  {Card}
                </a>
              );
            }

            return (
              <div key={item.id}>
                {Card}
              </div>
            );
          })}
        </div>
        <div className="flex justify-end pt-3">
          <Link href="/research" className="terminal-button" target="_blank" rel="noreferrer">
            open /research
          </Link>
        </div>
      </div>
    ),
  },
  contact: {
    key: "contact",
    label: "contact",
    accent: "cyan",
    icon: ContactIcon,
    render: () => (
      <div className="space-y-4 text-sm">
        <ConsolePrompt symbol=">">
          <span>Preferred channels for collaborations, research discussions, and opportunities.</span>
        </ConsolePrompt>
        <ul className="space-y-3">
          {contactLinks.map((link) => {
            const IconComponent = contactIconByLabel[link.label];
            return (
            <li
              key={link.label}
              className="group rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 p-4 transition-colors hover:border-terminal-accent/60 hover:bg-terminal-primary/10"
            >
              <a
                href={link.href}
                className="flex flex-col gap-2"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.35em] text-terminal-accent">
                  {IconComponent ? <IconComponent className="h-5 w-5 text-terminal-accent" /> : null}
                  {link.label}
                </span>
                <span className="text-lg font-semibold text-terminal-primary group-hover:text-terminal-white">
                  {link.value}
                </span>
                <span className="text-terminal-muted">{link.description}</span>
              </a>
            </li>
            );
          })}
        </ul>
        <div className="flex justify-end pt-3">
          <Link href="/contact" className="terminal-button" target="_blank" rel="noreferrer">
            open /contact
          </Link>
        </div>
      </div>
    ),
  },
};

export default function Navigation() {
  const [openKey, setOpenKey] = useState<keyof typeof navItems>("projects");
  const order = useMemo(() => ["projects", "research", "contact"] as const, []);
  const activeItem = useMemo(() => navItems[openKey], [openKey]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusButton = (index: number) => {
    buttonRefs.current[index]?.focus();
  };

  const cycle = (currentIndex: number, direction: 1 | -1) => {
    const nextIndex = (currentIndex + direction + order.length) % order.length;
    setOpenKey(order[nextIndex]);
    focusButton(nextIndex);
  };

  const handleKeyNavigation = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const key = event.key;
    if (key === "ArrowRight") {
      event.preventDefault();
      cycle(index, 1);
    } else if (key === "ArrowLeft") {
      event.preventDefault();
      cycle(index, -1);
    } else if (key === "Tab") {
      event.preventDefault();
      cycle(index, event.shiftKey ? -1 : 1);
    }
  };

  return (
    <nav className="w-full space-y-3 text-sm text-terminal-white">
      <div className="rounded-terminal border border-terminal-primary/25 bg-terminal-bg/70 shadow-terminal-green/20">
        <div className="grid gap-2 border-b border-terminal-primary/20 bg-terminal-bg/80 p-3 sm:grid-cols-3">
          {order.map((key, index) => {
            const item = navItems[key];
            const isActive = key === openKey;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setOpenKey(key)}
                aria-pressed={isActive}
                onKeyDown={(event) => handleKeyNavigation(event, index)}
                ref={(button) => {
                  buttonRefs.current[index] = button;
                }}
                className={`group flex h-20 flex-col items-start justify-center gap-1 rounded-terminal border px-4 py-3 text-left transition-all ${
                  isActive
                    ? "border-terminal-accent bg-terminal-primary/10 shadow-terminal-cyan"
                    : "border-terminal-primary/25 bg-terminal-bg/40 hover:border-terminal-accent/60 hover:bg-terminal-primary/5"
                }`}
              >
                <item.icon className={`h-6 w-6 ${isActive ? "text-terminal-accent" : "text-terminal-muted"}`} />
                <span className="text-sm font-semibold uppercase tracking-[0.3em]">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
        <div className="bg-terminal-bg/10 px-5 py-6 backdrop-blur">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-terminal-muted">
            detail.log
          </div>
          <div className="space-y-4 text-sm text-terminal-white">
            {activeItem.render()}
          </div>
        </div>
      </div>
    </nav>
  );
}
