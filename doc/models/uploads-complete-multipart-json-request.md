
# Uploads Complete Multipart Json Request

## Structure

`UploadsCompleteMultipartJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uniqueIdentifier` | `string` | Required | The unique identifier returned in the original /create-multipart<br>request. |
| `parts` | `unknown[]` | Required | All of the part numbers and their corresponding ETags<br>that have been uploaded must be provided. |

## Example

```ts
import {
  UploadsCompleteMultipartJsonRequest,
} from 'discourse-api-documentationlib';

const uploadsCompleteMultipartJsonRequest: UploadsCompleteMultipartJsonRequest = {
  uniqueIdentifier: '66e86218-80d9-4bda-b4d5-2b6def968705',
  parts: [
    { 'part_number': 1, 'etag': '0c376dcfcc2606f4335bbc732de93344' },
    { 'part_number': 2, 'etag': '09ert8cfcc2606f4335bbc732de91122' }
  ],
};
```

