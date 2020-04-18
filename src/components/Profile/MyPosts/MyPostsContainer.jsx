import React from 'react';
import {addPostActionCreator, newTextActionCreator} from "../../../Redax/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = () => {
//
//     return <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
//
//                 const newText = (text) => {
//                     store.dispatch(newTextActionCreator(text));
//                 };
//
//                 return <MyPosts newText={newText}
//                                addPost={addPost}
//                                posts={state.profilePage.posts}
//                                newPostText={state.profilePage.newPostText}
//                 />
//             }}
//         </StoreContext.Consumer>
//
// };

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },

        newText: (text) => {
            dispatch(newTextActionCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;