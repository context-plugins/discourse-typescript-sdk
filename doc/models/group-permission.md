
# Group Permission

## Structure

`GroupPermission`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `permissionType` | `number` | Required | - |
| `groupName` | `string` | Required | - |
| `groupId` | `number` | Required | - |

## Example

```ts
import { GroupPermission } from 'discourse-api-documentationlib';

const groupPermission: GroupPermission = {
  permissionType: 202,
  groupName: 'group_name8',
  groupId: 174,
};
```

