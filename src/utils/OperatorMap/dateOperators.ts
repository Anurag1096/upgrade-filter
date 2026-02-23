import type { DateOperators } from "./types";

const dateOperators: DateOperators = {
  equals: (f, v) =>
    f != null && v != null && new Date(f).getTime() === new Date(v).getTime(),
  before: (f, v) =>
    f != null && v != null && new Date(f).getTime() < new Date(v).getTime(),
  after: (f, v) =>
    f != null && v != null && new Date(f).getTime() > new Date(v).getTime(),
  between: (f, v) => {
    if (f == null || !v) return true;
    //taking out the value from the object 
    const { start, end } = v;
    if (start == null || end == null) return true;
    const fDate = new Date(f).getTime();
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();

    if (!isNaN(fDate) && !isNaN(startDate) && !isNaN(endDate)) {
      return fDate >= startDate && fDate <= endDate;
    }
    return true;
  },
};
export default dateOperators;
