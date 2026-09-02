import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { directoryItemSchema, type DirectoryItem } from "./directory-item.js";
import { meta1Schema, type Meta1 } from "./meta1.js";

export type DirectoryItemsJsonResponse = {
  directoryItems: DirectoryItem[];
  meta: Meta1;
};

export const directoryItemsJsonResponseSchema: Schema<DirectoryItemsJsonResponse> =
  s.object<DirectoryItemsJsonResponse>({
    directoryItems: s.array(s.lazy(() => directoryItemSchema)),
    meta: meta1Schema,
    _keysMap: {
      directoryItems: "directory_items",
    },
  });
