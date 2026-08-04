
# Topic Flag Type

## Structure

`TopicFlagType`

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
import { TopicFlagType } from 'discourse';

const topicFlagType: TopicFlagType = {
  id: 196,
  nameKey: 'name_key6',
  name: 'name2',
  description: 'description2',
  shortDescription: 'short_description8',
  isFlag: false,
  requireMessage: false,
  enabled: false,
  appliesTo: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  isUsed: false,
  autoActionType: false,
  position: 226,
  system: false,
};
```

