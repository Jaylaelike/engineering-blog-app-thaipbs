;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6f78a9ee-3aa9-44cc-9a10-631e3dbb40ac",e._sentryDebugIdIdentifier="sentry-dbid-6f78a9ee-3aa9-44cc-9a10-631e3dbb40ac")}catch(e){}}();import { $ as $$BaseLayout, c as cn, b as getPosts } from '../../chunks/BaseLayout_LZoC-UzN.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent, F as Fragment, g as renderSlot, s as spreadAttributes, n as defineScriptVars } from '../../chunks/astro/server_wZpWy9a7.mjs';
import { s as siteConfig, g as getCollection } from '../../chunks/_astro_content_BKrO-4X_.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_BZUsNi0Q.mjs';
import 'clsx';
import { $ as $$Image } from '../../chunks/_astro_assets_DJdZ6rQD.mjs';
import 'reading-time';
export { renderers } from '../../renderers.mjs';

const $$Astro$7 = createAstro("https://engineering-blog-thaipbs.vercel.app/");
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/tags/${tag.toLowerCase()}`, "href")}${addAttribute(tag, "aria-label")}> <span class="bg-indigo-600 font-semibold text-white dark:bg-indigo-900 dark:text-white shadow text-sm w-fit px-2 py-1 md:px-5 md:py-2 rounded-full"> ${tag ?? "Blog Tag"} </span> </a>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/Tag.astro", void 0);

const $$Astro$6 = createAstro("https://engineering-blog-thaipbs.vercel.app/");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { data, readTime, headings, id } = Astro2.props;
  const { title, description, pubDate, heroImage, tags } = data;
  const articleDate = pubDate.toISOString();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "image": heroImage?.src, "articleDate": articleDate }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="min-w-full md:py-4 sm:max-w-none md:max-w-none"> <header class="mb-3 flex flex-col justify-center items-center gap-6"> <div class="flex flex-col gap-2"> <div class="flex items-center justify-center gap-x-1"> <p class="text-center text-sm text-opacity-50">
Published ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": pubDate })} </p> <p class="text-center text-sm text-opacity-50 font-bold">
- ${readTime} </p> </div> <h1 class="text-center text-4xl md:text-6xl md:pb-2.5 font-semibold"> ${title} </h1> </div> <div class="flex flex-wrap justify-center items-center gap-2 gap-y-4 md:gap-5"> ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "Tag", $$Tag, { "tag": tag })}`)} </div> </header> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${heroImage && renderTemplate`${renderComponent($$result3, "Image", $$Image, { "src": heroImage, "width": 1e3, "height": 500, "quality": 100, "format": "jpg", "loading": "eager", "class": "rounded-md w-full max-h-[300px]  md:max-h-[500px] my-8 object-cover", "alt": `img of ${title}` })}`}` })} <hr> <div> ${renderSlot($$result2, $$slots["default"])} </div> </article> ` })} `;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/layouts/BlogPost.astro", void 0);

const $$CopyIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path> <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path> </svg>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/icons/CopyIcon.astro", void 0);

const $$CheckIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/icons/CheckIcon.astro", void 0);

const $$Code = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<pre class="shiki shiki-themes relative bg-neutral-200/30 dark:shadow-2xl code"><button aria-label="copy-button" class="copy-button absolute  z-20 top-2 right-2  rounded-md transition-all ease-in max-w-full max-h-fit dark:text-gray-600 text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400">${renderComponent($$result, "CopyIcon", $$CopyIcon, {})}</button><span class="check-span absolute z-10 top-2 right-2  rounded-md transition-all ease-in opacity-0 text-green-600 dark:text-green-400 max-w-full max-h-fit ">${renderComponent($$result, "CheckIcon", $$CheckIcon, {})}</span>${renderSlot($$result, $$slots["default"])}</pre> `;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/mdx/Code.astro", void 0);

const $$Astro$5 = createAstro("https://engineering-blog-thaipbs.vercel.app/");
const $$ListRelatedPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ListRelatedPosts;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn(`flex flex-col md:flex-row sm:justify-between gap-8`), "class")}> ${posts.length > 0 ? posts.map((post) => {
    return renderTemplate`<div class="flex flex-wrap gap-2"> <div class="min-h-full"> ${renderComponent($$result, "Image", $$Image, { "src": post.data.heroImage, "width": 200, "height": 200, "format": "webp", "class": "w-16 h-16 object-cover rounded-full  ", "alt": `img of ${post.data.title}` })} </div> <header class="flex justify-center items-center"> <a class="font-medium  hover:underline"${addAttribute(`/post/${post.slug}/`, "href")}> ${post.data.title} </a> </header> </div>`;
  }) : renderTemplate`<span class="text-gray-500">There are no related posts yet. 😢</span>`} </section>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/ListRelatedPosts.astro", void 0);

const $$TwitterColorIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--?xml version="1.0" ?-->${maybeRenderHead()}<svg height="32px" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M448,512l-384,0c-35.328,0 -64,-28.672 -64,-64l0,-384c0,-35.328 28.672,-64 64,-64l384,0c35.328,0 64,28.672 64,64l0,384c0,35.328 -28.672,64 -64,64Z" id="Dark_Blue" style="fill:#1da1f2;fill-rule:nonzero;"></path><path d="M196.608,386.048c120.704,0 186.752,-100.096 186.752,-186.752c0,-2.816 0,-5.632 -0.128,-8.448c12.8,-9.216 23.936,-20.864 32.768,-34.048c-11.776,5.248 -24.448,8.704 -37.76,10.368c13.568,-8.064 23.936,-20.992 28.928,-36.352c-12.672,7.552 -26.752,12.928 -41.728,15.872c-12.032,-12.8 -29.056,-20.736 -47.872,-20.736c-36.224,0 -65.664,29.44 -65.664,65.664c0,5.12 0.64,10.112 1.664,14.976c-54.528,-2.688 -102.912,-28.928 -135.296,-68.608c-5.632,9.728 -8.832,20.992 -8.832,33.024c0,22.784 11.648,42.88 29.184,54.656c-10.752,-0.384 -20.864,-3.328 -29.696,-8.192l0,0.896c0,31.744 22.656,58.368 52.608,64.384c-5.504,1.536 -11.264,2.304 -17.28,2.304c-4.224,0 -8.32,-0.384 -12.288,-1.152c8.32,26.112 32.64,45.056 61.312,45.568c-22.528,17.664 -50.816,28.16 -81.536,28.16c-5.248,0 -10.496,-0.256 -15.616,-0.896c28.928,18.432 63.488,29.312 100.48,29.312" id="Logo__x2014__FIXED" style="fill:#fff;fill-rule:nonzero;"></path></g></svg>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/icons/TwitterColorIcon.astro", void 0);

const $$LinkedinIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z" fill="#007BB5"></path><g><rect fill="#FFFFFF" height="14" width="4" x="7" y="11"></rect><path d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z" fill="#FFFFFF"></path><circle cx="9" cy="8" fill="#FFFFFF" r="2"></circle></g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/icons/linkedinIcon.astro", void 0);

const $$FaceBookIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style="null" class="icon icons8-Facebook-Filled"> <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path></svg>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/icons/FaceBookIcon.astro", void 0);

const $$Astro$4 = createAstro("https://engineering-blog-thaipbs.vercel.app/");
const $$Share = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Share;
  const message = siteConfig.shareMessage;
  const URL = Astro2.url.href;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-2"> <span class="mb-1 font-bold text-2xl">Share</span> <ul class="flex gap-3 text-black dark:text-white"> <li> <a${addAttribute(`https://twitter.com/intent/tweet?text=${message + " " + URL}`, "href")} aria-label="Share on Twitter">${renderComponent($$result, "TwitterColorIcon", $$TwitterColorIcon, {})}</a> </li> <li> <a${addAttribute(`https://www.linkedin.com/shareArticle?mini=true&url=${URL}`, "href")} aria-label="Share on LinkedIn"> ${renderComponent($$result, "LinkedinIcon", $$LinkedinIcon, {})}</a> </li> <li> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${URL}`, "href")} aria-label="Share on facebook"> ${renderComponent($$result, "FaceBookIcon", $$FaceBookIcon, {})}</a> </li> </ul> </div>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/Share.astro", void 0);

const $$Astro$3 = createAstro("https://engineering-blog-thaipbs.vercel.app/");
const $$TabletOfContentsHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TabletOfContentsHeading;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex flex-col"> <a${addAttribute("#" + heading.slug, "href")}${addAttribute(cn(
    `bg-slate-200 dark:bg-slate-800 dark:hover:bg-indigo-400 hover:bg-indigo-300 hover:text-white  py-1 px-4 dark:text-white rounded-full mb-2 first-letter:uppercase w-fit line-clamp-2`
  ), "class")}> ${heading.text} </a> ${heading.subheadings.length > 0 && renderTemplate`<ul class="ml-3"> ${heading.subheadings.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading })}`)} </ul>`} </li>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/TabletOfContentsHeading.astro", void 0);

const $$Astro$2 = createAstro("https://engineering-blog-thaipbs.vercel.app/");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings } = Astro2.props;
  const toc = buildToc(headings);
  function buildToc(headings2) {
    let toc2 = [];
    let parentHeadings = /* @__PURE__ */ new Map();
    headings2.forEach((h) => {
      let heading = { ...h, subheadings: [] };
      parentHeadings.set(heading.depth, heading);
      if (heading.depth === 1 || heading.depth === 2) {
        toc2.push(heading);
      } else {
        parentHeadings.get(heading.depth - 1).subheadings.push(heading);
      }
    });
    return toc2;
  }
  return renderTemplate`${maybeRenderHead()}<nav class="max-w-xs dark:text-black"> <h1 class="font-bold mb-3 text-2xl dark:text-white">Index</h1> <ul class="[text-wrap:balance] flex flex-col gap-1"> ${toc.map((heading) => renderTemplate`${renderComponent($$result, "TableOfContentsHeading", $$TabletOfContentsHeading, { "heading": heading })}`)} </ul> </nav>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/TableOfContents.astro", void 0);

const $$Astro$1 = createAstro("https://engineering-blog-thaipbs.vercel.app/");
const $$SButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SButton;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${spreadAttributes(props)} class="bg-purple-800 p-4 text-white rounded-full"> ${renderSlot($$result, $$slots["default"])} <!-- Be sure to add a \`<slot/>\` for child content! --> </button>`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/mdx/SButton.astro", void 0);

const disqusConfig = {
  enabled: false,
  shortname: ""
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="mx-auto px-6 sm:px-6 max-w-3xl pt-8 md:pt-4 pb-12 md:pb-20"> <div id="disqus_thread"></div> <script>(function(){', `
    var d = document,
      s = d.createElement("script");
    s.src = "https://" + shortname + ".disqus.com/embed.js";
    s.setAttribute("data-timestamp", String(new Date()));
    s.setAttribute("data-theme", localStorage.getItem("theme") ?? "light"); // Pass the string value directly
    (d.head || d.body).appendChild(s);

    // document.addEventListener('theme-change', (e) => {
    //   todo: reload disqus
    // })
  })();<\/script> </div>`])), maybeRenderHead(), defineScriptVars({ shortname: disqusConfig.shortname }));
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/components/Disqus.astro", void 0);

const $$Astro = createAstro("https://engineering-blog-thaipbs.vercel.app/");
async function getStaticPaths() {
  const posts = await getPosts();
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const prerender = true;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = await getCollection("blog");
  const post = Astro2.props;
  const MAX_POSTS = 3;
  const getRelatedPosts = (post2) => {
    const lowercaseTags = post2.data.tags.map((tag) => tag.toLowerCase());
    const relatedPosts2 = posts.filter(
      (p) => p.slug !== post2.slug && p.data.tags.some((t) => lowercaseTags.includes(t.toLowerCase()))
    );
    return relatedPosts2.slice(0, MAX_POSTS);
  };
  const relatedPosts = getRelatedPosts(post);
  const { Content, headings, remarkPluginFrontmatter } = await post.render();
  const disqusEnabled = disqusConfig.enabled;
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "id": post.id, "data": post.data, "headings": headings, "readTime": remarkPluginFrontmatter.minutesRead }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-[20%_auto] gap-10 mt-8"> <!-- aside  --> <aside class="md:flex flex-col gap-8 hidden"> ${renderComponent($$result2, "Share", $$Share, {})} <div class="sticky top-24 self-start hidden md:block transition-all duration-200"> ${headings && headings.length > 0 && renderTemplate`${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "headings": headings })}`} </div> </aside> <!-- post --> <article class="max-w-full w-full"> <div class="prose prose-lg md:prose-xl dark:prose-invert mb-12 min-w-full"> ${renderComponent($$result2, "Content", Content, { "components": { pre: $$Code, SButton: $$SButton } })} </div> <!-- related posts --> <footer> <h2 class="font-bold text-lg dark:text-white mb-6">Related Posts</h2> ${renderComponent($$result2, "ListRelatedPosts", $$ListRelatedPosts, { "posts": relatedPosts })} </footer> </article> </div> ${disqusEnabled}` })}`;
}, "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/pages/post/[...slug].astro", void 0);

const $$file = "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/pages/post/[...slug].astro";
const $$url = "/post/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=_---slug_.astro.mjs.map
