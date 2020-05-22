import React from 'react';
import {NavLink} from "react-router-dom";

import classes from './dialogs.module.css'
import DialogNames from "./DialogNames/dialogNames";
import DialogMessages from "./DialogMessages/dialogMessages";

const Dialogs = (props) => {
    return (
        <div className={classes.wrapper + " section_wrapper"}>
            <DialogNames dispatch={props.dispatch}
                         interlocutors={props.dialogs.interlocutors}
            />
            <DialogMessages dispatch={props.dispatch}
                            userId={props.userId}
                            currentDialog={props.dialogs.currentDialog}
                            messages={props.dialogs.messages}
                            newMessagesText={props.dialogs.newMessagesText}
            />
        </div>
    )
}

export default Dialogs;