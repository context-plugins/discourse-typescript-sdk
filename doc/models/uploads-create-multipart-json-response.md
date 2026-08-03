
# Uploads Create Multipart Json Response

## Structure

`UploadsCreateMultipartJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Required | The path of the temporary file on the external storage<br>service. |
| `externalUploadIdentifier` | `string` | Required | The identifier of the multipart upload in the external<br>storage provider. This is the multipart upload_id in AWS S3. |
| `uniqueIdentifier` | `string` | Required | A unique string that identifies the external upload.<br>This must be stored and then sent in the /complete-multipart<br>and /batch-presign-multipart-parts endpoints. |

## Example

```ts
import {
  UploadsCreateMultipartJsonResponse,
} from 'discourse-api-documentationlib';

const uploadsCreateMultipartJsonResponse: UploadsCreateMultipartJsonResponse = {
  key: 'temp/site/uploads/default/12345/67890.jpg',
  externalUploadIdentifier: '84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ',
  uniqueIdentifier: '66e86218-80d9-4bda-b4d5-2b6def968705',
};
```

