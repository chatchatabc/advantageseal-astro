// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import i18next from "astro-i18next";

const seoSchema = z.object({
  pageTitle: z.string().nullable(),
  pageDescription: z.string().nullable(),
  pageKeywords: z.string().nullable(),
  pageAuthor: z.string().nullable(),
  ogTitle: z.string().nullable(),
  ogType: z.string().nullable(),
  ogDescription: z.string().nullable(),
  ogImage: z.string().nullable(),
  twitterCardType: z.string().nullable().nullable(),
  twitterTitle: z.string().nullable(),
  twitterDescription: z.string().nullable(),
  twitterImage: z.string().nullable(),
});

// 2. Define your collection(s)
const newsCollection = defineCollection({
  schema: z
    .object({
      title: z.string(),
      newsCategory: z.string(),
      pubDate: z.string(),
      lang: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      headline: z.string(),
      bannerImage: z.string().nullable(),
      articleName: z.string().nullable(),
      articleShortDescription: z.string().nullable(),
    })
    .merge(seoSchema),
});
const newsCategoryCollection = defineCollection({
  schema: z
    .object({
      name: z.string(),
      title: z.string(),
      lang: z.string(),
      bannerImage: z.string(),
    })
    .merge(seoSchema),
});
const solutionsCollection = defineCollection({
  schema: z
    .object({
      title: z.string(),
      pubDate: z.string(),
      lang: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      bannerImage: z.string().nullable(),
      articleName: z.string().nullable(),
      articleShortDescription: z.string().nullable(),
    })
    .merge(seoSchema),
});
const productCollection = defineCollection({
  schema: z
    .object({
      title: z.string(),
      lang: z.string(),
      bannerImage: z.string().nullable(),
      productSlug: z.string().nullable(),
      productCategory: z.string(),
    })
    .merge(seoSchema),
});
const miscCollection = defineCollection({
  schema: z
    .object({
      page: z.string(),
      title: z.string(),
      lang: z.string(),
      bannerImage: z.string().nullable(),
    })
    .merge(seoSchema),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"

const aboutCollection = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
    })
    .merge(seoSchema),
});

export const collections = {
  news: newsCollection,
  "news-categories": newsCategoryCollection,
  solutions: solutionsCollection,
  misc: miscCollection,
  about: aboutCollection,
};
