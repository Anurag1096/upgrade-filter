import { FormControlLabel, Switch } from "@mui/material";
interface Props{
    value:boolean,
    onChange:(val:boolean)=>void
}
export const BooleanValueInput = ({ value, onChange }: Props) => (
  <FormControlLabel
    control={
      <Switch
        checked={Boolean(value)}
        onChange={(e) => onChange(e.target.checked)}
      />
    }
    label=""
  />
);