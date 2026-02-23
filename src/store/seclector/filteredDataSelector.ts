import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "..";
import type { FilterRule } from "../../components/FilterBuilder/types";
import { getValidRules } from "../../utils/getValidRules";
import { applyFilters } from "../../utils/applyFilters";


export const FilteredData=createSelector([
     (state: RootState) => state.employee.employeeData,
    (state: RootState) => state.filter.rules,
],(employeeData,rules:FilterRule[])=>{
  // check if rules array is not empty 

  const validRules=getValidRules(rules)
if(!validRules ||  validRules.length === 0) return employeeData
//check if rules is valid
// if valid then procede with filtering

return applyFilters(employeeData, validRules)
})