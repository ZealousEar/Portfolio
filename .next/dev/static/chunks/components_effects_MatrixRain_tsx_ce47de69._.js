(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/effects/MatrixRain.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatrixRain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const CHARSET = "01$#@&%*+".split("");
function MatrixRain({ opacity = 0.05, disabled = false }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [shouldRender, setShouldRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MatrixRain.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || disabled) {
                return;
            }
            const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            let frame = 0;
            const evaluate = {
                "MatrixRain.useEffect.evaluate": ()=>{
                    const allowed = !mediaQuery.matches && window.innerWidth >= 768;
                    frame = window.requestAnimationFrame({
                        "MatrixRain.useEffect.evaluate": ()=>{
                            setShouldRender(allowed);
                        }
                    }["MatrixRain.useEffect.evaluate"]);
                }
            }["MatrixRain.useEffect.evaluate"];
            evaluate();
            mediaQuery.addEventListener("change", evaluate);
            window.addEventListener("resize", evaluate);
            return ({
                "MatrixRain.useEffect": ()=>{
                    window.cancelAnimationFrame(frame);
                    mediaQuery.removeEventListener("change", evaluate);
                    window.removeEventListener("resize", evaluate);
                }
            })["MatrixRain.useEffect"];
        }
    }["MatrixRain.useEffect"], [
        disabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MatrixRain.useEffect": ()=>{
            if (!shouldRender) {
                return undefined;
            }
            const canvas = canvasRef.current;
            if (!canvas) {
                return undefined;
            }
            const context = canvas.getContext("2d");
            if (!context) {
                return undefined;
            }
            let animationFrame = 0;
            let columns = 0;
            let drops = [];
            const resize = {
                "MatrixRain.useEffect.resize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    columns = Math.floor(canvas.width / 16);
                    drops = Array.from({
                        length: columns
                    }, {
                        "MatrixRain.useEffect.resize": ()=>Math.floor(Math.random() * canvas.height)
                    }["MatrixRain.useEffect.resize"]);
                }
            }["MatrixRain.useEffect.resize"];
            const draw = {
                "MatrixRain.useEffect.draw": ()=>{
                    context.fillStyle = `rgba(10, 14, 20, ${Math.max(opacity, 0.04)})`;
                    context.fillRect(0, 0, canvas.width, canvas.height);
                    context.fillStyle = "rgba(0, 255, 65, 0.5)";
                    context.font = "14px JetBrains Mono, monospace";
                    drops.forEach({
                        "MatrixRain.useEffect.draw": (drop, index)=>{
                            const text = CHARSET[Math.floor(Math.random() * CHARSET.length)] ?? "0";
                            context.fillText(text, index * 16, drop * 16);
                            if (drop * 16 > canvas.height && Math.random() > 0.975) {
                                drops[index] = 0;
                            } else {
                                drops[index] = drop + 1;
                            }
                        }
                    }["MatrixRain.useEffect.draw"]);
                    animationFrame = window.requestAnimationFrame(draw);
                }
            }["MatrixRain.useEffect.draw"];
            resize();
            window.addEventListener("resize", resize);
            animationFrame = window.requestAnimationFrame(draw);
            return ({
                "MatrixRain.useEffect": ()=>{
                    window.cancelAnimationFrame(animationFrame);
                    window.removeEventListener("resize", resize);
                }
            })["MatrixRain.useEffect"];
        }
    }["MatrixRain.useEffect"], [
        opacity,
        shouldRender
    ]);
    if (!shouldRender) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "pointer-events-none fixed inset-0 z-0 mix-blend-screen",
        style: {
            opacity
        }
    }, void 0, false, {
        fileName: "[project]/components/effects/MatrixRain.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(MatrixRain, "u5ux9XyFayEACkB1mSA3367085w=");
_c = MatrixRain;
var _c;
__turbopack_context__.k.register(_c, "MatrixRain");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/effects/MatrixRain.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/effects/MatrixRain.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_effects_MatrixRain_tsx_ce47de69._.js.map