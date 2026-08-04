
# Details

## Structure

`Details`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `canEdit` | `boolean` | Required | - |
| `notificationLevel` | `number` | Required | - |
| `canMovePosts` | `boolean` | Required | - |
| `canDelete` | `boolean` | Required | - |
| `canRemoveAllowedUsers` | `boolean` | Required | - |
| `canCreatePost` | `boolean` | Required | - |
| `canReplyAsNewTopic` | `boolean` | Required | - |
| `canInviteTo` | `boolean \| undefined` | Optional | - |
| `canInviteViaEmail` | `boolean \| undefined` | Optional | - |
| `canFlagTopic` | `boolean \| undefined` | Optional | - |
| `canConvertTopic` | `boolean` | Required | - |
| `canReviewTopic` | `boolean` | Required | - |
| `canCloseTopic` | `boolean` | Required | - |
| `canArchiveTopic` | `boolean` | Required | - |
| `canSplitMergeTopic` | `boolean` | Required | - |
| `canEditStaffNotes` | `boolean` | Required | - |
| `canToggleTopicVisibility` | `boolean` | Required | - |
| `canPinUnpinTopic` | `boolean` | Required | - |
| `canBannerTopic` | `boolean \| undefined` | Optional | - |
| `canModerateCategory` | `boolean` | Required | - |
| `canRemoveSelfId` | `number` | Required | - |
| `participants` | [`Participant1[] \| undefined`](../../doc/models/participant-1.md) | Optional | - |
| `createdBy` | [`CreatedBy`](../../doc/models/created-by.md) | Required | - |
| `lastPoster` | [`LastPoster`](../../doc/models/last-poster.md) | Required | - |

## Example

```ts
import { Details } from 'discourse';

const details: Details = {
  canEdit: false,
  notificationLevel: 30,
  canMovePosts: false,
  canDelete: false,
  canRemoveAllowedUsers: false,
  canCreatePost: false,
  canReplyAsNewTopic: false,
  canConvertTopic: false,
  canReviewTopic: false,
  canCloseTopic: false,
  canArchiveTopic: false,
  canSplitMergeTopic: false,
  canEditStaffNotes: false,
  canToggleTopicVisibility: false,
  canPinUnpinTopic: false,
  canModerateCategory: false,
  canRemoveSelfId: 168,
  createdBy: {
    id: 188,
    username: 'username8',
    name: 'name2',
    avatarTemplate: 'avatar_template8',
  },
  lastPoster: {
    id: 254,
    username: 'username2',
    name: 'name8',
    avatarTemplate: 'avatar_template2',
  },
  canInviteTo: false,
  canInviteViaEmail: false,
  canFlagTopic: false,
  canBannerTopic: false,
  participants: [
    {
      id: 34,
      username: 'username4',
      name: 'name4',
      avatarTemplate: 'avatar_template6',
      postCount: 6,
      primaryGroupName: 'primary_group_name2',
      flairName: 'flair_name8',
      flairUrl: 'flair_url4',
      flairColor: 'flair_color8',
      flairBgColor: 'flair_bg_color8',
      admin: false,
      moderator: false,
      trustLevel: 18,
      flairGroupId: 84,
    },
    {
      id: 34,
      username: 'username4',
      name: 'name4',
      avatarTemplate: 'avatar_template6',
      postCount: 6,
      primaryGroupName: 'primary_group_name2',
      flairName: 'flair_name8',
      flairUrl: 'flair_url4',
      flairColor: 'flair_color8',
      flairBgColor: 'flair_bg_color8',
      admin: false,
      moderator: false,
      trustLevel: 18,
      flairGroupId: 84,
    },
    {
      id: 34,
      username: 'username4',
      name: 'name4',
      avatarTemplate: 'avatar_template6',
      postCount: 6,
      primaryGroupName: 'primary_group_name2',
      flairName: 'flair_name8',
      flairUrl: 'flair_url4',
      flairColor: 'flair_color8',
      flairBgColor: 'flair_bg_color8',
      admin: false,
      moderator: false,
      trustLevel: 18,
      flairGroupId: 84,
    }
  ],
};
```

