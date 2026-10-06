import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PostActionsJsonRequest = {
  /** The ID of the post to perform the action on */
  id: number;
  /** The ID of the post action type (e.g., 2 for like) */
  postActionTypeId: number;
  /** Whether to flag the entire topic */
  flagTopic?: boolean;
};

export const postActionsJsonRequestSchema: Schema<PostActionsJsonRequest> = s.object<PostActionsJsonRequest>({
  id: s.int(),
  postActionTypeId: s.int(),
  flagTopic: s.optional(s.boolean()),
  _keysMap: {
    postActionTypeId: "post_action_type_id",
    flagTopic: "flag_topic",
  },
});
