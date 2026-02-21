
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
      value={value.min || 0}
      onChange={(e) => onChange({ ...value, min: Number(e.target.value) })}
    />
    <TextField
      type="number"
      size="small"
      placeholder="Max"
      value={value.max || 0}
      onChange={(e) => onChange({ ...value, max: Number(e.target.value) })}
    />
  </Stack>
);