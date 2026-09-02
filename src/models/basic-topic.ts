import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BasicTopic = {
  id?: number;
  title?: string;
  fancyTitle?: string;
  slug?: string;
  postsCount?: number;
};

export const basicTopicSchema: Schema<BasicTopic> = s.object<BasicTopic>({
  id: s.optional(s.number()),
  title: s.optional(s.string()),
  fancyTitle: s.optional(s.string()),
  slug: s.optional(s.string()),
  postsCount: s.optional(s.number()),
  _keysMap: {
    fancyTitle: "fancy_title",
    postsCount: "posts_count",
  },
});
