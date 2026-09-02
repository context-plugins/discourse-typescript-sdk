import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CategorySetting = {
  autoBumpCooldownDays?: number;
  numAutoBumpDaily?: number | null;
  requireReplyApproval?: boolean | null;
  requireTopicApproval?: boolean | null;
  nestedRepliesDefault?: boolean | null;
  topicPostingReviewMode?: string;
  replyPostingReviewMode?: string;
};

export const categorySettingSchema: Schema<CategorySetting> = s.object<CategorySetting>({
  autoBumpCooldownDays: s.optional(s.number()),
  numAutoBumpDaily: s.optionalNullable(s.number()),
  requireReplyApproval: s.optionalNullable(s.boolean()),
  requireTopicApproval: s.optionalNullable(s.boolean()),
  nestedRepliesDefault: s.optionalNullable(s.boolean()),
  topicPostingReviewMode: s.optional(s.string()),
  replyPostingReviewMode: s.optional(s.string()),
  _keysMap: {
    autoBumpCooldownDays: "auto_bump_cooldown_days",
    numAutoBumpDaily: "num_auto_bump_daily",
    requireReplyApproval: "require_reply_approval",
    requireTopicApproval: "require_topic_approval",
    nestedRepliesDefault: "nested_replies_default",
    topicPostingReviewMode: "topic_posting_review_mode",
    replyPostingReviewMode: "reply_posting_review_mode",
  },
});
