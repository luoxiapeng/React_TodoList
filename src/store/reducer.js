import * as actionType from './actionType'
const defaultState={
  inputValue : 'Write Something',
  List:[
    '早上4点起床，锻炼身体',
    '中午下班游泳一小时'
  ]
} 
export default (state=defaultState,action)=>{
  console.log(action)
  if(action.type===actionType.CHANGE_INPUT_VALUE){
    let newState=JSON.parse(JSON.stringify(state))
    newState.inputValue=action.value
    return newState
  }
  if(action.type===actionType.ADDITEM){
    let newState=JSON.parse(JSON.stringify(state))
    newState.List.push(newState.inputValue)
    newState.inputValue=''
    return newState
  }
  if(action.type===actionType.DELECT_ITEM){
    let newState=JSON.parse(JSON.stringify(state))
    newState.List.splice(action.index,1)
    return newState
  }
  if(action.type===actionType.GET_LIST_DATA){
    let newState=JSON.parse(JSON.stringify(state))
    newState.List=action.data.data.list
  }
  return state
}