
# Badge 3

## Structure

`Badge3`

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
| `slug` | `string` | Required | - |
| `manuallyGrantable` | `boolean` | Required | - |
| `badgeTypeId` | `number` | Required | - |

## Example

```ts
import { Badge3 } from 'discourse-api-documentationlib';

const badge3: Badge3 = {
  id: 26,
  name: 'name0',
  description: 'description0',
  grantCount: 40,
  allowTitle: false,
  multipleGrant: false,
  icon: 'icon2',
  imageUrl: 'image_url6',
  listable: false,
  enabled: false,
  badgeGroupingId: 94,
  system: false,
  slug: 'slug6',
  manuallyGrantable: false,
  badgeTypeId: 50,
};
```

