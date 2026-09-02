import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NotificationsMarkReadJsonResponse = {
  success?: string;
};

export const notificationsMarkReadJsonResponseSchema: Schema<NotificationsMarkReadJsonResponse> =
  s.object<NotificationsMarkReadJsonResponse>({
    success: s.optional(s.string()),
  });
