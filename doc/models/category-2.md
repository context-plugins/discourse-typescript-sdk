
# Category 2

## Structure

`Category2`

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
| `locale` | `string \| null \| undefined` | Optional | - |
| `topicCount` | `number` | Required | - |
| `postCount` | `number` | Required | - |
| `position` | `number` | Required | - |
| `description` | `string \| null` | Required | - |
| `descriptionText` | `string \| null` | Required | - |
| `descriptionExcerpt` | `string \| null` | Required | - |
| `topicUrl` | `string \| null` | Required | - |
| `readRestricted` | `boolean` | Required | - |
| `permission` | `number \| null` | Required | - |
| `notificationLevel` | `number` | Required | - |
| `canEdit` | `boolean` | Required | - |
| `topicTemplate` | `string \| null` | Required | - |
| `topicTitlePlaceholder` | `string \| null` | Required | - |
| `formTemplateIds` | `unknown[]` | Required | - |
| `hasChildren` | `boolean \| null` | Required | - |
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
| `customFields` | `unknown` | Required | - |
| `allowedTags` | `unknown[] \| undefined` | Optional | - |
| `allowedTagGroups` | `unknown[] \| undefined` | Optional | - |
| `allowGlobalTags` | `boolean \| undefined` | Optional | - |
| `requiredTagGroups` | [`RequiredTagGroup[]`](../../doc/models/required-tag-group.md) | Required | - |
| `categorySetting` | [`CategorySetting \| undefined`](../../doc/models/category-setting.md) | Optional | - |
| `categoryLocalizations` | `unknown[] \| undefined` | Optional | - |
| `readOnlyBanner` | `string \| null` | Required | - |
| `availableGroups` | `unknown[]` | Required | - |
| `autoCloseHours` | `string \| null` | Required | - |
| `autoCloseBasedOnLastPost` | `boolean` | Required | - |
| `allowUnlimitedOwnerEditsOnFirstPost` | `boolean` | Required | - |
| `defaultSlowModeSeconds` | `string \| null` | Required | - |
| `groupPermissions` | [`GroupPermission[]`](../../doc/models/group-permission.md) | Required | - |
| `emailIn` | `string \| null` | Required | - |
| `emailInAllowStrangers` | `boolean` | Required | - |
| `mailinglistMirror` | `boolean` | Required | - |
| `allTopicsWiki` | `boolean` | Required | - |
| `canDelete` | `boolean` | Required | - |
| `allowBadges` | `boolean` | Required | - |
| `topicFeaturedLinkAllowed` | `boolean` | Required | - |
| `searchPriority` | `number` | Required | - |
| `topicPostingReviewGroupIds` | `number[]` | Required | - |
| `replyPostingReviewGroupIds` | `number[]` | Required | - |
| `uploadedLogo` | `string \| null` | Required | - |
| `uploadedLogoDark` | `string \| null` | Required | - |
| `uploadedBackground` | `string \| null` | Required | - |
| `uploadedBackgroundDark` | `string \| null` | Required | - |
| `categoryTypes` | `unknown \| undefined` | Optional | - |
| `categoryTypeSettings` | `unknown \| undefined` | Optional | - |
| `availableCategoryTypes` | [`AvailableCategoryType[] \| undefined`](../../doc/models/available-category-type.md) | Optional | - |

## Example

```ts
import { Category2 } from 'discourse-api-documentationlib';

const category2: Category2 = {
  id: 80,
  name: 'name2',
  color: 'color6',
  textColor: 'text_color4',
  slug: 'slug4',
  topicCount: 236,
  postCount: 52,
  position: 110,
  description: 'description2',
  descriptionText: 'description_text4',
  descriptionExcerpt: 'description_excerpt2',
  topicUrl: 'topic_url6',
  readRestricted: false,
  permission: 118,
  notificationLevel: 176,
  canEdit: false,
  topicTemplate: 'topic_template0',
  topicTitlePlaceholder: 'topic_title_placeholder8',
  formTemplateIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  hasChildren: false,
  subcategoryCount: 10,
  sortOrder: 'sort_order2',
  sortAscending: 'sort_ascending2',
  showSubcategoryList: false,
  numFeaturedTopics: 76,
  defaultView: 'default_view6',
  subcategoryListStyle: 'subcategory_list_style8',
  defaultTopPeriod: 'default_top_period6',
  defaultListFilter: 'default_list_filter0',
  minimumRequiredTags: 108,
  navigateToFirstPostAfterRead: false,
  customFields: { 'key1': 'val1', 'key2': 'val2' },
  requiredTagGroups: [
    {
      name: 'name4',
      minCount: 58,
    }
  ],
  readOnlyBanner: 'read_only_banner4',
  availableGroups: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  autoCloseHours: 'auto_close_hours2',
  autoCloseBasedOnLastPost: false,
  allowUnlimitedOwnerEditsOnFirstPost: false,
  defaultSlowModeSeconds: 'default_slow_mode_seconds6',
  groupPermissions: [
    {
      permissionType: 146,
      groupName: 'group_name4',
      groupId: 230,
    }
  ],
  emailIn: 'email_in8',
  emailInAllowStrangers: false,
  mailinglistMirror: false,
  allTopicsWiki: false,
  canDelete: false,
  allowBadges: false,
  topicFeaturedLinkAllowed: false,
  searchPriority: 188,
  topicPostingReviewGroupIds: [
    45
  ],
  replyPostingReviewGroupIds: [
    118,
    119,
    120
  ],
  uploadedLogo: 'uploaded_logo0',
  uploadedLogoDark: 'uploaded_logo_dark8',
  uploadedBackground: 'uploaded_background6',
  uploadedBackgroundDark: 'uploaded_background_dark4',
  styleType: 'style_type4',
  emoji: 'emoji4',
  icon: 'icon4',
  locale: 'locale0',
  allowedTags: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
};
```

