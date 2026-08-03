
# Category

## Structure

`Category`

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
| `formTemplateIds` | `unknown[] \| undefined` | Optional | - |
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
import { Category } from 'discourse-api-documentationlib';

const category: Category = {
  id: 232,
  name: 'name2',
  color: 'color4',
  textColor: 'text_color4',
  styleType: 'style_type4',
  emoji: 'emoji4',
  icon: 'icon6',
  slug: 'slug4',
  topicCount: 132,
  postCount: 204,
  position: 6,
  description: 'description8',
  descriptionText: 'description_text6',
  descriptionExcerpt: 'description_excerpt2',
  topicUrl: 'topic_url6',
  readRestricted: false,
  permission: 14,
  notificationLevel: 72,
  canEdit: false,
  topicTemplate: 'topic_template0',
  topicTitlePlaceholder: 'topic_title_placeholder2',
  hasChildren: false,
  subcategoryCount: 114,
  sortOrder: 'sort_order2',
  sortAscending: 'sort_ascending2',
  showSubcategoryList: false,
  numFeaturedTopics: 180,
  defaultView: 'default_view4',
  subcategoryListStyle: 'subcategory_list_style8',
  defaultTopPeriod: 'default_top_period4',
  defaultListFilter: 'default_list_filter0',
  minimumRequiredTags: 212,
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
  searchPriority: 172,
  topicPostingReviewGroupIds: [
    197
  ],
  replyPostingReviewGroupIds: [
    14,
    15,
    16
  ],
  uploadedLogo: 'uploaded_logo0',
  uploadedLogoDark: 'uploaded_logo_dark2',
  uploadedBackground: 'uploaded_background6',
  uploadedBackgroundDark: 'uploaded_background_dark4',
  locale: 'locale0',
  formTemplateIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  allowedTags: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  allowedTagGroups: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  allowGlobalTags: false,
};
```

