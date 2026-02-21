import { TextField, MenuItem } from "@mui/material";

interface Props{
  value:string[],
  onChange:(val:string)=>void,
  options:string[]
}


export const MultiSelectInput = ({ value = [], onChange, options }: Props) => (
  <TextField
    select
    size="small"
    value={Array.isArray(value) ? value : []}
    onChange={(e) =>
      onChange(
        typeof e.target.value === "string"
          ? e.target.value.split(",")
          : (e.target.value as string[])
      )
    }
    slotProps={{
      select: {
        multiple: true,
      },
    }}
  >
    {options.map((opt) => (
      <MenuItem key={opt} value={opt}>
        {opt}
      </MenuItem>
    ))}
  </TextField>

);