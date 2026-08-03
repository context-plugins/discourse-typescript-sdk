
# Admin Badges Json Request 1

## Structure

`AdminBadgesJsonRequest1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name for the new badge. |
| `badgeTypeId` | `number` | Required | The ID for the badge type. 1 for Gold, 2 for Silver,<br>3 for Bronze. |

## Example

```ts
import { AdminBadgesJsonRequest1 } from 'discourse-api-documentationlib';

const adminBadgesJsonRequest1: AdminBadgesJsonRequest1 = {
  name: 'name2',
  badgeTypeId: 138,
};
```

