
# Tl 3 Requirements

## Structure

`Tl3Requirements`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timePeriod` | `number` | Required | - |
| `requirementsMet` | `boolean` | Required | - |
| `requirementsLost` | `boolean` | Required | - |
| `trustLevelLocked` | `boolean` | Required | - |
| `onGracePeriod` | `boolean` | Required | - |
| `daysVisited` | `number` | Required | - |
| `minDaysVisited` | `number` | Required | - |
| `numTopicsRepliedTo` | `number` | Required | - |
| `minTopicsRepliedTo` | `number` | Required | - |
| `topicsViewed` | `number` | Required | - |
| `minTopicsViewed` | `number` | Required | - |
| `postsRead` | `number` | Required | - |
| `minPostsRead` | `number` | Required | - |
| `topicsViewedAllTime` | `number` | Required | - |
| `minTopicsViewedAllTime` | `number` | Required | - |
| `postsReadAllTime` | `number` | Required | - |
| `minPostsReadAllTime` | `number` | Required | - |
| `numFlaggedPosts` | `number` | Required | - |
| `maxFlaggedPosts` | `number` | Required | - |
| `numFlaggedByUsers` | `number` | Required | - |
| `maxFlaggedByUsers` | `number` | Required | - |
| `numLikesGiven` | `number` | Required | - |
| `minLikesGiven` | `number` | Required | - |
| `numLikesReceived` | `number` | Required | - |
| `minLikesReceived` | `number` | Required | - |
| `numLikesReceivedDays` | `number` | Required | - |
| `minLikesReceivedDays` | `number` | Required | - |
| `numLikesReceivedUsers` | `number` | Required | - |
| `minLikesReceivedUsers` | `number` | Required | - |
| `penaltyCounts` | [`PenaltyCounts1`](../../doc/models/penalty-counts-1.md) | Required | - |

## Example

```ts
import { Tl3Requirements } from 'discourse-api-documentationlib';

const tl3Requirements: Tl3Requirements = {
  timePeriod: 106,
  requirementsMet: false,
  requirementsLost: false,
  trustLevelLocked: false,
  onGracePeriod: false,
  daysVisited: 62,
  minDaysVisited: 86,
  numTopicsRepliedTo: 80,
  minTopicsRepliedTo: 56,
  topicsViewed: 212,
  minTopicsViewed: 36,
  postsRead: 212,
  minPostsRead: 158,
  topicsViewedAllTime: 150,
  minTopicsViewedAllTime: 236,
  postsReadAllTime: 16,
  minPostsReadAllTime: 100,
  numFlaggedPosts: 84,
  maxFlaggedPosts: 194,
  numFlaggedByUsers: 4,
  maxFlaggedByUsers: 52,
  numLikesGiven: 82,
  minLikesGiven: 174,
  numLikesReceived: 156,
  minLikesReceived: 106,
  numLikesReceivedDays: 70,
  minLikesReceivedDays: 126,
  numLikesReceivedUsers: 224,
  minLikesReceivedUsers: 236,
  penaltyCounts: {
    silenced: 44,
    suspended: 238,
    total: 2,
  },
};
```

