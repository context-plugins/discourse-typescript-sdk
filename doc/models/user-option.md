
# User Option

## Structure

`UserOption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `number` | Required | - |
| `mailingListMode` | `boolean` | Required | - |
| `mailingListModeFrequency` | `number` | Required | - |
| `emailDigests` | `boolean` | Required | - |
| `emailLevel` | `number` | Required | - |
| `emailMessagesLevel` | `number` | Required | - |
| `externalLinksInNewTab` | `boolean` | Required | - |
| `bookmarkAutoDeletePreference` | `number \| undefined` | Optional | - |
| `colorSchemeId` | `string \| null` | Required | - |
| `darkSchemeId` | `string \| null` | Required | - |
| `dynamicFavicon` | `boolean` | Required | - |
| `enableQuoting` | `boolean` | Required | - |
| `enableSmartLists` | `boolean` | Required | - |
| `enableMarkdownMonospaceFont` | `boolean` | Required | - |
| `enableDefer` | `boolean` | Required | - |
| `digestAfterMinutes` | `number` | Required | - |
| `automaticallyUnpinTopics` | `boolean` | Required | - |
| `autoTrackTopicsAfterMsecs` | `number` | Required | - |
| `notificationLevelWhenReplying` | `number` | Required | - |
| `newTopicDurationMinutes` | `number` | Required | - |
| `emailPreviousReplies` | `number` | Required | - |
| `emailInReplyTo` | `boolean` | Required | - |
| `likeNotificationFrequency` | `number` | Required | - |
| `notifyOnLinkedPosts` | `boolean` | Required | - |
| `pushNotificationLevel` | `string` | Required | - |
| `enableUpcomingChangeAvailableNotifications` | `boolean` | Required | - |
| `includeTl0InDigests` | `boolean` | Required | - |
| `themeIds` | `unknown[]` | Required | - |
| `themeKeySeq` | `number` | Required | - |
| `allowPrivateMessages` | `boolean` | Required | - |
| `enableAllowedPmUsers` | `boolean` | Required | - |
| `homepageId` | `string \| null` | Required | - |
| `hideProfileAndPresence` | `boolean` | Required | - |
| `hideProfile` | `boolean` | Required | - |
| `hidePresence` | `boolean` | Required | - |
| `textSize` | `string` | Required | - |
| `textSizeSeq` | `number` | Required | - |
| `titleCountMode` | `string` | Required | - |
| `timezone` | `string \| null` | Required | - |
| `skipNewUserTips` | `boolean` | Required | - |
| `defaultCalendar` | `string \| undefined` | Optional | - |
| `oldestSearchLogDate` | `string \| null \| undefined` | Optional | - |
| `sidebarLinkToFilteredList` | `boolean \| undefined` | Optional | - |
| `sidebarShowCountOfNewItems` | `boolean \| undefined` | Optional | - |
| `watchedPrecedenceOverMuted` | `boolean \| undefined` | Optional | - |
| `seenPopups` | `string \| null \| undefined` | Optional | - |
| `topicsUnreadWhenClosed` | `boolean` | Required | - |
| `compositionMode` | `number \| undefined` | Optional | - |
| `interfaceColorMode` | `number` | Required | - |
| `showOriginalContent` | `boolean` | Required | - |

## Example

```ts
import { UserOption } from 'discourse-api-documentationlib';

const userOption: UserOption = {
  userId: 16,
  mailingListMode: false,
  mailingListModeFrequency: 230,
  emailDigests: false,
  emailLevel: 6,
  emailMessagesLevel: 208,
  externalLinksInNewTab: false,
  colorSchemeId: 'color_scheme_id8',
  darkSchemeId: 'dark_scheme_id6',
  dynamicFavicon: false,
  enableQuoting: false,
  enableSmartLists: false,
  enableMarkdownMonospaceFont: false,
  enableDefer: false,
  digestAfterMinutes: 142,
  automaticallyUnpinTopics: false,
  autoTrackTopicsAfterMsecs: 22,
  notificationLevelWhenReplying: 230,
  newTopicDurationMinutes: 104,
  emailPreviousReplies: 252,
  emailInReplyTo: false,
  likeNotificationFrequency: 214,
  notifyOnLinkedPosts: false,
  pushNotificationLevel: 'push_notification_level4',
  enableUpcomingChangeAvailableNotifications: false,
  includeTl0InDigests: false,
  themeIds: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  themeKeySeq: 180,
  allowPrivateMessages: false,
  enableAllowedPmUsers: false,
  homepageId: 'homepage_id6',
  hideProfileAndPresence: false,
  hideProfile: false,
  hidePresence: false,
  textSize: 'text_size6',
  textSizeSeq: 20,
  titleCountMode: 'title_count_mode4',
  timezone: 'timezone8',
  skipNewUserTips: false,
  topicsUnreadWhenClosed: false,
  interfaceColorMode: 228,
  showOriginalContent: false,
  bookmarkAutoDeletePreference: 84,
  defaultCalendar: 'default_calendar2',
  oldestSearchLogDate: 'oldest_search_log_date2',
  sidebarLinkToFilteredList: false,
  sidebarShowCountOfNewItems: false,
};
```

