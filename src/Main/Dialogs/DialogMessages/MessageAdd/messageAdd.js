import React, {createRef} from "react";
import classes from "./messageAdd.module.css"



const MessageAdd = (props) => {

    const newMessageElement = createRef();
    // Edit control
    function newMessageEditing(e) {
        if (!e.shiftKey && e.key == "Enter") {
            e.preventDefault();
            props.sendDialogMessage();
        }
        addLine();
    }
    function newMessageChange() {
        let body = newMessageElement.current.value;
        props.updateNewDialogMessages(body);
    }
    // Corrected rows count on editing
    function addLine() {
        let rowCount = (newMessageElement.current.value.split("\n")).length;
        if (rowCount > 5 && rowCount < 13) {
            newMessageElement.current.rows = rowCount;
        }
    }
    function sendMessage() {
        props.sendDialogMessage();
        props.getDialogMessage();
    }

    // TODO On first open dialog message is undefined. This is a bad fix. Rewrite it
    let message;
    let messageIsExists = false;
    props.newMessagesText.forEach((elem) => {
        if (elem.interlocutorId == props.currentDialog) {
            message = elem.body;
            messageIsExists = true;
        }
    })

    if (messageIsExists == false) {
        message = "";
    }
    return (
        <div className={classes.editContainer}>
                <span>Write your message:</span>
                <textarea
                    value={message}
                    ref={newMessageElement}
                    onKeyDown={newMessageEditing}
                    onChange={newMessageChange}
                    name=""
                    id=""
                    rows="5">
                </textarea>
                <button className={" float-right btn btn-primary btn-lg"}
                        onClick={sendMessage} >Send</button>
        </div>
    )

}

export default  MessageAdd;