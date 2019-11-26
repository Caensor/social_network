import React from 'react';
import classes from "./AddMessage.module.css";
import Button from "./../../Button/Button";

const AddMessage = (props) => {
 
  let messageInput = React.createRef();  

  let changingValue = () =>{
    let text = messageInput.current.value;    
    props.dispatch({type:"CHANGING-VALUE", text: text})
  };

  let addNewMessage = () => {
    props.dispatch({type:"ADD-NEW-MESSAGE"})
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