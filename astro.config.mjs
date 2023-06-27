import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://advantage-seals.pages.dev",
  integrations: [
    tailwind(),
    astroI18next(),
    astroImageTools,
    svelte(),
    sitemap(),
    mdx(),
    react(),
    robotsTxt(),
  ],
});
