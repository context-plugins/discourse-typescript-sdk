
# Admin Badges

## Structure

`AdminBadges`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `protectedSystemFields` | `unknown[]` | Required | - |
| `triggers` | [`Triggers`](../../doc/models/triggers.md) | Required | - |
| `badgeIds` | `unknown[]` | Required | - |
| `badgeGroupingIds` | `unknown[]` | Required | - |
| `badgeTypeIds` | `unknown[]` | Required | - |

## Example

```ts
import { AdminBadges } from 'discourse';

const adminBadges: AdminBadges = {
  protectedSystemFields: [
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
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  badgeGroupingIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  badgeTypeIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
};
```

