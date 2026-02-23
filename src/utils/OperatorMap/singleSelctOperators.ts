import type { SingleSelectOperators } from "./types";

export const singleSelectOperators: SingleSelectOperators = {
  is: (f, v) => f === v,
  isNot: (f, v) => f !== v,
};