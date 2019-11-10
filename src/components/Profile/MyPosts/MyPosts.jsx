import React from 'react';
import classes from "./MyPosts.module.css";
import PostItem from "./../PostItem/PostItem";



const MyPosts = (props) => {


    let post = props.posts.map(p => <PostItem posts={p} />);
   
    return (

        <div>
            {post}
        </div >

    );
}

export default MyPosts;