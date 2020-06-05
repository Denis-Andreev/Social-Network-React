import React, {useEffect, useState} from "react";
import classes from "./users.module.css"
import {NavLink} from "react-router-dom";
import UserProfile from "./UserProfile/userProfile";

const Users= (props) => {

    const pageSize = 4;
    const usersCount = props.users.length;
    const pagesCount =  usersCount / pageSize;
    const [usersState, setUsers] = useState({
        visibleUsers: 0,
        users: []
    });
    function showUsers() {
        let showingUsers = [];
        let usersArray = props.users;
        for (let index = usersState.visibleUsers; index < usersState.visibleUsers + pagesCount; index++) {
            if (usersArray[index]) {
                let isFollow = "Follow";
                if (usersArray[index].friends.indexOf(props.currentUserId) != -1) {
                    isFollow = "UnFollow";
                }
                showingUsers.push(
                    <User key={index}
                          userId={usersArray[index].userId}
                          currentUserId={props.currentUserId}
                          avatar={usersArray[index].avatar}
                          fullName={usersArray[index].fullName}
                          age={usersArray[index].age}
                          country={usersArray[index].country}
                          city={usersArray[index].city}
                          friends={usersArray[index].friends}
                          status={usersArray[index].status}
                          isFollow={isFollow}
                          toggleFollow={props.toggleFollow}/>
                )
            }
        }
        setUsers({
            visibleUsers: usersState.visibleUsers+5,
            users: [usersState.users, ...showingUsers]
        })
    }

    useEffect(() => {
        showUsers();
    },[props.users]);

    return (
        <div className={" section_wrapper"}>
            <div className={classes.users}>
                {usersState.users}
            </div>
            {
                usersState.visibleUsers >= usersCount ? null :  <button onClick={showUsers} className={classes.showMore + " btn btn-lg btn-info"}>Show More</button>
            }
        </div>
    )
}
export default Users;

const User = (props) => {
    let displayValue = props.userId == props.currentUserId ? "none" : "block";
    let buttonClass = props.isFollow == "Follow" ? "btn btn-dark " : "btn btn-light ";

    let userPath = "/users/"+props.userId;

    return (
        <>
            <div className={classes.user}>
                <div className={classes.userSidebar}>
                    <div className={classes.userAvatar}><img className={"img-fluid"} src={props.avatar} alt="User Avatar"/></div>
                    <button className={buttonClass + classes.showMore} style={{display: displayValue,}} onClick={ () => props.toggleFollow(props.userId, props.currentUserId)}>
                        {props.isFollow}
                    </button>
                </div>
                <div className={classes.userBody}>
                    <NavLink to={userPath} >
                        <div className={classes.userBody_mainInfo}>
                            <div className="h4">Name: {props.fullName}</div>
                            <div className="h4">Age: {props.age}</div>
                            <div className={classes.status}>{props.status}</div>
                        </div>
                    </NavLink>
                    <div className={classes.userBody_location + " h5 text-muted"}>
                        {props.country},
                        <br/>
                        {props.city}
                    </div>
                </div>
            </div>
        </>
    )
}

