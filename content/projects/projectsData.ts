export type ProjectSlug =
  | "derivx-fic-analytics"
  | "fred-md"
  | "hull-tactical"
  | "horse-racing";

export type ProjectCommit = {
  sha: string;
  message: string;
  date?: string;
  author?: string;
};

export type ProjectMetadata = {
  slug: ProjectSlug;
  github: {
    owner: string;
    repo: string;
  };
  title: string;
  shortDesc: string;
  tags: string[];
  stats: {
    language: string;
    forks: string;
    updated: string;
  };
  ui: {
    hover: "green" | "cyan";
    header: string;
    content: string;
  };
  content: {
    overview: string;
    keyFeatures: string[];
    technicalDetails?: Record<string, string | number>;
    detailedDescription: string;
    challenges?: string;
    methodology?: string;
    dataEngineering?: string;
    results?: string;
  };
  commits?: ProjectCommit[];
};

export const projectsData: Record<ProjectSlug, ProjectMetadata> = {
  "derivx-fic-analytics": {
    slug: "derivx-fic-analytics",
    github: {
      owner: "ZealousEar",
      repo: "derivx-fic-analytics",
    },
    title: "PROJECT 1: Fixed-Income/FX Derivatives Pricing Platform",
    shortDesc:
      "Production-ready pricing platform for interest rate derivatives and FX options with volatility surface calibration and live Greeks computation",
    tags: ["Python", "C++", "Stochastic Calculus", "Monte Carlo", "Risk Management"],
    stats: {
      language: "Python",
      forks: "12",
      updated: "2024-08-15",
    },
    ui: {
      hover: "green",
      header: "┌─[derivx-fic-analytics]─────┐",
      content: [
        "│ > Fixed Income Analytics    │",
        "│ > Derivatives Pricing       │",
        "│ > Risk Management          │",
        "│ [ENTER] View Details       │",
        "└────────────────────────────┘",
      ].join("\n"),
    },
    content: {
      overview:
        "Production-ready pricing platform for interest rate derivatives and FX options with volatility surface calibration and live Greeks computation.",
      keyFeatures: [
        "Black-Scholes and Heston model implementations",
        "Monte Carlo simulation with variance reduction",
        "Greeks calculation and hedging strategies",
        "Yield curve construction and bootstrapping",
        "VaR and CVaR risk metrics",
      ],
      technicalDetails: {
        architecture: "Microservices with REST API",
        pricingSpeed: "<10ms for vanilla options",
        throughput: "100,000+ scenarios per second",
        accuracy: "99.97% vs Bloomberg BVAL",
      },
      detailedDescription: "{TODO: Provide detailed narrative about DerivX FIC Analytics}",
      challenges: "{TODO: Highlight technical challenges and solutions}",
      results: "{TODO: Quantitative impact and validation results}",
    },
    commits: [
      {
        sha: "a1b2c3d",
        message: "Add callable bond analytics module",
        date: "2024-08-14",
        author: "ZealousEar",
      },
      {
        sha: "d4e5f6a",
        message: "Optimize Monte Carlo engine variance reduction",
        date: "2024-07-28",
        author: "ZealousEar",
      },
    ],
  },
  "fred-md": {
    slug: "fred-md",
    github: {
      owner: "ZealousEar",
      repo: "fred-md",
    },
    title: "PROJECT 2: Macroeconomic Forecasting with Dynamic Factor Models",
    shortDesc:
      "Machine learning approach extracting 29 latent factors from 127 macroeconomic indicators achieving 84.6% R² with recession early-warning signals",
    tags: ["Machine Learning", "Time Series", "Alpha Research", "R/Python", "Backtesting"],
    stats: {
      language: "Python/R",
      forks: "9",
      updated: "2024-07-22",
    },
    ui: {
      hover: "cyan",
      header: "┌─[fred-md]─────────────────┐",
      content: [
        "│ > Market Regime Detection   │",
        "│ > Tactical Asset Allocation │",
        "│ > Backtesting Framework    │",
        "│ [ENTER] View Details       │",
        "└────────────────────────────┘",
      ].join("\n"),
    },
    content: {
      overview:
        "Machine learning approach extracting 29 latent factors from 127 macroeconomic indicators achieving 84.6% R² with recession early-warning signals.",
      keyFeatures: [
        "Hidden Markov model regime detection",
        "Feature engineering from 200+ market indicators",
        "Ensemble models (Random Forest, XGBoost, LSTM)",
        "Walk-forward backtesting framework",
        "Dynamic position sizing with Kelly Criterion",
      ],
      technicalDetails: {
        sharpeRatio: "1.8",
        annualizedReturn: "14.2%",
        maxDrawdown: "12.3%",
        hitRate: "62%",
      },
      detailedDescription: "{TODO: Provide methodology deep dive}",
      methodology: "{TODO: Outline modelling and research process}",
      results: "{TODO: Summarize backtesting highlights}",
    },
    commits: [],
  },
  "hull-tactical": {
    slug: "hull-tactical",
    github: {
      owner: "ZealousEar",
      repo: "hull-tactical-market-prediction",
    },
    title: "PROJECT 4: Hull Tactical Market Regime Prediction",
    shortDesc: "Machine learning-driven market regime classification powering tactical asset allocation workflows",
    tags: ["Machine Learning", "Time Series", "Trading Strategy", "Python", "R"],
    stats: {
      language: "Python/R",
      forks: "9",
      updated: "2024-07-22",
    },
    ui: {
      hover: "cyan",
      header: "┌─[hull-tactical]────────────┐",
      content: [
        "│ > Market Regime Detection   │",
        "│ > Tactical Asset Allocation │",
        "│ > Backtesting Framework    │",
        "│ [ENTER] View Details       │",
        "└────────────────────────────┘",
      ].join("\n"),
    },
    content: {
      overview:
        "Implementation of Hull Tactical's regime classification framework with machine learning driven allocation rules.",
      keyFeatures: [
        "Hidden Markov model regime detection",
        "Feature engineering from 200+ market indicators",
        "Ensemble models (Random Forest, XGBoost, LSTM)",
        "Walk-forward backtesting framework",
        "Dynamic position sizing with Kelly Criterion",
      ],
      technicalDetails: {
        sharpeRatio: "1.8",
        annualizedReturn: "14.2%",
        maxDrawdown: "12.3%",
        hitRate: "62%",
      },
      detailedDescription: "{TODO: Provide methodology deep dive}",
      methodology: "{TODO: Outline modelling and research process}",
      results: "{TODO: Summarize backtesting highlights}",
    },
    commits: [
      {
        sha: "7f8a9bc",
        message: "Refine macro factor normalization pipeline",
        date: "2024-07-18",
        author: "ZealousEar",
      },
      {
        sha: "1c2d3e4",
        message: "Add Kelly sizing overlay to execution module",
        date: "2024-06-30",
        author: "ZealousEar",
      },
    ],
  },
  "horse-racing": {
    slug: "horse-racing",
    github: {
      owner: "ZealousEar",
      repo: "horse-racing-prediction",
    },
    title: "PROJECT 3: Horse Racing Prediction ML Model",
    shortDesc:
      "LightGBM ensemble achieving 8.7% edge over market odds through 68-feature engineering and Bayesian calibration methods",
    tags: ["Python", "Machine Learning", "Statistical Modeling", "Feature Engineering", "Probability Theory"],
    stats: {
      language: "Python",
      forks: "5",
      updated: "2024-09-05",
    },
    ui: {
      hover: "green",
      header: "┌─[horse-racing-pred]────────┐",
      content: [
        "│ > Statistical Modeling      │",
        "│ > Kelly Criterion Betting   │",
        "│ > Market Inefficiencies    │",
        "│ [ENTER] View Details       │",
        "└────────────────────────────┘",
      ].join("\n"),
    },
    content: {
      overview:
        "LightGBM ensemble achieving 8.7% edge over market odds through 68-feature engineering and Bayesian calibration methods.",
      keyFeatures: [
        "ELO rating system for horses and jockeys",
        "Regularized logistic regression ensembles",
        "Kelly Criterion position sizing",
        "Market efficiency monitoring",
        "Real-time odds scraping and arbitrage detection",
      ],
      technicalDetails: {
        roi: "8.3%",
        winRate: "31%",
        kellyFraction: "0.15",
        profitableBets: "12% of races",
      },
      detailedDescription: "{TODO: Describe data sourcing, modelling, and deployment}",
      dataEngineering: "{TODO: Document data pipeline considerations}",
      results: "{TODO: Summarize PnL and validation metrics}",
    },
    commits: [
      {
        sha: "9b0c1d2",
        message: "Improve odds scraping resiliency for late scratches",
        date: "2024-09-02",
        author: "ZealousEar",
      },
      {
        sha: "5e6f7g8",
        message: "Tune ensemble regularization for sprint distances",
        date: "2024-08-11",
        author: "ZealousEar",
      },
    ],
  },
};

export const projectList = Object.values(projectsData);

