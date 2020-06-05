import classes from "./dialogMessages.module.css";
import React from "react";

export const DefaultDialogWindow = (props) => {
    return (
        <div className={classes.defaulfDialogsWindow}>
            <span className="display-4">Hello user! Select the dialog and go typing messages for your interlocutors</span>
        </div>
    )
}