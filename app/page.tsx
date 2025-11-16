import AsciiDivider from "@/components/terminal/AsciiDivider";
import ConsolePrompt from "@/components/terminal/ConsolePrompt";
import Navigation from "@/components/terminal/Navigation";
import TerminalLayout from "@/components/terminal/TerminalLayout";
import TerminalWindow from "@/components/terminal/TerminalWindow";
import TypewriterText from "@/components/terminal/TypewriterText";

const typingPhrases = [
  "Quantitative Research &amp; Alpha Generation",
  "Statistical Modelling for Financial Markets",
  "Machine Learning in Systematic Trading",
  "Risk Model Development &amp; Validation",
  "Time Series Analysis &amp; Signal Processing",
  "Data-Driven Investment Strategies",
];

const currentWorkItems = [
  <>
    Developing ensemble models for S&P 500 return prediction for the
    {" "}
    <a
      href="https://www.kaggle.com/competitions/hull-tactical-market-prediction/"
      className="font-semibold transition hover:text-terminal-accent"
      style={{
        color: "#00d4ff",
        textDecoration: "underline",
        textDecorationThickness: "2px",
        textUnderlineOffset: "6px",
      }}
      target="_blank"
      rel="noreferrer"
    >
      Hull Tactical Kaggle competition
    </a>
    .
  </>,
  <>
    Working through <i>Advanced Quantitative Methods for Trading</i> by <i>Giuseppe Paleologo</i>.
  </>,
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
              <p className="text-justify">
                Farhad Chichgar — MSc Financial Technology & Data Science student at University of
                Bristol with a fascination for finding signal in noisy markets. My journey into
                quantitative finance started unconventionally through fantasy sports optimisation,
                where I discovered that the same mathematical rigour that generates alpha in markets
                can systematically beat millions of human decision makers. Since 2020, I've been
                actively investing and experimenting: starting in crypto during the DeFi summer,
                building positions across different chains, studying MEV bot strategies and learning
                how smart contract inefficiencies create arbitrage opportunities. This hands on
                experience with market microstructure spans Uniswap liquidity pools, high frequency
                DEX arbitrage, and the traditional finance challenges they mirror.
              </p>
              <p className="text-justify">
                I'm drawn to problems at the intersection of statistical rigour and computational
                efficiency: how do you capture regime changes before they're obvious? Can
                microstructure patterns predict larger moves? Why do some factors decay while others
                persist? My risk modelling work at Solytics reinforced that robust models must
                survive contact with messy, real world data. Outside coursework, I'm working through 
                Paleologo's <i>Advanced Quantitative Methods for Trading</i> and building ensemble models for the Hull Tactical
                competition. Seeking a graduate role where intellectual curiosity is valued and where
                I can contribute to research that makes it to production trading systems. Look below for a peak into my projects, research or any contact information.
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
            {currentWorkItems.map((item, index) => (
              <p key={`current-work-${index}`} className="text-terminal-primary">
                {">"} {item}
              </p>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </TerminalLayout>
  );
}
