
# Participant 1

## Structure

`Participant1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `username` | `string` | Required | - |
| `name` | `string` | Required | - |
| `avatarTemplate` | `string` | Required | - |
| `postCount` | `number` | Required | - |
| `primaryGroupName` | `string \| null` | Required | - |
| `flairName` | `string \| null` | Required | - |
| `flairUrl` | `string \| null` | Required | - |
| `flairColor` | `string \| null` | Required | - |
| `flairBgColor` | `string \| null` | Required | - |
| `flairGroupId` | `number \| null \| undefined` | Optional | - |
| `admin` | `boolean` | Required | - |
| `moderator` | `boolean` | Required | - |
| `trustLevel` | `number` | Required | - |

## Example

```ts
import { Participant1 } from 'discourse';

const participant1: Participant1 = {
  id: 70,
  username: 'username8',
  name: 'name8',
  avatarTemplate: 'avatar_template2',
  postCount: 42,
  primaryGroupName: 'primary_group_name6',
  flairName: 'flair_name8',
  flairUrl: 'flair_url8',
  flairColor: 'flair_color2',
  flairBgColor: 'flair_bg_color2',
  admin: false,
  moderator: false,
  trustLevel: 54,
  flairGroupId: 120,
};
```

