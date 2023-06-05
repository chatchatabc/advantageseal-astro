// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import i18next from 'astro-i18next';
// 2. Define your collection(s)
const newsCollection = defineCollection({
  schema: z.object({
    title : z.string(),
    newsCategory : z.string(),
    pubDate : z.string(),
    lang: z.string(),
    image: z.object({
      src : z.string(),
      alt : z.string()
    }),
    headline: z.string(),
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
    bannerImage: z.string().nullable(),
    articleName: z.string().nullable(),
    articleShortDescription: z.string().nullable(),
  })

});
const newsCategoryCollection = defineCollection({
  schema: z.object({
    name:z.string(),
    title: z.string(),
    lang:z.string(),
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
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'news': newsCollection,
  'news-categories': newsCategoryCollection
};