
# Uploads Complete External Upload Json Response

## Structure

`UploadsCompleteExternalUploadJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `url` | `string` | Required | - |
| `originalFilename` | `string` | Required | - |
| `filesize` | `number` | Required | - |
| `width` | `number` | Required | - |
| `height` | `number` | Required | - |
| `thumbnailWidth` | `number` | Required | - |
| `thumbnailHeight` | `number` | Required | - |
| `extension` | `string` | Required | - |
| `shortUrl` | `string` | Required | - |
| `shortPath` | `string` | Required | - |
| `retainHours` | `string \| null` | Required | - |
| `humanFilesize` | `string` | Required | - |
| `dominantColor` | `string \| null \| undefined` | Optional | - |
| `thumbnail` | [`Thumbnail \| null \| undefined`](../../doc/models/thumbnail.md) | Optional | - |
| `optimizedVideo` | [`OptimizedVideo \| null \| undefined`](../../doc/models/optimized-video.md) | Optional | - |

## Example

```ts
import { UploadsCompleteExternalUploadJsonResponse } from 'discourse';

const uploadsCompleteExternalUploadJsonResponse: UploadsCompleteExternalUploadJsonResponse = {
  id: 54,
  url: 'url6',
  originalFilename: 'original_filename0',
  filesize: 24,
  width: 102,
  height: 46,
  thumbnailWidth: 40,
  thumbnailHeight: 128,
  extension: 'extension8',
  shortUrl: 'short_url0',
  shortPath: 'short_path2',
  retainHours: 'retain_hours8',
  humanFilesize: 'human_filesize6',
  dominantColor: 'dominant_color6',
  thumbnail: {
    id: 154,
    uploadId: 144,
    url: 'url0',
    extension: 'extension2',
    width: 2,
  },
  optimizedVideo: {
    id: 182,
    uploadId: 116,
    url: 'url4',
    extension: 'extension6',
    filesize: 152,
  },
};
```

