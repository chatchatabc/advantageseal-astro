import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
  loading: "eager",
  layout: "fill",
  format: "webp",
  fallbackFormat: "webp",
  includeSourceFormat: false,
});
