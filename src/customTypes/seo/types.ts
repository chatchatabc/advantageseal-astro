export type PageMetaTag = {
  title?: string | null;
  description?: string | null;
  keywords?: string | null;
  author?: string | null;
};
export type OpenGraphMetaTag = {
  title?: string | null;
  type?: string | null;
  image?: string | null;
  description?: string | null;
};

export type TwitterMetaTag = {
  cardType?: string | null;
  title?: string | null;
  description?: string | null;
  image?: string | null;
};
export type MetaTag = {
  page: PageMetaTag;
  openGraph: OpenGraphMetaTag;
  twitter: TwitterMetaTag;
};
