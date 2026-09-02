import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PostTypes = {
  regular: number;
  moderatorAction: number;
  smallAction: number;
  whisper: number;
};

export const postTypesSchema: Schema<PostTypes> = s.object<PostTypes>({
  regular: s.number(),
  moderatorAction: s.number(),
  smallAction: s.number(),
  whisper: s.number(),
  _keysMap: {
    moderatorAction: "moderator_action",
    smallAction: "small_action",
  },
});
