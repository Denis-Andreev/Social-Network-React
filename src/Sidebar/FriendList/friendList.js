import React from 'react'

import classes from './friendList.module.css';

import Friend from './Friend/friend';

const FriendList = (props) => {

    let friends = props.friends.map(function(elem, index) {
        return (<Friend friendAvatar={elem.friendAvatar} friendName={elem.friendName} friendId={elem.friendId} key={index}/>)
    })

    return (
        <div className={classes.friend_list}>
            {friends}
        </div>
    )
}

export default FriendList;