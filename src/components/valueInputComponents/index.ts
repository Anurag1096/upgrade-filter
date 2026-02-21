import TextValue from "./TextValue";
import NumberValue from "./NumberValue";
import SelectValue from "./SelectValue";
import DateValue from "./DateValue";
import { MultiSelectInput as MultiSelect } from "./MultiSelectValue";
import { CurrencyRangeValueInput as CurrencyRange } from "./CurrencyRange";
import { BooleanValueInput as BooleanInput } from "./BooleanValueInput";


export const valueComponentMap = {
  text: TextValue,
  number: NumberValue,
  date: DateValue,
  singleSelect: SelectValue,
  multiSelect: MultiSelect,
  currency: CurrencyRange,
  boolean: BooleanInput,
};
