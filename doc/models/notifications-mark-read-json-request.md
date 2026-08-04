
# Notifications Mark Read Json Request

*This model accepts additional fields of type unknown.*

## Structure

`NotificationsMarkReadJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | (optional) Leave off to mark all notifications as<br>read |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NotificationsMarkReadJsonRequest } from 'discourse';

const notificationsMarkReadJsonRequest: NotificationsMarkReadJsonRequest = {
  id: 62,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

