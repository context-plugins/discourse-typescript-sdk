import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { poster1Schema, type Poster1 } from "./poster1.js";

export type Topic4 = {
  id?: number;
  title?: string;
  fancyTitle?: string;
  slug?: string;
  postsCount?: number;
  replyCount?: number;
  highestPostNumber?: number;
  imageUrl?: string | null;
  createdAt?: string;
  lastPostedAt?: string;
  bumped?: boolean;
  bumpedAt?: string;
  archetype?: string;
  unseen?: boolean;
  lastReadPostNumber?: number;
  unreadPosts?: number;
  pinned?: boolean;
  unpinned?: string | null;
  visible?: boolean;
  closed?: boolean;
  archived?: boolean;
  notificationLevel?: number;
  bookmarked?: boolean;
  liked?: boolean;
  tags?: Record<string, unknown>[];
  views?: number;
  likeCount?: number;
  hasSummary?: boolean;
  lastPosterUsername?: string;
  categoryId?: number;
  pinnedGlobally?: boolean;
  featuredLink?: string | null;
  posters?: Poster1[];
};

export const topic4Schema: Schema<Topic4> = s.object<Topic4>({
  id: s.optional(s.number()),
  title: s.optional(s.string()),
  fancyTitle: s.optional(s.string()),
  slug: s.optional(s.string()),
  postsCount: s.optional(s.number()),
  replyCount: s.optional(s.number()),
  highestPostNumber: s.optional(s.number()),
  imageUrl: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  lastPostedAt: s.optional(s.string()),
  bumped: s.optional(s.boolean()),
  bumpedAt: s.optional(s.string()),
  archetype: s.optional(s.string()),
  unseen: s.optional(s.boolean()),
  lastReadPostNumber: s.optional(s.number()),
  unreadPosts: s.optional(s.number()),
  pinned: s.optional(s.boolean()),
  unpinned: s.optionalNullable(s.string()),
  visible: s.optional(s.boolean()),
  closed: s.optional(s.boolean()),
  archived: s.optional(s.boolean()),
  notificationLevel: s.optional(s.number()),
  bookmarked: s.optional(s.boolean()),
  liked: s.optional(s.boolean()),
  tags: s.optional(s.array(s.record(s.string(), s.unknown()))),
  views: s.optional(s.number()),
  likeCount: s.optional(s.number()),
  hasSummary: s.optional(s.boolean()),
  lastPosterUsername: s.optional(s.string()),
  categoryId: s.optional(s.number()),
  pinnedGlobally: s.optional(s.boolean()),
  featuredLink: s.optionalNullable(s.string()),
  posters: s.optional(s.array(s.lazy(() => poster1Schema))),
  _keysMap: {
    fancyTitle: "fancy_title",
    postsCount: "posts_count",
    replyCount: "reply_count",
    highestPostNumber: "highest_post_number",
    imageUrl: "image_url",
    createdAt: "created_at",
    lastPostedAt: "last_posted_at",
    bumpedAt: "bumped_at",
    lastReadPostNumber: "last_read_post_number",
    unreadPosts: "unread_posts",
    notificationLevel: "notification_level",
    likeCount: "like_count",
    hasSummary: "has_summary",
    lastPosterUsername: "last_poster_username",
    categoryId: "category_id",
    pinnedGlobally: "pinned_globally",
    featuredLink: "featured_link",
  },
});
