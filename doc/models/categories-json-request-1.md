
# Categories Json Request 1

## Structure

`CategoriesJsonRequest1`

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
import { CategoriesJsonRequest1 } from 'discourse';

const categoriesJsonRequest1: CategoriesJsonRequest1 = {
  name: 'name2',
  color: '49d9e9',
  textColor: 'f0fcfd',
  styleType: 'style_type4',
  emoji: 'emoji4',
  icon: 'icon4',
};
```

