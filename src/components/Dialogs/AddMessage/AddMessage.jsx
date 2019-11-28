import React from 'react';
import classes from "./AddMessage.module.css";
import Button from "./../../Button/Button";
import {changingValueActionCreator, addNewMessageActionCreator} from "../../../redux/dialogsReducer";


const AddMessage = (props) => {
 
  let messageInput = React.createRef();  

  let changingValue = () =>{
    let text = messageInput.current.value;    
    props.dispatch(changingValueActionCreator(text));
  };

  let addNewMessage = () => {
    props.dispatch(addNewMessageActionCreator())
  };

  return (
    <div>

      <textarea value={props.dialogsPage.newMessageText}
        ref={messageInput}
        className={classes.addText}
        onChange={changingValue}>

      </textarea>

      <button onClick={addNewMessage}>send</button>
    </div>
  );
}
export default AddMessage;