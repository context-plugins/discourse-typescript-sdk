
# Posts Json Request

## Structure

`PostsJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string \| undefined` | Optional | Required if creating a new topic or new private message. |
| `raw` | `string` | Required | - |
| `topicId` | `number \| undefined` | Optional | Required if creating a new post. |
| `category` | `number \| undefined` | Optional | Optional if creating a new topic, and ignored if creating<br>a new post. |
| `targetRecipients` | `string \| undefined` | Optional | Required for private message, comma separated. |
| `targetUsernames` | `string \| undefined` | Optional | Deprecated. Use target_recipients instead. |
| `archetype` | `string \| undefined` | Optional | Required for new private message. |
| `createdAt` | `string \| undefined` | Optional | - |
| `replyToPostNumber` | `number \| undefined` | Optional | Optional, the post number to reply to inside a topic. |
| `embedUrl` | `string \| undefined` | Optional | Provide a URL from a remote system to associate a forum<br>topic with that URL, typically for using Discourse as a comments<br>system for an external blog. |
| `externalId` | `string \| undefined` | Optional | Provide an external_id from a remote system to associate<br>a forum topic with that id. |
| `autoTrack` | `boolean \| undefined` | Optional | If false, the user will not track the topic. By default,<br>the user will track the topic. |

## Example

```ts
import { PostsJsonRequest } from 'discourse-api-documentationlib';

const postsJsonRequest: PostsJsonRequest = {
  raw: 'raw2',
  title: 'title0',
  topicId: 230,
  category: 112,
  targetRecipients: 'blake,sam',
  targetUsernames: 'target_usernames8',
  archetype: 'private_message',
};
```

