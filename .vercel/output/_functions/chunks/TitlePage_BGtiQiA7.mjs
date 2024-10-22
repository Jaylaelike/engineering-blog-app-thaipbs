;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2e445cf1-8098-4084-8f05-0839cb912d11",e._sentryDebugIdIdentifier="sentry-dbid-2e445cf1-8098-4084-8f05-0839cb912d11")}catch(e){}}();import { a as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderSlot, c as createAstro, e as renderComponent } from './astro/server_wZpWy9a7.mjs';
import 'clsx';

const $$Title = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="text-5xl font-bold first-letter:uppercase"> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/Title.astro", void 0);

const $$Shape = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"><path id="SvgjsPath3009" d="M4 15.51a1 1 0 0 0 .71-.29L15.22 4.71a1 1 0 1 0-1.42-1.42L3.29 13.8a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L26.6 4.71a1 1 0 1 0-1.42-1.42L3.29 25.18a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.36a1 1 0 0 0 .71-.25L38 4.71a1 1 0 1 0-1.42-1.42L3.29 36.54a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L49.34 4.71a1 1 0 1 0-1.42-1.42L3.29 47.92a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zM60.71 3.29a1 1 0 0 0-1.42 0l-56 56a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l56-56a1 1 0 0 0 0-1.42zm-1.42 11.37L14.66 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l44.63-44.63a1 1 0 0 0-1.42-1.42zm0 11.34L26 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l33.29-33.25A1 1 0 0 0 59.29 26zm0 11.4L37.4 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l21.89-21.89a1 1 0 0 0-1.42-1.42zm0 11.38L48.78 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L60.71 50.2a1 1 0 0 0-1.42-1.42z" data-name="Layer 9" fill="url(&quot;#SvgjsLinearGradient3010&quot;)"></path><defs><linearGradient gradientTransform="rotate(0 0.5 0.5)" id="SvgjsLinearGradient3010"><stop stop-opacity=" 1" stop-color="rgba(125, 81, 146)" offset="0"></stop><stop stop-opacity=" 1" stop-color="rgba(125, 81, 146)" offset="0.48"></stop><stop stop-opacity=" 1" stop-color="rgba(128, 5, 166)" offset="1"></stop></linearGradient></defs></svg>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/icons/Shape.astro", void 0);

const $$Astro = createAstro("https://engineering-blog-thaipbs.vercel.app/");
const $$TitlePage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitlePage;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-start items-center gap-2 title"> ${renderComponent($$result, "Shape", $$Shape, {})} ${renderComponent($$result, "Title", $$Title, {}, { "default": ($$result2) => renderTemplate`${title}` })} </div>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/TitlePage.astro", void 0);

export { $$TitlePage as $ };
//# sourceMappingURL=TitlePage_BGtiQiA7.mjs.map
