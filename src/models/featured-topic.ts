import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FeaturedTopic = {
  id: number;
  title: string;
  fancyTitle: string;
  slug: string;
  postsCount: number;
};

export const featuredTopicSchema: Schema<FeaturedTopic> = s.object<FeaturedTopic>({
  id: s.number(),
  title: s.string(),
  fancyTitle: s.string(),
  slug: s.string(),
  postsCount: s.number(),
  _keysMap: {
    fancyTitle: "fancy_title",
    postsCount: "posts_count",
  },
});
