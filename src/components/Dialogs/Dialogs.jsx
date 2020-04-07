import React from 'react';
import classes from "./Dialogs.module.css"
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";
import {Button} from 'react-bootstrap';



const Dialogs = (props) => {
  let messageInput = React.createRef();

  let changingValue = () => {
    let text = messageInput.current.value;
    props.changingValue(text);
  };

  let addNewMessage = () => {
    props.addNewMessage();
  };
  return (
    <div>
      <div className={classes.dialogsMain}>
        <div className={classes.dialogsMain}>
          <DialogsList dialogItem={props.state.dialogsPage.dialogItem} />
        </div>

        <div className={classes.messages}>
          <Messages messages={props.state.dialogsPage.messages} />
        </div>


        <div>

          <textarea value={props.state.dialogsPage.newMessageText}
            ref={messageInput}
            className={classes.addText}
            onChange={changingValue}>
          </textarea>

          
          <Button variant="primary" onClick={addNewMessage}>send</Button>{' '}
        </div>


        {/*<div className={classes.messageInput}>
          <AddMessageContainer
            state={props.state}
            dispatch={props.dispatch} />
        </div>
  */}
      </div>
    </div>
  );
}

export default Dialogs;