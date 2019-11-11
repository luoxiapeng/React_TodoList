import { createStore,applyMiddleware,compose } from "redux"
import reducer  from "./reducer";
// import thunk from "redux-thunk";
import mySagas from './sagas'


// 引用redux-saga
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware=createSagaMiddleware();//创建saga中间件


// 编写增强函数
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer=composeEnhancers(applyMiddleware(sagaMiddleware))

const store=createStore(
  reducer,
  enhancer
  )

  sagaMiddleware.run(mySagas)
export default store