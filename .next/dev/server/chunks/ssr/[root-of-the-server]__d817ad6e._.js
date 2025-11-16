module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/terminal/AsciiDivider.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AsciiDivider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function AsciiDivider({ label, className = "", length = 62 }) {
    const line = "═".repeat(Math.max(0, length));
    const content = label ? `╞═ ${label.toUpperCase()} ${"═".repeat(Math.max(0, length - label.length - 4))}` : line;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
        "aria-hidden": "true",
        className: `overflow-hidden text-xs tracking-[0.35em] text-terminal-muted ${className}`,
        children: content
    }, void 0, false, {
        fileName: "[project]/components/terminal/AsciiDivider.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/terminal/ConsolePrompt.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsolePrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const statusColor = {
    default: "text-terminal-white",
    success: "text-terminal-success",
    error: "text-terminal-error",
    muted: "text-terminal-muted"
};
function ConsolePrompt({ symbol = ">", path, children, status = "default", className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-start gap-3 whitespace-pre-wrap text-sm leading-relaxed text-terminal-primary ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-terminal-accent",
                children: symbol
            }, void 0, false, {
                fileName: "[project]/components/terminal/ConsolePrompt.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-1",
                children: [
                    path ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-xs uppercase tracking-widest text-terminal-muted",
                        children: path
                    }, void 0, false, {
                        fileName: "[project]/components/terminal/ConsolePrompt.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this) : null,
                    children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
"[project]/components/terminal/MatrixBackground.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/terminal/MatrixBackground.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/terminal/MatrixBackground.tsx <module evaluation>", "default");
}),
"[project]/components/terminal/MatrixBackground.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/terminal/MatrixBackground.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/terminal/MatrixBackground.tsx", "default");
}),
"[project]/components/terminal/MatrixBackground.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$MatrixBackground$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/terminal/MatrixBackground.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$MatrixBackground$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/terminal/MatrixBackground.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$MatrixBackground$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/effects/ScanLines.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScanLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ScanLines() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        className: "scanlines pointer-events-none"
    }, void 0, false, {
        fileName: "[project]/components/effects/ScanLines.tsx",
        lineNumber: 2,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/terminal/icons.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function GithubIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 5.5c0-1.105.9-2 2-2h12c1.1 0 2 .895 2 2v13c0 1.105-.9 2-2 2H6c-1.1 0-2-.895-2-2v-13Zm4 1.5a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H8Zm0-3.5a1 1 0 0 0-1 1V5h10v-.5a1 1 0 0 0-1-1H8Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/components/terminal/icons.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
"[project]/components/terminal/TerminalLayout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TerminalLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$MatrixBackground$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/terminal/MatrixBackground.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$ScanLines$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/effects/ScanLines.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/terminal/icons.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function TerminalLayout({ children, showMatrix = false, prompt = "farhad@portfolio:~$" }) {
    const headerLinks = [
        {
            href: "https://github.com/ZealousEar",
            aria: "Open Farhad's GitHub profile",
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GithubIcon"],
            external: true
        },
        {
            href: "https://www.linkedin.com/in/farhad-chichgar",
            aria: "Open Farhad's LinkedIn profile",
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LinkedInIcon"],
            external: true
        },
        {
            href: "https://www.kaggle.com/farhadchichgar",
            aria: "Open Farhad's Kaggle profile",
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KaggleIcon"],
            external: true
        },
        {
            href: "mailto:farhad@example.com",
            aria: "Email Farhad",
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MailIcon"],
            external: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-terminal-bg text-terminal-primary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$ScanLines$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/terminal/TerminalLayout.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$MatrixBackground$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                enabled: showMatrix,
                opacity: 0.06
            }, void 0, false, {
                fileName: "[project]/components/terminal/TerminalLayout.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto w-full max-w-[135rem] px-4 py-10 sm:px-6 lg:px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "terminal-frame rounded-terminal border border-terminal-primary/25 bg-terminal-bg/80 p-4 shadow-terminal-green",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "terminal-header mb-4 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-wide text-terminal-muted",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#ff5f57]",
                                            children: "●"
                                        }, void 0, false, {
                                            fileName: "[project]/components/terminal/TerminalLayout.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#febb2e]",
                                            children: "●"
                                        }, void 0, false, {
                                            fileName: "[project]/components/terminal/TerminalLayout.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#28c840]",
                                            children: "●"
                                        }, void 0, false, {
                                            fileName: "[project]/components/terminal/TerminalLayout.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-4 text-terminal-white",
                                            children: prompt
                                        }, void 0, false, {
                                            fileName: "[project]/components/terminal/TerminalLayout.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/terminal/TerminalLayout.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: headerLinks.map(({ href, aria, Icon, external })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: href,
                                                    "aria-label": aria,
                                                    title: aria,
                                                    target: external ? "_blank" : undefined,
                                                    rel: external ? "noreferrer" : undefined,
                                                    className: "group flex h-12 w-12 items-center justify-center rounded-terminal border border-terminal-accent/40 bg-terminal-bg/70 text-terminal-accent transition-colors hover:bg-terminal-accent/10 hover:text-terminal-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "h-6 w-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/terminal/TerminalLayout.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 21
                                                    }, this)
                                                }, aria, false, {
                                                    fileName: "[project]/components/terminal/TerminalLayout.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/terminal/TerminalLayout.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/resume.pdf",
                                            className: "terminal-button",
                                            children: "resume.pdf"
                                        }, void 0, false, {
                                            fileName: "[project]/components/terminal/TerminalLayout.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/terminal/TerminalLayout.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/terminal/TerminalLayout.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "terminal-content rounded-terminal border border-terminal-primary/15 bg-terminal-bg/90 px-5 py-6 shadow-inner",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/components/terminal/TerminalLayout.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/terminal/TerminalLayout.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/terminal/TerminalLayout.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/terminal/TerminalLayout.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/terminal/TerminalWindow.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TerminalWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const accentStyles = {
    green: "border-terminal-primary/60 shadow-terminal-green",
    cyan: "border-terminal-primary/40 shadow-terminal-cyan",
    neutral: "border-terminal-muted/40"
};
function TerminalWindow({ title, children, className = "", accent = "green", actions }) {
    const baseClasses = "terminal-window rounded-terminal border bg-terminal-bg/80 backdrop-blur-sm";
    const composedClasses = `${baseClasses} ${accentStyles[accent]} ${className}`.trim();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: composedClasses,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between border-b border-terminal-primary/15 bg-terminal-bg/70 px-4 py-2 text-xs uppercase tracking-widest text-terminal-muted",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-terminal-white",
                        children: title ?? "session.log"
                    }, void 0, false, {
                        fileName: "[project]/components/terminal/TerminalWindow.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    actions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-terminal-accent",
                        children: actions
                    }, void 0, false, {
                        fileName: "[project]/components/terminal/TerminalWindow.tsx",
                        lineNumber: 33,
                        columnNumber: 20
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/terminal/TerminalWindow.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-terminal-primary/15 px-5 py-4 text-sm leading-relaxed text-terminal-primary",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/terminal/TerminalWindow.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-terminal-primary/15 bg-terminal-bg/70 px-4 py-2 text-[0.68rem] tracking-[0.4em] text-terminal-muted uppercase",
                children: "└────────────────────────────────────────┘"
            }, void 0, false, {
                fileName: "[project]/components/terminal/TerminalWindow.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/terminal/TerminalWindow.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/projects/ProjectCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$TerminalWindow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/terminal/TerminalWindow.tsx [app-rsc] (ecmascript)");
;
;
;
function formatUpdated(value) {
    if (!value) return "--";
    try {
        return new Intl.DateTimeFormat("en", {
            month: "short",
            day: "numeric",
            year: "numeric"
        }).format(new Date(value));
    } catch (error) {
        console.warn("Failed to format GitHub updated date", error);
        return value;
    }
}
function ProjectCard({ project }) {
    const accent = project.ui.hover === "cyan" ? "cyan" : "green";
    const updated = formatUpdated(project.stats.updated);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        className: "group block focus:outline-none focus-visible:ring-2 focus-visible:ring-terminal-accent",
        href: `/projects/${project.slug}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$TerminalWindow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            accent: accent,
            title: project.title,
            className: "transition-transform duration-300 group-hover:-translate-y-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-5 lg:flex-row lg:items-stretch",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-terminal-white",
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects/ProjectCard.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-terminal-muted",
                                        children: project.shortDesc
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects/ProjectCard.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/projects/ProjectCard.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 text-[0.75rem] text-terminal-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "whitespace-pre-wrap leading-snug",
                                    children: `${project.ui.header}
${project.ui.content}`
                                }, void 0, false, {
                                    fileName: "[project]/components/projects/ProjectCard.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/projects/ProjectCard.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-terminal-accent",
                                children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full border border-terminal-accent/40 px-2 py-1",
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/components/projects/ProjectCard.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/projects/ProjectCard.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/projects/ProjectCard.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-[14rem] space-y-3 rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 px-4 py-3 text-xs font-mono text-terminal-white lg:ml-4 lg:flex lg:flex-col lg:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-terminal-muted uppercase tracking-[0.25em] text-[0.6rem]",
                                                children: "Language"
                                            }, void 0, false, {
                                                fileName: "[project]/components/projects/ProjectCard.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: project.stats.language
                                            }, void 0, false, {
                                                fileName: "[project]/components/projects/ProjectCard.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/projects/ProjectCard.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-terminal-muted uppercase tracking-[0.25em] text-[0.6rem]",
                                                children: "Forks"
                                            }, void 0, false, {
                                                fileName: "[project]/components/projects/ProjectCard.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: project.stats.forks
                                            }, void 0, false, {
                                                fileName: "[project]/components/projects/ProjectCard.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/projects/ProjectCard.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-terminal-muted uppercase tracking-[0.25em] text-[0.6rem]",
                                                children: "Updated"
                                            }, void 0, false, {
                                                fileName: "[project]/components/projects/ProjectCard.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: updated
                                            }, void 0, false, {
                                                fileName: "[project]/components/projects/ProjectCard.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/projects/ProjectCard.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/projects/ProjectCard.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right text-xs uppercase tracking-[0.4em] text-terminal-accent",
                                children: "[ENTER] →"
                            }, void 0, false, {
                                fileName: "[project]/components/projects/ProjectCard.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/projects/ProjectCard.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/projects/ProjectCard.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/projects/ProjectCard.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/projects/ProjectCard.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/content/projects/projectsData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/projects/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$AsciiDivider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/terminal/AsciiDivider.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$ConsolePrompt$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/terminal/ConsolePrompt.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$TerminalLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/terminal/TerminalLayout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$TerminalWindow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/terminal/TerminalWindow.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$projects$2f$ProjectCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/projects/ProjectCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2f$projectsData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/projects/projectsData.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function ProjectsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$TerminalLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        showMatrix: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-semibold text-terminal-white sm:text-4xl",
                            children: "FARHAD@PORTFOLIO:~/projects$"
                        }, void 0, false, {
                            fileName: "[project]/app/projects/page.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$ConsolePrompt$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            symbol: ">",
                            path: "~/projects",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Listing terminal windows for systematic builds, derivatives engines, and tactical market intelligence platforms."
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/projects/page.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/page.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$AsciiDivider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    label: "project grid"
                }, void 0, false, {
                    fileName: "[project]/app/projects/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 md:grid-cols-2",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2f$projectsData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectList"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$projects$2f$ProjectCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            project: project
                        }, project.slug, false, {
                            fileName: "[project]/app/projects/page.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/projects/page.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$AsciiDivider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    label: "stats refresh"
                }, void 0, false, {
                    fileName: "[project]/app/projects/page.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2f$TerminalWindow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    title: "github.stats.log",
                    accent: "cyan",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-terminal-muted",
                        children: [
                            "Repository metrics are maintained manually for GitHub Pages deployment. Update star and fork counts in ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-terminal-accent",
                                children: "content/projects/projectsData.ts"
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.tsx",
                                lineNumber: 33,
                                columnNumber: 116
                            }, this),
                            " when publishing changes."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projects/page.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/projects/page.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/projects/page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/projects/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/projects/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/projects/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d817ad6e._.js.map