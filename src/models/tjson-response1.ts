import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { basicTopicSchema, type BasicTopic } from "./basic-topic.js";

export type TJsonResponse1 = {
  basicTopic?: BasicTopic;
};

export const tJsonResponse1Schema: Schema<TJsonResponse1> = s.object<TJsonResponse1>({
  basicTopic: s.optional(s.lazy(() => basicTopicSchema)),
  _keysMap: {
    basicTopic: "basic_topic",
  },
});
