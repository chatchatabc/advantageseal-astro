/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#434343",
        "red-primary": "#cc0000",
        p50: "#f3f7fc",
        p100: "#e6eff8",
        p200: "#c8ddef",
        p300: "#98c0e1",
        p400: "#61a0cf",
        p500: "#3d84ba",
        p600: "#2a6495",
        p700: "#25547f",
        p800: "#22496a",
        p900: "#213d59",
        p950: "#16283b",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
