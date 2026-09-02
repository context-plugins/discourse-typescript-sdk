import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { notificationSchema, type Notification } from "./notification.js";

export type NotificationsJsonResponse = {
  notifications?: Notification[];
  totalRowsNotifications?: number;
  seenNotificationId?: number;
  loadMoreNotifications?: string;
};

export const notificationsJsonResponseSchema: Schema<NotificationsJsonResponse> =
  s.object<NotificationsJsonResponse>({
    notifications: s.optional(s.array(s.lazy(() => notificationSchema))),
    totalRowsNotifications: s.optional(s.number()),
    seenNotificationId: s.optional(s.number()),
    loadMoreNotifications: s.optional(s.string()),
    _keysMap: {
      totalRowsNotifications: "total_rows_notifications",
      seenNotificationId: "seen_notification_id",
      loadMoreNotifications: "load_more_notifications",
    },
  });
