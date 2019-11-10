import React from 'react';
import classes from "./Dialogs.module.css"
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";
import AddMessage from "./AddMessage/AddMessage";


const Dialogs = (props) => {

debugger;
  return (
    <div>
      <div className={classes.dialogsMain}>
        <div className={classes.dialogsMain}><DialogsList dialogItem={props.dialogsPage.dialogItem}/></div> 
        <div className={classes.messages}>
          <Messages messages={props.dialogsPage.messages}/></div>
        <div className={classes.messageInput}><AddMessage/></div> 
      </div>
    </div>
  );
}

export default Dialogs;