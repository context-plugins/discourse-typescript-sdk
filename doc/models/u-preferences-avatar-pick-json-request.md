
# U Preferences Avatar Pick Json Request

## Structure

`UPreferencesAvatarPickJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uploadId` | `number` | Required | - |
| `type` | [`Type1`](../../doc/models/type-1.md) | Required | - |

## Example

```ts
import { Type1, UPreferencesAvatarPickJsonRequest } from 'discourse';

const uPreferencesAvatarPickJsonRequest: UPreferencesAvatarPickJsonRequest = {
  uploadId: 94,
  type: Type1.Gravatar,
};
```

