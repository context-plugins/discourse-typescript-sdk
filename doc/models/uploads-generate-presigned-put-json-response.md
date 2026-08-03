
# Uploads Generate Presigned Put Json Response

## Structure

`UploadsGeneratePresignedPutJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string \| undefined` | Optional | The path of the temporary file on the external storage<br>service. |
| `url` | `string \| undefined` | Optional | A presigned PUT URL which must be used to upload<br>the file binary blob to. |
| `signedHeaders` | `unknown \| undefined` | Optional | A map of headers that must be sent with the PUT request. |
| `uniqueIdentifier` | `string \| undefined` | Optional | A unique string that identifies the external upload.<br>This must be stored and then sent in the /complete-external-upload<br>endpoint to complete the direct upload. |

## Example

```ts
import {
  UploadsGeneratePresignedPutJsonResponse,
} from 'discourse-api-documentationlib';

const uploadsGeneratePresignedPutJsonResponse: UploadsGeneratePresignedPutJsonResponse = {
  key: 'temp/site/uploads/default/12345/67890.jpg',
  url: 'https://file-uploads.s3.us-west-2.amazonaws.com/temp/site/uploads/default/123/456.jpg?x-amz-acl=private&x-amz-meta-sha1-checksum=sha1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AAAAus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211221T011246Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=12345678',
  signedHeaders: { 'x-amz-acl': 'private', 'x-amz-meta-sha1-checksum': 'sha1' },
  uniqueIdentifier: '66e86218-80d9-4bda-b4d5-2b6def968705',
};
```

