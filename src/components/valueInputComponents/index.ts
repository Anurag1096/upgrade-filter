import TextValue from "./TextValue";
import NumberValue from "./NumberValue";
import SelectValue from "./SelectValue";
import DateValue from "./DateValue";
import { MultiSelectValueInput as MultiSelect } from "./MultiSelectValue";
import { CurrencyRangeValueInput as CurrencyRange } from "./CurrencyRange";
import { BooleanValueInput as BooleanInput } from "./BooleanValueInput";


export const valueComponentMap = {
  text: TextValue,
  number: NumberValue,
  date: DateValue,
  singleselect: SelectValue,
  multiSelect: MultiSelect,
  currency: CurrencyRange,
  boolean: BooleanInput,
};
