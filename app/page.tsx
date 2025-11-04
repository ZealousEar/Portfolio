import AsciiDivider from "@/components/terminal/AsciiDivider";
import ConsolePrompt from "@/components/terminal/ConsolePrompt";
import Navigation from "@/components/terminal/Navigation";
import TerminalLayout from "@/components/terminal/TerminalLayout";
import TerminalWindow from "@/components/terminal/TerminalWindow";
import TypewriterText from "@/components/terminal/TypewriterText";

const typingPhrases = [
  "Quantitative Finance Engineering",
  "Systematic Trading Strategy Design",
  "Derivatives & Risk Analytics",
  "Applied Machine Learning Research",
];

const currentWorkItems = [
  "Building a systematic macro regime detection pipeline with live macro factor ingestion.",
  "Prototyping intraday derivatives risk dashboards aligned with trading desk workflows.",
  "Authoring a research note on liquidity-adjusted Kelly sizing for emerging markets.",
];

export default function Home() {
  return (
    <TerminalLayout showMatrix>
      <div className="space-y-10">
        <section className="space-y-4">
          <h1
            className="text-3xl font-semibold text-terminal-white sm:text-4xl"
            title="Farhad's Portfolio"
          >
            {"FARHAD'S"}
            <span className="text-terminal-muted opacity-10">@</span>
            PORTFOLIO
            <span className="text-terminal-muted opacity-10">:~/home$</span>
          </h1>
          <TypewriterText
            strings={typingPhrases}
            className="text-xl font-medium text-terminal-primary sm:text-2xl"
          />
          <ConsolePrompt symbol=">" path="~/profile">
            <div className="space-y-3">
              <p>
                Farhad Chichgar — quantitative finance engineer focused on building disciplined, math-first trading and risk platforms that can be trusted in production.
              </p>
              <div className="text-xs uppercase tracking-[0.35em] text-terminal-muted">
                Visa Status Snapshot
              </div>
              <ul className="grid gap-2 text-sm text-terminal-white sm:grid-cols-2">
                <li className="rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 px-3 py-2">
                  <span className="font-mono text-terminal-accent">United Kingdom:</span> Graduate Programme Eligible
                </li>
                <li className="rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 px-3 py-2">
                  <span className="font-mono text-terminal-accent">Singapore:</span> Citizen
                </li>
                <li className="rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 px-3 py-2">
                  <span className="font-mono text-terminal-accent">United Arab Emirates:</span> Golden Visa Holder
                </li>
                <li className="rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 px-3 py-2">
                  <span className="font-mono text-terminal-accent">United States:</span> H1B1 Eligible
                </li>
              </ul>
            </div>
          </ConsolePrompt>
        </section>

        <AsciiDivider label="navigation ================================================== [tab/arrow] navigate options =====" />
        <Navigation />

        <AsciiDivider label="currently working on" />
        <TerminalWindow title="current_work.log">
          <div className="space-y-2 text-sm text-terminal-white">
            {currentWorkItems.map((item) => (
              <p key={item} className="text-terminal-primary">
                {">"} {item}
              </p>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </TerminalLayout>
  );
}
