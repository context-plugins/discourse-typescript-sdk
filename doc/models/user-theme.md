
# User Theme

## Structure

`UserTheme`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `themeId` | `number` | Required | - |
| `name` | `string` | Required | - |
| `mDefault` | `boolean` | Required | - |
| `colorSchemeId` | `number \| null` | Required | - |
| `darkColorSchemeId` | `number \| null \| undefined` | Optional | - |
| `onlyThemeColorSchemes` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { UserTheme } from 'discourse';

const userTheme: UserTheme = {
  themeId: 224,
  name: 'name8',
  mDefault: false,
  colorSchemeId: 8,
  darkColorSchemeId: 124,
  onlyThemeColorSchemes: false,
};
```

