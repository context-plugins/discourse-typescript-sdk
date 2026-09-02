import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { notificationLevelSchema, type NotificationLevel } from "./notification-level.js";

export type TNotificationsJsonRequest = {
  notificationLevel: NotificationLevel;
};

export const tNotificationsJsonRequestSchema: Schema<TNotificationsJsonRequest> =
  s.object<TNotificationsJsonRequest>({
    notificationLevel: notificationLevelSchema,
    _keysMap: {
      notificationLevel: "notification_level",
    },
  });
