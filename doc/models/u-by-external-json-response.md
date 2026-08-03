
# U by External Json Response

## Structure

`UByExternalJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userBadges` | `unknown[]` | Required | - |
| `user` | [`User8`](../../doc/models/user-8.md) | Required | - |

## Example

```ts
import { UByExternalJsonResponse } from 'discourse-api-documentationlib';

const uByExternalJsonResponse: UByExternalJsonResponse = {
  userBadges: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  user: {
    id: 76,
    username: 'username0',
    name: 'name0',
    avatarTemplate: 'avatar_template0',
    lastPostedAt: 'last_posted_at8',
    lastSeenAt: 'last_seen_at6',
    createdAt: 'created_at2',
    ignored: false,
    muted: false,
    canIgnoreUser: false,
    canMuteUser: false,
    canSendPrivateMessages: false,
    canSendPrivateMessageToUser: false,
    trustLevel: 196,
    moderator: false,
    admin: false,
    title: 'title4',
    badgeCount: 158,
    customFields: {
      firstName: 'first_name2',
    },
    timeRead: 24,
    recentTimeRead: 170,
    primaryGroupId: 88,
    primaryGroupName: 'primary_group_name8',
    flairGroupId: 126,
    flairName: 'flair_name6',
    flairUrl: 'flair_url0',
    flairBgColor: 'flair_bg_color4',
    flairColor: 'flair_color6',
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
    uploadedAvatarId: 152,
    hasTitleBadges: false,
    pendingCount: 4,
    profileViewCount: 24,
    secondFactorEnabled: false,
    canUploadProfileHeader: false,
    canUploadUserCardBackground: false,
    postCount: 48,
    topicCount: 232,
    canBeDeleted: false,
    canDeleteAllPosts: false,
    locale: 'locale8',
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
    systemAvatarUploadId: 'system_avatar_upload_id2',
    systemAvatarTemplate: 'system_avatar_template6',
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
    mailingListPostsPerDay: 94,
    canChangeBio: false,
    canChangeLocation: false,
    canChangeWebsite: false,
    canChangeTrackingPreferences: false,
    userApiKeys: 'user_api_keys4',
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
    invitedBy: 'invited_by4',
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
      'key0': 'user_fields1',
      'key1': 'user_fields0',
      'key2': 'user_fields9'
    },
    pendingPostsCount: 124,
  },
};
```

