
# Access Control

## Structure

`AccessControl`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mandatoryAcl` | `unknown` | Required | - |
| `bannedAcl` | `unknown` | Required | - |

## Example

```ts
import { AccessControl } from 'discourse-api-documentationlib';

const accessControl: AccessControl = {
  mandatoryAcl: { 'key1': 'val1', 'key2': 'val2' },
  bannedAcl: { 'key1': 'val1', 'key2': 'val2' },
};
```

