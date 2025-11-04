export type ResearchItem = {
  id: string;
  title: string;
  status: string;
  year: string;
  summary: string;
  nextSteps: string;
};

export const researchItems: ResearchItem[] = [
  {
    id: "regime-vol-surfaces",
    title: "Regime-Switching Dynamics in Equity Volatility Surfaces",
    status: "Working Paper",
    year: "2024",
    summary:
      "Quantifying structural breaks in implied volatility using hierarchical Bayesian models and cross-asset risk factors.",
    nextSteps: "{TODO: Add publication venue or submission details}",
  },
  {
    id: "systematic-credit-risk",
    title: "Systematic Credit Risk Premia across Macro Cycles",
    status: "Research Note",
    year: "2023",
    summary:
      "Analyzing cross-sectional credit spreads with macro-regime conditioning for systematic allocation strategies.",
    nextSteps: "{TODO: Provide download link or abstract PDF}",
  },
];

