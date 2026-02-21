import { fieldRegistry, operatorTypeMap } from "../components/FilterBuilder/constants";

export function getOperator(field:keyof typeof fieldRegistry){
    const type = fieldRegistry[field].type
    return operatorTypeMap[type]
}