;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="77c8b7e1-6933-45ad-9fc8-bd6baaedfd1b",e._sentryDebugIdIdentifier="sentry-dbid-77c8b7e1-6933-45ad-9fc8-bd6baaedfd1b")}catch(e){}}();import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_fgq6Ziv4.mjs';
import { manifest } from './manifest_BHc287Na.mjs';
import './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/category/_category_/_page_.astro.mjs');
const _page2 = () => import('./pages/post/_---slug_.astro.mjs');
const _page3 = () => import('./pages/rss.xml.astro.mjs');
const _page4 = () => import('./pages/tags.astro.mjs');
const _page5 = () => import('./pages/tags/_---tag_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.6_@types+node@22.7.8_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/category/[category]/[page].astro", _page1],
    ["src/pages/post/[...slug].astro", _page2],
    ["src/pages/rss.xml.ts", _page3],
    ["src/pages/tags/index.astro", _page4],
    ["src/pages/tags/[...tag]/index.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "4fe475c0-d5d6-498c-ab91-065ae1bc11ce",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
//# sourceMappingURL=entry.mjs.map
