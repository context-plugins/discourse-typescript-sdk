
# Categories Json Request

## Structure

`CategoriesJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `color` | `string \| undefined` | Optional | - |
| `textColor` | `string \| undefined` | Optional | - |
| `styleType` | `string \| undefined` | Optional | - |
| `emoji` | `string \| undefined` | Optional | - |
| `icon` | `string \| undefined` | Optional | - |
| `parentCategoryId` | `number \| undefined` | Optional | - |
| `allowBadges` | `boolean \| undefined` | Optional | - |
| `slug` | `string \| undefined` | Optional | - |
| `topicFeaturedLinksAllowed` | `boolean \| undefined` | Optional | - |
| `permissions` | [`Permissions \| undefined`](../../doc/models/permissions.md) | Optional | - |
| `searchPriority` | `number \| undefined` | Optional | - |
| `formTemplateIds` | `unknown[] \| undefined` | Optional | - |
| `categoryLocalizations` | [`CategoryLocalization[] \| undefined`](../../doc/models/category-localization.md) | Optional | - |

## Example

```ts
import { CategoriesJsonRequest } from 'discourse-api-documentationlib';

const categoriesJsonRequest: CategoriesJsonRequest = {
  name: 'name6',
  color: '49d9e9',
  textColor: 'f0fcfd',
  styleType: 'style_type8',
  emoji: 'emoji8',
  icon: 'icon8',
};
```

