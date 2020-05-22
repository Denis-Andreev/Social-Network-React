import React from 'react';

import classes from './posts.module.css'


const Posts = (props) => {

    let posts = props.posts.map(function(elem) {
        return (<Post authorAvatar={elem.authorAvatar} postText={elem.postText} likesCount={elem.likesCount}/>)
    })

    return (
       <div className={classes.posts}>
           {posts}
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