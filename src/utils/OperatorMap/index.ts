// this is a genrated code file to speed up the workflow
import { textOperators } from "./textOperators";
import { numberOperators } from "./numberOperators";
import  dateOperators  from "./dateOperators";
import { booleanOperators } from "./booleanOperators";
import { singleSelectOperators } from "./singleSelctOperators";
import { multiSelectOperators } from "./multiSelectOperators";
import type { OperatorHandlerMap } from "./types";
// Map type → operator map

// the (f) and (v) in the function are the two values , 
// one comes from the data, other comes from user input which is saved into rule 
export const operatorHandlerMap:OperatorHandlerMap= {
  text: textOperators,
  number: numberOperators,
  currency: numberOperators,
  date: dateOperators,
  boolean: booleanOperators,
  singleSelect: singleSelectOperators,
  multiSelect: multiSelectOperators,
} as const
