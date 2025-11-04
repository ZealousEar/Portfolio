import ConsolePrompt from "@/components/terminal/ConsolePrompt";
import TerminalWindow from "@/components/terminal/TerminalWindow";
import type { ProjectMetadata } from "@/content/projects/projectsData";

type CodeSample = {
  title: string;
  language: string;
  code: string;
};

type ProjectDetailProps = {
  project: ProjectMetadata;
  contentHtml: string;
  codeSample?: CodeSample;
};

function formatDate(value?: string) {
  if (!value) return "--";
  try {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

export default function ProjectDetail({ project, contentHtml, codeSample }: ProjectDetailProps) {
  const updatedAt = formatDate(project.stats.updated);
  const commits = project.commits ?? [];

  return (
    <div className="space-y-8">
      <TerminalWindow title={`${project.slug}.status.log`} accent="cyan">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <ConsolePrompt symbol=">" path="project/overview">
              <span>{project.shortDesc}</span>
            </ConsolePrompt>
            <div className="flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.35em] text-terminal-accent">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-terminal-accent/30 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 p-3 text-xs font-mono text-terminal-white">
            <div>
              <p className="text-terminal-muted uppercase tracking-[0.25em] text-[0.6rem]">Forks</p>
              <p>{project.stats.forks}</p>
            </div>
            <div>
              <p className="text-terminal-muted uppercase tracking-[0.25em] text-[0.6rem]">Language</p>
              <p>{project.stats.language}</p>
            </div>
            <div>
              <p className="text-terminal-muted uppercase tracking-[0.25em] text-[0.6rem]">Updated</p>
              <p>{updatedAt}</p>
            </div>
          </div>
        </div>
      </TerminalWindow>

      <TerminalWindow title={`${project.slug}.md`} accent="green">
        <div
          className="project-markdown space-y-4 text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </TerminalWindow>

      {codeSample ? (
        <TerminalWindow title={codeSample.title} accent="green">
          <pre className="overflow-x-auto rounded-terminal border border-terminal-primary/20 bg-black/40 p-4 text-sm text-terminal-white">
            <code className={`language-${codeSample.language}`}>{codeSample.code}</code>
          </pre>
        </TerminalWindow>
      ) : null}

      {commits.length > 0 ? (
        <TerminalWindow title="recent_commits.log" accent="cyan">
          <ul className="space-y-3 text-sm text-terminal-white">
            {commits.map((commit) => (
              <li key={commit.sha} className="rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 p-3">
                <div className="flex items-center justify-between text-xs font-mono text-terminal-accent">
                  <span>{commit.sha}</span>
                  <span>{formatDate(commit.date)}</span>
                </div>
                <p className="mt-2 text-terminal-primary">{commit.message}</p>
                {commit.author ? (
                  <p className="mt-1 text-xs text-terminal-muted">by {commit.author}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </TerminalWindow>
      ) : null}
    </div>
  );
}

