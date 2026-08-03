
# U Json Request

## Structure

`UJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `externalIds` | `unknown \| undefined` | Optional | - |

## Example

```ts
import { UJsonRequest } from 'discourse-api-documentationlib';

const uJsonRequest: UJsonRequest = {
  name: 'name8',
  externalIds: { 'key1': 'val1', 'key2': 'val2' },
};
```

