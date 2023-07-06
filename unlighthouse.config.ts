/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";

export default defineConfig({
  site: "https://asiseals.cn",
  scanner: {
    device: "desktop",
    sitemap: true,
  },
  debug: true,
});
