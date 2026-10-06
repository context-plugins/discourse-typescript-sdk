import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvitesCreateMultipleJsonRequest = {
  /** pass 1 email per invite to be generated. other properties will be shared by each invite. */
  email?: string;
  /** @default false */
  skipEmail?: boolean;
  /** optional, for email invites */
  customMessage?: string;
  /** optional, for link invites @default 1 */
  maxRedemptionsAllowed?: number;
  topicId?: number;
  /** Optional, either this or `group_names`. Comma separated list for multiple ids. */
  groupIds?: string;
  /** Optional, either this or `group_ids`. Comma separated list for multiple names. */
  groupNames?: string;
  /** optional, if not supplied, the invite_expiry_days site setting is used */
  expiresAt?: string;
};

export const invitesCreateMultipleJsonRequestSchema: Schema<InvitesCreateMultipleJsonRequest> =
  s.object<InvitesCreateMultipleJsonRequest>({
    email: s.optional(s.string()),
    skipEmail: s.defaulted(s.boolean(), false),
    customMessage: s.optional(s.string()),
    maxRedemptionsAllowed: s.defaulted(s.int(), 1),
    topicId: s.optional(s.int()),
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
