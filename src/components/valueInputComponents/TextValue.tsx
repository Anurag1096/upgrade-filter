import { TextField } from "@mui/material";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function TextValue({ value, onChange }: Props) {
  return (
    <TextField
      type="text"
      size="small"
      required
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}