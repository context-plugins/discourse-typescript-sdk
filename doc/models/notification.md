
# Notification

*This model accepts additional fields of type unknown.*

## Structure

`Notification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `userId` | `number \| undefined` | Optional | - |
| `notificationType` | `number \| undefined` | Optional | - |
| `read` | `boolean \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `postNumber` | `number \| null \| undefined` | Optional | - |
| `topicId` | `number \| null \| undefined` | Optional | - |
| `slug` | `string \| null \| undefined` | Optional | - |
| `data` | [`Data \| undefined`](../../doc/models/data.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Notification } from 'discourse-api-documentationlib';

const notification: Notification = {
  id: 88,
  userId: 184,
  notificationType: 108,
  read: false,
  createdAt: 'created_at0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

