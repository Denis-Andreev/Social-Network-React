import React, {Component} from 'react';

import classes from "./postAdd.module.css"

const PostAdd = () => {
    return (
        <div className={classes.wrapper} >
                <span>Write your post:</span>
                <textarea
                    onKeyDown={addLine.bind(this)}
                    name=""
                    id=""
                    rows="6">
                </textarea>
            <button className={" float-right btn btn-primary btn-lg"}>Send</button>
        </div>
    )
}
// TODO Rewrite as class method
function addLine(e) {
    let textarea = document.querySelector("textarea");
    let count = (textarea.value.split("\n")).length;
    if (count > 5) {
        textarea.rows = count;
    }
}

export default PostAdd;