import AsciiDivider from "@/components/terminal/AsciiDivider";
import ConsolePrompt from "@/components/terminal/ConsolePrompt";
import TerminalLayout from "@/components/terminal/TerminalLayout";
import TerminalWindow from "@/components/terminal/TerminalWindow";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectList } from "@/content/projects/projectsData";

export default function ProjectsPage() {
  return (
    <TerminalLayout showMatrix>
      <div className="space-y-10">
        <section className="space-y-4">
          <h1 className="text-3xl font-semibold text-terminal-white sm:text-4xl">
            FARHAD@PORTFOLIO:~/projects$
          </h1>
          <ConsolePrompt symbol=">" path="~/projects">
            <span>
              Listing terminal windows for systematic builds, derivatives engines, and tactical market intelligence platforms.
            </span>
          </ConsolePrompt>
        </section>

        <AsciiDivider label="project grid" />
        <div className="grid gap-6 md:grid-cols-2">
          {projectList.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <AsciiDivider label="stats refresh" />
        <TerminalWindow title="github.stats.log" accent="cyan">
          <p className="text-sm text-terminal-muted">
            Repository metrics are maintained manually for GitHub Pages deployment. Update star and fork counts in <span className="text-terminal-accent">content/projects/projectsData.ts</span> when publishing changes.
          </p>
        </TerminalWindow>
      </div>
    </TerminalLayout>
  );
}

