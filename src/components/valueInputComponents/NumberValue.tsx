import { TextField } from "@mui/material";

interface Props {
  value: number | string;
  onChange: (val: number) => void;
}

export default function NumberValue({ value, onChange }: Props) {
  return (
    <TextField
      type="number"
      size="small"
      value={value || ""}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}