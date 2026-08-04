
# User Badge

## Structure

`UserBadge`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `grantedAt` | `string` | Required | - |
| `groupingPosition` | `number` | Required | - |
| `isFavorite` | `string \| null` | Required | - |
| `canFavorite` | `boolean` | Required | - |
| `badgeId` | `number` | Required | - |
| `grantedById` | `number` | Required | - |

## Example

```ts
import { UserBadge } from 'discourse';

const userBadge: UserBadge = {
  id: 182,
  grantedAt: 'granted_at8',
  groupingPosition: 90,
  isFavorite: 'is_favorite8',
  canFavorite: false,
  badgeId: 142,
  grantedById: 244,
};
```

