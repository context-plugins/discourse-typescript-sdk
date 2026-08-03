
# Post Action Type

## Structure

`PostActionType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| null` | Required | - |
| `nameKey` | `string \| null` | Required | - |
| `name` | `string` | Required | - |
| `description` | `string` | Required | - |
| `shortDescription` | `string` | Required | - |
| `isFlag` | `boolean` | Required | - |
| `requireMessage` | `boolean` | Required | - |
| `enabled` | `boolean` | Required | - |
| `appliesTo` | `unknown[]` | Required | - |
| `isUsed` | `boolean` | Required | - |
| `position` | `number \| undefined` | Optional | - |
| `autoActionType` | `boolean` | Required | - |
| `system` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { PostActionType } from 'discourse-api-documentationlib';

const postActionType: PostActionType = {
  id: 228,
  nameKey: 'name_key8',
  name: 'name4',
  description: 'description4',
  shortDescription: 'short_description0',
  isFlag: false,
  requireMessage: false,
  enabled: false,
  appliesTo: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  isUsed: false,
  autoActionType: false,
  position: 2,
  system: false,
};
```

