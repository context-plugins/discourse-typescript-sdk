
# User Tips

## Structure

`UserTips`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstNotification` | `number` | Required | - |
| `topicTimeline` | `number` | Required | - |
| `postMenu` | `number` | Required | - |
| `topicNotificationLevels` | `number` | Required | - |
| `suggestedTopics` | `number` | Required | - |

## Example

```ts
import { UserTips } from 'discourse-api-documentationlib';

const userTips: UserTips = {
  firstNotification: 192,
  topicTimeline: 48,
  postMenu: 222,
  topicNotificationLevels: 0,
  suggestedTopics: 56,
};
```

