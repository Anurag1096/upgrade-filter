import { Button, MenuItem, Select, Stack } from "@mui/material";
import { fieldRegistry } from "./constants";
import { removeRule, updateRule } from "../../store/slices/filterSlice";
import { useAppDispatch } from "../../store/hooks";
import type { FilterRule, FilterValue } from "./types";
import { getOperator } from "../../utils/getOperator";
import { ValueRenderer } from "../ValueRender";
//will call all the slice function inside the onChagne
type Props = {
  rule: FilterRule;
};

export const FilterRowRenderer = ({ rule }: Props) => {
  const dispatch = useAppDispatch();

  const operators = getOperator(rule.field as keyof typeof fieldRegistry);

  return (
    <Stack direction="row" spacing={3} alignItems="center">
      {/* FIELD SELECT */}
      <Select
        size="small"
        
        value={rule.field || ""}
        displayEmpty
        onChange={(e) =>
          dispatch(
            updateRule({ id: rule.id, changes: { field: e.target.value as keyof typeof fieldRegistry,operator:"",value:"" } }),
          )
        }
      >
        <MenuItem value="" disabled>
          Select Field
        </MenuItem>

        {Object.entries(fieldRegistry).map(([key, config]) => (
          <MenuItem key={key} value={key}>
            {config.label}
          </MenuItem>
        ))}
      </Select>

      {/* OPERATOR SELECT */}
      {rule.field && (
        <Select
          size="small"
          value={rule.operator || ""}
          displayEmpty
          disabled={!rule.field}
          onChange={(e) =>
            dispatch(
              updateRule({
                id: rule.id,
                changes: { operator: e.target.value },
              }),
            )
          }
        >
          <MenuItem value="" disabled>
            Select Operator
          </MenuItem>

          {operators.map((op) => (
            <MenuItem key={op} value={op}>
              {op}
            </MenuItem>
          ))}
        </Select>
      )}

      {/* VALUE INPUT */}
      {rule.field && rule.operator && (
        <ValueRenderer
          field={rule.field}
          operator={rule.operator}
          value={rule.value || ""}
          onChange={(val: FilterValue) =>
            dispatch(
              updateRule({
                id: rule.id,
                changes: { value: val },
              }),
            )
          }
        />
      )}
      <Button onClick={() => dispatch(removeRule({ id: rule.id }))}>X</Button>
    </Stack>
  );
};
