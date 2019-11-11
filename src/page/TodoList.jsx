import React, { Component } from 'react';
import store from "../store";
import { changeInputAction,addItemAction,deleteItemAction,getListData } from "../store/actionCreatores";
import TodoListUi from "./ToduListUi";
import axios from 'axios'
// 引入redux-thunk



class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.changeInputValue=this.changeInputValue.bind(this)
    this.deleteItem=this.deleteItem.bind(this)
    // console.log(this.state)
    // store改变就让页面订阅渲染
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange) //订阅Redux的状态
  }

  componentDidMount(){
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
    //   console.log(res.data)
    //   const action=getListData(res.data)
    //   store.dispatch(action)

    // })

    // 修改成react-thunk方式
    const action=getListData()
    store.dispatch(action)
  }
  
  render() { 
    return ( 
      <TodoListUi 
      InputVlue={this.state.InputValue}
      changeInputValue={this.changeInputValue}
      cliBtn={this.cliBtn}
      List={this.state.List}
      deleteItem={this.deleteItem}
      />
     );
  }
  changeInputValue(e){
    const action=changeInputAction(e.target.value)
    store.dispatch(action)
  }
  cliBtn=()=>{
    const action=addItemAction()
    store.dispatch(action)
  }
  deleteItem=(index)=>{
    const action=deleteItemAction(index)
    store.dispatch(action)
  }
  storeChange(){
    this.setState(store.getState())
  }
 
}
 
export default TodoList;