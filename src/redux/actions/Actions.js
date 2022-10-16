import {ActionsTypes} from "../types/ActionsTypes";

export const Clear = () => {
  return {type: ActionsTypes.CLEAR, payload: {}}
}

export const DeleteItem = (data) => {
  return ({type: ActionsTypes.DELETE_EXPENSES_ITEM, payload: data})
}

export const SendItem = (data) => {
 return  {type: "ADD_EXPENSES_ITEM", payload: data}
}

export const SurtExp = (value) => {
   return {type: "SORT_EXPENSES", payload: value}
}