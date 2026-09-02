import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { participantSchema, type Participant } from "./participant.js";
import { poster1Schema, type Poster1 } from "./poster1.js";

export type Topic2 = {
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
  views?: number;
  likeCount?: number;
  hasSummary?: boolean;
  lastPosterUsername?: string;
  categoryId?: string | null;
  pinnedGlobally?: boolean;
  featuredLink?: string | null;
  allowedUserCount?: number;
  posters?: Poster1[];
  participants?: Participant[];
};

export const topic2Schema: Schema<Topic2> = s.object<Topic2>({
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
  views: s.optional(s.number()),
  likeCount: s.optional(s.number()),
  hasSummary: s.optional(s.boolean()),
  lastPosterUsername: s.optional(s.string()),
  categoryId: s.optionalNullable(s.string()),
  pinnedGlobally: s.optional(s.boolean()),
  featuredLink: s.optionalNullable(s.string()),
  allowedUserCount: s.optional(s.number()),
  posters: s.optional(s.array(s.lazy(() => poster1Schema))),
  participants: s.optional(s.array(s.lazy(() => participantSchema))),
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
    allowedUserCount: "allowed_user_count",
  },
});
