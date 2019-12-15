import React from 'react';
import classes from "./AddPost.module.css";
import Button from "./../../Button/Button";


const AddPost = (props) =>{
    let textInput = React.createRef();

    let addNewPost = () =>{
        props.addPost();
        //props.dispatch (addNewPostActionCreator());
    }
    
    let newText = () =>{
        let text = textInput.current.value;
        props.newPostText(text);
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