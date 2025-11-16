import AsciiDivider from "@/components/terminal/AsciiDivider";
import ConsolePrompt from "@/components/terminal/ConsolePrompt";
import TerminalLayout from "@/components/terminal/TerminalLayout";
import TerminalWindow from "@/components/terminal/TerminalWindow";
import { researchItems } from "@/content/research/researchData";

export default function ResearchPage() {
  return (
    <TerminalLayout showMatrix>
      <div className="space-y-8">
        <section className="space-y-3">
          <h1 className="text-3xl font-semibold text-terminal-white sm:text-4xl">
            FARHAD@PORTFOLIO:~/research$
          </h1>
          <ConsolePrompt symbol=">" path="~/research">
            <span>
              Research notebooks, working papers, and quant notes synthesizing theory with production-aligned experimentation.
            </span>
          </ConsolePrompt>
        </section>

        <AsciiDivider label="research docket" />

        <div className="space-y-6">
          {researchItems.map((item) => {
            const window = (
              <TerminalWindow key={item.id} title={`${item.id}.md`} accent="green">
                <div className="space-y-3 text-sm text-terminal-white">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-[0.35em] text-terminal-accent">
                    <span>{item.status}</span>
                    <span>{item.year}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-terminal-primary">{item.title}</h2>
                  <p className="text-terminal-muted">{item.summary}</p>
                  <ConsolePrompt symbol=">" status="muted">
                    <span>{item.nextSteps}</span>
                  </ConsolePrompt>
                </div>
              </TerminalWindow>
            );

            if (item.link) {
              return (
                <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="block">
                  {window}
                </a>
              );
            }

            return window;
          })}
        </div>
      </div>
    </TerminalLayout>
  );
}


