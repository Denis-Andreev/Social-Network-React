import React from "react";

import classes from './profileInfo.module.css'
import StatusChange from "./StatusChange/statusChange";



const ProfileInfo = (props) => {
    return (
        //TODO Current user info is incorrect!
        <div className={classes.profile_info__wrapper}>
            <ProfileAvatar profileAvatar={props.profileInfo.avatar} />
            <InfoList showedInfo={props.profileInfo.showedInfo}
                      profileInfo={props.profileInfo}
                      setUserStatus={props.setUserStatus}
                      localeSetStatus={props.localeSetStatus}
            />
        </div>
    )
}

const InfoList = (props) => {
    let list = props.showedInfo.map(function(elem, index) {
        return (<InfoListItem infoValue={props.profileInfo[elem[0]]} infoType={elem[1]} key={index}/>)
    })
    return (
        <div className={classes.info_list}>
            {list}
            <div className={classes.status}>
                {props.profileInfo.status}
                <StatusChange
                    userId={props.profileInfo.userId}
                    setUserStatus={props.setUserStatus}
                    localeSetStatus={props.localeSetStatus}
                />
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