import React from 'react'

import classes from './profile.module.css';
import PostAddContainer from "./PostAdd/postAddContainer";
import PostsContainer from "./Posts/postsContainer";
import ProfileInfoContainer from "./ProfileInfo/profileInfoContainer";

const Profile = (props) => {
    return (
        <div className={classes.profile + " section_wrapper"}>
            <ProfileInfoContainer/>
            <PostAddContainer />
            <PostsContainer/>
        </div>
    )
}

export default Profile;