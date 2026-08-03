
# Badge 1

## Structure

`Badge1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `name` | `string` | Required | - |
| `description` | `string` | Required | - |
| `grantCount` | `number` | Required | - |
| `allowTitle` | `boolean` | Required | - |
| `multipleGrant` | `boolean` | Required | - |
| `icon` | `string` | Required | - |
| `imageUrl` | `string \| null` | Required | - |
| `imageUploadId` | `number \| null` | Required | - |
| `listable` | `boolean` | Required | - |
| `enabled` | `boolean` | Required | - |
| `badgeGroupingId` | `number` | Required | - |
| `system` | `boolean` | Required | - |
| `longDescription` | `string` | Required | - |
| `slug` | `string` | Required | - |
| `manuallyGrantable` | `boolean` | Required | - |
| `query` | `string \| null` | Required | - |
| `trigger` | `string \| null` | Required | - |
| `targetPosts` | `boolean` | Required | - |
| `autoRevoke` | `boolean` | Required | - |
| `showPosts` | `boolean` | Required | - |
| `badgeTypeId` | `number` | Required | - |
| `showInPostHeader` | `boolean` | Required | - |

## Example

```ts
import { Badge1 } from 'discourse-api-documentationlib';

const badge1: Badge1 = {
  id: 184,
  name: 'name8',
  description: 'description8',
  grantCount: 198,
  allowTitle: false,
  multipleGrant: false,
  icon: 'icon0',
  imageUrl: 'image_url4',
  imageUploadId: 200,
  listable: false,
  enabled: false,
  badgeGroupingId: 64,
  system: false,
  longDescription: 'long_description0',
  slug: 'slug2',
  manuallyGrantable: false,
  query: 'query8',
  trigger: 'trigger0',
  targetPosts: false,
  autoRevoke: false,
  showPosts: false,
  badgeTypeId: 208,
  showInPostHeader: false,
};
```

