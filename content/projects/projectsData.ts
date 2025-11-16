export type ProjectSlug =
  | "hull-tactical"
  | "derivx-fic-analytics"
  | "fpl-optimization"
  | "fred-md"
  | "horse-racing"
  | "career-rag-pipeline";

type ProjectStats = {
  languages: string;
  timeline?: string;
  status?: string;
};

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
  stats: ProjectStats;
  ui: {
    hover: "green" | "cyan";
    header: string;
    content: string;
  };
  content: {
    overview: string;
    keyFeatures: string[];
    detailedDescription: string;
    methodology?: string;
    results?: string;
  };
  commits?: ProjectCommit[];
};

export const projectsData: Record<ProjectSlug, ProjectMetadata> = {
  "hull-tactical": {
    slug: "hull-tactical",
    github: {
      owner: "ZealousEar",
      repo: "hull-tactical-market-prediction",
    },
    title: "Hull Tactical S&P 500 Directional Prediction [IN PROGRESS]",
    shortDesc:
      "Building ensemble models for daily S&P 500 return prediction in active Kaggle competition. Implementing feature engineering from market indicators including volatility regimes, cross-asset correlations and macroeconomic signals. Experimenting with XGBoost, neural networks and regime-switching models.",
    tags: [
      "ENSEMBLE METHODS",
      "FEATURE ENGINEERING",
      "TIME SERIES",
      "XGBOOST",
      "KAGGLE COMPETITION"
    ],
    stats: {
      languages: "Python",
      status: "Status: In Progress",
      timeline: "Started: SEP 2025",
    },
    ui: {
      hover: "cyan",
      header: "┌─[hull-tactical]──────────────┐",
      content: [
        "│ > Kaggle Competition          │",
        "│ > Ensemble Modelling         │",
        "│ > S&P 500 Direction          │",
        "│ [ENTER] View Details         │",
        "└──────────────────────────────┘",
      ].join("\n"),
    },
    content: {
      overview:
        "Building ensemble models for daily S&P 500 return prediction in an active Kaggle competition, combining engineered market indicators with stacked learning architectures.",
      keyFeatures: [
        "Feature engineering across volatility regimes, cross-asset correlations, and macroeconomic signals",
        "Model experimentation with XGBoost, neural networks, and regime-switching ensembles",
        "Daily prediction pipeline targeting robust directional signals for the S&P 500",
      ],
      detailedDescription:
        "This project focuses on translating rich market structure insights into predictive features for daily S&P 500 direction, aligning Kaggle competition execution with institutional research-grade experimentation.",
      methodology:
        "Volatility regime tagging, cross-asset correlation windows, macro signal integration, and stacked ensembles combining tree-based and neural networks.",
      results:
        "Current iteration in progress with active offline validation and live Kaggle leaderboard tracking.",
    },
  },
  "derivx-fic-analytics": {
    slug: "derivx-fic-analytics",
    github: {
      owner: "ZealousEar",
      repo: "derivx-fic-analytics",
    },
    title: "Fixed-Income/FX Derivatives Pricing Platform",
    shortDesc:
      "Built production-ready pricing engine for interest rate swaps, FX options and structured products. Implemented curve construction (OIS/IRS), SABR/SVI volatility calibration and risk metrics (PV, DV01) under rate shock scenarios. Interactive 3D volatility surface visualization with scenario analysis.",
    tags: [
      "STOCHASTIC CALCULUS",
      "MONTE CARLO",
      "SABR MODEL",
      "BLACK-SCHOLES",
      "RISK ANALYTICS",
      "STREAMLIT"
    ],
    stats: {
      languages: "Python",
      timeline: "Updated: OCT 2025",
    },
    ui: {
      hover: "green",
      header: "┌─[derivx-fic-analytics]──────┐",
      content: [
        "│ > Curve Construction        │",
        "│ > Vol Surface Calibration   │",
        "│ > Risk Analytics            │",
        "│ [ENTER] View Details        │",
        "└────────────────────────────┘",
      ].join("\n"),
    },
    content: {
      overview:
        "Production-grade pricing engine covering rate swaps, FX options, and structured notes with full volatility calibration and risk analytics.",
      keyFeatures: [
        "Curve construction for OIS/IRS with multi-currency support",
        "SABR and SVI volatility surface calibration with scenario stress testing",
        "Interactive 3D visualization surfaces and risk metric dashboards",
      ],
      detailedDescription:
        "Platform delivers institutional-grade valuations and risk metrics across fixed-income and FX derivatives with integrated scenario analysis and visualization tooling.",
      methodology:
        "Hybrid analytical/Monte Carlo valuation, volatility surface fitting, and rate shock stress testing embedded in a Streamlit control plane.",
      results:
        "Supports production runbooks for PV, DV01, and scenario-based risk reporting.",
    },
  },
  "fpl-optimization": {
    slug: "fpl-optimization",
    github: {
      owner: "ZealousEar",
      repo: "fpl-optimization",
    },
    title: "Fantasy Premier League Optimization Engine",
    shortDesc:
      "Modified open-source solver to optimize team selection using University of Bristol HPC cluster for 1000s of Monte Carlo simulations. Achieved consistent top 1% performance (3 years running, peak rank 20k/10M players) through hyperparameter tuning of horizon values, transfer dynamics and bench weighting strategies.",
    tags: [
      "COMBINATORIAL OPTIMIZATION",
      "MONTE CARLO",
      "HPC",
      "SENSITIVITY ANALYSIS",
      "OPERATIONS RESEARCH"
    ],
    stats: {
      languages: "Python, C++",
      timeline: "Active: SEP 2021 – PRESENT",
    },
    ui: {
      hover: "cyan",
      header: "┌─[fpl-optimization]────────┐",
      content: [
        "│ > Monte Carlo Planning      │",
        "│ > HPC Optimisation          │",
        "│ > FPL Strategy Engine       │",
        "│ [ENTER] View Details        │",
        "└────────────────────────────┘",
      ].join("\n"),
    },
    content: {
      overview:
        "High-performance optimiser for Fantasy Premier League team selection delivering consistent top-percentile finishes through Monte Carlo planning and sensitivity analysis.",
      keyFeatures: [
        "Monte Carlo simulation on HPC cluster for lineup robustness",
        "Hyperparameter tuning of horizon, transfers, and bench weighting",
        "Custom heuristics layered on open-source solver core",
      ],
      detailedDescription:
        "System combines aggressive simulation schedules with optimisation heuristics to maintain sustained top 1% rankings across multiple FPL seasons.",
      methodology:
        "Combines ILP/CP solvers, Monte Carlo sampling, and scenario weighting executed across University of Bristol HPC infrastructure.",
      results:
        "Peak rank 20k out of 10M players with three-year top 1% consistency.",
    },
  },
  "fred-md": {
    slug: "fred-md",
    github: {
      owner: "ZealousEar",
      repo: "fred-md",
    },
    title: "Macroeconomic Forecasting with Dynamic Factor Models",
    shortDesc:
      "Statistical Time Series based approach extracting 29 latent factors from 127 macroeconomic indicators achieving 84.6% R² with recession early-warning signals. Implemented factor loadings capturing cross-sectional dependencies with 27-31% improvement over baseline ARIMA forecasts.",
    tags: [
      "MACHINE LEARNING",
      "TIME SERIES",
      "ALPHA RESEARCH",
      "BACKTESTING",
      "FACTOR MODELS"
    ],
    stats: {
      languages: "R",
      timeline: "Updated: MAR 2025",
    },
    ui: {
      hover: "green",
      header: "┌─[fred-md]──────────────────┐",
      content: [
        "│ > Dynamic Factor Models    │",
        "│ > Recession Signals        │",
        "│ > Macro Forecasting        │",
        "│ [ENTER] View Details       │",
        "└────────────────────────────┘",
      ].join("\n"),
    },
    content: {
      overview:
        "Dynamic factor framework extracting 29 latent macro factors with strong recession early-warning accuracy.",
      keyFeatures: [
        "Ingests 127 macroeconomic indicators into factor loadings",
        "Delivers 84.6% R² with cross-sectional dependency modelling",
        "Outperforms ARIMA baselines by 27–31% across validation windows",
      ],
      detailedDescription:
        "Research note demonstrates robust macro factor modelling with emphasis on early warning recession detection and tactical asset allocation support.",
      methodology:
        "Kalman filtering, state-space factor extraction, and walk-forward backtesting across NBER-aligned cycles.",
      results:
        "Delivers significant lift over traditional ARIMA approaches with stable early warning probabilities.",
    },
  },
  "horse-racing": {
    slug: "horse-racing",
    github: {
      owner: "ZealousEar",
      repo: "horse-racing-prediction",
    },
    title: "Horse Racing Prediction ML Model",
    shortDesc:
      "LightGBM ensemble achieving up to 8.7% edge relative to Betfair market odds through 68-feature engineering and Bayesian calibration methods. Implemented regularization techniques reducing overfit from 97.9% to 74.9% max confidence with calibration error <0.03.",
    tags: [
      "MACHINE LEARNING",
      "STATISTICAL MODELLING",
      "FEATURE ENGINEERING",
      "PROBABILITY THEORY",
      "LIGHTGBM"
    ],
    stats: {
      languages: "Python",
      timeline: "Updated: MAR 2025",
    },
    ui: {
      hover: "cyan",
      header: "┌─[horse-racing]────────────┐",
      content: [
        "│ > LightGBM Ensemble        │",
        "│ > Odds Calibration         │",
        "│ > Probability Modelling    │",
        "│ [ENTER] View Details       │",
        "└────────────────────────────┘",
      ].join("\n"),
    },
    content: {
      overview:
        "Machine learning betting model delivering measurable edge on Betfair markets via calibrated LightGBM ensembles.",
      keyFeatures: [
        "68 engineered features spanning form, pace, and market signals",
        "Bayesian calibration reducing overconfidence and improving log-loss",
        "Regularisation strategy cutting maximum confidence from 97.9% to 74.9%",
      ],
      detailedDescription:
        "Project demonstrates disciplined betting model construction with focus on calibration, feature richness, and risk-aware staking.",
      methodology:
        "LightGBM ensemble training, Bayesian calibration layers, and Kelly-based staking heuristics.",
      results:
        "8.7% edge over market odds with calibration error under 0.03.",
    },
  },
  "career-rag-pipeline": {
    slug: "career-rag-pipeline",
    github: {
      owner: "ZealousEar",
      repo: "career-rag-pipeline",
    },
    title: "Production ML Platform for NLP Analytics",
    shortDesc:
      "Architected microservices platform processing 1000+ concurrent requests with sub-3 second latency. Implemented async FastAPI endpoints, Redis caching and PostgreSQL backend. Built comprehensive NLP pipeline using transformers and LangChain for document analysis.",
    tags: [
      "FASTAPI",
      "MICROSERVICES",
      "NLP",
      "LANGCHAIN",
      "REDIS",
      "POSTGRESQL",
      "DOCKER"
    ],
    stats: {
      languages: "Python",
      timeline: "Updated: AUG 2025",
    },
    ui: {
      hover: "green",
      header: "┌─[career-rag-pipeline]──────┐",
      content: [
        "│ > FastAPI Microservices     │",
        "│ > LangChain NLP             │",
        "│ > Production Analytics      │",
        "│ [ENTER] View Details        │",
        "└────────────────────────────┘",
      ].join("\n"),
    },
    content: {
      overview:
        "Production-grade NLP analytics platform with microservices architecture handling high concurrency at sub-3 second latency.",
      keyFeatures: [
        "Asynchronous FastAPI endpoints with Redis caching and PostgreSQL",
        "Transformer-based NLP pipeline orchestrated with LangChain",
        "Dockerised services enabling horizontal scaling and observability",
      ],
      detailedDescription:
        "Platform underpins document analytics workloads with resilient microservices, ensuring low-latency inference and operational robustness.",
      methodology:
        "Event-driven FastAPI design, caching and persistence layers, and NLP workflow management via LangChain and transformer models.",
      results:
        "Sustains 1000+ concurrent requests under 3 seconds end-to-end latency.",
    },
  },
};

export const projectList = Object.values(projectsData);
