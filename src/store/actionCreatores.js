import * as actionType from './actionType';
import axios from 'axios'

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

// export const getListData=(data)=>({
//   type:actionType.GET_LIST_DATA,
//   data
// })

// 使用react-thunk方式
export const getListData=()=>{
  return ()=>{
    axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
      const data=res.data
      console.log(data)
    })
  }
}
