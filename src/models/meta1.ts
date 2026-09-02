import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta1 = {
  lastUpdatedAt: string | null;
  totalRowsDirectoryItems: number;
  loadMoreDirectoryItems: string;
};

export const meta1Schema: Schema<Meta1> = s.object<Meta1>({
  lastUpdatedAt: s.nullable(s.string()),
  totalRowsDirectoryItems: s.number(),
  loadMoreDirectoryItems: s.string(),
  _keysMap: {
    lastUpdatedAt: "last_updated_at",
    totalRowsDirectoryItems: "total_rows_directory_items",
    loadMoreDirectoryItems: "load_more_directory_items",
  },
});
