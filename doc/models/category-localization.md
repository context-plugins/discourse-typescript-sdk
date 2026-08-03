
# Category Localization

*This model accepts additional fields of type unknown.*

## Structure

`CategoryLocalization`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The unique identifier for an existing localization.<br>Must be included otherwise the record will be deleted. |
| `locale` | `string` | Required | The locale for the localization, e.g., 'en',<br>'zh_CN'. Locale should be in the list of SiteSetting.content_localization_supported_locales. |
| `name` | `string` | Required | The name of the category in the specified locale. |
| `description` | `string \| undefined` | Optional | The description excerpt of the category in the<br>specified locale. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CategoryLocalization } from 'discourse-api-documentationlib';

const categoryLocalization: CategoryLocalization = {
  locale: 'locale6',
  name: 'name8',
  id: 112,
  description: 'description8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

