import React, { Component } from 'react';
import store from "../store";
import { changeInputAction,addItemAction,deleteItemAction } from "../store/actionCreatores";
import TodoListUi from "./ToduListUi";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.changeInputValue=this.changeInputValue.bind(this)
    this.deleteItem=this.deleteItem.bind(this)
    console.log(this.state)
    // store改变就让页面订阅渲染
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange) //订阅Redux的状态
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