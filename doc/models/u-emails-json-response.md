
# U Emails Json Response

## Structure

`UEmailsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | - |
| `secondaryEmails` | `unknown[]` | Required | - |
| `unconfirmedEmails` | `unknown[]` | Required | - |
| `associatedAccounts` | `unknown[]` | Required | - |

## Example

```ts
import { UEmailsJsonResponse } from 'discourse-api-documentationlib';

const uEmailsJsonResponse: UEmailsJsonResponse = {
  email: 'email0',
  secondaryEmails: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  unconfirmedEmails: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  associatedAccounts: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
};
```

