import { fieldRegistry,  } from "../FilterBuilder/constants";
import { valueComponentMap,rangeValueCompMap } from "../valueInputComponents";
import type { FilterValue } from "../FilterBuilder/types";
import {operatorConfig} from '../FilterBuilder/constants'
import {useEffect} from 'react'
interface Props{
    field: keyof typeof fieldRegistry,
    operator:string,
    value:FilterValue,
    localValue:FilterValue,
    setLocalValue:(val:FilterValue)=>void
    onChange:(val:string)=>void
}
export function ValueRenderer({ field, value,operator,localValue,setLocalValue, onChange }:Props) {
 
  
  useEffect(()=>{
    setLocalValue(value)
  },[value])
  if (!field || !operator) return null;

  const config = fieldRegistry[field];
  if(!config) return null

const valueMode = operatorConfig[operator as keyof typeof operatorConfig]?.valueMode;

const Component =
  valueMode === "range"
    ? rangeValueCompMap[config.type as keyof typeof rangeValueCompMap]
    : valueComponentMap[config.type];

  return (
    <Component
      value={localValue}
      onChange={onChange}
       options={"options" in config ? config.options : undefined}
    />
  )
}