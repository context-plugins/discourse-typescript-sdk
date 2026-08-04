
# Data

*This model accepts additional fields of type unknown.*

## Structure

`Data`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `badgeId` | `number \| undefined` | Optional | - |
| `badgeName` | `string \| undefined` | Optional | - |
| `badgeSlug` | `string \| undefined` | Optional | - |
| `badgeTitle` | `boolean \| undefined` | Optional | - |
| `username` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Data } from 'discourse';

const data: Data = {
  badgeId: 98,
  badgeName: 'badge_name8',
  badgeSlug: 'badge_slug4',
  badgeTitle: false,
  username: 'username0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

