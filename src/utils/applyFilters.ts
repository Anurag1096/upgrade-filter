import { fieldRegistry } from "../components/FilterBuilder/constants";
import type { FilterRule } from "../components/FilterBuilder/types";
import type { Employee } from "./types/employType";
import { operatorHandlerMap } from "./OperatorMap";
import { getFieldValue } from "./getFieldValue";
export function applyFilters(
  data: Employee[],
  rules: FilterRule[],
): Employee[] | [] {
  return data.filter((employe) => {
    if(!rules.length) return data
    //for every employ record we check if it passes all the rules
    // if it does its just added to filtered data list
   return  rules.every((rule) => {
       // if the rule is valid then only go to next step
      if (!rule.field || !rule.operator) return true;
      //form registry it get the field which is need in the format {label:"",type:""}
      const fieldConfig = fieldRegistry[rule.field];
      //checking if its valid 
      if (!fieldConfig) return true;
    // now we get the value stored in the employe data
    // getFieldValue finds out which field has what data in it , nested filed is also handled
      const fieldValue = getFieldValue(employe, rule.field);
      // now we use the type and operator to get the function which is used to filter out the data
      const operatorFunc =
        operatorHandlerMap[fieldConfig.type]?.[rule.operator];
      // check 
      if (!operatorFunc) return true;
      
      return operatorFunc(fieldValue, rule.value);
    });
  });
}
