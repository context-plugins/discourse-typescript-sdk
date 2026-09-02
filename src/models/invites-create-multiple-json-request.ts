import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvitesCreateMultipleJsonRequest = {
  email?: string;
  skipEmail?: boolean;
  customMessage?: string;
  maxRedemptionsAllowed?: number;
  topicId?: number;
  groupIds?: string;
  groupNames?: string;
  expiresAt?: string;
};

export const invitesCreateMultipleJsonRequestSchema: Schema<InvitesCreateMultipleJsonRequest> =
  s.object<InvitesCreateMultipleJsonRequest>({
    email: s.optional(s.string()),
    skipEmail: s.optional(s.boolean()),
    customMessage: s.optional(s.string()),
    maxRedemptionsAllowed: s.optional(s.number()),
    topicId: s.optional(s.number()),
    groupIds: s.optional(s.string()),
    groupNames: s.optional(s.string()),
    expiresAt: s.optional(s.string()),
    _keysMap: {
      skipEmail: "skip_email",
      customMessage: "custom_message",
      maxRedemptionsAllowed: "max_redemptions_allowed",
      topicId: "topic_id",
      groupIds: "group_ids",
      groupNames: "group_names",
      expiresAt: "expires_at",
    },
  });
