import TextValue from "./TextValue";
import NumberValue from "./NumberValue";
import SelectValue from "./SelectValue";
import DateValueRange from "./DateValueRange";
import NumberRangeValue from "./NumberValueRange";
import DateValueSingleInput from "./DateValueSingle";
import { MultiSelectInput as MultiSelect } from "./MultiSelectValue";
import { CurrencyRangeValueInput as CurrencyRange } from "./CurrencyRange";
import { BooleanValueInput as BooleanInput } from "./BooleanValueInput";


export const valueComponentMap = {
  text: TextValue,
  number: NumberValue,
  date: DateValueSingleInput,
  singleSelect: SelectValue,
  multiSelect: MultiSelect,
  boolean: BooleanInput,
};
export const rangeValueCompMap={
currency: CurrencyRange,
date:DateValueRange,
number:NumberRangeValue
}