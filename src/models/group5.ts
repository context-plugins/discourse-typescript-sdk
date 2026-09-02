import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Group5 = {
  id: number;
  name: string;
  fullName?: string;
  displayName?: string;
  flairUrl: string | null;
  flairBgColor: string | null;
  flairColor: string | null;
  automatic: boolean;
};

export const group5Schema: Schema<Group5> = s.object<Group5>({
  id: s.number(),
  name: s.string(),
  fullName: s.optional(s.string()),
  displayName: s.optional(s.string()),
  flairUrl: s.nullable(s.string()),
  flairBgColor: s.nullable(s.string()),
  flairColor: s.nullable(s.string()),
  automatic: s.boolean(),
  _keysMap: {
    fullName: "full_name",
    displayName: "display_name",
    flairUrl: "flair_url",
    flairBgColor: "flair_bg_color",
    flairColor: "flair_color",
  },
});
