import React, {Component} from 'react';
import {Route} from "react-router-dom";

import classes from "./dialogMessages.module.css"
import MessageAdd from "./MessageAdd/messageAdd";

const DialogMessages = (props) => {
    if(props.currentDialog == null) {
        return <DefaultDialogWindow />
    }
    let userId = parseInt(props.userId);
    let interlocutorId = parseInt(props.currentDialog);
    // Selecting messages related to the current dialog
    let messages = props.messages.filter(function(elem) {
        if ( (parseInt(elem.from) == userId || parseInt(elem.to) == userId) &&
             (parseInt(elem.from) == interlocutorId || parseInt(elem.to) == interlocutorId) ) {
            return true;
        } else {
            return false;
        }
    }).sort((a,b) => (Date.parse(a.date) - Date.parse(b.date)));
    console.log(messages,'after');
    // Creating messages elements
    let messagesElements = messages.map(function(elem)  {
            let className = elem.from == userId ? classes.myMessage : classes.interlocutorMessage;
            let message = elem.message;
            // TODO can finish it with new props (users[elem.from].avatar)
            let senderAvatar = "https://yt3.ggpht.com/-ruev44_r0OY/AAAAAAAAAAI/AAAAAAAAAAA/XqGF2myEBK4/s900-c-k-no-mo-rj-c0xffffff/photo.jpg";
            return (<Message className={className} senderAvatar={senderAvatar} message={message} />)
        }
    );

    return (
        <div className={classes.dialogMessages}>
            {messagesElements}
            <MessageAdd
                dispatch={props.dispatch}
                newMessagesText={props.newMessagesText}
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

const DefaultDialogWindow = (props) => {
    return (
        <div className={classes.defaulfDialogsWindow}>
            <span className="display-4">Hello user! Select the dialog and go typing messages for your interlocutors</span>
        </div>
    )
}
export default DialogMessages;