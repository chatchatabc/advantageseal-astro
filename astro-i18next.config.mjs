/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "cn",
  locales: ["cn", "en"],
  namespaces: [
    "site-info",
    "navigation",
    "home",
    "product-categories",
    "products",
    "footer",
  ],
  defaultNamespace: "navigation",
};
