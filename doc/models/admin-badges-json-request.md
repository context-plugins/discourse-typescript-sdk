
# Admin Badges Json Request

## Structure

`AdminBadgesJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name for the new badge. |
| `badgeTypeId` | `number` | Required | The ID for the badge type. 1 for Gold, 2 for Silver,<br>3 for Bronze. |

## Example

```ts
import { AdminBadgesJsonRequest } from 'discourse';

const adminBadgesJsonRequest: AdminBadgesJsonRequest = {
  name: 'name8',
  badgeTypeId: 98,
};
```

