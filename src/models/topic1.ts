import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { posterSchema, type Poster } from "./poster.js";

export type Topic1 = {
  id: number;
  title: string;
  fancyTitle: string;
  slug: string;
  postsCount: number;
  replyCount: number;
  highestPostNumber: number;
  imageUrl: string | null;
  createdAt: string;
  lastPostedAt: string;
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
  views: number;
  likeCount: number;
  hasSummary: boolean;
  lastPosterUsername: string;
  categoryId: number;
  pinnedGlobally: boolean;
  featuredLink: string | null;
  posters: Poster[];
};

export const topic1Schema: Schema<Topic1> = s.object<Topic1>({
  id: s.number(),
  title: s.string(),
  fancyTitle: s.string(),
  slug: s.string(),
  postsCount: s.number(),
  replyCount: s.number(),
  highestPostNumber: s.number(),
  imageUrl: s.nullable(s.string()),
  createdAt: s.string(),
  lastPostedAt: s.string(),
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
  views: s.number(),
  likeCount: s.number(),
  hasSummary: s.boolean(),
  lastPosterUsername: s.string(),
  categoryId: s.number(),
  pinnedGlobally: s.boolean(),
  featuredLink: s.nullable(s.string()),
  posters: s.array(s.lazy(() => posterSchema)),
  _keysMap: {
    fancyTitle: "fancy_title",
    postsCount: "posts_count",
    replyCount: "reply_count",
    highestPostNumber: "highest_post_number",
    imageUrl: "image_url",
    createdAt: "created_at",
    lastPostedAt: "last_posted_at",
    bumpedAt: "bumped_at",
    likeCount: "like_count",
    hasSummary: "has_summary",
    lastPosterUsername: "last_poster_username",
    categoryId: "category_id",
    pinnedGlobally: "pinned_globally",
    featuredLink: "featured_link",
  },
});
