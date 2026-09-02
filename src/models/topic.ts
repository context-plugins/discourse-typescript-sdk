import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Topic = {
  id: number;
  title: string;
  tags: string[];
  tagsDescriptions: Record<string, unknown>;
  slug: string;
};

export const topicSchema: Schema<Topic> = s.object<Topic>({
  id: s.number(),
  title: s.string(),
  tags: s.array(s.string()),
  tagsDescriptions: s.record(s.string(), s.unknown()),
  slug: s.string(),
  _keysMap: {
    tagsDescriptions: "tags_descriptions",
  },
});
