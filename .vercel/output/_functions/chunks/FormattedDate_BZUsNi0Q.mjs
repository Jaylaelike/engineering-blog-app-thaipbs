;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4efe83d3-d607-4f93-9412-f84809907595",e._sentryDebugIdIdentifier="sentry-dbid-4efe83d3-d607-4f93-9412-f84809907595")}catch(e){}}();import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_wZpWy9a7.mjs';
import 'clsx';

const $$Astro = createAstro("https://engineering-blog-thaipbs.vercel.app/");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time class="text-sm font-bold text-opacity-60"${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
//# sourceMappingURL=FormattedDate_BZUsNi0Q.mjs.map
