import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AsciiDivider from "@/components/terminal/AsciiDivider";
import ConsolePrompt from "@/components/terminal/ConsolePrompt";
import TerminalLayout from "@/components/terminal/TerminalLayout";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { projectsData, type ProjectSlug } from "@/content/projects/projectsData";
import { loadProjectMarkdown } from "@/lib/utils";

export const dynamicParams = false;

const codeSnippets: Record<ProjectSlug, { title: string; language: string; code: string }> = {
  "hull-tactical": {
    title: "// training_pipeline.py",
    language: "python",
    code: `def train_daily_models(features, labels):
    models = [
        XGBClassifier(max_depth=5, learning_rate=0.05),
        LSTMEnsemble(hidden_dim=64),
        RegimeSwitchingModel(n_regimes=3),
    ]
    for model in models:
        model.fit(features, labels)
    return models
`,
  },
  "derivx-fic-analytics": {
    title: "// sabr_surface.py",
    language: "python",
    code: `def calibrate_sabr_surface(strikes, maturities, vols):
    params = {}
    for expiry in maturities:
        params[expiry] = fit_sabr(skews=strikes, implied_vols=vols[expiry])
    return params
`,
  },
  "fpl-optimization": {
    title: "// monte_carlo_scheduler.py",
    language: "python",
    code: `def run_monte_carlo(planner, n_runs=2000):
    results = []
    for _ in range(n_runs):
        scenario = planner.sample_scenario()
        lineup = planner.optimise(scenario)
        results.append(planner.evaluate(lineup, scenario))
    return np.mean(results)
`,
  },
  "fred-md": {
    title: "// dfm_factors.py",
    language: "python",
    code: `class DynamicFactorModel:
    def __init__(self, n_factors: int = 29):
        self.n_factors = n_factors

    def fit(self, X):
        # placeholder: factor estimation
        pass

    def predict_recession_prob(self, X_future):
        # placeholder: early-warning signal
        return 0.0
`,
  },
  "horse-racing": {
    title: "// wagering.py",
    language: "python",
    code: `def kelly_fraction(edge: float, odds: float) -> float:
    if odds <= 0:
        return 0.0
    return max(min(edge / odds, 1.0), 0.0)

 def bankroll_update(bankroll: float, stake: float, outcome: bool, odds: float) -> float:
    return bankroll + stake * (odds - 1 if outcome else -1)
`,
  },
  "career-rag-pipeline": {
    title: "// service_config.py",
    language: "python",
    code: `class ServiceConfig(BaseSettings):
    redis_url: str = "redis://localhost:6379/0"
    database_url: str
    max_workers: int = 8

config = ServiceConfig()
`,
  },
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projectsData[params.slug as ProjectSlug];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} · Farhad Chichgar Portfolio`,
    description: project.shortDesc,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const slug = params.slug as ProjectSlug;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  const markdown = await loadProjectMarkdown(slug);

  const contentHtml = markdown.html;

  const codeSample = codeSnippets[slug];

  return (
    <TerminalLayout showMatrix>
      <div className="space-y-8">
        <section className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-terminal-muted">
            ~/ &gt; projects &gt; {project.slug}
          </p>
          <h1 className="text-3xl font-semibold text-terminal-white sm:text-4xl">
            FARHAD@PORTFOLIO:~/projects/{project.slug}$
          </h1>
          <ConsolePrompt symbol=">" path={`projects/${project.slug}`}>
            <span>{project.shortDesc}</span>
          </ConsolePrompt>
        </section>

        <AsciiDivider label="project detail" />

        <ProjectDetail
          project={project}
          contentHtml={contentHtml}
          codeSample={codeSample}
        />
      </div>
    </TerminalLayout>
  );
}

