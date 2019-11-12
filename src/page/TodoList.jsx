import React, { Component } from 'react';
import store from "../store";
import { changeInputAction,addItemAction,deleteItemAction,getListData,getMyListAction } from "../store/actionCreatores";
import TodoListUi from "./ToduListUi";
import {connect} from 'react-redux'


// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = store.getState()
//     // this.changeInputValue=this.changeInputValue.bind(this)
//     // this.deleteItem=this.deleteItem.bind(this)
//     // store改变就让页面订阅渲染
//     // this.storeChange = this.storeChange.bind(this)
//     // store.subscribe(this.storeChange) //订阅Redux的状态

//     //优化
//   }

//   componentDidMount(){
//     // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
//     //   console.log(res.data)
//     //   const action=getListData(res.data)
//     //   store.dispatch(action)

//     // })

//     // 修改成react-thunk方式
//     // const action=getListData()
//     // store.dispatch(action)


//     // 使用saga的方式处理
//     const action=getMyListAction()
//     store.dispatch(action)
//   }
  
//   render() { 
//     let {inputValue,changeInputValue,cliBtn,List,deleteItem}=this.props;
//     return ( 
//       <TodoListUi 
//       InputVlue={inputValue}
//       changeInputValue={changeInputValue}
//       cliBtn={cliBtn}
//       List={List}
//       deleteItem={deleteItem}
//       />
//      );
//   }
//   // changeInputValue(e){
//   //   const action=changeInputAction(e.target.value)
//   //   store.dispatch(action)
//   // }
//   // cliBtn=()=>{
//   //   const action=addItemAction()
//   //   store.dispatch(action)
//   // }
//   // deleteItem=(index)=>{
//   //   const action=deleteItemAction(index)
//   //   store.dispatch(action)
//   // }
//   // storeChange(){
//   //   this.setState(store.getState())
//   // }
 
// }
// const stateToProps = (state)=>{
//   console.log(state)
//   return {
//       inputValue : state.inputValue,
//       List:state.List
//   }
// }
// const dispatchToProps = (dispatch) =>{
//   return {
//     changeInputValue(e){
//       const action=changeInputAction(e.target.value)
//       dispatch(action)
//     },
//     cliBtn(){
//       const action=addItemAction()
//       dispatch(action)
//     },
//     deleteItem(index){
//       const action=deleteItemAction(index)
//       dispatch(action)
//     },
//     storeChange(){
//       this.setState(store.getState())
//     }
//   }
// }


const TodoList=(props)=>{
  let {inputValue,changeInputValue,cliBtn,List,deleteItem}=props;
  return ( 
    <TodoListUi 
    InputVlue={inputValue}
    changeInputValue={changeInputValue}
    cliBtn={cliBtn}
    List={List}
    deleteItem={deleteItem}
    />
  );
}
const stateToProps = (state)=>{
  console.log(state)
  return {
      inputValue : state.inputValue,
      List:state.List
  }
}
const dispatchToProps = (dispatch) =>{
  return {
    changeInputValue(e){
      const action=changeInputAction(e.target.value)
      dispatch(action)
    },
    cliBtn(){
      const action=addItemAction()
      dispatch(action)
    },
    deleteItem(index){
      const action=deleteItemAction(index)
      dispatch(action)
    },
    storeChange(){
      this.setState(store.getState())
    }
  }
}
export default connect(stateToProps,dispatchToProps)(TodoList);