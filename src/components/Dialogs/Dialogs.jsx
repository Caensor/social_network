import React from 'react';
import classes from "./Dialogs.module.css"
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";
import AddMessageContainer from "./AddMessage/AddMessageContainer";


const Dialogs = (props) => {

  return (
    <div>
      <div className={classes.dialogsMain}>
        <div className={classes.dialogsMain}><DialogsList dialogItem={props.store.getState().dialogsPage.dialogItem} /></div>
        <div className={classes.messages}>
          <Messages messages={props.store.getState().dialogsPage.messages} /></div>
        <div className={classes.messageInput}><AddMessageContainer
          store={props.store} /></div>
      </div>
    </div>
  );
}

export default Dialogs;