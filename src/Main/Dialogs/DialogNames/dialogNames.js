import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import classes from './dialogsNames.module.css'
import {changeCurrentDialogActionCreator} from "../../../Redux/dialogs-reducer";


const DialogNames = (props) => {
    let dialogNames = props.interlocutors.map(function(elem) {
       return (
           <DialogNamesItem changeCurrentDialog={props.changeCurrentDialog} userId={elem.userId} userName={elem.userName} />
       )
    });
    return (
        <div className={classes.dialogsNames}>
            <h3 className="sectionTitle">Dialog list</h3>
            {dialogNames}
        </div>
    )
}

const DialogNamesItem = (props) => {
  return (
      <div className={classes.interlocutor}>
          <NavLink onClick={() => props.changeCurrentDialog(props.userId) }
                   to={"/messages/" + props.userId} >
              <span>{ props.userName }</span>
          </NavLink>
      </div>
  )
}
export default DialogNames;