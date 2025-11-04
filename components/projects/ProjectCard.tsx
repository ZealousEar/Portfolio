import Link from "next/link";

import type { ProjectMetadata } from "@/content/projects/projectsData";
import TerminalWindow from "@/components/terminal/TerminalWindow";

type ProjectCardProps = {
  project: ProjectMetadata;
};

function formatUpdated(value?: string) {
  if (!value) return "--";
  try {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(value));
  } catch (error) {
    console.warn("Failed to format GitHub updated date", error);
    return value;
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const accent = project.ui.hover === "cyan" ? "cyan" : "green";
  const updated = formatUpdated(project.stats.updated);

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
              <p className="mt-2 text-sm text-terminal-muted">{project.shortDesc}</p>
            </div>
            <div className="space-y-2 text-[0.75rem] text-terminal-primary">
              <pre className="whitespace-pre-wrap leading-snug">
                {`${project.ui.header}
${project.ui.content}`}
              </pre>
            </div>
            <div className="flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-terminal-accent">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-terminal-accent/40 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="min-w-[14rem] space-y-3 rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 px-4 py-3 text-xs font-mono text-terminal-white lg:ml-4 lg:flex lg:flex-col lg:justify-between">
            <div className="grid grid-cols-1 gap-3">
              <div>
                <p className="text-terminal-muted uppercase tracking-[0.25em] text-[0.6rem]">Language</p>
                <p>{project.stats.language}</p>
              </div>
              <div>
                <p className="text-terminal-muted uppercase tracking-[0.25em] text-[0.6rem]">Forks</p>
                <p>{project.stats.forks}</p>
              </div>
              <div>
                <p className="text-terminal-muted uppercase tracking-[0.25em] text-[0.6rem]">Updated</p>
                <p>{updated}</p>
              </div>
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

