import { Button, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearAllRule, addRule } from "../../store/slices/filterSlice";
import { FilterRowRenderer } from "./filterrowRenderer";
//This component will orchestrate the data required for filterbilder
export const FilterBuilderComponent = () => {
  const dispatch = useAppDispatch();
  const RuleStateArray = useAppSelector((state) => state.filter);

  return (
    <>
      <div>
        <h1>Filters</h1>
        <Button onClick={() => dispatch(addRule())}>Add Rule</Button>
        <Button onClick={() => dispatch(clearAllRule())}>Clear All</Button>
        <Box
          sx={{
            maxHeight: 150,
            overflowY: "auto",
            border: "1px solid #ccc",
            padding: 1,
            mt: 2,
          }}
        >
          {RuleStateArray.rules.map((rule) => {
            return (
              <div key={rule.id}>
                <FilterRowRenderer rule={rule} /><br/>
              </div>
            )
          })}
        </Box>
      </div>
    </>
  );
};
