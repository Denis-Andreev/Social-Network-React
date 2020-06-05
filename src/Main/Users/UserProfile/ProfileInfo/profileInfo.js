import React from "react";

import classes from '../../../Profile/ProfileInfo/profileInfo.module.css'



const ProfileInfo = (props,) => {
    let currentUserInfo = props.users.find((elem) => {
        if (props.userId == elem.userId) {
            return elem;
        }
    })

    return (
        //TODO Current user info is incorrect!
        <div className={classes.profile_info__wrapper}>
            <ProfileAvatar profileAvatar={currentUserInfo.avatar} />
            <InfoList showedInfo={currentUserInfo.showedInfo} info={currentUserInfo}/>
        </div>
    )
}

const InfoList = (props) => {
    let list = props.showedInfo.map(function(elem, index) {
        return (<InfoListItem infoValue={props.info[elem[0]]} infoType={elem[1]} key={index}/>)
    })
    return (
        <div className={classes.info_list}>
            {list}
            <div className={classes.status}>
                {props.info.status}
            </div>
        </div>
    )
}

const InfoListItem = (props) => {
    return (
        <div className={classes.info__item}>
            <span>
                <h6>{props.infoType + ":" || "Undefined: "}</h6>
                {props.infoValue || "undefined"}
            </span>
        </div>
    )
}

const ProfileAvatar = (props) => {
    return (
        <div className={classes.profile__avatar}>
            <img
                className="img-fluid"
                src={props.avatar || 'https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg' }
                alt="user avatar"/>
        </div>
    )
}


export default ProfileInfo;