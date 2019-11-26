import React from 'react';
import classes from "./AddPost.module.css";
import Button from "./../../Button/Button";


const AddPost = (props) =>{
    let textInput = React.createRef();
    
    const newText = () =>{
        let text = textInput.current.value;
        props.dispatch ({type: "UPDATE-TEXT", text: text});

    }    

    const addNewPost = () =>{
        props.dispatch ({type: "ADD-NEW-POST"});
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