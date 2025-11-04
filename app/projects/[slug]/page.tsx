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
  "derivx-fic-analytics": {
    title: "// pricing_engine.py",
    language: "python",
    code: `class OptionPricer:
    def __init__(self, spot, strike, rate, vol, maturity):
        self.S = spot
        self.K = strike
        self.r = rate
        self.sigma = vol
        self.T = maturity

    def black_scholes_call(self):
        d1 = (np.log(self.S/self.K) + (self.r + 0.5*self.sigma**2)*self.T) / (self.sigma*np.sqrt(self.T))
        d2 = d1 - self.sigma * np.sqrt(self.T)
        return self.S * norm.cdf(d1) - self.K * np.exp(-self.r*self.T) * norm.cdf(d2)
`,
  },
  "fred-md": {
    title: "// dfm_factors.py",
    language: "python",
    code: `class DynamicFactorModel:
    def __init__(self, n_factors: int = 29):
        self.n_factors = n_factors

    def fit(self, X):
        # placeholder: PCA init for factors, then Kalman smoothing
        pass

    def predict_recession_prob(self, X_future):
        # placeholder: early-warning signal
        return 0.0
`,
  },
  "hull-tactical": {
    title: "// regime_classifier.py",
    language: "python",
    code: `class RegimeClassifier:
    def __init__(self, models):
        self.models = models

    def fit(self, X, y):
        for model in self.models:
            model.fit(X, y)

    def predict(self, X):
        votes = np.array([model.predict(X) for model in self.models])
        return stats.mode(votes, keepdims=False)[0]
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

  const formattedUpdated = project.stats.updated
    ? new Intl.DateTimeFormat("en", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(project.stats.updated))
    : "{auto_fetch_date}";

  const contentHtml = markdown.html.replaceAll("{auto_fetch_date}", formattedUpdated);

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

