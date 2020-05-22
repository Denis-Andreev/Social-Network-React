import React from 'react'

import classes from './friend.module.css';

const Friend = (props) => {
    return (
        <div className={classes.friend}>
            <div className={classes.friend__avatar__container}>
                <img className={classes.friend__avatar}
                     src={props.friendAvatar}
                     alt={props.friendName + " avatar"}/>
            </div>
            <div className={classes.friend__name}>
                { props.friendName }
            </div>
        </div>
    )
}

export default Friend;