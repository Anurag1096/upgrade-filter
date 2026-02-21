import { createSlice } from "@reduxjs/toolkit";

import type { FilterRule } from "../../components/FilterBuilder/types";

interface FilterState {
  rules: FilterRule[];
}

const initialState: FilterState = {
  rules: [{id:"3",field:null,operator:"<",value:null}],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    addRule: (state) => {
      state.rules.push({
        id: crypto.randomUUID(),
        field: null,
        operator: "",
        value: null,
      });
    },
  },
});

export const { addRule } = filterSlice.actions;
export default filterSlice.reducer;
