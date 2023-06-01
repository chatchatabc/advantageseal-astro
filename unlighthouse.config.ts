/// <reference types="unlighthouse" />
import {defineConfig} from 'unlighthouse'

export default defineConfig({
  site: 'https://05d4dddd.advantageseals-astro.pages.dev',
  scanner: {
    device : 'desktop',
    sitemap : true,
  },
  debug: true,
})