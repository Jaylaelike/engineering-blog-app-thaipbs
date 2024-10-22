;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dd96e54a-ba58-4aa9-81a7-12983ffdbc0f",e._sentryDebugIdIdentifier="sentry-dbid-dd96e54a-ba58-4aa9-81a7-12983ffdbc0f")}catch(e){}}();import { b as getPosts, $ as $$BaseLayout } from '../chunks/BaseLayout_LZoC-UzN.mjs';
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_wZpWy9a7.mjs';
import { $ as $$ListCategories } from '../chunks/ListCategories_MTErw68S.mjs';
import { $ as $$ListPosts } from '../chunks/ListPosts_ByWqjFPW.mjs';
import { $ as $$TitlePage } from '../chunks/TitlePage_BGtiQiA7.mjs';
import 'clsx';
import 'reading-time';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const MAX_POSTS = 5;
  const posts = await getPosts(MAX_POSTS);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitlePage", $$TitlePage, { "title": "Engineering Blogs" })} ${renderComponent($$result2, "ListCategories", $$ListCategories, {})} ${maybeRenderHead()}<div> <h2 class="text-lg font-medium tracking-wide text-end">Latest Posts</h2> ${renderComponent($$result2, "ListPosts", $$ListPosts, { "FirstBig": true, "posts": posts })} </div> ` })} `;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/pages/index.astro", void 0);

const $$file = "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=index.astro.mjs.map
