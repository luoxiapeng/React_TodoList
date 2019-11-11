import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from "./page/TodoList"

// 使用redux的提供器和链接器
import { Provider } from 'react-redux'
import store from './store'
//声明一个App组件，然后这个组件用Provider进行包裹。
const App = (
   <Provider store={store}>
       <TodoList />
   </Provider>
)


ReactDOM.render(App, document.getElementById('root'));

