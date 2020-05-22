import React, {createRef} from "react";
import classes from "./messageEdit.module.css"
import {sendDialogMessageActionCreator, updateNewDialogMessagesActionCreator} from "../../../../Redux/store";



const MessageEdit = (props) => {
    const newMessageElement = createRef();
    // Edit control
    function newMessageEditing(e) {
        if (!e.shiftKey && e.key == "Enter") {
            e.preventDefault();
            props.dispatch(sendDialogMessageActionCreator());
        }
        addLine();
    }
    function newMessageChange() {
        let body = newMessageElement.current.value;
        props.dispatch(updateNewDialogMessagesActionCreator(body));
    }
    // Corrected rows count on editing
    function addLine() {
        let rowCount = (newMessageElement.current.value.split("\n")).length;
        if (rowCount > 5 && rowCount < 13) {
            newMessageElement.current.rows = rowCount;
        }
    }
    return (
        <div className={classes.editContainer}>
                <span>Write your post:</span>
                <textarea
                    value={props.newPostText}
                    ref={newMessageElement}
                    onKeyDown={newMessageEditing}
                    onChange={newMessageChange}
                    name=""
                    id=""
                    rows="5">
                </textarea>
                <button className={" float-right btn btn-primary btn-lg"}
                        onClick={ () => props.dispatch(sendDialogMessageActionCreator()) }>Add post</button>
        </div>
    )
}

export default  MessageEdit;