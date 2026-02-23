// creating type for the operator map function

type OperatorFn<F = unknown, V = unknown> = (
  fieldValue: F,
  ruleValue: V,
) => boolean;
type Primitive = string | number | boolean | Date;
type RangeValue<T = Primitive> = {
  min: T;
  max: T;
};

type DateRangeValue<T = Primitive> = {
  start: T;
  end: T;
};
export type TextOperators = {
  equals: OperatorFn<string, string>;
  contains: OperatorFn<string, string>;
  startsWith: OperatorFn<string, string>;
  endsWith: OperatorFn<string, string>;
  doesNotContain: OperatorFn<string, string>;
};

export type NumberOperators = {
  equals: OperatorFn<number, number>;
  greaterThan: OperatorFn<number, number>;
  lessThan: OperatorFn<number, number>;
  gte: OperatorFn<number, number>;
  lte: OperatorFn<number, number>;
  between: OperatorFn<number, RangeValue<number>>;
};

export type DateOperators = {
  equals: OperatorFn<Date | string, Date | string>;
  before: OperatorFn<Date | string, Date | string>;
  after: OperatorFn<Date | string, Date | string>;
  between: OperatorFn<Date | string, DateRangeValue<Date | string>>;
};
export type SingleSelectOperators = {
  is: OperatorFn<string, string>;
  isNot: OperatorFn<string, string>;
};
export type MultiSelectOperator = {
  in: OperatorFn<string[], string[]>;
  notIn: OperatorFn<string[], string[]>;
};
export type BooleanOperators = {
  is: OperatorFn<boolean, boolean>;
};

export type OperatorHandlerMap = {
text: TextOperators;
number: NumberOperators;
currency: NumberOperators;
date: DateOperators;
boolean: BooleanOperators;
singleSelect: SingleSelectOperators;
multiSelect: MultiSelectOperator;
};
