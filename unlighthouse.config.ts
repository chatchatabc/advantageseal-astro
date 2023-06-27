/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";

export default defineConfig({
  site: "https://advantage-seals.pages.dev",
  scanner: {
    device: "desktop",
    sitemap: true,
  },
  debug: true,
});
