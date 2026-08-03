
# C Show Json Response

## Structure

`CShowJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `category` | [`Category`](../../doc/models/category.md) | Required | - |

## Example

```ts
import { CShowJsonResponse } from 'discourse-api-documentationlib';

const cShowJsonResponse: CShowJsonResponse = {
  category: {
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
  },
};
```

