import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";





const MyPosts = (props) => {
    const newPostElem = React.createRef();

    const postElements = props.posts.map(post =>
        <Post post={post.message} likesCount={post.likes}/>);

    const addPost = () => {
        props.addPost();
    };

    const newText = () => {
        let text = newPostElem.current.value;
        props.newText(text);

    };


    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea value={props.newPostText} ref={newPostElem} onChange={newText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
};


export default MyPosts;