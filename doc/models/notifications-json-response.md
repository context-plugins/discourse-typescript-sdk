
# Notifications Json Response

*This model accepts additional fields of type unknown.*

## Structure

`NotificationsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `notifications` | [`Notification[] \| undefined`](../../doc/models/notification.md) | Optional | - |
| `totalRowsNotifications` | `number \| undefined` | Optional | - |
| `seenNotificationId` | `number \| undefined` | Optional | - |
| `loadMoreNotifications` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NotificationsJsonResponse } from 'discourse';

const notificationsJsonResponse: NotificationsJsonResponse = {
  notifications: [
    {
      id: 86,
      userId: 182,
      notificationType: 106,
      read: false,
      createdAt: 'created_at0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  totalRowsNotifications: 210,
  seenNotificationId: 238,
  loadMoreNotifications: 'load_more_notifications6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

