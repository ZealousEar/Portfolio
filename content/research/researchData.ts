export type ResearchItem = {
  id: string;
  title: string;
  status: string;
  year: string;
  summary: string;
  nextSteps: string;
  link?: string;
};

export const researchItems: ResearchItem[] = [
  {
    id: "horse-racing-research",
    title: "Horse Racing Prediction ML Model",
    status: "Research Paper",
    year: "2025",
    summary:
      "LightGBM ensemble achieving up to 8.7% edge relative to Betfair market odds through 68-feature engineering and Bayesian calibration methods. Implemented regularization techniques reducing overfit from 97.9% to 74.9% max confidence with calibration error <0.03.",
    nextSteps: "Download research paper (PDF)",
    link: "https://github.com/ZealousEar/horse-racing-prediction/blob/main/technical_report.pdf",
  },
  {
    id: "macro-dfm-research",
    title: "Macroeconomic Forecasting with Dynamic Factor Models",
    status: "Working Paper",
    year: "2025",
    summary:
      "Statistical Time Series based approach extracting 29 latent factors from 127 macroeconomic indicators achieving 84.6% R² with recession early-warning signals. Implemented factor loadings capturing cross-sectional dependencies with 27-31% improvement over baseline ARIMA forecasts.",
    nextSteps: "Research paper link coming soon.",
  },
];
