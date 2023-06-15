import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  site: "https://advantageseals-astro.pages.dev",
  integrations: [tailwind(), astroI18next(), astroImageTools, svelte(), sitemap(), mdx(), react()]
});