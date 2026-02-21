import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { FilterRule } from "../../components/FilterBuilder/types";

interface FilterState {
  rules: FilterRule[];
}

const initialState: FilterState = {
  rules: [],
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
    updateRule: (
      state,
      action: PayloadAction<{
        id: string;
        changes: Partial<Omit<FilterRule, "id">>;
      }>,
    ) => {
      const { id, changes } = action.payload;

      const rule = state.rules.find((rule) => id === rule.id);

      if (rule) {
        Object.assign(rule, changes);
      }
    },

    removeRule: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;

      state.rules = state.rules.filter((rule) => rule.id !== id);
    },
    clearAllRule: (state) => {
      state.rules = [];
    },
  },
});

export const { addRule, updateRule, removeRule, clearAllRule } =
  filterSlice.actions;
export default filterSlice.reducer;
