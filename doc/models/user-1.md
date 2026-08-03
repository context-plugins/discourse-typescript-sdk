
# User 1

*This model accepts additional fields of type unknown.*

## Structure

`User1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `username` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `avatarTemplate` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { User1 } from 'discourse-api-documentationlib';

const user1: User1 = {
  id: 40,
  username: 'username2',
  name: 'name8',
  avatarTemplate: 'avatar_template2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

