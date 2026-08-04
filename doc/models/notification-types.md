
# Notification Types

## Structure

`NotificationTypes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mentioned` | `number` | Required | - |
| `replied` | `number` | Required | - |
| `quoted` | `number` | Required | - |
| `edited` | `number` | Required | - |
| `liked` | `number` | Required | - |
| `privateMessage` | `number` | Required | - |
| `invitedToPrivateMessage` | `number` | Required | - |
| `inviteeAccepted` | `number` | Required | - |
| `posted` | `number` | Required | - |
| `watchingCategoryOrTag` | `number` | Required | - |
| `newFeatures` | `number \| undefined` | Optional | - |
| `adminProblems` | `number \| undefined` | Optional | - |
| `movedPost` | `number` | Required | - |
| `linked` | `number` | Required | - |
| `grantedBadge` | `number` | Required | - |
| `invitedToTopic` | `number` | Required | - |
| `custom` | `number` | Required | - |
| `groupMentioned` | `number` | Required | - |
| `groupMessageSummary` | `number` | Required | - |
| `watchingFirstPost` | `number` | Required | - |
| `topicReminder` | `number` | Required | - |
| `likedConsolidated` | `number` | Required | - |
| `linkedConsolidated` | `number` | Required | - |
| `postApproved` | `number` | Required | - |
| `codeReviewCommitApproved` | `number` | Required | - |
| `membershipRequestAccepted` | `number` | Required | - |
| `membershipRequestConsolidated` | `number` | Required | - |
| `bookmarkReminder` | `number` | Required | - |
| `reaction` | `number` | Required | - |
| `votesReleased` | `number` | Required | - |
| `eventReminder` | `number` | Required | - |
| `eventInvitation` | `number` | Required | - |
| `chatMention` | `number` | Required | - |
| `chatMessage` | `number` | Required | - |
| `chatInvitation` | `number` | Required | - |
| `chatGroupMention` | `number` | Required | - |
| `chatQuoted` | `number \| undefined` | Optional | - |
| `chatWatchedThread` | `number \| undefined` | Optional | - |
| `upcomingChangeAvailable` | `number \| undefined` | Optional | - |
| `upcomingChangeAutomaticallyPromoted` | `number \| undefined` | Optional | - |
| `assigned` | `number \| undefined` | Optional | - |
| `questionAnswerUserCommented` | `number \| undefined` | Optional | - |
| `following` | `number \| undefined` | Optional | - |
| `followingCreatedTopic` | `number \| undefined` | Optional | - |
| `followingReplied` | `number \| undefined` | Optional | - |
| `circlesActivity` | `number \| undefined` | Optional | - |
| `boost` | `number \| undefined` | Optional | - |
| `suggestedEditCreated` | `number \| undefined` | Optional | - |
| `suggestedEditAccepted` | `number \| undefined` | Optional | - |

## Example

```ts
import { NotificationTypes } from 'discourse';

const notificationTypes: NotificationTypes = {
  mentioned: 150,
  replied: 12,
  quoted: 176,
  edited: 242,
  liked: 68,
  privateMessage: 210,
  invitedToPrivateMessage: 246,
  inviteeAccepted: 212,
  posted: 162,
  watchingCategoryOrTag: 186,
  movedPost: 224,
  linked: 202,
  grantedBadge: 14,
  invitedToTopic: 104,
  custom: 56,
  groupMentioned: 230,
  groupMessageSummary: 88,
  watchingFirstPost: 68,
  topicReminder: 32,
  likedConsolidated: 50,
  linkedConsolidated: 66,
  postApproved: 104,
  codeReviewCommitApproved: 70,
  membershipRequestAccepted: 106,
  membershipRequestConsolidated: 198,
  bookmarkReminder: 134,
  reaction: 226,
  votesReleased: 246,
  eventReminder: 198,
  eventInvitation: 46,
  chatMention: 70,
  chatMessage: 212,
  chatInvitation: 234,
  chatGroupMention: 222,
  newFeatures: 116,
  adminProblems: 100,
  chatQuoted: 156,
  chatWatchedThread: 214,
  upcomingChangeAvailable: 230,
};
```

