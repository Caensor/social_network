import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import AddPostContainer from "./AddPost/AddPostContainer";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo/>
      <AddPostContainer store = {props.store}/>

      <MyPosts posts={props.store.getState().profilePage.posts}/>
     
    </div>

  );
}

export default Profile;