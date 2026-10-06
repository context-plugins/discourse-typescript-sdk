import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PostsJsonRequest2 = {
  /**
   * The `SiteSetting.can_permanently_delete` needs to be enabled first before this param can be
   * used. Also this endpoint needs to be called first without `force_destroy` and then followed up
   * with a second call 5 minutes later with `force_destroy` to permanently delete.
   */
  forceDestroy?: boolean;
};

export const postsJsonRequest2Schema: Schema<PostsJsonRequest2> = s.object<PostsJsonRequest2>({
  forceDestroy: s.optional(s.boolean()),
  _keysMap: {
    forceDestroy: "force_destroy",
  },
});
