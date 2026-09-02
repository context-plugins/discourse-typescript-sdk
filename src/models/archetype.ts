import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Archetype = {
  id: string;
  name: string;
  options: Record<string, unknown>[];
};

export const archetypeSchema: Schema<Archetype> = s.object<Archetype>({
  id: s.string(),
  name: s.string(),
  options: s.array(s.record(s.string(), s.unknown())),
});
