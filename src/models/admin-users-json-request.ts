import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminUsersJsonRequest = {
  deletePosts?: boolean;
  blockEmail?: boolean;
  blockUrls?: boolean;
  blockIp?: boolean;
};

export const adminUsersJsonRequestSchema: Schema<AdminUsersJsonRequest> = s.object<AdminUsersJsonRequest>({
  deletePosts: s.optional(s.boolean()),
  blockEmail: s.optional(s.boolean()),
  blockUrls: s.optional(s.boolean()),
  blockIp: s.optional(s.boolean()),
  _keysMap: {
    deletePosts: "delete_posts",
    blockEmail: "block_email",
    blockUrls: "block_urls",
    blockIp: "block_ip",
  },
});
