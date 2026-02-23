import {fieldRegistry} from './constants'


export type FieldName = keyof typeof fieldRegistry

export type FieldType= typeof fieldRegistry[FieldName]["type"]
type Range={
  min:number;
  max:number;
}

type CurrencyRange = {
  min: number;
  max: number;
  currency: string;
};

type MultiSelect={
   selected: string[]
}

export type FilterValue= string | number | Date | boolean | CurrencyRange| Range  | MultiSelect | null


export  interface FilterRule{
    id:string,
    field:FieldName | null,
    operator:string | null,
    value:FilterValue
}