import React from 'react';
import classes from "./MyPosts.module.css";
import PostItem from "./../PostItem/PostItem";
import {Button} from 'react-bootstrap';


const MyPosts = (props) => {

    let textInput = React.createRef();

    let addNewPost = () => {        
        props.addNewPost();
    }

    let newText = () => {
        let text = textInput.current.value;        
        props.newText(text);

    }

    let textValue = props.profilePage.textValue;
    
    let post = props.profilePage.posts.map(p => <PostItem posts={p} />);

    return (
        
        <div>
            <div>
                <textarea className={classes.addText}
                    ref={textInput}
                    onChange={newText}
                    value={textValue}>
                </textarea>
                <Button variant="primary" onClick={addNewPost}>add</Button>{' '}
            </div>
            {post}
        </div >

    );
}

export default MyPosts;