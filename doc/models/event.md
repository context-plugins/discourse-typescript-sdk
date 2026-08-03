
# Event

## Structure

`Event`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `categoryId` | `number \| null` | Required | - |
| `name` | `string \| null \| undefined` | Optional | - |
| `recurrence` | `string \| null \| undefined` | Optional | - |
| `recurrenceUntil` | `string \| null \| undefined` | Optional | - |
| `startsAt` | `string \| null` | Required | - |
| `endsAt` | `string \| null` | Required | - |
| `rrule` | `string \| undefined` | Optional | - |
| `showLocalTime` | `boolean` | Required | - |
| `timezone` | `string \| null` | Required | - |
| `duration` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^\d{2}:\d{2}:\d{2}$` |
| `allDay` | `boolean \| undefined` | Optional | - |
| `customFields` | `unknown \| null \| undefined` | Optional | - |
| `post` | [`Post`](../../doc/models/post.md) | Required | - |
| `occurrences` | [`Occurrence[]`](../../doc/models/occurrence.md) | Required | - |
| `canActOnDiscoursePostEvent` | `boolean \| null` | Required | - |
| `canUpdateAttendance` | `boolean \| null` | Required | - |
| `creator` | [`Creator \| undefined`](../../doc/models/creator.md) | Optional | - |
| `isClosed` | `boolean` | Required | - |
| `isExpired` | `boolean` | Required | - |
| `isOngoing` | `boolean` | Required | - |
| `isPrivate` | `boolean` | Required | - |
| `isPublic` | `boolean` | Required | - |
| `isStandalone` | `boolean` | Required | - |
| `minimal` | `boolean \| null \| undefined` | Optional | - |
| `rawInvitees` | `string[] \| null \| undefined` | Optional | - |
| `reminders` | [`Reminder[] \| undefined`](../../doc/models/reminder.md) | Optional | - |
| `sampleInvitees` | `unknown[] \| undefined` | Optional | - |
| `shouldDisplayInvitees` | `boolean` | Required | - |
| `stats` | `unknown \| undefined` | Optional | - |
| `status` | [`Status`](../../doc/models/status.md) | Required | - |
| `url` | `string \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `descriptionHtml` | `string \| null \| undefined` | Optional | - |
| `location` | `string \| null \| undefined` | Optional | - |
| `watchingInvitee` | `unknown \| null \| undefined` | Optional | - |
| `chatEnabled` | `boolean \| null \| undefined` | Optional | - |
| `channel` | `unknown \| undefined` | Optional | - |
| `livestream` | `boolean \| undefined` | Optional | - |
| `livestreamOnebox` | `string \| null \| undefined` | Optional | - |
| `isZoomLivestream` | `boolean \| undefined` | Optional | - |
| `maxAttendees` | `number \| null \| undefined` | Optional | - |
| `atCapacity` | `boolean` | Required | - |
| `imageUpload` | `unknown \| null \| undefined` | Optional | - |

## Example

```ts
import { Event, Status } from 'discourse-api-documentationlib';

const event: Event = {
  id: 242,
  categoryId: 20,
  startsAt: '2016-03-13T12:52:32.123Z',
  endsAt: '2016-03-13T12:52:32.123Z',
  showLocalTime: false,
  timezone: 'timezone0',
  post: {
    id: 236,
    postNumber: 132,
    url: 'url4',
    categorySlug: 'category_slug4',
    topic: {
      id: 54,
      title: 'title4',
      tags: [
        'tags3'
      ],
      tagsDescriptions: { 'key1': 'val1', 'key2': 'val2' },
      slug: 'slug2',
    },
  },
  occurrences: [
    {
      startsAt: 'starts_at4',
      endsAt: 'ends_at0',
    }
  ],
  canActOnDiscoursePostEvent: false,
  canUpdateAttendance: false,
  isClosed: false,
  isExpired: false,
  isOngoing: false,
  isPrivate: false,
  isPublic: false,
  isStandalone: false,
  shouldDisplayInvitees: false,
  status: Status.Standalone,
  atCapacity: false,
  name: 'name0',
  recurrence: 'recurrence6',
  recurrenceUntil: '2016-03-13T12:52:32.123Z',
  rrule: 'rrule0',
  duration: 'duration6',
};
```

