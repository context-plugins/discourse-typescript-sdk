import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserColorScheme = {
  id: number;
  name: string;
  isDark: boolean;
  themeId?: number | null;
  colors: Record<string, unknown>[];
};

export const userColorSchemeSchema: Schema<UserColorScheme> = s.object<UserColorScheme>({
  id: s.number(),
  name: s.string(),
  isDark: s.boolean(),
  themeId: s.optionalNullable(s.number()),
  colors: s.array(s.record(s.string(), s.unknown())),
  _keysMap: {
    isDark: "is_dark",
    themeId: "theme_id",
  },
});
