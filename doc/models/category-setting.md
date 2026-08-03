
# Category Setting

## Structure

`CategorySetting`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `autoBumpCooldownDays` | `number \| undefined` | Optional | - |
| `numAutoBumpDaily` | `number \| null \| undefined` | Optional | - |
| `requireReplyApproval` | `boolean \| null \| undefined` | Optional | - |
| `requireTopicApproval` | `boolean \| null \| undefined` | Optional | - |
| `nestedRepliesDefault` | `boolean \| null \| undefined` | Optional | - |
| `topicPostingReviewMode` | `string \| undefined` | Optional | - |
| `replyPostingReviewMode` | `string \| undefined` | Optional | - |

## Example

```ts
import { CategorySetting } from 'discourse-api-documentationlib';

const categorySetting: CategorySetting = {
  autoBumpCooldownDays: 102,
  numAutoBumpDaily: 6,
  requireReplyApproval: false,
  requireTopicApproval: false,
  nestedRepliesDefault: false,
};
```

