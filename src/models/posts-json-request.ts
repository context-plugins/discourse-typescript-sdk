import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PostsJsonRequest = {
  title?: string;
  raw: string;
  topicId?: number;
  category?: number;
  targetRecipients?: string;
  targetUsernames?: string;
  archetype?: string;
  createdAt?: string;
  replyToPostNumber?: number;
  embedUrl?: string;
  externalId?: string;
  autoTrack?: boolean;
};

export const postsJsonRequestSchema: Schema<PostsJsonRequest> = s.object<PostsJsonRequest>({
  title: s.optional(s.string()),
  raw: s.string(),
  topicId: s.optional(s.number()),
  category: s.optional(s.number()),
  targetRecipients: s.optional(s.string()),
  targetUsernames: s.optional(s.string()),
  archetype: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  replyToPostNumber: s.optional(s.number()),
  embedUrl: s.optional(s.string()),
  externalId: s.optional(s.string()),
  autoTrack: s.optional(s.boolean()),
  _keysMap: {
    topicId: "topic_id",
    targetRecipients: "target_recipients",
    targetUsernames: "target_usernames",
    createdAt: "created_at",
    replyToPostNumber: "reply_to_post_number",
    embedUrl: "embed_url",
    externalId: "external_id",
    autoTrack: "auto_track",
  },
});
