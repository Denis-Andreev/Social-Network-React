import React from 'react'

import classes from './profile.module.css';
import ProfileInfo from "./ProfileInfo/profileInfo";
import Posts from "./ProfileInfo/Posts/posts";
import PostAdd from "./ProfileInfo/PostAdd/postAdd";

const Profile = (props) => {
    return (
        <div className={classes.profile + " section_wrapper"}>
            <ProfileInfo profileInfo={props.profile.profileInfo}/>
            <PostAdd
                newPostText={props.profile.newPostText}
                dispatch={props.dispatch}
            />
            <Posts posts={props.profile.posts}/>
        </div>
    )
}

export default Profile;