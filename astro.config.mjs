import { defineConfig } from 'astro/config';
import {astroImageTools} from 'astro-imagetools'

import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroI18next(), astroImageTools]
});