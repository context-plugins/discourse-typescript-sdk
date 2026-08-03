
# Admin Badges Json Response 2

## Structure

`AdminBadgesJsonResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `badgeTypes` | [`BadgeType[]`](../../doc/models/badge-type.md) | Required | - |
| `badge` | [`Badge1`](../../doc/models/badge-1.md) | Required | - |

## Example

```ts
import { AdminBadgesJsonResponse2 } from 'discourse-api-documentationlib';

const adminBadgesJsonResponse2: AdminBadgesJsonResponse2 = {
  badgeTypes: [
    {
      id: 206,
      name: 'name0',
      sortOrder: 172,
    }
  ],
  badge: {
    id: 184,
    name: 'name0',
    description: 'description0',
    grantCount: 198,
    allowTitle: false,
    multipleGrant: false,
    icon: 'icon2',
    imageUrl: 'image_url6',
    imageUploadId: 56,
    listable: false,
    enabled: false,
    badgeGroupingId: 192,
    system: false,
    longDescription: 'long_description2',
    slug: 'slug6',
    manuallyGrantable: false,
    query: 'query0',
    trigger: 'trigger8',
    targetPosts: false,
    autoRevoke: false,
    showPosts: false,
    badgeTypeId: 208,
    showInPostHeader: false,
  },
};
```

