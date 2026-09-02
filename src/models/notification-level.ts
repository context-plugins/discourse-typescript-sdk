import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NotificationLevel = {
  _0: "0",
  _1: "1",
  _2: "2",
  _3: "3",
} as const;
export type NotificationLevel = (typeof NotificationLevel)[keyof typeof NotificationLevel] | (string & {});

export const notificationLevelSchema: EnumSchema<NotificationLevel> =
  s.enumOf<NotificationLevel>(NotificationLevel);
