
# Tag Groups Json Request 1

*This model accepts additional fields of type unknown.*

## Structure

`TagGroupsJsonRequest1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TagGroupsJsonRequest1 } from 'discourse';

const tagGroupsJsonRequest1: TagGroupsJsonRequest1 = {
  name: 'name4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

