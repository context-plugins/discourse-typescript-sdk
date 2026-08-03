
# T Notifications Json Request

*This model accepts additional fields of type unknown.*

## Structure

`TNotificationsJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `notificationLevel` | [`NotificationLevel`](../../doc/models/notification-level.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  NotificationLevel,
  TNotificationsJsonRequest,
} from 'discourse-api-documentationlib';

const tNotificationsJsonRequest: TNotificationsJsonRequest = {
  notificationLevel: NotificationLevel.Enum2,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

