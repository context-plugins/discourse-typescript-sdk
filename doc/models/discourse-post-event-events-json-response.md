
# Discourse Post Event Events Json Response

## Structure

`DiscoursePostEventEventsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `events` | [`Event[]`](../../doc/models/event.md) | Required | - |

## Example

```ts
import {
  DiscoursePostEventEventsJsonResponse,
  Status,
} from 'discourse-api-documentationlib';

const discoursePostEventEventsJsonResponse: DiscoursePostEventEventsJsonResponse = {
  events: [
    {
      id: 68,
      categoryId: 194,
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
      status: Status.Private,
      atCapacity: false,
      name: 'name0',
      recurrence: 'recurrence6',
      recurrenceUntil: '2016-03-13T12:52:32.123Z',
      rrule: 'rrule0',
      duration: 'duration6',
    }
  ],
};
```

