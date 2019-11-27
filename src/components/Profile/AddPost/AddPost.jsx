import React from 'react';
import classes from "./AddPost.module.css";
import Button from "./../../Button/Button";
import {addNewPostActionCreator, updateTextActionCreator} from "./../../../redux/store";


const AddPost = (props) =>{
    let textInput = React.createRef();
    
    const newText = () =>{
        let text = textInput.current.value;
        props.dispatch (updateTextActionCreator(text));

    }    

    const addNewPost = () =>{
        props.dispatch (addNewPostActionCreator());
    }
    
    return(
    <div>
        <textarea className={classes.addText}
            ref={textInput}
            onChange={newText}
            value={props.textValue}>
        </textarea>        
        <button onClick={addNewPost}>add</button>
   </div> 
   );
       

}

export default AddPost;