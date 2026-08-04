
# User Badges Json Response

## Structure

`UserBadgesJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `badges` | [`Badge3[] \| undefined`](../../doc/models/badge-3.md) | Optional | - |
| `badgeTypes` | [`BadgeType[] \| undefined`](../../doc/models/badge-type.md) | Optional | - |
| `grantedBies` | [`GrantedBy[] \| undefined`](../../doc/models/granted-by.md) | Optional | - |
| `userBadges` | [`UserBadge[]`](../../doc/models/user-badge.md) | Required | - |

## Example

```ts
import { UserBadgesJsonResponse } from 'discourse';

const userBadgesJsonResponse: UserBadgesJsonResponse = {
  userBadges: [
    {
      id: 222,
      grantedAt: 'granted_at8',
      groupingPosition: 130,
      isFavorite: 'is_favorite8',
      canFavorite: false,
      badgeId: 182,
      grantedById: 28,
    }
  ],
  badges: [
    {
      id: 68,
      name: 'name0',
      description: 'description0',
      grantCount: 82,
      allowTitle: false,
      multipleGrant: false,
      icon: 'icon8',
      imageUrl: 'image_url6',
      listable: false,
      enabled: false,
      badgeGroupingId: 52,
      system: false,
      slug: 'slug6',
      manuallyGrantable: false,
      badgeTypeId: 92,
    },
    {
      id: 68,
      name: 'name0',
      description: 'description0',
      grantCount: 82,
      allowTitle: false,
      multipleGrant: false,
      icon: 'icon8',
      imageUrl: 'image_url6',
      listable: false,
      enabled: false,
      badgeGroupingId: 52,
      system: false,
      slug: 'slug6',
      manuallyGrantable: false,
      badgeTypeId: 92,
    }
  ],
  badgeTypes: [
    {
      id: 206,
      name: 'name0',
      sortOrder: 172,
    },
    {
      id: 206,
      name: 'name0',
      sortOrder: 172,
    }
  ],
  grantedBies: [
    {
      id: 198,
      username: 'username6',
      name: 'name6',
      avatarTemplate: 'avatar_template6',
      flairName: 'flair_name0',
      admin: false,
      moderator: false,
      trustLevel: 182,
    },
    {
      id: 198,
      username: 'username6',
      name: 'name6',
      avatarTemplate: 'avatar_template6',
      flairName: 'flair_name0',
      admin: false,
      moderator: false,
      trustLevel: 182,
    }
  ],
};
```

