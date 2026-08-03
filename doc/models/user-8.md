
# User 8

## Structure

`User8`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `username` | `string` | Required | - |
| `name` | `string` | Required | - |
| `avatarTemplate` | `string` | Required | - |
| `lastPostedAt` | `string \| null` | Required | - |
| `lastSeenAt` | `string \| null` | Required | - |
| `createdAt` | `string` | Required | - |
| `ignored` | `boolean` | Required | - |
| `muted` | `boolean` | Required | - |
| `canIgnoreUser` | `boolean` | Required | - |
| `canIgnoreUsers` | `boolean \| undefined` | Optional | - |
| `canMuteUser` | `boolean` | Required | - |
| `canMuteUsers` | `boolean \| undefined` | Optional | - |
| `canSendPrivateMessages` | `boolean` | Required | - |
| `canSendPrivateMessageToUser` | `boolean` | Required | - |
| `trustLevel` | `number` | Required | - |
| `moderator` | `boolean` | Required | - |
| `admin` | `boolean` | Required | - |
| `title` | `string \| null` | Required | - |
| `badgeCount` | `number` | Required | - |
| `secondFactorBackupEnabled` | `boolean \| undefined` | Optional | - |
| `userFields` | `Record<string, string> \| undefined` | Optional | - |
| `customFields` | [`CustomFields`](../../doc/models/custom-fields.md) | Required | - |
| `timeRead` | `number` | Required | - |
| `recentTimeRead` | `number` | Required | - |
| `primaryGroupId` | `number \| null` | Required | - |
| `primaryGroupName` | `string \| null` | Required | - |
| `flairGroupId` | `number \| null` | Required | - |
| `flairName` | `string \| null` | Required | - |
| `flairUrl` | `string \| null` | Required | - |
| `flairBgColor` | `string \| null` | Required | - |
| `flairColor` | `string \| null` | Required | - |
| `featuredTopic` | [`FeaturedTopic`](../../doc/models/featured-topic.md) | Required | - |
| `staged` | `boolean` | Required | - |
| `canEdit` | `boolean` | Required | - |
| `canEditUsername` | `boolean` | Required | - |
| `canEditEmail` | `boolean` | Required | - |
| `canEditName` | `boolean` | Required | - |
| `uploadedAvatarId` | `number \| null` | Required | - |
| `hasTitleBadges` | `boolean` | Required | - |
| `pendingCount` | `number` | Required | - |
| `pendingPostsCount` | `number \| undefined` | Optional | - |
| `profileViewCount` | `number` | Required | - |
| `secondFactorEnabled` | `boolean` | Required | - |
| `canUploadProfileHeader` | `boolean` | Required | - |
| `canUploadUserCardBackground` | `boolean` | Required | - |
| `postCount` | `number` | Required | - |
| `topicCount` | `number` | Required | - |
| `canBeDeleted` | `boolean` | Required | - |
| `canDeleteAllPosts` | `boolean` | Required | - |
| `locale` | `string \| null` | Required | - |
| `mutedCategoryIds` | `unknown[]` | Required | - |
| `regularCategoryIds` | `unknown[]` | Required | - |
| `watchedTags` | `unknown[]` | Required | - |
| `watchingFirstPostTags` | `unknown[]` | Required | - |
| `trackedTags` | `unknown[]` | Required | - |
| `mutedTags` | `unknown[]` | Required | - |
| `trackedCategoryIds` | `unknown[]` | Required | - |
| `watchedCategoryIds` | `unknown[]` | Required | - |
| `watchedFirstPostCategoryIds` | `unknown[]` | Required | - |
| `systemAvatarUploadId` | `string \| null` | Required | - |
| `systemAvatarTemplate` | `string` | Required | - |
| `mutedUsernames` | `unknown[]` | Required | - |
| `ignoredUsernames` | `unknown[]` | Required | - |
| `allowedPmUsernames` | `unknown[]` | Required | - |
| `mailingListPostsPerDay` | `number` | Required | - |
| `canChangeBio` | `boolean` | Required | - |
| `canChangeLocation` | `boolean` | Required | - |
| `canChangeWebsite` | `boolean` | Required | - |
| `canChangeTrackingPreferences` | `boolean` | Required | - |
| `userApiKeys` | `string \| null` | Required | - |
| `userPasskeys` | `unknown[] \| undefined` | Optional | - |
| `sidebarTags` | `unknown[] \| undefined` | Optional | - |
| `sidebarCategoryIds` | `unknown[] \| undefined` | Optional | - |
| `displaySidebarTags` | `boolean \| undefined` | Optional | - |
| `canPickThemeWithCustomHomepage` | `boolean \| undefined` | Optional | - |
| `userAuthTokens` | [`UserAuthToken[]`](../../doc/models/user-auth-token.md) | Required | - |
| `userNotificationSchedule` | [`UserNotificationSchedule`](../../doc/models/user-notification-schedule.md) | Required | - |
| `useLogoSmallAsAvatar` | `boolean` | Required | - |
| `featuredUserBadgeIds` | `unknown[]` | Required | - |
| `invitedBy` | `string \| null` | Required | - |
| `groups` | [`Group7[]`](../../doc/models/group-7.md) | Required | - |
| `groupUsers` | [`GroupUser[]`](../../doc/models/group-user.md) | Required | - |
| `userOption` | [`UserOption`](../../doc/models/user-option.md) | Required | - |

## Example

```ts
import { User8 } from 'discourse-api-documentationlib';

const user8: User8 = {
  id: 92,
  username: 'username4',
  name: 'name4',
  avatarTemplate: 'avatar_template4',
  lastPostedAt: 'last_posted_at4',
  lastSeenAt: 'last_seen_at0',
  createdAt: 'created_at2',
  ignored: false,
  muted: false,
  canIgnoreUser: false,
  canMuteUser: false,
  canSendPrivateMessages: false,
  canSendPrivateMessageToUser: false,
  trustLevel: 76,
  moderator: false,
  admin: false,
  title: 'title0',
  badgeCount: 174,
  customFields: {
    firstName: 'first_name2',
  },
  timeRead: 40,
  recentTimeRead: 186,
  primaryGroupId: 104,
  primaryGroupName: 'primary_group_name2',
  flairGroupId: 142,
  flairName: 'flair_name8',
  flairUrl: 'flair_url4',
  flairBgColor: 'flair_bg_color8',
  flairColor: 'flair_color8',
  featuredTopic: {
    id: 50,
    title: 'title6',
    fancyTitle: 'fancy_title0',
    slug: 'slug6',
    postsCount: 188,
  },
  staged: false,
  canEdit: false,
  canEditUsername: false,
  canEditEmail: false,
  canEditName: false,
  uploadedAvatarId: 168,
  hasTitleBadges: false,
  pendingCount: 244,
  profileViewCount: 40,
  secondFactorEnabled: false,
  canUploadProfileHeader: false,
  canUploadUserCardBackground: false,
  postCount: 64,
  topicCount: 248,
  canBeDeleted: false,
  canDeleteAllPosts: false,
  locale: 'locale2',
  mutedCategoryIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  regularCategoryIds: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  watchedTags: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  watchingFirstPostTags: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  trackedTags: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  mutedTags: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  trackedCategoryIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  watchedCategoryIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  watchedFirstPostCategoryIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  systemAvatarUploadId: 'system_avatar_upload_id6',
  systemAvatarTemplate: 'system_avatar_template0',
  mutedUsernames: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  ignoredUsernames: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  allowedPmUsernames: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  mailingListPostsPerDay: 110,
  canChangeBio: false,
  canChangeLocation: false,
  canChangeWebsite: false,
  canChangeTrackingPreferences: false,
  userApiKeys: 'user_api_keys0',
  userAuthTokens: [
    {
      id: 30,
      clientIp: 'client_ip2',
      location: 'location6',
      browser: 'browser2',
      device: 'device8',
      os: 'os0',
      icon: 'icon4',
      createdAt: 'created_at0',
      seenAt: 'seen_at2',
      isActive: false,
    }
  ],
  userNotificationSchedule: {
    enabled: false,
    day0StartTime: 242,
    day0EndTime: 54,
    day1StartTime: 130,
    day1EndTime: 246,
    day2StartTime: 112,
    day2EndTime: 212,
    day3StartTime: 160,
    day3EndTime: 110,
    day4StartTime: 186,
    day4EndTime: 212,
    day5StartTime: 48,
    day5EndTime: 64,
    day6StartTime: 102,
    day6EndTime: 208,
  },
  useLogoSmallAsAvatar: false,
  featuredUserBadgeIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  invitedBy: 'invited_by8',
  groups: [
    {
      id: 152,
      automatic: false,
      name: 'name6',
      displayName: 'display_name6',
      userCount: 248,
      mentionableLevel: 236,
      messageableLevel: 92,
      visibilityLevel: 196,
      primaryGroup: false,
      title: 'title2',
      grantTrustLevel: 'grant_trust_level8',
      incomingEmail: 'incoming_email6',
      hasMessages: false,
      flairUrl: 'flair_url6',
      flairBgColor: 'flair_bg_color0',
      flairColor: 'flair_color0',
      bioRaw: 'bio_raw8',
      bioCooked: 'bio_cooked2',
      bioExcerpt: 'bio_excerpt0',
      publicAdmission: false,
      publicExit: false,
      allowMembershipRequests: false,
      fullName: 'full_name2',
      defaultNotificationLevel: 112,
      membershipRequestTemplate: 'membership_request_template2',
      membersVisibilityLevel: 0,
      canSeeMembers: false,
      canAdminGroup: false,
      publishReadState: false,
    }
  ],
  groupUsers: [
    {
      groupId: 176,
      userId: 4,
      notificationLevel: 4,
      owner: false,
    }
  ],
  userOption: {
    userId: 122,
    mailingListMode: false,
    mailingListModeFrequency: 176,
    emailDigests: false,
    emailLevel: 112,
    emailMessagesLevel: 58,
    externalLinksInNewTab: false,
    colorSchemeId: 'color_scheme_id2',
    darkSchemeId: 'dark_scheme_id6',
    dynamicFavicon: false,
    enableQuoting: false,
    enableSmartLists: false,
    enableMarkdownMonospaceFont: false,
    enableDefer: false,
    digestAfterMinutes: 8,
    automaticallyUnpinTopics: false,
    autoTrackTopicsAfterMsecs: 128,
    notificationLevelWhenReplying: 80,
    newTopicDurationMinutes: 210,
    emailPreviousReplies: 154,
    emailInReplyTo: false,
    likeNotificationFrequency: 64,
    notifyOnLinkedPosts: false,
    pushNotificationLevel: 'push_notification_level4',
    enableUpcomingChangeAvailableNotifications: false,
    includeTl0InDigests: false,
    themeIds: [
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    themeKeySeq: 74,
    allowPrivateMessages: false,
    enableAllowedPmUsers: false,
    homepageId: 'homepage_id4',
    hideProfileAndPresence: false,
    hideProfile: false,
    hidePresence: false,
    textSize: 'text_size4',
    textSizeSeq: 126,
    titleCountMode: 'title_count_mode4',
    timezone: 'timezone2',
    skipNewUserTips: false,
    topicsUnreadWhenClosed: false,
    interfaceColorMode: 78,
    showOriginalContent: false,
    bookmarkAutoDeletePreference: 190,
    defaultCalendar: 'default_calendar2',
    oldestSearchLogDate: 'oldest_search_log_date2',
    sidebarLinkToFilteredList: false,
    sidebarShowCountOfNewItems: false,
  },
  canIgnoreUsers: false,
  canMuteUsers: false,
  secondFactorBackupEnabled: false,
  userFields: {
    'key0': 'user_fields3',
    'key1': 'user_fields4',
    'key2': 'user_fields5'
  },
  pendingPostsCount: 108,
};
```

