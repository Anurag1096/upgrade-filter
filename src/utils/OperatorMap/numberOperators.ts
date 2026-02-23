import type { NumberOperators } from "./types";

export const numberOperators: NumberOperators = {
  equals: (f, v) => f != null && v != null && Number(f) === Number(v),
  greaterThan: (f, v) => f != null && v != null && Number(f) > Number(v),
  lessThan: (f, v) => f != null && v != null && Number(f) < Number(v),
  gte: (f, v) => f != null && v != null && Number(f) >= Number(v),
  lte: (f, v) => f != null && v != null && Number(f) <= Number(v),
  between: (f, v) => {
    if (f == null || !v) return true;
    const { min, max } = v;
    if (min == null || max == null) return true;
    const fNum = Number(f);
    const minNum = Number(min);
    const maxNum = Number(max);

    if (!isNaN(fNum) && !isNaN(minNum) && !isNaN(maxNum)) {
      return fNum >= minNum && fNum <= maxNum;
    }

    return true;
  },
};
