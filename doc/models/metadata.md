
# Metadata

## Structure

`Metadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sha1Checksum` | `string \| undefined` | Optional | The SHA1 checksum of the upload binary blob. Optionally<br>be provided and serves as an additional security check when<br>later processing the file in complete-external-upload endpoint. |

## Example

```ts
import { Metadata } from 'discourse-api-documentationlib';

const metadata: Metadata = {
  sha1Checksum: 'sha1-checksum2',
};
```

