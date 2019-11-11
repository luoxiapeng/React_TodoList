import React from 'react';
import { Input,Button,List } from "antd";
import 'antd/dist/antd.css';

const TodoListUi=(props)=>{
  return(
    <div style={{margin:'10px'}}>
    <div>
      <Input onChange={props.changeInputValue} placeholder={props.inputValue} style={{width:'250px',marginRight:'10px'}}></Input>
      <Button type="primary" onClick={props.cliBtn}>增加</Button>
    </div>
    <div style={{margin:'10px',width:'300px'}}>
      <List  bordered dataSource={props.List} renderItem={(item,index)=>(
      <List.Item 
        onClick={
          ()=>{
            props.deleteItem(index)
          }
        }>{item}</List.Item>
      )}
      />
    </div>
  </div>

  )
}

 
export default TodoListUi;