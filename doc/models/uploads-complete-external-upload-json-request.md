
# Uploads Complete External Upload Json Request

## Structure

`UploadsCompleteExternalUploadJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uniqueIdentifier` | `string` | Required | The unique identifier returned in the original /generate-presigned-put<br>request. |
| `forPrivateMessage` | `string \| undefined` | Optional | Optionally set this to true if the upload is for a<br>private message. |
| `forSiteSetting` | `string \| undefined` | Optional | Optionally set this to true if the upload is for a<br>site setting. |
| `pasted` | `string \| undefined` | Optional | Optionally set this to true if the upload was pasted<br>into the upload area. This will convert PNG files to JPEG. |

## Example

```ts
import {
  UploadsCompleteExternalUploadJsonRequest,
} from 'discourse-api-documentationlib';

const uploadsCompleteExternalUploadJsonRequest: UploadsCompleteExternalUploadJsonRequest = {
  uniqueIdentifier: '66e86218-80d9-4bda-b4d5-2b6def968705',
  forPrivateMessage: 'true',
  forSiteSetting: 'true',
  pasted: 'true',
};
```

