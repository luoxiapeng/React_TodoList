import * as actionType from './actionType';

export const changeInputAction =(value)=>({
  type:actionType.CHANGE_INPUT_VALUE,
  value
})

export const addItemAction =()=>({
  type:actionType.ADDITEM
})

export const deleteItemAction =(index)=>({
  type:actionType.DELECT_ITEM,
  index
})