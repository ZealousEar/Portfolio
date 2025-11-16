module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/terminal/ConsolePrompt.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsolePrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const statusColor = {
    default: "text-terminal-white",
    success: "text-terminal-success",
    error: "text-terminal-error",
    muted: "text-terminal-muted"
};
function ConsolePrompt({ symbol = ">", path, children, status = "default", className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-start gap-3 whitespace-pre-wrap text-sm leading-relaxed text-terminal-primary ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-terminal-accent",
                children: symbol
            }, void 0, false, {
                fileName: "[project]/components/terminal/ConsolePrompt.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-1",
                children: [
                    path ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-xs uppercase tracking-widest text-terminal-muted",
                        children: path
                    }, void 0, false, {
                        fileName: "[project]/components/terminal/ConsolePrompt.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this) : null,
                    children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `font-mono ${statusColor[status]}`,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/terminal/ConsolePrompt.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/terminal/ConsolePrompt.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/terminal/ConsolePrompt.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/content/projects/projectsData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectList",
    ()=>projectList,
    "projectsData",
    ()=>projectsData
]);
const projectsData = {
    "hull-tactical": {
        slug: "hull-tactical",
        github: {
            owner: "ZealousEar",
            repo: "hull-tactical-market-prediction"
        },
        title: "Hull Tactical S&P 500 Directional Prediction [IN PROGRESS]",
        shortDesc: "Building ensemble models for daily S&P 500 return prediction in active Kaggle competition. Implementing feature engineering from market indicators including volatility regimes, cross-asset correlations and macroeconomic signals. Experimenting with XGBoost, neural networks and regime-switching models.",
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
            timeline: "Started: SEP 2025"
        },
        ui: {
            hover: "cyan",
            header: "┌─[hull-tactical]──────────────┐",
            content: [
                "│ > Kaggle Competition          │",
                "│ > Ensemble Modelling         │",
                "│ > S&P 500 Direction          │",
                "│ [ENTER] View Details         │",
                "└──────────────────────────────┘"
            ].join("\n")
        },
        content: {
            overview: "Building ensemble models for daily S&P 500 return prediction in an active Kaggle competition, combining engineered market indicators with stacked learning architectures.",
            keyFeatures: [
                "Feature engineering across volatility regimes, cross-asset correlations, and macroeconomic signals",
                "Model experimentation with XGBoost, neural networks, and regime-switching ensembles",
                "Daily prediction pipeline targeting robust directional signals for the S&P 500"
            ],
            detailedDescription: "This project focuses on translating rich market structure insights into predictive features for daily S&P 500 direction, aligning Kaggle competition execution with institutional research-grade experimentation.",
            methodology: "Volatility regime tagging, cross-asset correlation windows, macro signal integration, and stacked ensembles combining tree-based and neural networks.",
            results: "Current iteration in progress with active offline validation and live Kaggle leaderboard tracking."
        }
    },
    "derivx-fic-analytics": {
        slug: "derivx-fic-analytics",
        github: {
            owner: "ZealousEar",
            repo: "derivx-fic-analytics"
        },
        title: "Fixed-Income/FX Derivatives Pricing Platform",
        shortDesc: "Built production-ready pricing engine for interest rate swaps, FX options and structured products. Implemented curve construction (OIS/IRS), SABR/SVI volatility calibration and risk metrics (PV, DV01) under rate shock scenarios. Interactive 3D volatility surface visualization with scenario analysis.",
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
            timeline: "Updated: OCT 2025"
        },
        ui: {
            hover: "green",
            header: "┌─[derivx-fic-analytics]──────┐",
            content: [
                "│ > Curve Construction        │",
                "│ > Vol Surface Calibration   │",
                "│ > Risk Analytics            │",
                "│ [ENTER] View Details        │",
                "└────────────────────────────┘"
            ].join("\n")
        },
        content: {
            overview: "Production-grade pricing engine covering rate swaps, FX options, and structured notes with full volatility calibration and risk analytics.",
            keyFeatures: [
                "Curve construction for OIS/IRS with multi-currency support",
                "SABR and SVI volatility surface calibration with scenario stress testing",
                "Interactive 3D visualization surfaces and risk metric dashboards"
            ],
            detailedDescription: "Platform delivers institutional-grade valuations and risk metrics across fixed-income and FX derivatives with integrated scenario analysis and visualization tooling.",
            methodology: "Hybrid analytical/Monte Carlo valuation, volatility surface fitting, and rate shock stress testing embedded in a Streamlit control plane.",
            results: "Supports production runbooks for PV, DV01, and scenario-based risk reporting."
        }
    },
    "fpl-optimization": {
        slug: "fpl-optimization",
        github: {
            owner: "ZealousEar",
            repo: "fpl-optimization"
        },
        title: "Fantasy Premier League Optimization Engine",
        shortDesc: "Modified open-source solver to optimize team selection using University of Bristol HPC cluster for 1000s of Monte Carlo simulations. Achieved consistent top 1% performance (3 years running, peak rank 20k/10M players) through hyperparameter tuning of horizon values, transfer dynamics and bench weighting strategies.",
        tags: [
            "COMBINATORIAL OPTIMIZATION",
            "MONTE CARLO",
            "HPC",
            "SENSITIVITY ANALYSIS",
            "OPERATIONS RESEARCH"
        ],
        stats: {
            languages: "Python, C++",
            timeline: "Active: SEP 2021 – PRESENT"
        },
        ui: {
            hover: "cyan",
            header: "┌─[fpl-optimization]────────┐",
            content: [
                "│ > Monte Carlo Planning      │",
                "│ > HPC Optimisation          │",
                "│ > FPL Strategy Engine       │",
                "│ [ENTER] View Details        │",
                "└────────────────────────────┘"
            ].join("\n")
        },
        content: {
            overview: "High-performance optimiser for Fantasy Premier League team selection delivering consistent top-percentile finishes through Monte Carlo planning and sensitivity analysis.",
            keyFeatures: [
                "Monte Carlo simulation on HPC cluster for lineup robustness",
                "Hyperparameter tuning of horizon, transfers, and bench weighting",
                "Custom heuristics layered on open-source solver core"
            ],
            detailedDescription: "System combines aggressive simulation schedules with optimisation heuristics to maintain sustained top 1% rankings across multiple FPL seasons.",
            methodology: "Combines ILP/CP solvers, Monte Carlo sampling, and scenario weighting executed across University of Bristol HPC infrastructure.",
            results: "Peak rank 20k out of 10M players with three-year top 1% consistency."
        }
    },
    "fred-md": {
        slug: "fred-md",
        github: {
            owner: "ZealousEar",
            repo: "fred-md"
        },
        title: "Macroeconomic Forecasting with Dynamic Factor Models",
        shortDesc: "Statistical Time Series based approach extracting 29 latent factors from 127 macroeconomic indicators achieving 84.6% R² with recession early-warning signals. Implemented factor loadings capturing cross-sectional dependencies with 27-31% improvement over baseline ARIMA forecasts.",
        tags: [
            "MACHINE LEARNING",
            "TIME SERIES",
            "ALPHA RESEARCH",
            "BACKTESTING",
            "FACTOR MODELS"
        ],
        stats: {
            languages: "R",
            timeline: "Updated: MAR 2025"
        },
        ui: {
            hover: "green",
            header: "┌─[fred-md]──────────────────┐",
            content: [
                "│ > Dynamic Factor Models    │",
                "│ > Recession Signals        │",
                "│ > Macro Forecasting        │",
                "│ [ENTER] View Details       │",
                "└────────────────────────────┘"
            ].join("\n")
        },
        content: {
            overview: "Dynamic factor framework extracting 29 latent macro factors with strong recession early-warning accuracy.",
            keyFeatures: [
                "Ingests 127 macroeconomic indicators into factor loadings",
                "Delivers 84.6% R² with cross-sectional dependency modelling",
                "Outperforms ARIMA baselines by 27–31% across validation windows"
            ],
            detailedDescription: "Research note demonstrates robust macro factor modelling with emphasis on early warning recession detection and tactical asset allocation support.",
            methodology: "Kalman filtering, state-space factor extraction, and walk-forward backtesting across NBER-aligned cycles.",
            results: "Delivers significant lift over traditional ARIMA approaches with stable early warning probabilities."
        }
    },
    "horse-racing": {
        slug: "horse-racing",
        github: {
            owner: "ZealousEar",
            repo: "horse-racing-prediction"
        },
        title: "Horse Racing Prediction ML Model",
        shortDesc: "LightGBM ensemble achieving up to 8.7% edge relative to Betfair market odds through 68-feature engineering and Bayesian calibration methods. Implemented regularization techniques reducing overfit from 97.9% to 74.9% max confidence with calibration error <0.03.",
        tags: [
            "MACHINE LEARNING",
            "STATISTICAL MODELLING",
            "FEATURE ENGINEERING",
            "PROBABILITY THEORY",
            "LIGHTGBM"
        ],
        stats: {
            languages: "Python",
            timeline: "Updated: MAR 2025"
        },
        ui: {
            hover: "cyan",
            header: "┌─[horse-racing]────────────┐",
            content: [
                "│ > LightGBM Ensemble        │",
                "│ > Odds Calibration         │",
                "│ > Probability Modelling    │",
                "│ [ENTER] View Details       │",
                "└────────────────────────────┘"
            ].join("\n")
        },
        content: {
            overview: "Machine learning betting model delivering measurable edge on Betfair markets via calibrated LightGBM ensembles.",
            keyFeatures: [
                "68 engineered features spanning form, pace, and market signals",
                "Bayesian calibration reducing overconfidence and improving log-loss",
                "Regularisation strategy cutting maximum confidence from 97.9% to 74.9%"
            ],
            detailedDescription: "Project demonstrates disciplined betting model construction with focus on calibration, feature richness, and risk-aware staking.",
            methodology: "LightGBM ensemble training, Bayesian calibration layers, and Kelly-based staking heuristics.",
            results: "8.7% edge over market odds with calibration error under 0.03."
        }
    },
    "career-rag-pipeline": {
        slug: "career-rag-pipeline",
        github: {
            owner: "ZealousEar",
            repo: "career-rag-pipeline"
        },
        title: "Production ML Platform for NLP Analytics",
        shortDesc: "Architected microservices platform processing 1000+ concurrent requests with sub-3 second latency. Implemented async FastAPI endpoints, Redis caching and PostgreSQL backend. Built comprehensive NLP pipeline using transformers and LangChain for document analysis.",
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
            timeline: "Updated: AUG 2025"
        },
        ui: {
            hover: "green",
            header: "┌─[career-rag-pipeline]──────┐",
            content: [
                "│ > FastAPI Microservices     │",
                "│ > LangChain NLP             │",
                "│ > Production Analytics      │",
                "│ [ENTER] View Details        │",
                "└────────────────────────────┘"
            ].join("\n")
        },
        content: {
            overview: "Production-grade NLP analytics platform with microservices architecture handling high concurrency at sub-3 second latency.",
            keyFeatures: [
                "Asynchronous FastAPI endpoints with Redis caching and PostgreSQL",
                "Transformer-based NLP pipeline orchestrated with LangChain",
                "Dockerised services enabling horizontal scaling and observability"
            ],
            detailedDescription: "Platform underpins document analytics workloads with resilient microservices, ensuring low-latency inference and operational robustness.",
            methodology: "Event-driven FastAPI design, caching and persistence layers, and NLP workflow management via LangChain and transformer models.",
            results: "Sustains 1000+ concurrent requests under 3 seconds end-to-end latency."
        }
    }
};
const projectList = Object.values(projectsData);
}),
"[project]/content/research/researchData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "researchItems",
    ()=>researchItems
]);
const researchItems = [
    {
        id: "horse-racing-research",
        title: "Horse Racing Prediction ML Model",
        status: "Research Paper",
        year: "2025",
        summary: "LightGBM ensemble achieving up to 8.7% edge relative to Betfair market odds through 68-feature engineering and Bayesian calibration methods. Implemented regularization techniques reducing overfit from 97.9% to 74.9% max confidence with calibration error <0.03.",
        nextSteps: "Download research paper (PDF)",
        link: "https://github.com/ZealousEar/horse-racing-prediction/blob/main/technical_report.pdf"
    },
    {
        id: "macro-dfm-research",
        title: "Macroeconomic Forecasting with Dynamic Factor Models",
        status: "Working Paper",
        year: "2025",
        summary: "Statistical Time Series based approach extracting 29 latent factors from 127 macroeconomic indicators achieving 84.6% R² with recession early-warning signals. Implemented factor loadings capturing cross-sectional dependencies with 27-31% improvement over baseline ARIMA forecasts.",
        nextSteps: "Research paper link coming soon."
    }
];
}),
"[project]/components/terminal/icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactIcon",
    ()=>ContactIcon,
    "GithubIcon",
    ()=>GithubIcon,
    "KaggleIcon",
    ()=>KaggleIcon,
    "LinkedInIcon",
    ()=>LinkedInIcon,
    "MailIcon",
    ()=>MailIcon,
    "ProjectsIcon",
    ()=>ProjectsIcon,
    "ResearchIcon",
    ()=>ResearchIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function GithubIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.093.682-.218.682-.486 0-.241-.009-.88-.014-1.727-2.782.605-3.369-1.345-3.369-1.345-.454-1.157-1.11-1.466-1.11-1.466-.908-.622.069-.61.069-.61 1.004.071 1.533 1.033 1.533 1.033.892 1.533 2.341 1.09 2.91.835.091-.651.35-1.09.636-1.341-2.221-.257-4.555-1.115-4.555-4.964 0-1.096.39-1.993 1.029-2.694-.103-.258-.446-1.295.098-2.7 0 0 .84-.27 2.75 1.03A9.564 9.564 0 0 1 12 7.07c.85.004 1.705.115 2.504.337 1.909-1.3 2.748-1.03 2.748-1.03.546 1.405.203 2.442.1 2.7.64.701 1.028 1.598 1.028 2.694 0 3.86-2.339 4.704-4.566 4.956.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .269.18.583.688.484A10.026 10.026 0 0 0 22 12.022C22 6.486 17.523 2 12 2Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/terminal/icons.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/terminal/icons.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function LinkedInIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "4",
                fill: "currentColor",
                opacity: "0.15"
            }, void 0, false, {
                fileName: "[project]/components/terminal/icons.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.63 16.8H6.47V9.6h2.16v7.2Zm-.98-8.28h-.02c-.78 0-1.28-.54-1.28-1.2 0-.68.52-1.2 1.32-1.2.8 0 1.28.52 1.3 1.2 0 .66-.5 1.2-1.32 1.2ZM18 16.8h-2.16v-3.86c0-.97-.35-1.64-1.23-1.64-.67 0-1.07.45-1.25.9-.06.16-.08.38-.08.6v3.99H11.1s.03-6.48 0-7.2h2.18v1.02c.29-.45.8-1.08 1.94-1.08 1.42 0 2.78.93 2.78 3.32V16.8Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/components/terminal/icons.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/terminal/icons.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
function KaggleIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4.5 3.5c0-.552.447-1 1-1h2.095c.552 0 1 .448 1 1v5.393l5.317-5.586c.196-.205.467-.321.75-.321H17.5c.889 0 1.336 1.073.75 1.75L11.81 12l6.44 7.264c.586.677.139 1.75-.75 1.75h-2.838c-.283 0-.554-.116-.75-.321L8.595 14.9v5.601c0 .552-.448 1-1 1H5.5c-.553 0-1-.448-1-1V3.5Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/terminal/icons.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/terminal/icons.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function MailIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 4c-1.1 0-2 .9-2 2v12c0 1.105.9 2 2 2h16c1.1 0 2-.895 2-2V6c0-1.1-.9-2-2-2H4Zm0 2h16l-8 5-8-5Zm0 2.236 7.553 4.721a1 1 0 0 0 1.05 0L20 8.236V18H4V8.236Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/terminal/icons.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/terminal/icons.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
function ProjectsIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 5.5c0-1.105.9-2 2-2h12c1.1 0 2 .895 2 2v13c0 1.105-.9 2-2 2H6c-1.1 0-2-.895-2-2v-13Zm4 1.5a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H8Zm0-3.5a1 1 0 0 0-1 1V5h10v-.5a1 1 0 0 0-1-1H8Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/components/terminal/icons.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.5 9.5h5v1.5h-5V9.5Zm0 3h5V14h-5v-1.5Z",
                fill: "currentColor",
                opacity: "0.65"
            }, void 0, false, {
                fileName: "[project]/components/terminal/icons.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/terminal/icons.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
function ResearchIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 3c-3.866 0-7 2.582-7 5.768 0 2.022 1.323 3.79 3.303 4.77l-.931 3.52a1 1 0 0 0 1.471 1.109L12 16.494l3.157 1.673a1 1 0 0 0 1.471-1.109l-.931-3.52C17.677 12.559 19 10.79 19 8.768 19 5.582 15.866 3 12 3ZM7 8.768C7 6.71 9.252 5 12 5s5 1.71 5 3.768c0 1.644-1.18 3.065-3.044 3.55a1 1 0 0 0-.72.736l-.54 2.043-1.853-.983a1 1 0 0 0-.93 0l-1.853.983-.54-2.043a1 1 0 0 0-.72-.736C8.18 11.833 7 10.412 7 8.768Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/terminal/icons.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/terminal/icons.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
function ContactIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm0 16c4.97 0 9 2.015 9 4.5V23H3v-.5C3 20.015 7.03 18 12 18Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/terminal/icons.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/terminal/icons.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
}),
"[project]/content/contact/contactLinks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactLinks",
    ()=>contactLinks
]);
const contactLinks = [
    {
        label: "GitHub",
        value: "github://ZealousEar",
        href: "https://github.com/ZealousEar",
        description: "Less pretty version of my portfolio, click to see my code repositories and research papers"
    },
    {
        label: "LinkedIn",
        value: "linkedin://farhad-chichgar",
        href: "https://www.linkedin.com/in/farhad-chichgar-9b7568175/",
        description: "Professional collaborations and connection requests"
    },
    {
        label: "Email",
        value: "farhad@chichgar.com",
        href: "mailto:farhad@chichgar.com",
        description: "Direct contact for opportunities and research conversations"
    }
];
}),
"[project]/components/terminal/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$ConsolePrompt$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/terminal/ConsolePrompt.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2f$projectsData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/projects/projectsData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$research$2f$researchData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/research/researchData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/terminal/icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$contact$2f$contactLinks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/contact/contactLinks.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const contactIconByLabel = {
    GitHub: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GithubIcon"],
    LinkedIn: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkedInIcon"],
    Email: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MailIcon"]
};
const navItems = {
    projects: {
        key: "projects",
        label: "projects",
        accent: "green",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectsIcon"],
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "projects-section",
                                className: "text-2xl font-semibold text-terminal-white",
                                children: "# projects"
                            }, void 0, false, {
                                fileName: "[project]/components/terminal/Navigation.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-terminal-muted",
                                children: "Quantitative platforms, analytics engines, and systematic trading research with production-grade implementations."
                            }, void 0, false, {
                                fileName: "[project]/components/terminal/Navigation.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/terminal/Navigation.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2f$projectsData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectList"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `https://github.com/${project.github.owner}/${project.github.repo}`,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "block rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 p-4 text-sm text-terminal-white transition-colors hover:border-terminal-accent/60 hover:bg-terminal-primary/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-semibold text-terminal-primary",
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/terminal/Navigation.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-terminal-white/90 whitespace-pre-wrap",
                                        children: project.shortDesc
                                    }, void 0, false, {
                                        fileName: "[project]/components/terminal/Navigation.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-[#7f8bab]",
                                        children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-[#7f8bab]/40 px-2 py-1",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/components/terminal/Navigation.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/terminal/Navigation.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-[0.35em] text-[#7785a7]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Languages: ",
                                                    project.stats.languages
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/terminal/Navigation.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            project.stats.status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: project.stats.status
                                            }, void 0, false, {
                                                fileName: "[project]/components/terminal/Navigation.tsx",
                                                lineNumber: 74,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)) : null,
                                            project.stats.timeline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: project.stats.timeline
                                            }, void 0, false, {
                                                fileName: "[project]/components/terminal/Navigation.tsx",
                                                lineNumber: 75,
                                                columnNumber: 43
                                            }, ("TURBOPACK compile-time value", void 0)) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/terminal/Navigation.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$ConsolePrompt$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        symbol: ">",
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "github://",
                                                project.github.owner,
                                                "/",
                                                project.github.repo
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/terminal/Navigation.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/terminal/Navigation.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, project.slug, true, {
                                fileName: "[project]/components/terminal/Navigation.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/terminal/Navigation.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end pt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/projects",
                            className: "terminal-button",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "open /projects"
                        }, void 0, false, {
                            fileName: "[project]/components/terminal/Navigation.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/terminal/Navigation.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/terminal/Navigation.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    research: {
        key: "research",
        label: "research",
        accent: "cyan",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResearchIcon"],
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "research-section",
                                className: "text-2xl font-semibold text-terminal-white",
                                children: "# research"
                            }, void 0, false, {
                                fileName: "[project]/components/terminal/Navigation.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-terminal-muted",
                                children: "Working papers and quantitative notes blending theory with deployment-focused experimentation."
                            }, void 0, false, {
                                fileName: "[project]/components/terminal/Navigation.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/terminal/Navigation.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$research$2f$researchData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["researchItems"].map((item)=>{
                            const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 p-4 text-sm text-terminal-white transition-colors hover:border-terminal-accent/60 hover:bg-terminal-primary/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-[0.35em] text-terminal-muted/75",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.status
                                            }, void 0, false, {
                                                fileName: "[project]/components/terminal/Navigation.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.year
                                            }, void 0, false, {
                                                fileName: "[project]/components/terminal/Navigation.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/terminal/Navigation.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-2 text-2xl font-semibold text-terminal-primary",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/terminal/Navigation.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-terminal-muted/90",
                                        children: item.summary
                                    }, void 0, false, {
                                        fileName: "[project]/components/terminal/Navigation.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$ConsolePrompt$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        symbol: ">",
                                        status: "muted",
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.nextSteps
                                        }, void 0, false, {
                                            fileName: "[project]/components/terminal/Navigation.tsx",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/terminal/Navigation.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/terminal/Navigation.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                            if (item.link) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.link,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "block",
                                    children: Card
                                }, item.id, false, {
                                    fileName: "[project]/components/terminal/Navigation.tsx",
                                    lineNumber: 126,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: Card
                            }, item.id, false, {
                                fileName: "[project]/components/terminal/Navigation.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/terminal/Navigation.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end pt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/research",
                            className: "terminal-button",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "open /research"
                        }, void 0, false, {
                            fileName: "[project]/components/terminal/Navigation.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/terminal/Navigation.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/terminal/Navigation.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    contact: {
        key: "contact",
        label: "contact",
        accent: "cyan",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContactIcon"],
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$ConsolePrompt$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        symbol: ">",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Preferred channels for collaborations, research discussions, and opportunities."
                        }, void 0, false, {
                            fileName: "[project]/components/terminal/Navigation.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/terminal/Navigation.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$contact$2f$contactLinks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactLinks"].map((link)=>{
                            const IconComponent = contactIconByLabel[link.label];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "group rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 p-4 transition-colors hover:border-terminal-accent/60 hover:bg-terminal-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: "flex flex-col gap-2",
                                    target: link.href.startsWith("http") ? "_blank" : undefined,
                                    rel: link.href.startsWith("http") ? "noreferrer" : undefined,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-3 text-xs font-mono uppercase tracking-[0.35em] text-terminal-accent",
                                            children: [
                                                IconComponent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                    className: "h-5 w-5 text-terminal-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/terminal/Navigation.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 36
                                                }, ("TURBOPACK compile-time value", void 0)) : null,
                                                link.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/terminal/Navigation.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-semibold text-terminal-primary group-hover:text-terminal-white",
                                            children: link.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/terminal/Navigation.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-terminal-muted",
                                            children: link.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/terminal/Navigation.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/terminal/Navigation.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, link.label, false, {
                                fileName: "[project]/components/terminal/Navigation.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/terminal/Navigation.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end pt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "terminal-button",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "open /contact"
                        }, void 0, false, {
                            fileName: "[project]/components/terminal/Navigation.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/terminal/Navigation.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/terminal/Navigation.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    }
};
function Navigation() {
    const [openKey, setOpenKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("projects");
    const order = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            "projects",
            "research",
            "contact"
        ], []);
    const activeItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>navItems[openKey], [
        openKey
    ]);
    const buttonRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const focusButton = (index)=>{
        buttonRefs.current[index]?.focus();
    };
    const cycle = (currentIndex, direction)=>{
        const nextIndex = (currentIndex + direction + order.length) % order.length;
        setOpenKey(order[nextIndex]);
        focusButton(nextIndex);
    };
    const handleKeyNavigation = (event, index)=>{
        const key = event.key;
        if (key === "ArrowRight") {
            event.preventDefault();
            cycle(index, 1);
        } else if (key === "ArrowLeft") {
            event.preventDefault();
            cycle(index, -1);
        } else if (key === "Tab") {
            event.preventDefault();
            cycle(index, event.shiftKey ? -1 : 1);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "w-full space-y-3 text-sm text-terminal-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-terminal border border-terminal-primary/25 bg-terminal-bg/70 shadow-terminal-green/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-2 border-b border-terminal-primary/20 bg-terminal-bg/80 p-3 sm:grid-cols-3",
                    children: order.map((key, index)=>{
                        const item = navItems[key];
                        const isActive = key === openKey;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setOpenKey(key),
                            "aria-pressed": isActive,
                            onKeyDown: (event)=>handleKeyNavigation(event, index),
                            ref: (button)=>{
                                buttonRefs.current[index] = button;
                            },
                            className: `group flex h-20 flex-col items-start justify-center gap-1 rounded-terminal border px-4 py-3 text-left transition-all ${isActive ? "border-terminal-accent bg-terminal-primary/10 shadow-terminal-cyan" : "border-terminal-primary/25 bg-terminal-bg/40 hover:border-terminal-accent/60 hover:bg-terminal-primary/5"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                    className: `h-6 w-6 ${isActive ? "text-terminal-accent" : "text-terminal-muted"}`
                                }, void 0, false, {
                                    fileName: "[project]/components/terminal/Navigation.tsx",
                                    lineNumber: 256,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold uppercase tracking-[0.3em]",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/terminal/Navigation.tsx",
                                    lineNumber: 257,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, key, true, {
                            fileName: "[project]/components/terminal/Navigation.tsx",
                            lineNumber: 241,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/terminal/Navigation.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-terminal-bg/10 px-5 py-6 backdrop-blur",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 text-xs uppercase tracking-[0.35em] text-terminal-muted",
                            children: "detail.log"
                        }, void 0, false, {
                            fileName: "[project]/components/terminal/Navigation.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-sm text-terminal-white",
                            children: activeItem.render()
                        }, void 0, false, {
                            fileName: "[project]/components/terminal/Navigation.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/terminal/Navigation.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/terminal/Navigation.tsx",
            lineNumber: 235,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/terminal/Navigation.tsx",
        lineNumber: 234,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/terminal/MatrixBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatrixBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
'use client';
;
;
const MatrixRain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/effects/MatrixRain.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>null
});
function MatrixBackground({ enabled = false, opacity = 0.06 }) {
    if (!enabled) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MatrixRain, {
        opacity: opacity
    }, void 0, false, {
        fileName: "[project]/components/terminal/MatrixBackground.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/terminal/ResumeAnnotation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResumeAnnotation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const TARGET_SELECTOR = '[data-annotation-target="resume"]';
const HEADER_SELECTOR = '[data-resume-header="true"]';
const ARROW_TIP_X = 45; // SVG arrow tip X coordinate
const ARROW_TIP_Y = 32; // SVG arrow tip Y coordinate
function ResumeAnnotation() {
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
        const target = undefined;
        const header = undefined;
        const update = undefined;
        const observer = undefined;
    }, []);
    if (!position) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none flex items-center gap-4 font-handwritten text-terminal-primary",
        style: {
            position: "absolute",
            top: position.top,
            left: position.left
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "240",
                height: "150",
                viewBox: "0 0 240 150",
                className: "-mr-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 230 140 Q 170 90, 120 65 Q 75 45, 45 32",
                        stroke: "#00ff41",
                        strokeWidth: "2",
                        fill: "none",
                        strokeLinecap: "round",
                        strokeDasharray: "5 3",
                        opacity: "0.85"
                    }, void 0, false, {
                        fileName: "[project]/components/terminal/ResumeAnnotation.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 45 32 L 57 30 M 45 32 L 51 42",
                        stroke: "#00ff41",
                        strokeWidth: "2",
                        fill: "none",
                        strokeLinecap: "round",
                        opacity: "0.85"
                    }, void 0, false, {
                        fileName: "[project]/components/terminal/ResumeAnnotation.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/terminal/ResumeAnnotation.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none",
                style: {
                    fontSize: "1.4rem",
                    transform: "rotate(-4deg)",
                    textShadow: "0 0 12px rgba(0, 255, 65, 0.55)",
                    opacity: 0.92
                },
                children: "Find my resume here!"
            }, void 0, false, {
                fileName: "[project]/components/terminal/ResumeAnnotation.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/terminal/ResumeAnnotation.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/terminal/TypewriterText.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TypewriterText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$typed$2f$dist$2f$mjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-typed/dist/mjs/index.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
function TypewriterText({ strings, className = "", typeSpeed = 46, backSpeed = 32, backDelay = 1400, loop = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center text-terminal-white ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$typed$2f$dist$2f$mjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactTyped"], {
                strings: strings,
                typeSpeed: typeSpeed,
                backSpeed: backSpeed,
                backDelay: backDelay,
                loop: loop,
                smartBackspace: true,
                showCursor: false
            }, void 0, false, {
                fileName: "[project]/components/terminal/TypewriterText.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "cursor-blink"
            }, void 0, false, {
                fileName: "[project]/components/terminal/TypewriterText.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/terminal/TypewriterText.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__db405a24._.js.map