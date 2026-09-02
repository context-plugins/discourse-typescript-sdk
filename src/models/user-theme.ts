import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserTheme = {
  themeId: number;
  name: string;
  default: boolean;
  colorSchemeId: number | null;
  darkColorSchemeId?: number | null;
  onlyThemeColorSchemes?: boolean;
};

export const userThemeSchema: Schema<UserTheme> = s.object<UserTheme>({
  themeId: s.number(),
  name: s.string(),
  default: s.boolean(),
  colorSchemeId: s.nullable(s.number()),
  darkColorSchemeId: s.optionalNullable(s.number()),
  onlyThemeColorSchemes: s.optional(s.boolean()),
  _keysMap: {
    themeId: "theme_id",
    colorSchemeId: "color_scheme_id",
    darkColorSchemeId: "dark_color_scheme_id",
    onlyThemeColorSchemes: "only_theme_color_schemes",
  },
});
