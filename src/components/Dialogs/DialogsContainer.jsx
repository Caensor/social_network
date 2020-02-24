//import React from 'react';
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {changingValueActionCreator, addNewMessageActionCreator} from "./../../redux/dialogsReducer";


const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changingValue : (text) =>{
      let action = changingValueActionCreator(text);
        
      dispatch(action);
    },

    addNewMessage : () => {
      let action = addNewMessageActionCreator();
      dispatch(action);
    }



  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;