import { fieldRegistry,  } from "../FilterBuilder/constants";
import { valueComponentMap } from "../valueInputComponents";
import type { FilterValue } from "../FilterBuilder/types";

interface Props{
    field: keyof typeof fieldRegistry,
    value:FilterValue,
    onChange:(val:string)=>void
}
export function ValueRenderer({ field, value, onChange }:Props) {
  if (!field) return null;

  const config = fieldRegistry[field];
  if(!config) return null
  const Component = valueComponentMap[config.type];

  return (
    <Component
      value={value}
      onChange={onChange}
       options={"options" in config ? config.options : undefined}
    />
  );
}