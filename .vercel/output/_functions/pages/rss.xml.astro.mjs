;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="efbcf37d-31ae-423d-afa3-e45afa3ff542",e._sentryDebugIdIdentifier="sentry-dbid-efbcf37d-31ae-423d-afa3-e45afa3ff542")}catch(e){}}();import rss from '@astrojs/rss';
import { g as getCollection, s as siteConfig } from '../chunks/_astro_content_BKrO-4X_.mjs';
import '../chunks/astro/server_wZpWy9a7.mjs';
export { renderers } from '../renderers.mjs';

async function get() {
  const posts = await getCollection("blog");
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: "https://engineering-blog-thaipbs.vercel.app/",
    items: posts.map((post) => ({
      ...post.data,
      link: `post/${post.slug}/`
    }))
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=rss.xml.astro.mjs.map
