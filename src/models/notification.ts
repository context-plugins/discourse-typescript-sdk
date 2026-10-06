import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";

export type Notification = {
  id?: number;
  userId?: number;
  notificationType?: number;
  read?: boolean;
  createdAt?: string;
  postNumber?: number | null;
  topicId?: number | null;
  slug?: string | null;
  data?: Data;
};

export const notificationSchema: Schema<Notification> = s.object<Notification>({
  id: s.optional(s.int()),
  userId: s.optional(s.int()),
  notificationType: s.optional(s.int()),
  read: s.optional(s.boolean()),
  createdAt: s.optional(s.string()),
  postNumber: s.optionalNullable(s.int()),
  topicId: s.optionalNullable(s.int()),
  slug: s.optionalNullable(s.string()),
  data: s.optional(s.lazy(() => dataSchema)),
  _keysMap: {
    userId: "user_id",
    notificationType: "notification_type",
    createdAt: "created_at",
    postNumber: "post_number",
    topicId: "topic_id",
  },
});
