import React from 'react';
import {NavLink} from "react-router-dom";

import classes from './dialogs.module.css'
import DialogNames from "./DialogNames/dialogNames";
import DialogMessagesContainer from "./DialogMessages/dialogMessagesContainer";
import {DefaultDialogWindow} from "./DialogMessages/defaultDialogWindow";
import DialogNamesContainer from "./DialogNames/dialogNamesContainer";

const Dialogs = (props) => {
    return (
        <div className={classes.wrapper + " section_wrapper"}>
            <DialogNamesContainer />
            {props.currentDialog == null
                ? <DefaultDialogWindow />
                : <DialogMessagesContainer />

            }
        </div>
    )
}

export default Dialogs;