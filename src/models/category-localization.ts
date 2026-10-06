import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CategoryLocalization = {
  /**
   * The unique identifier for an existing localization. Must be included otherwise the record will
   * be deleted.
   */
  id?: number;
  /**
   * The locale for the localization, e.g., 'en', 'zh_CN'. Locale should be in the list of
   * SiteSetting.content_localization_supported_locales.
   */
  locale: string;
  /** The name of the category in the specified locale. */
  name: string;
  /** The description excerpt of the category in the specified locale. */
  description?: string;
};

export const categoryLocalizationSchema: Schema<CategoryLocalization> = s.object<CategoryLocalization>({
  id: s.optional(s.int()),
  locale: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
});
