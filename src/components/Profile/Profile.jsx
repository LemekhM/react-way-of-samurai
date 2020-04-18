import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileImfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
                              // posts={props.profilePage.posts}
                              // newPostText={props.profilePage.newPostText}
                              // dispatch={props.dispatch}
            />
        </div>
    )
};
export default Profile;