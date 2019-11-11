import React from 'react';
import classes from "./AddMessage.module.css";
import Button from "./../../Button/Button";

const AddMessage = (props) => {
 
  let messageInput = React.createRef();  

  let changingValue = () =>{
    let text = messageInput.current.value;
    props.dialogsPage.changingValue(text);
  }

  return (
    <div>

      <textarea value={props.dialogsPage.newMessageText}
        ref={messageInput}
        className={classes.addText}
        onChange={changingValue}>

      </textarea>

      <button onClick={props.dialogsPage.addNewMessage}>send</button>
    </div>
  );
}
export default AddMessage;