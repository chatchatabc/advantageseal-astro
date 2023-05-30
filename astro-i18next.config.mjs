/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "cn",
  locales: ["cn", "en"],
  namespaces: [
    "site-info",
    "navigation",
    "page-home",
    "page-news",
    "products",
    "about-categories",
    "news-categories",
    "products-categories",
    "customer-center-categories",
    "footer",
  ],
  defaultNamespace: "navigation",
};
