
# T Json Response

## Structure

`TJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `postStream` | [`PostStream1`](../../doc/models/post-stream-1.md) | Required | - |
| `timelineLookup` | `unknown[]` | Required | - |
| `suggestedTopics` | [`SuggestedTopic[]`](../../doc/models/suggested-topic.md) | Required | - |
| `tags` | [`Tag[]`](../../doc/models/tag.md) | Required | - |
| `tagsDescriptions` | `unknown` | Required | - |
| `id` | `number` | Required | - |
| `title` | `string` | Required | - |
| `fancyTitle` | `string` | Required | - |
| `postsCount` | `number` | Required | - |
| `createdAt` | `string` | Required | - |
| `views` | `number` | Required | - |
| `replyCount` | `number` | Required | - |
| `likeCount` | `number` | Required | - |
| `lastPostedAt` | `string \| null` | Required | - |
| `visible` | `boolean` | Required | - |
| `closed` | `boolean` | Required | - |
| `archived` | `boolean` | Required | - |
| `hasSummary` | `boolean` | Required | - |
| `archetype` | `string` | Required | - |
| `slug` | `string` | Required | - |
| `categoryId` | `number` | Required | - |
| `wordCount` | `number \| null` | Required | - |
| `deletedAt` | `string \| null` | Required | - |
| `userId` | `number` | Required | - |
| `featuredLink` | `string \| null` | Required | - |
| `pinnedGlobally` | `boolean` | Required | - |
| `pinnedAt` | `string \| null` | Required | - |
| `pinnedUntil` | `string \| null` | Required | - |
| `imageUrl` | `string \| null` | Required | - |
| `slowModeSeconds` | `number` | Required | - |
| `draft` | `string \| null` | Required | - |
| `draftKey` | `string` | Required | - |
| `draftSequence` | `number` | Required | - |
| `unpinned` | `string \| null` | Required | - |
| `pinned` | `boolean` | Required | - |
| `currentPostNumber` | `number \| undefined` | Optional | - |
| `highestPostNumber` | `number \| null` | Required | - |
| `deletedBy` | `string \| null` | Required | - |
| `hasDeleted` | `boolean` | Required | - |
| `actionsSummary` | [`ActionsSummary8[]`](../../doc/models/actions-summary-8.md) | Required | - |
| `chunkSize` | `number` | Required | - |
| `bookmarked` | `boolean` | Required | - |
| `bookmarks` | `unknown[]` | Required | - |
| `topicTimer` | `string \| null` | Required | - |
| `messageBusLastId` | `number` | Required | - |
| `participantCount` | `number` | Required | - |
| `showReadIndicator` | `boolean` | Required | - |
| `thumbnails` | `string \| null` | Required | - |
| `slowModeEnabledUntil` | `string \| null` | Required | - |
| `details` | [`Details`](../../doc/models/details.md) | Required | - |

## Example

```ts
import { TJsonResponse } from 'discourse';

const tJsonResponse: TJsonResponse = {
  postStream: {
    posts: [
      {
        id: 64,
        name: 'name6',
        username: 'username6',
        avatarTemplate: 'avatar_template6',
        createdAt: 'created_at4',
        cooked: 'cooked8',
        postNumber: 216,
        postType: 210,
        updatedAt: 'updated_at2',
        replyCount: 154,
        replyToPostNumber: 'reply_to_post_number2',
        quoteCount: 78,
        incomingLinkCount: 6,
        reads: 238,
        readersCount: 102,
        score: 182.76,
        yours: false,
        topicId: 2,
        topicSlug: 'topic_slug6',
        displayUsername: 'display_username6',
        primaryGroupName: 'primary_group_name4',
        flairName: 'flair_name0',
        flairUrl: 'flair_url6',
        flairBgColor: 'flair_bg_color0',
        flairColor: 'flair_color0',
        version: 36,
        canEdit: false,
        canDelete: false,
        canRecover: false,
        canWiki: false,
        linkCounts: [
          {
            url: 'url4',
            internal: false,
            reflection: false,
            title: 'title6',
            clicks: 220,
          }
        ],
        read: false,
        userTitle: 'user_title0',
        bookmarked: false,
        actionsSummary: [
          {
            id: 218,
            canAct: false,
          }
        ],
        moderator: false,
        admin: false,
        staff: false,
        userId: 160,
        hidden: false,
        trustLevel: 48,
        deletedAt: 'deleted_at4',
        userDeleted: false,
        editReason: 'edit_reason4',
        canViewEditHistory: false,
        wiki: false,
        reviewableId: 138,
        reviewableScoreCount: 40,
        reviewableScorePendingCount: 190,
        canSeeHiddenPost: false,
      }
    ],
    stream: [
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' }
    ],
  },
  timelineLookup: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  suggestedTopics: [
    {
      id: 132,
      title: 'title4',
      fancyTitle: 'fancy_title8',
      slug: 'slug2',
      postsCount: 14,
      replyCount: 222,
      highestPostNumber: 110,
      imageUrl: 'image_url4',
      createdAt: 'created_at6',
      lastPostedAt: 'last_posted_at0',
      bumped: false,
      bumpedAt: 'bumped_at4',
      archetype: 'archetype4',
      unseen: false,
      pinned: false,
      unpinned: 'unpinned0',
      excerpt: 'excerpt0',
      visible: false,
      closed: false,
      archived: false,
      bookmarked: 'bookmarked8',
      liked: 'liked0',
      tags: [
        {
          id: 26,
          name: 'name0',
          slug: 'slug4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      tagsDescriptions: { 'key1': 'val1', 'key2': 'val2' },
      likeCount: 130,
      views: 198,
      categoryId: 130,
      featuredLink: 'featured_link4',
      posters: [
        {
          extras: 'extras2',
          description: 'description8',
          user: {
            id: 76,
            username: 'username0',
            name: 'name0',
            avatarTemplate: 'avatar_template0',
          },
        }
      ],
    }
  ],
  tags: [
    {
      id: 26,
      name: 'name0',
      slug: 'slug4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  tagsDescriptions: { 'key1': 'val1', 'key2': 'val2' },
  id: 0,
  title: 'title2',
  fancyTitle: 'fancy_title2',
  postsCount: 138,
  createdAt: 'created_at0',
  views: 190,
  replyCount: 90,
  likeCount: 254,
  lastPostedAt: 'last_posted_at6',
  visible: false,
  closed: false,
  archived: false,
  hasSummary: false,
  archetype: 'archetype2',
  slug: 'slug4',
  categoryId: 6,
  wordCount: 160,
  deletedAt: 'deleted_at0',
  userId: 96,
  featuredLink: 'featured_link8',
  pinnedGlobally: false,
  pinnedAt: 'pinned_at4',
  pinnedUntil: 'pinned_until4',
  imageUrl: 'image_url8',
  slowModeSeconds: 10,
  draft: 'draft4',
  draftKey: 'draft_key8',
  draftSequence: 142,
  unpinned: 'unpinned4',
  pinned: false,
  highestPostNumber: 22,
  deletedBy: 'deleted_by8',
  hasDeleted: false,
  actionsSummary: [
    {
      id: 218,
      count: 46,
      hidden: false,
      canAct: false,
    }
  ],
  chunkSize: 254,
  bookmarked: false,
  bookmarks: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  topicTimer: 'topic_timer2',
  messageBusLastId: 178,
  participantCount: 188,
  showReadIndicator: false,
  thumbnails: 'thumbnails2',
  slowModeEnabledUntil: 'slow_mode_enabled_until4',
  details: {
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
  },
  currentPostNumber: 188,
};
```

