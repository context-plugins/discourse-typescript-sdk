
# Silence

## Structure

`Silence`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `silenced` | `boolean` | Required | - |
| `silenceReason` | `string` | Required | - |
| `fullSilenceReason` | `string` | Required | - |
| `silencedTill` | `string` | Required | - |
| `silencedAt` | `string` | Required | - |
| `silencedBy` | [`SilencedBy`](../../doc/models/silenced-by.md) | Required | - |

## Example

```ts
import { Silence } from 'discourse-api-documentationlib';

const silence: Silence = {
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
};
```

