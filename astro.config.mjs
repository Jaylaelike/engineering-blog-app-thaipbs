import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/utils/readTime.ts";
import embeds from "astro-embed/integration";
import sentry from "@sentry/astro";
// import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  // adapter: vercel({
  // 	webAnalytics: { enabled: true }
  // }),
  site: "https://engineering-blog-thaipbs.vercel.app/",
  // Write here your website url
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: "material-theme-palenight",
      wrap: true,
    },
  },
  integrations: [
    embeds(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        experimentalThemes: {
          light: "vitesse-light",
          dark: "material-theme-palenight",
        },
        wrap: true,
      },
      drafts: true,
    }),
    sitemap(),
    tailwind(),
    sentry({
      dsn: "https://de101131b80407eb6654bc9323d17eed@o4507106339389440.ingest.us.sentry.io/4507338714906624",
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});
