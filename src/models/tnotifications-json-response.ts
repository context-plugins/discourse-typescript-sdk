import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TNotificationsJsonResponse = {
  success?: string;
};

export const tNotificationsJsonResponseSchema: Schema<TNotificationsJsonResponse> =
  s.object<TNotificationsJsonResponse>({
    success: s.optional(s.string()),
  });
