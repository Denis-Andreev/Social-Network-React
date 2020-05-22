import React from "react";

import classes from './profileInfo.module.css'

// TODO transfer profileInfo to redux


const ProfileInfo = (props) => {
    return (
        //TODO Current user info is incorrect!
        <div className={classes.profile_info__wrapper}>
            <ProfileAvatar profileAvatar={props.profileInfo.avatar} />
            <InfoList showedInfo={props.profileInfo.showedInfo} info={props.profileInfo}/>
        </div>
    )
}

const InfoList = (props) => {
    let list = props.showedInfo.map(function(elem) {
        return (<InfoListItem infoValue={props.info[elem[0]]} infoType={elem[1]} />)
    })
    return (
        <div className={classes.info_list}>
            {list}
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