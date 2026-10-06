import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserTips = {
  firstNotification: number;
  topicTimeline: number;
  postMenu: number;
  topicNotificationLevels: number;
  suggestedTopics: number;
};

export const userTipsSchema: Schema<UserTips> = s.object<UserTips>({
  firstNotification: s.int(),
  topicTimeline: s.int(),
  postMenu: s.int(),
  topicNotificationLevels: s.int(),
  suggestedTopics: s.int(),
  _keysMap: {
    firstNotification: "first_notification",
    topicTimeline: "topic_timeline",
    postMenu: "post_menu",
    topicNotificationLevels: "topic_notification_levels",
    suggestedTopics: "suggested_topics",
  },
});
