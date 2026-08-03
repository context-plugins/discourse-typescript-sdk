
# T Invite Group Json Request

*This model accepts additional fields of type unknown.*

## Structure

`TInviteGroupJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `group` | `string \| undefined` | Optional | The name of the group to invite |
| `shouldNotify` | `boolean \| undefined` | Optional | Whether to notify the group, it defaults to true |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TInviteGroupJsonRequest } from 'discourse-api-documentationlib';

const tInviteGroupJsonRequest: TInviteGroupJsonRequest = {
  group: 'group6',
  shouldNotify: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

