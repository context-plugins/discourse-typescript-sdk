
# Session Forgot Password Json Response

## Structure

`SessionForgotPasswordJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `string` | Required | - |
| `userFound` | `boolean` | Required | - |

## Example

```ts
import { SessionForgotPasswordJsonResponse } from 'discourse';

const sessionForgotPasswordJsonResponse: SessionForgotPasswordJsonResponse = {
  success: 'success4',
  userFound: false,
};
```

