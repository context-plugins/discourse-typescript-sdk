import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserOption = {
  userId: number;
  mailingListMode: boolean;
  mailingListModeFrequency: number;
  emailDigests: boolean;
  emailLevel: number;
  emailMessagesLevel: number;
  externalLinksInNewTab: boolean;
  bookmarkAutoDeletePreference?: number;
  colorSchemeId: string | null;
  darkSchemeId: string | null;
  dynamicFavicon: boolean;
  enableQuoting: boolean;
  enableSmartLists: boolean;
  enableMarkdownMonospaceFont: boolean;
  enableDefer: boolean;
  digestAfterMinutes: number;
  automaticallyUnpinTopics: boolean;
  autoTrackTopicsAfterMsecs: number;
  notificationLevelWhenReplying: number;
  newTopicDurationMinutes: number;
  emailPreviousReplies: number;
  emailInReplyTo: boolean;
  likeNotificationFrequency: number;
  notifyOnLinkedPosts: boolean;
  pushNotificationLevel: string;
  enableUpcomingChangeAvailableNotifications: boolean;
  includeTl0InDigests: boolean;
  themeIds: Record<string, unknown>[];
  themeKeySeq: number;
  allowPrivateMessages: boolean;
  enableAllowedPmUsers: boolean;
  homepageId: string | null;
  hideProfileAndPresence: boolean;
  hideProfile: boolean;
  hidePresence: boolean;
  textSize: string;
  textSizeSeq: number;
  titleCountMode: string;
  timezone: string | null;
  skipNewUserTips: boolean;
  defaultCalendar?: string;
  oldestSearchLogDate?: string | null;
  sidebarLinkToFilteredList?: boolean;
  sidebarShowCountOfNewItems?: boolean;
  watchedPrecedenceOverMuted?: boolean;
  seenPopups?: string | null;
  topicsUnreadWhenClosed: boolean;
  compositionMode?: number;
  interfaceColorMode: number;
  showOriginalContent: boolean;
};

export const userOptionSchema: Schema<UserOption> = s.object<UserOption>({
  userId: s.number(),
  mailingListMode: s.boolean(),
  mailingListModeFrequency: s.number(),
  emailDigests: s.boolean(),
  emailLevel: s.number(),
  emailMessagesLevel: s.number(),
  externalLinksInNewTab: s.boolean(),
  bookmarkAutoDeletePreference: s.optional(s.number()),
  colorSchemeId: s.nullable(s.string()),
  darkSchemeId: s.nullable(s.string()),
  dynamicFavicon: s.boolean(),
  enableQuoting: s.boolean(),
  enableSmartLists: s.boolean(),
  enableMarkdownMonospaceFont: s.boolean(),
  enableDefer: s.boolean(),
  digestAfterMinutes: s.number(),
  automaticallyUnpinTopics: s.boolean(),
  autoTrackTopicsAfterMsecs: s.number(),
  notificationLevelWhenReplying: s.number(),
  newTopicDurationMinutes: s.number(),
  emailPreviousReplies: s.number(),
  emailInReplyTo: s.boolean(),
  likeNotificationFrequency: s.number(),
  notifyOnLinkedPosts: s.boolean(),
  pushNotificationLevel: s.string(),
  enableUpcomingChangeAvailableNotifications: s.boolean(),
  includeTl0InDigests: s.boolean(),
  themeIds: s.array(s.record(s.string(), s.unknown())),
  themeKeySeq: s.number(),
  allowPrivateMessages: s.boolean(),
  enableAllowedPmUsers: s.boolean(),
  homepageId: s.nullable(s.string()),
  hideProfileAndPresence: s.boolean(),
  hideProfile: s.boolean(),
  hidePresence: s.boolean(),
  textSize: s.string(),
  textSizeSeq: s.number(),
  titleCountMode: s.string(),
  timezone: s.nullable(s.string()),
  skipNewUserTips: s.boolean(),
  defaultCalendar: s.optional(s.string()),
  oldestSearchLogDate: s.optionalNullable(s.string()),
  sidebarLinkToFilteredList: s.optional(s.boolean()),
  sidebarShowCountOfNewItems: s.optional(s.boolean()),
  watchedPrecedenceOverMuted: s.optional(s.boolean()),
  seenPopups: s.optionalNullable(s.string()),
  topicsUnreadWhenClosed: s.boolean(),
  compositionMode: s.optional(s.number()),
  interfaceColorMode: s.number(),
  showOriginalContent: s.boolean(),
  _keysMap: {
    userId: "user_id",
    mailingListMode: "mailing_list_mode",
    mailingListModeFrequency: "mailing_list_mode_frequency",
    emailDigests: "email_digests",
    emailLevel: "email_level",
    emailMessagesLevel: "email_messages_level",
    externalLinksInNewTab: "external_links_in_new_tab",
    bookmarkAutoDeletePreference: "bookmark_auto_delete_preference",
    colorSchemeId: "color_scheme_id",
    darkSchemeId: "dark_scheme_id",
    dynamicFavicon: "dynamic_favicon",
    enableQuoting: "enable_quoting",
    enableSmartLists: "enable_smart_lists",
    enableMarkdownMonospaceFont: "enable_markdown_monospace_font",
    enableDefer: "enable_defer",
    digestAfterMinutes: "digest_after_minutes",
    automaticallyUnpinTopics: "automatically_unpin_topics",
    autoTrackTopicsAfterMsecs: "auto_track_topics_after_msecs",
    notificationLevelWhenReplying: "notification_level_when_replying",
    newTopicDurationMinutes: "new_topic_duration_minutes",
    emailPreviousReplies: "email_previous_replies",
    emailInReplyTo: "email_in_reply_to",
    likeNotificationFrequency: "like_notification_frequency",
    notifyOnLinkedPosts: "notify_on_linked_posts",
    pushNotificationLevel: "push_notification_level",
    enableUpcomingChangeAvailableNotifications: "enable_upcoming_change_available_notifications",
    includeTl0InDigests: "include_tl0_in_digests",
    themeIds: "theme_ids",
    themeKeySeq: "theme_key_seq",
    allowPrivateMessages: "allow_private_messages",
    enableAllowedPmUsers: "enable_allowed_pm_users",
    homepageId: "homepage_id",
    hideProfileAndPresence: "hide_profile_and_presence",
    hideProfile: "hide_profile",
    hidePresence: "hide_presence",
    textSize: "text_size",
    textSizeSeq: "text_size_seq",
    titleCountMode: "title_count_mode",
    skipNewUserTips: "skip_new_user_tips",
    defaultCalendar: "default_calendar",
    oldestSearchLogDate: "oldest_search_log_date",
    sidebarLinkToFilteredList: "sidebar_link_to_filtered_list",
    sidebarShowCountOfNewItems: "sidebar_show_count_of_new_items",
    watchedPrecedenceOverMuted: "watched_precedence_over_muted",
    seenPopups: "seen_popups",
    topicsUnreadWhenClosed: "topics_unread_when_closed",
    compositionMode: "composition_mode",
    interfaceColorMode: "interface_color_mode",
    showOriginalContent: "show_original_content",
  },
});
