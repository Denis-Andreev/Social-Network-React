import React from 'react'

import classes from './friendList.module.css';

import Friend from './Friend/friend';

const FriendList = (props) => {

    let friends = props.friends.map(function(elem) {
        return (<Friend friendAvatar={elem.friendAvatar} friendName={elem.friendName} friendId={elem.friendId}/>)
    })

    return (
        <div className={classes.friend_list}>
            {friends}
        </div>
    )
}

export default FriendList;