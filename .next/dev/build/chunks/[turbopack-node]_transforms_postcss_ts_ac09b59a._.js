module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/quant-portfolio/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/1bb8c_1f5b604e._.js",
  "chunks/[root-of-the-server]__3181d5ff._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/quant-portfolio/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];