
# Users Json Response

## Structure

`UsersJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `boolean` | Required | - |
| `active` | `boolean` | Required | - |
| `message` | `string` | Required | - |
| `userId` | `number \| undefined` | Optional | - |

## Example

```ts
import { UsersJsonResponse } from 'discourse-api-documentationlib';

const usersJsonResponse: UsersJsonResponse = {
  success: false,
  active: false,
  message: 'message0',
  userId: 130,
};
```

