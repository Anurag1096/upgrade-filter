import { TextField } from "@mui/material";

interface Props {
  value: string;
  onChange: (val: string) => void;
  error:string;
}

export default function TextValue({ value, onChange,error }: Props) {
  return (
    <TextField
      type="text"
      size="small"
      required
      value={value || ''}
      error={!!error}
      helperText={error}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}