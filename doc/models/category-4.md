
# Category 4

## Structure

`Category4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `name` | `string` | Required | - |
| `color` | `string` | Required | - |
| `textColor` | `string` | Required | - |
| `styleType` | `string \| undefined` | Optional | - |
| `emoji` | `string \| null \| undefined` | Optional | - |
| `icon` | `string \| null \| undefined` | Optional | - |
| `slug` | `string` | Required | - |
| `topicCount` | `number` | Required | - |
| `postCount` | `number` | Required | - |
| `position` | `number` | Required | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `descriptionText` | `string \| null \| undefined` | Optional | - |
| `descriptionExcerpt` | `string \| null \| undefined` | Optional | - |
| `topicUrl` | `string` | Required | - |
| `readRestricted` | `boolean` | Required | - |
| `permission` | `number \| null` | Required | - |
| `notificationLevel` | `number` | Required | - |
| `topicTemplate` | `string \| null` | Required | - |
| `topicTitlePlaceholder` | `string \| null` | Required | - |
| `hasChildren` | `boolean` | Required | - |
| `subcategoryCount` | `number \| null` | Required | - |
| `sortOrder` | `string \| null` | Required | - |
| `sortAscending` | `boolean \| null` | Required | - |
| `showSubcategoryList` | `boolean` | Required | - |
| `numFeaturedTopics` | `number` | Required | - |
| `defaultView` | `string \| null` | Required | - |
| `subcategoryListStyle` | `string` | Required | - |
| `defaultTopPeriod` | `string` | Required | - |
| `defaultListFilter` | `string` | Required | - |
| `minimumRequiredTags` | `number` | Required | - |
| `navigateToFirstPostAfterRead` | `boolean` | Required | - |
| `allowedTags` | `unknown[] \| undefined` | Optional | - |
| `allowedTagGroups` | `unknown[] \| undefined` | Optional | - |
| `allowGlobalTags` | `boolean` | Required | - |
| `requiredTagGroups` | [`RequiredTagGroup[]`](../../doc/models/required-tag-group.md) | Required | - |
| `readOnlyBanner` | `string \| null` | Required | - |
| `uploadedLogo` | `string \| null` | Required | - |
| `uploadedLogoDark` | `string \| null` | Required | - |
| `uploadedBackground` | `string \| null` | Required | - |
| `uploadedBackgroundDark` | `string \| null` | Required | - |
| `canEdit` | `boolean` | Required | - |
| `customFields` | `unknown \| null \| undefined` | Optional | - |
| `parentCategoryId` | `number \| undefined` | Optional | - |
| `formTemplateIds` | `unknown[] \| undefined` | Optional | - |
| `categoryTypes` | `unknown \| undefined` | Optional | - |

## Example

```ts
import { Category4 } from 'discourse';

const category4: Category4 = {
  id: 84,
  name: 'name8',
  color: 'color2',
  textColor: 'text_color0',
  slug: 'slug2',
  topicCount: 240,
  postCount: 56,
  position: 114,
  topicUrl: 'topic_url0',
  readRestricted: false,
  permission: 122,
  notificationLevel: 180,
  topicTemplate: 'topic_template6',
  topicTitlePlaceholder: 'topic_title_placeholder4',
  hasChildren: false,
  subcategoryCount: 6,
  sortOrder: 'sort_order8',
  sortAscending: false,
  showSubcategoryList: false,
  numFeaturedTopics: 72,
  defaultView: 'default_view2',
  subcategoryListStyle: 'subcategory_list_style4',
  defaultTopPeriod: 'default_top_period2',
  defaultListFilter: 'default_list_filter6',
  minimumRequiredTags: 152,
  navigateToFirstPostAfterRead: false,
  allowGlobalTags: false,
  requiredTagGroups: [
    {
      name: 'name4',
      minCount: 58,
    }
  ],
  readOnlyBanner: 'read_only_banner2',
  uploadedLogo: 'uploaded_logo6',
  uploadedLogoDark: 'uploaded_logo_dark4',
  uploadedBackground: 'uploaded_background2',
  uploadedBackgroundDark: 'uploaded_background_dark2',
  canEdit: false,
  styleType: 'style_type0',
  emoji: 'emoji0',
  icon: 'icon0',
  description: 'description8',
  descriptionText: 'description_text0',
};
```

