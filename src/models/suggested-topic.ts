import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { poster4Schema, type Poster4 } from "./poster4.js";
import { tagSchema, type Tag } from "./tag.js";

export type SuggestedTopic = {
  id: number;
  title: string;
  fancyTitle: string;
  slug: string;
  postsCount: number;
  replyCount: number;
  highestPostNumber: number;
  imageUrl: string | null;
  createdAt: string;
  lastPostedAt: string | null;
  bumped: boolean;
  bumpedAt: string;
  archetype: string;
  unseen: boolean;
  pinned: boolean;
  unpinned: string | null;
  excerpt: string;
  visible: boolean;
  closed: boolean;
  archived: boolean;
  bookmarked: string | null;
  liked: string | null;
  tags: Tag[];
  tagsDescriptions: Record<string, unknown>;
  likeCount: number;
  views: number;
  categoryId: number;
  featuredLink: string | null;
  posters: Poster4[];
};

export const suggestedTopicSchema: Schema<SuggestedTopic> = s.object<SuggestedTopic>({
  id: s.number(),
  title: s.string(),
  fancyTitle: s.string(),
  slug: s.string(),
  postsCount: s.number(),
  replyCount: s.number(),
  highestPostNumber: s.number(),
  imageUrl: s.nullable(s.string()),
  createdAt: s.string(),
  lastPostedAt: s.nullable(s.string()),
  bumped: s.boolean(),
  bumpedAt: s.string(),
  archetype: s.string(),
  unseen: s.boolean(),
  pinned: s.boolean(),
  unpinned: s.nullable(s.string()),
  excerpt: s.string(),
  visible: s.boolean(),
  closed: s.boolean(),
  archived: s.boolean(),
  bookmarked: s.nullable(s.string()),
  liked: s.nullable(s.string()),
  tags: s.array(s.lazy(() => tagSchema)),
  tagsDescriptions: s.record(s.string(), s.unknown()),
  likeCount: s.number(),
  views: s.number(),
  categoryId: s.number(),
  featuredLink: s.nullable(s.string()),
  posters: s.array(s.lazy(() => poster4Schema)),
  _keysMap: {
    fancyTitle: "fancy_title",
    postsCount: "posts_count",
    replyCount: "reply_count",
    highestPostNumber: "highest_post_number",
    imageUrl: "image_url",
    createdAt: "created_at",
    lastPostedAt: "last_posted_at",
    bumpedAt: "bumped_at",
    tagsDescriptions: "tags_descriptions",
    likeCount: "like_count",
    categoryId: "category_id",
    featuredLink: "featured_link",
  },
});
