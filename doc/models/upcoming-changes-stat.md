
# Upcoming Changes Stat

## Structure

`UpcomingChangesStat`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `humanizedName` | `string` | Required | - |
| `description` | `string` | Required | - |
| `enabled` | `boolean` | Required | - |
| `specificGroups` | `string[]` | Required | - |
| `reason` | [`Reason`](../../doc/models/reason.md) | Required | - |

## Example

```ts
import { Reason, UpcomingChangesStat } from 'discourse-api-documentationlib';

const upcomingChangesStat: UpcomingChangesStat = {
  name: 'name4',
  humanizedName: 'humanized_name8',
  description: 'description6',
  enabled: false,
  specificGroups: [
    'specific_groups1',
    'specific_groups0'
  ],
  reason: Reason.InSpecificGroups,
};
```

