import React from 'react';
import classes from "./AddMessage.module.css";
import Button from "./../../Button/Button";

const AddMessage = () =>{
 
  return(
  <div >
   <textarea className={classes.addText}></textarea>
   <button>send</button>
  </div>
  );
}
export default AddMessage;