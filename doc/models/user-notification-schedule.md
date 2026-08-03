
# User Notification Schedule

## Structure

`UserNotificationSchedule`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean` | Required | - |
| `day0StartTime` | `number` | Required | - |
| `day0EndTime` | `number` | Required | - |
| `day1StartTime` | `number` | Required | - |
| `day1EndTime` | `number` | Required | - |
| `day2StartTime` | `number` | Required | - |
| `day2EndTime` | `number` | Required | - |
| `day3StartTime` | `number` | Required | - |
| `day3EndTime` | `number` | Required | - |
| `day4StartTime` | `number` | Required | - |
| `day4EndTime` | `number` | Required | - |
| `day5StartTime` | `number` | Required | - |
| `day5EndTime` | `number` | Required | - |
| `day6StartTime` | `number` | Required | - |
| `day6EndTime` | `number` | Required | - |

## Example

```ts
import { UserNotificationSchedule } from 'discourse-api-documentationlib';

const userNotificationSchedule: UserNotificationSchedule = {
  enabled: false,
  day0StartTime: 254,
  day0EndTime: 38,
  day1StartTime: 114,
  day1EndTime: 230,
  day2StartTime: 128,
  day2EndTime: 196,
  day3StartTime: 144,
  day3EndTime: 94,
  day4StartTime: 170,
  day4EndTime: 28,
  day5StartTime: 32,
  day5EndTime: 80,
  day6StartTime: 138,
  day6EndTime: 192,
};
```

