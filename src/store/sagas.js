
import {takeEvery,put} from 'redux-saga/effects'
import * as actionType from './actionType'
import {getListAction} from './actionCreatores'
import axios from 'axios'
//generator函数
function* mySaga() {
   //等待捕获action
  yield takeEvery(actionType.GET_MY_LIST,getList)
}
function* getList() {
  console.log('aaaa')
  const res=yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
  const actions=getListAction(res.data)
  yield put(actions)
}
export default mySaga
