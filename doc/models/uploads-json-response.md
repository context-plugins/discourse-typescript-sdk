
# Uploads Json Response

## Structure

`UploadsJsonResponse`

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
import { UploadsJsonResponse } from 'discourse';

const uploadsJsonResponse: UploadsJsonResponse = {
  id: 146,
  url: 'url0',
  originalFilename: 'original_filename4',
  filesize: 188,
  width: 10,
  height: 138,
  thumbnailWidth: 132,
  thumbnailHeight: 220,
  extension: 'extension2',
  shortUrl: 'short_url6',
  shortPath: 'short_path8',
  retainHours: 'retain_hours2',
  humanFilesize: 'human_filesize0',
  dominantColor: 'dominant_color0',
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

