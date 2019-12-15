import React from 'react';
import classes from "./AddMessage.module.css";
import {changingValueActionCreator, addNewMessageActionCreator} from "../../../redux/dialogsReducer";
import AddMessage from "./AddMessage";

const AddMessageContainer = (props) => {
  let state = props.store.getState();

  let messageInput = React.createRef();  

  let changingValue = (text) =>{
    let action = changingValueActionCreator(text);
      
    props.store.dispatch(action);
  };

  let addNewMessage = () => {
    let action = addNewMessageActionCreator();
    props.store.dispatch(action);
  };

  return (
    <AddMessage 
      addNewMessage = {addNewMessage}
      changingValue = {changingValue}
      newMessageText = {state.dialogsPage.newMessageText}/>
  );
}
export default AddMessageContainer;