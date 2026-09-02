import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TChangeTimestampJsonResponse = {
  success?: string;
};

export const tChangeTimestampJsonResponseSchema: Schema<TChangeTimestampJsonResponse> =
  s.object<TChangeTimestampJsonResponse>({
    success: s.optional(s.string()),
  });
