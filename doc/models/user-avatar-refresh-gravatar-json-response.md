
# User Avatar Refresh Gravatar Json Response

## Structure

`UserAvatarRefreshGravatarJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `gravatarUploadId` | `number \| null` | Required | - |
| `gravatarAvatarTemplate` | `string \| null` | Required | - |

## Example

```ts
import { UserAvatarRefreshGravatarJsonResponse } from 'discourse';

const userAvatarRefreshGravatarJsonResponse: UserAvatarRefreshGravatarJsonResponse = {
  gravatarUploadId: 194,
  gravatarAvatarTemplate: 'gravatar_avatar_template8',
};
```

