;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e6029fea-81e2-4f47-8c86-b7dcba73c129",e._sentryDebugIdIdentifier="sentry-dbid-e6029fea-81e2-4f47-8c86-b7dcba73c129")}catch(e){}}();import { a as getPostByTag, g as getTags, $ as $$BaseLayout } from '../../chunks/BaseLayout_LZoC-UzN.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent } from '../../chunks/astro/server_wZpWy9a7.mjs';
import { $ as $$ListPosts } from '../../chunks/ListPosts_ByWqjFPW.mjs';
import { $ as $$TitlePage } from '../../chunks/TitlePage_BGtiQiA7.mjs';
import 'clsx';
import 'reading-time';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://engineering-blog-thaipbs.vercel.app/");
async function getStaticPaths() {
  const tags = await getTags();
  return tags.map((tag) => ({
    params: { tag },
    props: { tag }
  }));
}
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { tag } = Astro2.props;
  const posts = await getPostByTag(tag);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": tag }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitlePage", $$TitlePage, { "title": tag })} ${renderComponent($$result2, "ListPosts", $$ListPosts, { "posts": posts })} ` })}`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/pages/tags/[...tag]/index.astro", void 0);

const $$file = "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/pages/tags/[...tag]/index.astro";
const $$url = "/tags/[...tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=_---tag_.astro.mjs.map
