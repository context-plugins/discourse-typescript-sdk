
# Admin Users Silence Json Response

## Structure

`AdminUsersSilenceJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `silence` | [`Silence`](../../doc/models/silence.md) | Required | - |

## Example

```ts
import {
  AdminUsersSilenceJsonResponse,
} from 'discourse-api-documentationlib';

const adminUsersSilenceJsonResponse: AdminUsersSilenceJsonResponse = {
  silence: {
    silenced: false,
    silenceReason: 'silence_reason2',
    fullSilenceReason: 'full_silence_reason0',
    silencedTill: 'silenced_till2',
    silencedAt: 'silenced_at0',
    silencedBy: {
      id: 46,
      username: 'username6',
      name: 'name4',
      avatarTemplate: 'avatar_template6',
    },
  },
};
```

