
# Site Basic Info Json Response

## Structure

`SiteBasicInfoJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logoUrl` | `string` | Required | - |
| `logoSmallUrl` | `string` | Required | - |
| `appleTouchIconUrl` | `string` | Required | - |
| `faviconUrl` | `string` | Required | - |
| `title` | `string` | Required | - |
| `description` | `string` | Required | - |
| `headerPrimaryColor` | `string` | Required | - |
| `headerBackgroundColor` | `string` | Required | - |
| `loginRequired` | `boolean` | Required | - |
| `locale` | `string` | Required | - |
| `includeInDiscourseDiscover` | `boolean` | Required | - |
| `mobileLogoUrl` | `string` | Required | - |

## Example

```ts
import { SiteBasicInfoJsonResponse } from 'discourse';

const siteBasicInfoJsonResponse: SiteBasicInfoJsonResponse = {
  logoUrl: 'logo_url4',
  logoSmallUrl: 'logo_small_url8',
  appleTouchIconUrl: 'apple_touch_icon_url2',
  faviconUrl: 'favicon_url6',
  title: 'title2',
  description: 'description6',
  headerPrimaryColor: 'header_primary_color6',
  headerBackgroundColor: 'header_background_color6',
  loginRequired: false,
  locale: 'locale4',
  includeInDiscourseDiscover: false,
  mobileLogoUrl: 'mobile_logo_url2',
};
```

