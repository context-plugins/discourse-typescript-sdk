import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PostActionsJsonRequest = {
  id: number;
  postActionTypeId: number;
  flagTopic?: boolean;
};

export const postActionsJsonRequestSchema: Schema<PostActionsJsonRequest> = s.object<PostActionsJsonRequest>({
  id: s.number(),
  postActionTypeId: s.number(),
  flagTopic: s.optional(s.boolean()),
  _keysMap: {
    postActionTypeId: "post_action_type_id",
    flagTopic: "flag_topic",
  },
});
