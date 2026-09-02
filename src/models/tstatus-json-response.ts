import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TStatusJsonResponse = {
  success?: string;
  topicStatusUpdate?: string | null;
};

export const tStatusJsonResponseSchema: Schema<TStatusJsonResponse> = s.object<TStatusJsonResponse>({
  success: s.optional(s.string()),
  topicStatusUpdate: s.optionalNullable(s.string()),
  _keysMap: {
    topicStatusUpdate: "topic_status_update",
  },
});
