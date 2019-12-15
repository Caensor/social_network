import React from 'react';
import classes from "./AddMessage.module.css";


const AddMessage = (props) => { 

  let messageInput = React.createRef();  

  let changingValue = () =>{
    let text = messageInput.current.value;    
    props.changingValue(text);
  };

  let addNewMessage = () => {
    props.addNewMessage();
  };

  return (
    <div>

      <textarea value={props.newMessageText}
        ref={messageInput}
        className={classes.addText}
        onChange={changingValue}>

      </textarea>

      <button onClick={addNewMessage}>send</button>
    </div>
  );
}
export default AddMessage;