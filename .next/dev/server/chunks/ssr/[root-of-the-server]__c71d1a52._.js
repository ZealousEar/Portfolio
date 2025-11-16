module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/quant-portfolio/components/terminal/ConsolePrompt.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsolePrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/quant-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const statusColor = {
    default: "text-terminal-white",
    success: "text-terminal-success",
    error: "text-terminal-error",
    muted: "text-terminal-muted"
};
function ConsolePrompt({ symbol = ">", path, children, status = "default", className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-start gap-3 whitespace-pre-wrap text-sm leading-relaxed text-terminal-primary ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-terminal-accent",
                children: symbol
            }, void 0, false, {
                fileName: "[project]/quant-portfolio/components/terminal/ConsolePrompt.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-1",
                children: [
                    path ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-xs uppercase tracking-widest text-terminal-muted",
                        children: path
                    }, void 0, false, {
                        fileName: "[project]/quant-portfolio/components/terminal/ConsolePrompt.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this) : null,
                    children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `font-mono ${statusColor[status]}`,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/quant-portfolio/components/terminal/ConsolePrompt.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/quant-portfolio/components/terminal/ConsolePrompt.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/quant-portfolio/components/terminal/ConsolePrompt.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/quant-portfolio/content/projects/projectsData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectList",
    ()=>projectList,
    "projectsData",
    ()=>projectsData
]);
const projectsData = {
    "derivx-fic-analytics": {
        slug: "derivx-fic-analytics",
        github: {
            owner: "ZealousEar",
            repo: "derivx-fic-analytics"
        },
        title: "PROJECT 1: Fixed-Income/FX Derivatives Pricing Platform",
        shortDesc: "Production-ready pricing platform for interest rate derivatives and FX options with volatility surface calibration and live Greeks computation",
        tags: [
            "Python",
            "C++",
            "Stochastic Calculus",
            "Monte Carlo",
            "Risk Management"
        ],
        stats: {
            language: "Python",
            forks: "12",
            updated: "2024-08-15"
        },
        ui: {
            hover: "green",
            header: "┌─[derivx-fic-analytics]─────┐",
            content: [
                "│ > Fixed Income Analytics    │",
                "│ > Derivatives Pricing       │",
                "│ > Risk Management          │",
                "│ [ENTER] View Details       │",
                "└────────────────────────────┘"
            ].join("\n")
        },
        content: {
            overview: "Production-ready pricing platform for interest rate derivatives and FX options with volatility surface calibration and live Greeks computation.",
            keyFeatures: [
                "Black-Scholes and Heston model implementations",
                "Monte Carlo simulation with variance reduction",
                "Greeks calculation and hedging strategies",
                "Yield curve construction and bootstrapping",
                "VaR and CVaR risk metrics"
            ],
            technicalDetails: {
                architecture: "Microservices with REST API",
                pricingSpeed: "<10ms for vanilla options",
                throughput: "100,000+ scenarios per second",
                accuracy: "99.97% vs Bloomberg BVAL"
            },
            detailedDescription: "{TODO: Provide detailed narrative about DerivX FIC Analytics}",
            challenges: "{TODO: Highlight technical challenges and solutions}",
            results: "{TODO: Quantitative impact and validation results}"
        },
        commits: [
            {
                sha: "a1b2c3d",
                message: "Add callable bond analytics module",
                date: "2024-08-14",
                author: "ZealousEar"
            },
            {
                sha: "d4e5f6a",
                message: "Optimize Monte Carlo engine variance reduction",
                date: "2024-07-28",
                author: "ZealousEar"
            }
        ]
    },
    "fred-md": {
        slug: "fred-md",
        github: {
            owner: "ZealousEar",
            repo: "fred-md"
        },
        title: "PROJECT 2: Macroeconomic Forecasting with Dynamic Factor Models",
        shortDesc: "Machine learning approach extracting 29 latent factors from 127 macroeconomic indicators achieving 84.6% R² with recession early-warning signals",
        tags: [
            "Machine Learning",
            "Time Series",
            "Alpha Research",
            "R/Python",
            "Backtesting"
        ],
        stats: {
            language: "Python/R",
            forks: "9",
            updated: "2024-07-22"
        },
        ui: {
            hover: "cyan",
            header: "┌─[fred-md]─────────────────┐",
            content: [
                "│ > Market Regime Detection   │",
                "│ > Tactical Asset Allocation │",
                "│ > Backtesting Framework    │",
                "│ [ENTER] View Details       │",
                "└────────────────────────────┘"
            ].join("\n")
        },
        content: {
            overview: "Machine learning approach extracting 29 latent factors from 127 macroeconomic indicators achieving 84.6% R² with recession early-warning signals.",
            keyFeatures: [
                "Hidden Markov model regime detection",
                "Feature engineering from 200+ market indicators",
                "Ensemble models (Random Forest, XGBoost, LSTM)",
                "Walk-forward backtesting framework",
                "Dynamic position sizing with Kelly Criterion"
            ],
            technicalDetails: {
                sharpeRatio: "1.8",
                annualizedReturn: "14.2%",
                maxDrawdown: "12.3%",
                hitRate: "62%"
            },
            detailedDescription: "{TODO: Provide methodology deep dive}",
            methodology: "{TODO: Outline modelling and research process}",
            results: "{TODO: Summarize backtesting highlights}"
        },
        commits: []
    },
    "hull-tactical": {
        slug: "hull-tactical",
        github: {
            owner: "ZealousEar",
            repo: "hull-tactical-market-prediction"
        },
        title: "PROJECT 4: Hull Tactical Market Regime Prediction",
        shortDesc: "Machine learning-driven market regime classification powering tactical asset allocation workflows",
        tags: [
            "Machine Learning",
            "Time Series",
            "Trading Strategy",
            "Python",
            "R"
        ],
        stats: {
            language: "Python/R",
            forks: "9",
            updated: "2024-07-22"
        },
        ui: {
            hover: "cyan",
            header: "┌─[hull-tactical]────────────┐",
            content: [
                "│ > Market Regime Detection   │",
                "│ > Tactical Asset Allocation │",
                "│ > Backtesting Framework    │",
                "│ [ENTER] View Details       │",
                "└────────────────────────────┘"
            ].join("\n")
        },
        content: {
            overview: "Implementation of Hull Tactical's regime classification framework with machine learning driven allocation rules.",
            keyFeatures: [
                "Hidden Markov model regime detection",
                "Feature engineering from 200+ market indicators",
                "Ensemble models (Random Forest, XGBoost, LSTM)",
                "Walk-forward backtesting framework",
                "Dynamic position sizing with Kelly Criterion"
            ],
            technicalDetails: {
                sharpeRatio: "1.8",
                annualizedReturn: "14.2%",
                maxDrawdown: "12.3%",
                hitRate: "62%"
            },
            detailedDescription: "{TODO: Provide methodology deep dive}",
            methodology: "{TODO: Outline modelling and research process}",
            results: "{TODO: Summarize backtesting highlights}"
        },
        commits: [
            {
                sha: "7f8a9bc",
                message: "Refine macro factor normalization pipeline",
                date: "2024-07-18",
                author: "ZealousEar"
            },
            {
                sha: "1c2d3e4",
                message: "Add Kelly sizing overlay to execution module",
                date: "2024-06-30",
                author: "ZealousEar"
            }
        ]
    },
    "horse-racing": {
        slug: "horse-racing",
        github: {
            owner: "ZealousEar",
            repo: "horse-racing-prediction"
        },
        title: "PROJECT 3: Horse Racing Prediction ML Model",
        shortDesc: "LightGBM ensemble achieving 8.7% edge over market odds through 68-feature engineering and Bayesian calibration methods",
        tags: [
            "Python",
            "Machine Learning",
            "Statistical Modeling",
            "Feature Engineering",
            "Probability Theory"
        ],
        stats: {
            language: "Python",
            forks: "5",
            updated: "2024-09-05"
        },
        ui: {
            hover: "green",
            header: "┌─[horse-racing-pred]────────┐",
            content: [
                "│ > Statistical Modeling      │",
                "│ > Kelly Criterion Betting   │",
                "│ > Market Inefficiencies    │",
                "│ [ENTER] View Details       │",
                "└────────────────────────────┘"
            ].join("\n")
        },
        content: {
            overview: "LightGBM ensemble achieving 8.7% edge over market odds through 68-feature engineering and Bayesian calibration methods.",
            keyFeatures: [
                "ELO rating system for horses and jockeys",
                "Regularized logistic regression ensembles",
                "Kelly Criterion position sizing",
                "Market efficiency monitoring",
                "Real-time odds scraping and arbitrage detection"
            ],
            technicalDetails: {
                roi: "8.3%",
                winRate: "31%",
                kellyFraction: "0.15",
                profitableBets: "12% of races"
            },
            detailedDescription: "{TODO: Describe data sourcing, modelling, and deployment}",
            dataEngineering: "{TODO: Document data pipeline considerations}",
            results: "{TODO: Summarize PnL and validation metrics}"
        },
        commits: [
            {
                sha: "9b0c1d2",
                message: "Improve odds scraping resiliency for late scratches",
                date: "2024-09-02",
                author: "ZealousEar"
            },
            {
                sha: "5e6f7g8",
                message: "Tune ensemble regularization for sprint distances",
                date: "2024-08-11",
                author: "ZealousEar"
            }
        ]
    }
};
const projectList = Object.values(projectsData);
}),
"[project]/quant-portfolio/content/research/researchData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "researchItems",
    ()=>researchItems
]);
const researchItems = [
    {
        id: "regime-vol-surfaces",
        title: "Regime-Switching Dynamics in Equity Volatility Surfaces",
        status: "Working Paper",
        year: "2024",
        summary: "Quantifying structural breaks in implied volatility using hierarchical Bayesian models and cross-asset risk factors.",
        nextSteps: "{TODO: Add publication venue or submission details}"
    },
    {
        id: "systematic-credit-risk",
        title: "Systematic Credit Risk Premia across Macro Cycles",
        status: "Research Note",
        year: "2023",
        summary: "Analyzing cross-sectional credit spreads with macro-regime conditioning for systematic allocation strategies.",
        nextSteps: "{TODO: Provide download link or abstract PDF}"
    }
];
}),
"[project]/quant-portfolio/components/terminal/icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/quant-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function GithubIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.093.682-.218.682-.486 0-.241-.009-.88-.014-1.727-2.782.605-3.369-1.345-3.369-1.345-.454-1.157-1.11-1.466-1.11-1.466-.908-.622.069-.61.069-.61 1.004.071 1.533 1.033 1.533 1.033.892 1.533 2.341 1.09 2.91.835.091-.651.35-1.09.636-1.341-2.221-.257-4.555-1.115-4.555-4.964 0-1.096.39-1.993 1.029-2.694-.103-.258-.446-1.295.098-2.7 0 0 .84-.27 2.75 1.03A9.564 9.564 0 0 1 12 7.07c.85.004 1.705.115 2.504.337 1.909-1.3 2.748-1.03 2.748-1.03.546 1.405.203 2.442.1 2.7.64.701 1.028 1.598 1.028 2.694 0 3.86-2.339 4.704-4.566 4.956.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .269.18.583.688.484A10.026 10.026 0 0 0 22 12.022C22 6.486 17.523 2 12 2Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function LinkedInIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "4",
                fill: "currentColor",
                opacity: "0.15"
            }, void 0, false, {
                fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.63 16.8H6.47V9.6h2.16v7.2Zm-.98-8.28h-.02c-.78 0-1.28-.54-1.28-1.2 0-.68.52-1.2 1.32-1.2.8 0 1.28.52 1.3 1.2 0 .66-.5 1.2-1.32 1.2ZM18 16.8h-2.16v-3.86c0-.97-.35-1.64-1.23-1.64-.67 0-1.07.45-1.25.9-.06.16-.08.38-.08.6v3.99H11.1s.03-6.48 0-7.2h2.18v1.02c.29-.45.8-1.08 1.94-1.08 1.42 0 2.78.93 2.78 3.32V16.8Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
function KaggleIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4.5 3.5c0-.552.447-1 1-1h2.095c.552 0 1 .448 1 1v5.393l5.317-5.586c.196-.205.467-.321.75-.321H17.5c.889 0 1.336 1.073.75 1.75L11.81 12l6.44 7.264c.586.677.139 1.75-.75 1.75h-2.838c-.283 0-.554-.116-.75-.321L8.595 14.9v5.601c0 .552-.448 1-1 1H5.5c-.553 0-1-.448-1-1V3.5Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function MailIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 4c-1.1 0-2 .9-2 2v12c0 1.105.9 2 2 2h16c1.1 0 2-.895 2-2V6c0-1.1-.9-2-2-2H4Zm0 2h16l-8 5-8-5Zm0 2.236 7.553 4.721a1 1 0 0 0 1.05 0L20 8.236V18H4V8.236Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
function ProjectsIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 5.5c0-1.105.9-2 2-2h12c1.1 0 2 .895 2 2v13c0 1.105-.9 2-2 2H6c-1.1 0-2-.895-2-2v-13Zm4 1.5a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H8Zm0-3.5a1 1 0 0 0-1 1V5h10v-.5a1 1 0 0 0-1-1H8Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.5 9.5h5v1.5h-5V9.5Zm0 3h5V14h-5v-1.5Z",
                fill: "currentColor",
                opacity: "0.65"
            }, void 0, false, {
                fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
function ResearchIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 3c-3.866 0-7 2.582-7 5.768 0 2.022 1.323 3.79 3.303 4.77l-.931 3.52a1 1 0 0 0 1.471 1.109L12 16.494l3.157 1.673a1 1 0 0 0 1.471-1.109l-.931-3.52C17.677 12.559 19 10.79 19 8.768 19 5.582 15.866 3 12 3ZM7 8.768C7 6.71 9.252 5 12 5s5 1.71 5 3.768c0 1.644-1.18 3.065-3.044 3.55a1 1 0 0 0-.72.736l-.54 2.043-1.853-.983a1 1 0 0 0-.93 0l-1.853.983-.54-2.043a1 1 0 0 0-.72-.736C8.18 11.833 7 10.412 7 8.768Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
function ContactIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm0 16c4.97 0 9 2.015 9 4.5V23H3v-.5C3 20.015 7.03 18 12 18Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/quant-portfolio/components/terminal/icons.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
}),
"[project]/quant-portfolio/components/terminal/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/quant-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/quant-portfolio/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/quant-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$components$2f$terminal$2f$ConsolePrompt$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/quant-portfolio/components/terminal/ConsolePrompt.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$content$2f$projects$2f$projectsData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/quant-portfolio/content/projects/projectsData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$content$2f$research$2f$researchData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/quant-portfolio/content/research/researchData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/quant-portfolio/components/terminal/icons.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const contactChannels = [
    {
        label: "GitHub",
        value: "github.com/ZealousEar",
        href: "https://github.com/ZealousEar",
        description: "Open-source systems, research code, and market prototypes.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GithubIcon"]
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/farhad-chichgar",
        href: "https://www.linkedin.com/in/farhad-chichgar-9b7568175",
        description: "Professional updates and collaboration requests.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkedInIcon"]
    },
    {
        label: "Kaggle",
        value: "kaggle.com/farhadchichgar",
        href: "https://www.kaggle.com/farhadchichgar",
        description: "Machine learning competitions and predictive modelling experiments.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KaggleIcon"]
    },
    {
        label: "Email",
        value: "farhad@chichgar.com",
        href: "mailto:farhad@chichgar.com",
        description: "Direct contact for opportunities and research conversations.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MailIcon"]
    }
];
const formatDate = (value)=>{
    if (!value) return "--";
    try {
        return new Intl.DateTimeFormat("en", {
            month: "short",
            year: "numeric"
        }).format(new Date(value));
    } catch  {
        return value;
    }
};
const navItems = {
    projects: {
        key: "projects",
        label: "projects",
        accent: "green",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectsIcon"],
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "projects-section",
                                className: "text-2xl font-semibold text-terminal-white",
                                children: "# projects"
                            }, void 0, false, {
                                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-terminal-muted",
                                children: "Quantitative platforms, analytics engines, and systematic trading research with production-grade implementations."
                            }, void 0, false, {
                                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$content$2f$projects$2f$projectsData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectList"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `https://github.com/${project.github.owner}/${project.github.repo}`,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "block rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 p-4 text-sm text-terminal-white transition-colors hover:border-terminal-accent/60 hover:bg-terminal-primary/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-semibold text-terminal-primary",
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-terminal-muted/90 whitespace-pre-wrap",
                                        children: project.content.overview.trim()
                                    }, void 0, false, {
                                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-terminal-muted/70",
                                        children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-terminal-muted/40 px-2 py-1",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-[0.35em] text-terminal-muted/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Language: ",
                                                    project.stats.language
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Forks: ",
                                                    project.stats.forks
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Updated ",
                                                    formatDate(project.stats.updated)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$components$2f$terminal$2f$ConsolePrompt$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        symbol: ">",
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "github://",
                                                project.github.owner,
                                                "/",
                                                project.github.repo
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, project.slug, true, {
                                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end pt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/projects",
                            className: "terminal-button",
                            children: "view projects page"
                        }, void 0, false, {
                            fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    research: {
        key: "research",
        label: "research",
        accent: "cyan",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResearchIcon"],
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "research-section",
                                className: "text-2xl font-semibold text-terminal-white",
                                children: "# research"
                            }, void 0, false, {
                                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-terminal-muted",
                                children: "Working papers and quantitative notes blending theory with deployment-focused experimentation."
                            }, void 0, false, {
                                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$content$2f$research$2f$researchData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["researchItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 p-4 text-sm text-terminal-white transition-colors hover:border-terminal-accent/60 hover:bg-terminal-primary/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-[0.35em] text-terminal-muted/75",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.status
                                            }, void 0, false, {
                                                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.year
                                            }, void 0, false, {
                                                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-2 text-2xl font-semibold text-terminal-primary",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-terminal-muted/90",
                                        children: item.summary
                                    }, void 0, false, {
                                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$components$2f$terminal$2f$ConsolePrompt$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        symbol: ">",
                                        status: "muted",
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.nextSteps
                                        }, void 0, false, {
                                            fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.id, true, {
                                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end pt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/research",
                            className: "terminal-button",
                            children: "view research page"
                        }, void 0, false, {
                            fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    contact: {
        key: "contact",
        label: "contact",
        accent: "cyan",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContactIcon"],
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$components$2f$terminal$2f$ConsolePrompt$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        symbol: ">",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Preferred channels for collaborations, research discussions, and opportunities."
                        }, void 0, false, {
                            fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-3",
                        children: contactChannels.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "group rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 p-4 transition-colors hover:border-terminal-accent/60 hover:bg-terminal-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: "flex flex-col gap-2",
                                    target: link.href.startsWith("http") ? "_blank" : undefined,
                                    rel: link.href.startsWith("http") ? "noreferrer" : undefined,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-3 text-xs font-mono uppercase tracking-[0.35em] text-terminal-accent",
                                            children: [
                                                link.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                                    className: "h-5 w-5 text-terminal-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0)) : null,
                                                link.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-semibold text-terminal-primary group-hover:text-terminal-white",
                                            children: link.value
                                        }, void 0, false, {
                                            fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-terminal-muted",
                                            children: link.description
                                        }, void 0, false, {
                                            fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, link.label, false, {
                                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    }
};
function Navigation() {
    const [openKey, setOpenKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("projects");
    const order = (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            "projects",
            "research",
            "contact"
        ], []);
    const activeItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>navItems[openKey], [
        openKey
    ]);
    const buttonRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "w-full space-y-3 text-sm text-terminal-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-terminal border border-terminal-primary/25 bg-terminal-bg/70 shadow-terminal-green/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-2 border-b border-terminal-primary/20 bg-terminal-bg/80 p-3 sm:grid-cols-3",
                    children: order.map((key, index)=>{
                        const item = navItems[key];
                        const isActive = key === openKey;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setOpenKey(key),
                            "aria-pressed": isActive,
                            onKeyDown: (event)=>handleKeyNavigation(event, index),
                            ref: (button)=>{
                                buttonRefs.current[index] = button;
                            },
                            className: `group flex h-20 flex-col items-start justify-center gap-1 rounded-terminal border px-4 py-3 text-left transition-all ${isActive ? "border-terminal-accent bg-terminal-primary/10 shadow-terminal-cyan" : "border-terminal-primary/25 bg-terminal-bg/40 hover:border-terminal-accent/60 hover:bg-terminal-primary/5"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                    className: `h-6 w-6 ${isActive ? "text-terminal-accent" : "text-terminal-muted"}`
                                }, void 0, false, {
                                    fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                    lineNumber: 264,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold uppercase tracking-[0.3em]",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                                    lineNumber: 265,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, key, true, {
                            fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                            lineNumber: 249,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-terminal-bg/10 px-5 py-6 backdrop-blur",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 text-xs uppercase tracking-[0.35em] text-terminal-muted",
                            children: "detail.log"
                        }, void 0, false, {
                            fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-sm text-terminal-white",
                            children: activeItem.render()
                        }, void 0, false, {
                            fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
                    lineNumber: 272,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
            lineNumber: 243,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/quant-portfolio/components/terminal/Navigation.tsx",
        lineNumber: 242,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/quant-portfolio/components/terminal/MatrixBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatrixBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/quant-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/quant-portfolio/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
'use client';
;
;
const MatrixRain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/quant-portfolio/components/effects/MatrixRain.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>null
});
function MatrixBackground({ enabled = false, opacity = 0.06 }) {
    if (!enabled) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MatrixRain, {
        opacity: opacity
    }, void 0, false, {
        fileName: "[project]/quant-portfolio/components/terminal/MatrixBackground.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
}),
"[project]/quant-portfolio/components/terminal/TypewriterText.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TypewriterText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/quant-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$react$2d$typed$2f$dist$2f$mjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/quant-portfolio/node_modules/react-typed/dist/mjs/index.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
function TypewriterText({ strings, className = "", typeSpeed = 46, backSpeed = 32, backDelay = 1400, loop = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center text-terminal-white ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$react$2d$typed$2f$dist$2f$mjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactTyped"], {
                strings: strings,
                typeSpeed: typeSpeed,
                backSpeed: backSpeed,
                backDelay: backDelay,
                loop: loop,
                smartBackspace: true,
                showCursor: false
            }, void 0, false, {
                fileName: "[project]/quant-portfolio/components/terminal/TypewriterText.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$quant$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "cursor-blink"
            }, void 0, false, {
                fileName: "[project]/quant-portfolio/components/terminal/TypewriterText.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/quant-portfolio/components/terminal/TypewriterText.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c71d1a52._.js.map