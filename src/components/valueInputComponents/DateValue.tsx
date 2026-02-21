import { Stack, TextField } from "@mui/material";
interface DateRange {
  start: string;
  end: string;
}
interface Props{
    value:DateRange,
    onChange:(val:DateRange)=>void,
}

const DateRangeInput = ({ value = {start:"",end:""}, onChange }: Props) => (
  <Stack direction="row" spacing={1}>
    <TextField
      type="date"
      size="small"
      value={value.start || ""}
      onChange={(e) => onChange({ ...value, start: e.target.value })}
    />
    <TextField
      type="date"
      size="small"
      value={value.end || ""}
      onChange={(e) => onChange({ ...value, end: e.target.value })}
    />
  </Stack>
);

export default DateRangeInput