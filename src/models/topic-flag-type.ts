import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TopicFlagType = {
  id: number | null;
  nameKey: string | null;
  name: string;
  description: string;
  shortDescription: string;
  isFlag: boolean;
  requireMessage: boolean;
  enabled: boolean;
  appliesTo: Record<string, unknown>[];
  isUsed: boolean;
  position?: number;
  autoActionType: boolean;
  system?: boolean;
};

export const topicFlagTypeSchema: Schema<TopicFlagType> = s.object<TopicFlagType>({
  id: s.nullable(s.number()),
  nameKey: s.nullable(s.string()),
  name: s.string(),
  description: s.string(),
  shortDescription: s.string(),
  isFlag: s.boolean(),
  requireMessage: s.boolean(),
  enabled: s.boolean(),
  appliesTo: s.array(s.record(s.string(), s.unknown())),
  isUsed: s.boolean(),
  position: s.optional(s.number()),
  autoActionType: s.boolean(),
  system: s.optional(s.boolean()),
  _keysMap: {
    nameKey: "name_key",
    shortDescription: "short_description",
    isFlag: "is_flag",
    requireMessage: "require_message",
    appliesTo: "applies_to",
    isUsed: "is_used",
    autoActionType: "auto_action_type",
  },
});
