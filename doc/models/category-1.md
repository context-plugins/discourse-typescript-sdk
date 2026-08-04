
# Category 1

## Structure

`Category1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `name` | `string` | Required | - |
| `color` | `string` | Required | - |
| `textColor` | `string` | Required | - |
| `styleType` | `string` | Required | - |
| `emoji` | `string \| null` | Required | - |
| `icon` | `string \| null` | Required | - |
| `slug` | `string` | Required | - |
| `topicCount` | `number` | Required | - |
| `postCount` | `number` | Required | - |
| `position` | `number` | Required | - |
| `description` | `string \| null` | Required | - |
| `descriptionText` | `string \| null` | Required | - |
| `descriptionExcerpt` | `string \| null` | Required | - |
| `topicUrl` | `string \| null` | Required | - |
| `readRestricted` | `boolean` | Required | - |
| `permission` | `number` | Required | - |
| `notificationLevel` | `number` | Required | - |
| `canEdit` | `boolean` | Required | - |
| `topicTemplate` | `string \| null` | Required | - |
| `topicTitlePlaceholder` | `string \| null` | Required | - |
| `hasChildren` | `boolean` | Required | - |
| `subcategoryCount` | `number \| null` | Required | - |
| `sortOrder` | `string \| null` | Required | - |
| `sortAscending` | `string \| null` | Required | - |
| `showSubcategoryList` | `boolean` | Required | - |
| `numFeaturedTopics` | `number` | Required | - |
| `defaultView` | `string \| null` | Required | - |
| `subcategoryListStyle` | `string` | Required | - |
| `defaultTopPeriod` | `string` | Required | - |
| `defaultListFilter` | `string` | Required | - |
| `minimumRequiredTags` | `number` | Required | - |
| `navigateToFirstPostAfterRead` | `boolean` | Required | - |
| `topicsDay` | `number` | Required | - |
| `topicsWeek` | `number` | Required | - |
| `topicsMonth` | `number` | Required | - |
| `topicsYear` | `number` | Required | - |
| `topicsAllTime` | `number` | Required | - |
| `isUncategorized` | `boolean \| undefined` | Optional | - |
| `subcategoryIds` | `unknown[]` | Required | - |
| `subcategoryList` | `unknown[] \| null \| undefined` | Optional | - |
| `uploadedLogo` | `string \| null` | Required | - |
| `uploadedLogoDark` | `string \| null` | Required | - |
| `uploadedBackground` | `string \| null` | Required | - |
| `uploadedBackgroundDark` | `string \| null` | Required | - |

## Example

```ts
import { Category1 } from 'discourse';

const category1: Category1 = {
  id: 216,
  name: 'name0',
  color: 'color6',
  textColor: 'text_color2',
  styleType: 'style_type2',
  emoji: 'emoji2',
  icon: 'icon2',
  slug: 'slug6',
  topicCount: 116,
  postCount: 188,
  position: 246,
  description: 'description0',
  descriptionText: 'description_text8',
  descriptionExcerpt: 'description_excerpt0',
  topicUrl: 'topic_url8',
  readRestricted: false,
  permission: 254,
  notificationLevel: 56,
  canEdit: false,
  topicTemplate: 'topic_template8',
  topicTitlePlaceholder: 'topic_title_placeholder4',
  hasChildren: false,
  subcategoryCount: 130,
  sortOrder: 'sort_order0',
  sortAscending: 'sort_ascending0',
  showSubcategoryList: false,
  numFeaturedTopics: 196,
  defaultView: 'default_view6',
  subcategoryListStyle: 'subcategory_list_style6',
  defaultTopPeriod: 'default_top_period6',
  defaultListFilter: 'default_list_filter2',
  minimumRequiredTags: 228,
  navigateToFirstPostAfterRead: false,
  topicsDay: 250,
  topicsWeek: 96,
  topicsMonth: 50,
  topicsYear: 110,
  topicsAllTime: 150,
  subcategoryIds: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  uploadedLogo: 'uploaded_logo8',
  uploadedLogoDark: 'uploaded_logo_dark4',
  uploadedBackground: 'uploaded_background4',
  uploadedBackgroundDark: 'uploaded_background_dark6',
  isUncategorized: false,
  subcategoryList: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
};
```

