
# Badge

## Structure

`Badge`

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
| `listable` | `boolean` | Required | - |
| `enabled` | `boolean` | Required | - |
| `badgeGroupingId` | `number` | Required | - |
| `system` | `boolean` | Required | - |
| `longDescription` | `string` | Required | - |
| `slug` | `string` | Required | - |
| `manuallyGrantable` | `boolean` | Required | - |
| `query` | `string \| null` | Required | - |
| `trigger` | `number \| null` | Required | - |
| `targetPosts` | `boolean` | Required | - |
| `autoRevoke` | `boolean` | Required | - |
| `showPosts` | `boolean` | Required | - |
| `i18NName` | `string \| null \| undefined` | Optional | - |
| `imageUploadId` | `number \| null` | Required | - |
| `badgeTypeId` | `number` | Required | - |
| `showInPostHeader` | `boolean` | Required | - |

## Example

```ts
import { Badge } from 'discourse';

const badge: Badge = {
  id: 184,
  name: 'name0',
  description: 'description0',
  grantCount: 198,
  allowTitle: false,
  multipleGrant: false,
  icon: 'icon2',
  imageUrl: 'image_url6',
  listable: false,
  enabled: false,
  badgeGroupingId: 192,
  system: false,
  longDescription: 'long_description2',
  slug: 'slug6',
  manuallyGrantable: false,
  query: 'query0',
  trigger: 42,
  targetPosts: false,
  autoRevoke: false,
  showPosts: false,
  imageUploadId: 56,
  badgeTypeId: 208,
  showInPostHeader: false,
  i18NName: 'i18n_name4',
};
```

