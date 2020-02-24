import React from 'react';
import classes from "./MyPosts.module.css";
import PostItem from "../PostItem/PostItem";
import { addNewPostActionCreator, updateTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        profilePage : state.profilePage
    }
   

};

let mapDispatchToProps = (dispatch) => {
    return{

        addNewPost: () => {
            let action = addNewPostActionCreator();
            dispatch(action);
        },
        newText: (text) => {
            let action = updateTextActionCreator(text);
            dispatch(action);

        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;