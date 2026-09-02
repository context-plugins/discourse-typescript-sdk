import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NotificationsMarkReadJsonRequest = {
  id?: number;
};

export const notificationsMarkReadJsonRequestSchema: Schema<NotificationsMarkReadJsonRequest> =
  s.object<NotificationsMarkReadJsonRequest>({
    id: s.optional(s.number()),
  });
