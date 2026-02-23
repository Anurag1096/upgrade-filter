import { TextField } from "@mui/material";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const DateValueSingleInput = ({ value = "", onChange }: Props) => {
  return (
    <TextField
      type="date"
      size="small"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default DateValueSingleInput;