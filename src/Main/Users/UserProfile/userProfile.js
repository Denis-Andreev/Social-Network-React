import React from 'react'

import classes from "../../Profile/profile.module.css"
import PostsContainer from "./Posts/postsContainer";
import ProfileInfoContainer from "./ProfileInfo/profileInfoContainer";
import {Route} from "react-router-dom";


export const UserProfile = (props) => {
    let userId = props.match.params.userId;
    let path = props.location.pathname;

    return (
        <Route exact path={path} component={ () => {
            return (
                <div className={classes.profile + " section_wrapper"}>
                    <ProfileInfoContainer userId={userId}/>
                    <PostsContainer userId={userId}/>
                </div>
            )
        }} />
    )
}


export default UserProfile;