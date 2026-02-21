import { TextField, MenuItem } from "@mui/material";

export const MultiSelectValueInput = ({ value = [], onChange, options }: any) => (
  <TextField
    select
    size="small"
    SelectProps={{ multiple: true }}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    {options.map((opt: string) => (
      <MenuItem key={opt} value={opt}>
        {opt}
      </MenuItem>
    ))}
  </TextField>
);