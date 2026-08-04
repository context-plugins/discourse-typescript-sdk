
# Notifications Mark Read Json Response

*This model accepts additional fields of type unknown.*

## Structure

`NotificationsMarkReadJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NotificationsMarkReadJsonResponse } from 'discourse';

const notificationsMarkReadJsonResponse: NotificationsMarkReadJsonResponse = {
  success: 'success8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

