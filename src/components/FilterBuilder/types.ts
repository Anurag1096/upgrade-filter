import {fieldRegistry} from './constants'


export type FieldName = keyof typeof fieldRegistry

export type FieldType= typeof fieldRegistry[FieldName]["type"]

export type FilterValue= string | number | Date | null

export  interface FilterRule{
    id:string,
    field:FieldName | null,
    operator:string | null,
    value:FilterValue
}