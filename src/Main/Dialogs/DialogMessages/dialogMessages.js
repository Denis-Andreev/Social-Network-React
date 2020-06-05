import React, {Component, useEffect} from 'react';
import {Route} from "react-router-dom";

import classes from "./dialogMessages.module.css"
import MessageAddContainer from "./MessageAdd/messageAddContainer";

const DialogMessages = (props) => {

    useEffect(() => {
        props.getDialogMessage();
    },[props.currentDialog]);


    let messagesElements = props.currentMessages.map(function(elem, index)  {
            let className = elem.from == props.userId ? classes.myMessage : classes.interlocutorMessage;
            let message = elem.message;
            // TODO can finish it with new props (users[elem.from].avatar)
            let senderAvatar = "https://yt3.ggpht.com/-ruev44_r0OY/AAAAAAAAAAI/AAAAAAAAAAA/XqGF2myEBK4/s900-c-k-no-mo-rj-c0xffffff/photo.jpg";
            return (<Message className={className} senderAvatar={senderAvatar} message={message} key={index}/>)
        }
    );

    return (
        <div className={classes.dialogMessages}>
            {messagesElements}
            <MessageAddContainer
                getDialogMessage={props.getDialogMessage}
                currentDialog={props.currentDialog}
            />
        </div>
    )
}


const Message = (props) =>{
    return (
        <div className={classes.messageWrap}>
            <div className={props.className}>
                <div className={classes.senderAvatar}>
                    <img src={props.senderAvatar} className="img-fluid" alt="Sender Avatar"/>
                </div>
                <div className={classes.messageBody}>
                    {props.message}
                </div>
            </div>
            <div style={{clear:"both"}}></div>
        </div>
    )
}

export default DialogMessages;
