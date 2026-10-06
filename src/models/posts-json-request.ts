import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PostsJsonRequest = {
  /** Required if creating a new topic or new private message. */
  title?: string;
  raw: string;
  /** Required if creating a new post. */
  topicId?: number;
  /** Optional if creating a new topic, and ignored if creating a new post. */
  category?: number;
  /** Required for private message, comma separated. */
  targetRecipients?: string;
  /**
   * Deprecated. Use target_recipients instead.
   *
   * @deprecated
   */
  targetUsernames?: string;
  /** Required for new private message. */
  archetype?: string;
  createdAt?: string;
  /** Optional, the post number to reply to inside a topic. */
  replyToPostNumber?: number;
  /**
   * Provide a URL from a remote system to associate a forum topic with that URL, typically for
   * using Discourse as a comments system for an external blog.
   */
  embedUrl?: string;
  /** Provide an external_id from a remote system to associate a forum topic with that id. */
  externalId?: string;
  /** If false, the user will not track the topic. By default, the user will track the topic. */
  autoTrack?: boolean;
};

export const postsJsonRequestSchema: Schema<PostsJsonRequest> = s.object<PostsJsonRequest>({
  title: s.optional(s.string()),
  raw: s.string(),
  topicId: s.optional(s.int()),
  category: s.optional(s.int()),
  targetRecipients: s.optional(s.string()),
  targetUsernames: s.optional(s.string()),
  archetype: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  replyToPostNumber: s.optional(s.int()),
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
