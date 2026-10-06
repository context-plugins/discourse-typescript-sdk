import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PostTypes = {
  regular: number;
  moderatorAction: number;
  smallAction: number;
  whisper: number;
};

export const postTypesSchema: Schema<PostTypes> = s.object<PostTypes>({
  regular: s.int(),
  moderatorAction: s.int(),
  smallAction: s.int(),
  whisper: s.int(),
  _keysMap: {
    moderatorAction: "moderator_action",
    smallAction: "small_action",
  },
});
