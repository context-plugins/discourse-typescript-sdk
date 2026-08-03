
# Admin Badges Json Response

## Structure

`AdminBadgesJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `badges` | [`Badge[]`](../../doc/models/badge.md) | Required | - |
| `badgeTypes` | [`BadgeType[]`](../../doc/models/badge-type.md) | Required | - |
| `badgeGroupings` | [`BadgeGrouping[]`](../../doc/models/badge-grouping.md) | Required | - |
| `adminBadges` | [`AdminBadges`](../../doc/models/admin-badges.md) | Required | - |

## Example

```ts
import { AdminBadgesJsonResponse } from 'discourse-api-documentationlib';

const adminBadgesJsonResponse: AdminBadgesJsonResponse = {
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
      longDescription: 'long_description2',
      slug: 'slug6',
      manuallyGrantable: false,
      query: 'query0',
      trigger: 158,
      targetPosts: false,
      autoRevoke: false,
      showPosts: false,
      imageUploadId: 172,
      badgeTypeId: 92,
      showInPostHeader: false,
      i18NName: 'i18n_name4',
    }
  ],
  badgeTypes: [
    {
      id: 206,
      name: 'name0',
      sortOrder: 172,
    }
  ],
  badgeGroupings: [
    {
      id: 40,
      name: 'name8',
      description: 'description8',
      position: 70,
      system: false,
    }
  ],
  adminBadges: {
    protectedSystemFields: [
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    triggers: {
      userChange: 26,
      none: 198,
      postRevision: 74,
      trustLevelChange: 164,
      postAction: 132,
    },
    badgeIds: [
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    badgeGroupingIds: [
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    badgeTypeIds: [
      { 'key1': 'val1', 'key2': 'val2' }
    ],
  },
};
```

