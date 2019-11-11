import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import AddPost from "./AddPost/AddPost";

const Profile = (props) => {
      
  

  return (
    <div>
      <ProfileInfo/>
      <AddPost 
       addNewPost={props.profilePage.addNewPost}
      updateText={props.profilePage.updateText} textValue={props.profilePage.textValue}/>
      <MyPosts posts={props.profilePage.posts}/>
     
    </div>

  );
}

export default Profile;