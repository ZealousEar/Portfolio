import Link from "next/link";

import type { ProjectMetadata } from "@/content/projects/projectsData";
import TerminalWindow from "@/components/terminal/TerminalWindow";

type ProjectCardProps = {
  project: ProjectMetadata;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const accent = project.ui.hover === "cyan" ? "cyan" : "green";
  return (
    <Link
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-terminal-accent"
      href={`/projects/${project.slug}`}
    >
      <TerminalWindow
        accent={accent}
        title={project.title}
        className="transition-transform duration-300 group-hover:-translate-y-1"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-xl font-semibold text-terminal-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-terminal-white/90">{project.shortDesc}</p>
            </div>
            <div className="space-y-2 text-[0.75rem] text-terminal-primary">
              <pre className="whitespace-pre-wrap leading-snug">
                {`${project.ui.header}
${project.ui.content}`}
              </pre>
            </div>
            <div className="flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-[#7f8bab]">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[#7f8bab]/35 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="min-w-[14rem] space-y-3 rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 px-4 py-3 text-xs font-mono text-terminal-white lg:ml-4 lg:flex lg:flex-col lg:justify-between">
            <div className="space-y-3 text-[#7785a7]">
              <div>
                <p className="text-terminal-muted uppercase tracking-[0.25em] text-[0.6rem]">Languages</p>
                <p>{project.stats.languages}</p>
              </div>
              {project.stats.status ? (
                <div>
                  <p className="text-terminal-muted uppercase tracking-[0.25em] text-[0.6rem]">Status</p>
                  <p>{project.stats.status}</p>
                </div>
              ) : null}
              {project.stats.timeline ? (
                <div>
                  <p className="text-terminal-muted uppercase tracking-[0.25em] text-[0.6rem]">Timeline</p>
                  <p>{project.stats.timeline}</p>
                </div>
              ) : null}
            </div>
            <div className="text-right text-xs uppercase tracking-[0.4em] text-terminal-accent">
              [ENTER] →
            </div>
          </div>
        </div>
      </TerminalWindow>
    </Link>
  );
}

