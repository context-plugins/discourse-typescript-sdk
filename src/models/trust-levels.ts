import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrustLevels = {
  newuser: number;
  basic: number;
  member: number;
  regular: number;
  leader: number;
};

export const trustLevelsSchema: Schema<TrustLevels> = s.object<TrustLevels>({
  newuser: s.number(),
  basic: s.number(),
  member: s.number(),
  regular: s.number(),
  leader: s.number(),
});
