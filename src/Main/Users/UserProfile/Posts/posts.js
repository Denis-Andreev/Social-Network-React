import React from 'react';

import classes from '../../../Profile/Posts/posts.module.css'


const Posts = (props) => {
    let userPosts;
    props.usersPosts.filter(function(elem,index) {
        if(elem.userId == props.userId) {
            userPosts = elem.posts.map((post, postIndex) => {
                return (<Post
                    id={post.id}
                    authorAvatar={post.authorAvatar}
                    postText={post.postText}
                    likesCount={post.likesCount}
                    key={postIndex}
                />)
            })
        }
    })
    return (
        <div className={classes.posts}>
            {userPosts}
        </div>
    )
}

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.author_avatar}>
                <img
                    className="img-fluid"
                    src={props.authorAvatar}
                    alt=""/>
            </div>
            <div className={classes.post_text}>
                <p>
                    {props.postText}
                </p>
            </div>
            <div className={classes.likesCount}>{props.likesCount}</div>
        </div>
    )
}


export default Posts;