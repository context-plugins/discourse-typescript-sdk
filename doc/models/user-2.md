
# User 2

*This model accepts additional fields of type unknown.*

## Structure

`User2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `username` | `string \| undefined` | Optional | - |
| `name` | `string \| null \| undefined` | Optional | - |
| `avatarTemplate` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { User2 } from 'discourse';

const user2: User2 = {
  id: 108,
  username: 'username8',
  name: 'name8',
  avatarTemplate: 'avatar_template2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

