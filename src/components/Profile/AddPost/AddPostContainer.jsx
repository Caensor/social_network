import React from 'react';
import classes from "./AddPost.module.css";
import Button from "./../../Button/Button";
import {addNewPostActionCreator, updateTextActionCreator} from "./../../../redux/profileReducer";
import AddPost from "./AddPost";

const AddPostContainer = (props) =>{
    
    let state = props.store.getState(); 
   
    let addNewPost = () =>{    
        let action = addNewPostActionCreator();
        props.store.dispatch(action);
    }

    let newText = (text) =>{
        let action = updateTextActionCreator(text);
        props.store.dispatch(action);

    }    

    return(
        <AddPost newPostText = {newText} addPost = {addNewPost}
                    textValue= {state.profilePage.textValue}/>
   );
       

}

export default AddPostContainer;