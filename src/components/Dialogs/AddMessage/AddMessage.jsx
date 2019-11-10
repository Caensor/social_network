import React from 'react';
import classes from "./AddMessage.module.css";

const AddMessage = () =>{
  return(
  <div className={classes.addText}>
   <textarea>

   </textarea>
   <div className={classes.button}>send</div>
  </div>
  );
}
export default AddMessage;