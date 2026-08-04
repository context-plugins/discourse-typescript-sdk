
# Category List

## Structure

`CategoryList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `canCreateCategory` | `boolean` | Required | - |
| `canCreateTopic` | `boolean` | Required | - |
| `categories` | [`Category1[]`](../../doc/models/category-1.md) | Required | - |

## Example

```ts
import { CategoryList } from 'discourse';

const categoryList: CategoryList = {
  canCreateCategory: false,
  canCreateTopic: false,
  categories: [
    {
      id: 16,
      name: 'name8',
      color: 'color2',
      textColor: 'text_color0',
      styleType: 'style_type0',
      emoji: 'emoji0',
      icon: 'icon0',
      slug: 'slug2',
      topicCount: 172,
      postCount: 244,
      position: 46,
      description: 'description8',
      descriptionText: 'description_text0',
      descriptionExcerpt: 'description_excerpt8',
      topicUrl: 'topic_url0',
      readRestricted: false,
      permission: 54,
      notificationLevel: 112,
      canEdit: false,
      topicTemplate: 'topic_template6',
      topicTitlePlaceholder: 'topic_title_placeholder4',
      hasChildren: false,
      subcategoryCount: 74,
      sortOrder: 'sort_order8',
      sortAscending: 'sort_ascending8',
      showSubcategoryList: false,
      numFeaturedTopics: 140,
      defaultView: 'default_view2',
      subcategoryListStyle: 'subcategory_list_style4',
      defaultTopPeriod: 'default_top_period2',
      defaultListFilter: 'default_list_filter6',
      minimumRequiredTags: 172,
      navigateToFirstPostAfterRead: false,
      topicsDay: 50,
      topicsWeek: 152,
      topicsMonth: 6,
      topicsYear: 54,
      topicsAllTime: 162,
      subcategoryIds: [
        { 'key1': 'val1', 'key2': 'val2' },
        { 'key1': 'val1', 'key2': 'val2' },
        { 'key1': 'val1', 'key2': 'val2' }
      ],
      uploadedLogo: 'uploaded_logo6',
      uploadedLogoDark: 'uploaded_logo_dark4',
      uploadedBackground: 'uploaded_background2',
      uploadedBackgroundDark: 'uploaded_background_dark2',
      isUncategorized: false,
      subcategoryList: [
        { 'key1': 'val1', 'key2': 'val2' },
        { 'key1': 'val1', 'key2': 'val2' }
      ],
    }
  ],
};
```

