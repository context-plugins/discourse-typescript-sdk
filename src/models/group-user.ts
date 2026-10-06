import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GroupUser = {
  groupId: number;
  userId: number;
  notificationLevel: number;
  owner?: boolean;
};

export const groupUserSchema: Schema<GroupUser> = s.object<GroupUser>({
  groupId: s.int(),
  userId: s.int(),
  notificationLevel: s.int(),
  owner: s.optional(s.boolean()),
  _keysMap: {
    groupId: "group_id",
    userId: "user_id",
    notificationLevel: "notification_level",
  },
});
