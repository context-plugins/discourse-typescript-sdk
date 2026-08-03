
# Site Json Response

## Structure

`SiteJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultArchetype` | `string` | Required | - |
| `notificationTypes` | [`NotificationTypes`](../../doc/models/notification-types.md) | Required | - |
| `postTypes` | [`PostTypes`](../../doc/models/post-types.md) | Required | - |
| `trustLevels` | [`TrustLevels`](../../doc/models/trust-levels.md) | Required | - |
| `userTips` | [`UserTips \| undefined`](../../doc/models/user-tips.md) | Optional | - |
| `groups` | [`Group5[]`](../../doc/models/group-5.md) | Required | - |
| `filters` | `unknown[]` | Required | - |
| `homepageChoices` | `unknown[]` | Required | - |
| `periods` | `unknown[]` | Required | - |
| `topMenuItems` | `unknown[]` | Required | - |
| `anonymousTopMenuItems` | `unknown[]` | Required | - |
| `uncategorizedCategoryId` | `number` | Required | - |
| `userFieldMaxLength` | `number` | Required | - |
| `postActionTypes` | [`PostActionType[]`](../../doc/models/post-action-type.md) | Required | - |
| `topicFlagTypes` | [`TopicFlagType[]`](../../doc/models/topic-flag-type.md) | Required | - |
| `canCreateTag` | `boolean` | Required | - |
| `canTagTopics` | `boolean` | Required | - |
| `canTagPms` | `boolean` | Required | - |
| `tagsFilterRegexp` | `string` | Required | - |
| `topTags` | [`TopTag[]`](../../doc/models/top-tag.md) | Required | - |
| `wizardRequired` | `boolean \| undefined` | Optional | - |
| `canAssociateGroups` | `boolean \| undefined` | Optional | - |
| `emailConfigured` | `boolean` | Required | - |
| `upcomingChangesWithCss` | `string[] \| undefined` | Optional | - |
| `topicFeaturedLinkAllowedCategoryIds` | `unknown[]` | Required | - |
| `userThemes` | [`UserTheme[]`](../../doc/models/user-theme.md) | Required | - |
| `userColorSchemes` | [`UserColorScheme[]`](../../doc/models/user-color-scheme.md) | Required | - |
| `defaultLightColorScheme` | `unknown \| null` | Required | - |
| `defaultDarkColorScheme` | `unknown \| null` | Required | - |
| `censoredRegexp` | `unknown[]` | Required | - |
| `customEmojiTranslation` | `unknown` | Required | - |
| `watchedWordsReplace` | `string \| null` | Required | - |
| `watchedWordsLink` | `string \| null` | Required | - |
| `markdownAdditionalOptions` | `unknown \| undefined` | Optional | - |
| `hashtagConfigurations` | `unknown \| undefined` | Optional | - |
| `hashtagIcons` | `unknown \| undefined` | Optional | - |
| `displayedAboutPluginStatGroups` | `unknown[] \| undefined` | Optional | - |
| `categories` | [`Category4[]`](../../doc/models/category-4.md) | Required | - |
| `archetypes` | [`Archetype[]`](../../doc/models/archetype.md) | Required | - |
| `userFields` | `unknown[]` | Required | - |
| `authProviders` | `unknown[]` | Required | - |
| `whispersAllowedGroupsNames` | `unknown[] \| undefined` | Optional | - |
| `deniedEmojis` | `unknown[] \| undefined` | Optional | - |
| `validFlagAppliesToTypes` | `unknown[] \| undefined` | Optional | - |
| `navigationMenuSiteTopTags` | `unknown[] \| undefined` | Optional | - |
| `fullNameRequiredForSignup` | `boolean` | Required | - |
| `fullNameVisibleInSignup` | `boolean` | Required | - |
| `adminConfigLoginRoutes` | `unknown[] \| undefined` | Optional | - |
| `accessControl` | [`AccessControl \| undefined`](../../doc/models/access-control.md) | Optional | - |
| `permanentUpcomingChangeNames` | `string[] \| undefined` | Optional | - |
| `categoryTypes` | [`CategoryType[] \| undefined`](../../doc/models/category-type.md) | Optional | - |

## Example

```ts
import { SiteJsonResponse } from 'discourse-api-documentationlib';

const siteJsonResponse: SiteJsonResponse = {
  defaultArchetype: 'default_archetype0',
  notificationTypes: {
    mentioned: 10,
    replied: 148,
    quoted: 16,
    edited: 82,
    liked: 92,
    privateMessage: 206,
    invitedToPrivateMessage: 86,
    inviteeAccepted: 52,
    posted: 254,
    watchingCategoryOrTag: 26,
    movedPost: 192,
    linked: 214,
    grantedBadge: 110,
    invitedToTopic: 200,
    custom: 104,
    groupMentioned: 70,
    groupMessageSummary: 72,
    watchingFirstPost: 92,
    topicReminder: 128,
    likedConsolidated: 110,
    linkedConsolidated: 94,
    postApproved: 8,
    codeReviewCommitApproved: 90,
    membershipRequestAccepted: 54,
    membershipRequestConsolidated: 38,
    bookmarkReminder: 230,
    reaction: 190,
    votesReleased: 170,
    eventReminder: 38,
    eventInvitation: 142,
    chatMention: 90,
    chatMessage: 52,
    chatInvitation: 182,
    chatGroupMention: 62,
    newFeatures: 44,
    adminProblems: 196,
    chatQuoted: 4,
    chatWatchedThread: 54,
    upcomingChangeAvailable: 186,
  },
  postTypes: {
    regular: 174,
    moderatorAction: 126,
    smallAction: 86,
    whisper: 152,
  },
  trustLevels: {
    newuser: 196,
    basic: 160,
    member: 18,
    regular: 28,
    leader: 70,
  },
  groups: [
    {
      id: 152,
      name: 'name6',
      flairUrl: 'flair_url6',
      flairBgColor: 'flair_bg_color0',
      flairColor: 'flair_color0',
      automatic: false,
      fullName: 'full_name2',
      displayName: 'display_name6',
    }
  ],
  filters: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  homepageChoices: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  periods: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  topMenuItems: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  anonymousTopMenuItems: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  uncategorizedCategoryId: 0,
  userFieldMaxLength: 172,
  postActionTypes: [
    {
      id: 90,
      nameKey: 'name_key2',
      name: 'name8',
      description: 'description8',
      shortDescription: 'short_description4',
      isFlag: false,
      requireMessage: false,
      enabled: false,
      appliesTo: [
        { 'key1': 'val1', 'key2': 'val2' },
        { 'key1': 'val1', 'key2': 'val2' }
      ],
      isUsed: false,
      autoActionType: false,
      position: 120,
      system: false,
    }
  ],
  topicFlagTypes: [
    {
      id: 12,
      nameKey: 'name_key8',
      name: 'name4',
      description: 'description4',
      shortDescription: 'short_description0',
      isFlag: false,
      requireMessage: false,
      enabled: false,
      appliesTo: [
        { 'key1': 'val1', 'key2': 'val2' },
        { 'key1': 'val1', 'key2': 'val2' }
      ],
      isUsed: false,
      autoActionType: false,
      position: 42,
      system: false,
    }
  ],
  canCreateTag: false,
  canTagTopics: false,
  canTagPms: false,
  tagsFilterRegexp: 'tags_filter_regexp6',
  topTags: [
    {
      id: 22,
      name: 'name8',
      slug: 'slug2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  emailConfigured: false,
  topicFeaturedLinkAllowedCategoryIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  userThemes: [
    {
      themeId: 108,
      name: 'name6',
      mDefault: false,
      colorSchemeId: 124,
      darkColorSchemeId: 240,
      onlyThemeColorSchemes: false,
    }
  ],
  userColorSchemes: [
    {
      id: 24,
      name: 'name8',
      isDark: false,
      colors: [
        { 'key1': 'val1', 'key2': 'val2' },
        { 'key1': 'val1', 'key2': 'val2' }
      ],
      themeId: 250,
    }
  ],
  defaultLightColorScheme: { 'key1': 'val1', 'key2': 'val2' },
  defaultDarkColorScheme: { 'key1': 'val1', 'key2': 'val2' },
  censoredRegexp: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  customEmojiTranslation: { 'key1': 'val1', 'key2': 'val2' },
  watchedWordsReplace: 'watched_words_replace4',
  watchedWordsLink: 'watched_words_link6',
  categories: [
    {
      id: 16,
      name: 'name8',
      color: 'color2',
      textColor: 'text_color0',
      slug: 'slug2',
      topicCount: 172,
      postCount: 244,
      position: 46,
      topicUrl: 'topic_url0',
      readRestricted: false,
      permission: 54,
      notificationLevel: 112,
      topicTemplate: 'topic_template6',
      topicTitlePlaceholder: 'topic_title_placeholder4',
      hasChildren: false,
      subcategoryCount: 74,
      sortOrder: 'sort_order8',
      sortAscending: 'sort_ascending8',
      showSubcategoryList: false,
      numFeaturedTopics: 140,
      defaultView: 'default_view2',
      subcategoryListStyle: 'subcategory_list_style4',
      defaultTopPeriod: 'default_top_period2',
      defaultListFilter: 'default_list_filter6',
      minimumRequiredTags: 172,
      navigateToFirstPostAfterRead: false,
      allowedTags: [
        { 'key1': 'val1', 'key2': 'val2' }
      ],
      allowedTagGroups: [
        { 'key1': 'val1', 'key2': 'val2' },
        { 'key1': 'val1', 'key2': 'val2' }
      ],
      allowGlobalTags: false,
      requiredTagGroups: [
        {
          name: 'name4',
          minCount: 58,
        }
      ],
      readOnlyBanner: 'read_only_banner2',
      uploadedLogo: 'uploaded_logo6',
      uploadedLogoDark: 'uploaded_logo_dark4',
      uploadedBackground: 'uploaded_background2',
      uploadedBackgroundDark: 'uploaded_background_dark2',
      canEdit: false,
      styleType: 'style_type0',
      emoji: 'emoji0',
      icon: 'icon0',
      description: 'description8',
      descriptionText: 'description_text0',
    }
  ],
  archetypes: [
    {
      id: 'id8',
      name: 'name8',
      options: [
        { 'key1': 'val1', 'key2': 'val2' },
        { 'key1': 'val1', 'key2': 'val2' },
        { 'key1': 'val1', 'key2': 'val2' }
      ],
    }
  ],
  userFields: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  authProviders: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  fullNameRequiredForSignup: false,
  fullNameVisibleInSignup: false,
  userTips: {
    firstNotification: 66,
    topicTimeline: 210,
    postMenu: 220,
    topicNotificationLevels: 254,
    suggestedTopics: 202,
  },
  wizardRequired: false,
  canAssociateGroups: false,
  upcomingChangesWithCss: [
    'upcoming_changes_with_css1',
    'upcoming_changes_with_css2',
    'upcoming_changes_with_css3'
  ],
  markdownAdditionalOptions: { 'key1': 'val1', 'key2': 'val2' },
};
```

