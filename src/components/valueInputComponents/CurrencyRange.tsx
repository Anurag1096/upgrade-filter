
import { Stack, TextField } from "@mui/material";
interface CurrencyRange {
  min: number;
  max: number;
}
interface Props{
    value:CurrencyRange,
    onChange:(val:CurrencyRange)=>void,
}


export const CurrencyRangeValueInput = ({ value = {min:0,max:0}, onChange }: Props) => (
  <Stack direction="row" spacing={1}>
    <TextField
      type="number"
      size="small"
      placeholder="Min"
       InputProps={{
        inputProps: {
          min: 0, // Set the minimum value
        }
      }}
      value={value?.min || ""}
      onChange={(e) => onChange({ ...value, min: Number(e.target.value) })}
    />
    <TextField
      type="number"
      size="small"
      placeholder="Max"
        InputProps={{
        inputProps: {
          min: 1, // Set the minimum value
        }
      }}
      value={value?.max || ""}
      onChange={(e) => onChange({ ...value, max: Number(e.target.value) })}
    />
  </Stack>
);