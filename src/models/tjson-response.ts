import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionsSummary8Schema, type ActionsSummary8 } from "./actions-summary8.js";
import { detailsSchema, type Details } from "./details.js";
import { postStream1Schema, type PostStream1 } from "./post-stream1.js";
import { suggestedTopicSchema, type SuggestedTopic } from "./suggested-topic.js";
import { tagSchema, type Tag } from "./tag.js";

export type TJsonResponse = {
  postStream: PostStream1;
  timelineLookup: Record<string, unknown>[];
  suggestedTopics: SuggestedTopic[];
  tags: Tag[];
  tagsDescriptions: Record<string, unknown>;
  id: number;
  title: string;
  fancyTitle: string;
  postsCount: number;
  createdAt: string;
  views: number;
  replyCount: number;
  likeCount: number;
  lastPostedAt: string | null;
  visible: boolean;
  closed: boolean;
  archived: boolean;
  hasSummary: boolean;
  archetype: string;
  slug: string;
  categoryId: number;
  wordCount: number | null;
  deletedAt: string | null;
  userId: number;
  featuredLink: string | null;
  pinnedGlobally: boolean;
  pinnedAt: string | null;
  pinnedUntil: string | null;
  imageUrl: string | null;
  slowModeSeconds: number;
  draft: string | null;
  draftKey: string;
  draftSequence: number;
  unpinned: string | null;
  pinned: boolean;
  currentPostNumber?: number;
  highestPostNumber: number | null;
  deletedBy: string | null;
  hasDeleted: boolean;
  actionsSummary: ActionsSummary8[];
  chunkSize: number;
  bookmarked: boolean;
  bookmarks: Record<string, unknown>[];
  topicTimer: string | null;
  messageBusLastId: number;
  participantCount: number;
  showReadIndicator: boolean;
  thumbnails: string | null;
  slowModeEnabledUntil: string | null;
  details: Details;
};

export const tJsonResponseSchema: Schema<TJsonResponse> = s.object<TJsonResponse>({
  postStream: postStream1Schema,
  timelineLookup: s.array(s.record(s.string(), s.unknown())),
  suggestedTopics: s.array(s.lazy(() => suggestedTopicSchema)),
  tags: s.array(s.lazy(() => tagSchema)),
  tagsDescriptions: s.record(s.string(), s.unknown()),
  id: s.number(),
  title: s.string(),
  fancyTitle: s.string(),
  postsCount: s.number(),
  createdAt: s.string(),
  views: s.number(),
  replyCount: s.number(),
  likeCount: s.number(),
  lastPostedAt: s.nullable(s.string()),
  visible: s.boolean(),
  closed: s.boolean(),
  archived: s.boolean(),
  hasSummary: s.boolean(),
  archetype: s.string(),
  slug: s.string(),
  categoryId: s.number(),
  wordCount: s.nullable(s.number()),
  deletedAt: s.nullable(s.string()),
  userId: s.number(),
  featuredLink: s.nullable(s.string()),
  pinnedGlobally: s.boolean(),
  pinnedAt: s.nullable(s.string()),
  pinnedUntil: s.nullable(s.string()),
  imageUrl: s.nullable(s.string()),
  slowModeSeconds: s.number(),
  draft: s.nullable(s.string()),
  draftKey: s.string(),
  draftSequence: s.number(),
  unpinned: s.nullable(s.string()),
  pinned: s.boolean(),
  currentPostNumber: s.optional(s.number()),
  highestPostNumber: s.nullable(s.number()),
  deletedBy: s.nullable(s.string()),
  hasDeleted: s.boolean(),
  actionsSummary: s.array(s.lazy(() => actionsSummary8Schema)),
  chunkSize: s.number(),
  bookmarked: s.boolean(),
  bookmarks: s.array(s.record(s.string(), s.unknown())),
  topicTimer: s.nullable(s.string()),
  messageBusLastId: s.number(),
  participantCount: s.number(),
  showReadIndicator: s.boolean(),
  thumbnails: s.nullable(s.string()),
  slowModeEnabledUntil: s.nullable(s.string()),
  details: detailsSchema,
  _keysMap: {
    postStream: "post_stream",
    timelineLookup: "timeline_lookup",
    suggestedTopics: "suggested_topics",
    tagsDescriptions: "tags_descriptions",
    fancyTitle: "fancy_title",
    postsCount: "posts_count",
    createdAt: "created_at",
    replyCount: "reply_count",
    likeCount: "like_count",
    lastPostedAt: "last_posted_at",
    hasSummary: "has_summary",
    categoryId: "category_id",
    wordCount: "word_count",
    deletedAt: "deleted_at",
    userId: "user_id",
    featuredLink: "featured_link",
    pinnedGlobally: "pinned_globally",
    pinnedAt: "pinned_at",
    pinnedUntil: "pinned_until",
    imageUrl: "image_url",
    slowModeSeconds: "slow_mode_seconds",
    draftKey: "draft_key",
    draftSequence: "draft_sequence",
    currentPostNumber: "current_post_number",
    highestPostNumber: "highest_post_number",
    deletedBy: "deleted_by",
    hasDeleted: "has_deleted",
    actionsSummary: "actions_summary",
    chunkSize: "chunk_size",
    topicTimer: "topic_timer",
    messageBusLastId: "message_bus_last_id",
    participantCount: "participant_count",
    showReadIndicator: "show_read_indicator",
    slowModeEnabledUntil: "slow_mode_enabled_until",
  },
});
