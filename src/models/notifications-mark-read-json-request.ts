import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NotificationsMarkReadJsonRequest = {
  /** (optional) Leave off to mark all notifications as read */
  id?: number;
};

export const notificationsMarkReadJsonRequestSchema: Schema<NotificationsMarkReadJsonRequest> =
  s.object<NotificationsMarkReadJsonRequest>({
    id: s.optional(s.int()),
  });
