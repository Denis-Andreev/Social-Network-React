import React, {Component} from 'react';

import classes from "./postAdd.module.css"
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../Redux/profile-reducer";


const PostAdd = (props) => {
    let newPostElement = React.createRef();

    // Edit control
    function newPostEditing(e) {
        if (!e.shiftKey && e.key == "Enter") {
            e.preventDefault();
            props.dispatch(addPostActionCreator());
        }
        addLine();
    }
    function newPostChange() {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }
    // Corrected rows count on editing
    function addLine() {
        let rowCount = (newPostElement.current.value.split("\n")).length;
        if (rowCount > 5 && rowCount < 13)  {
            newPostElement.current.rows = rowCount;
        }
    }
    return (
        <div className={classes.wrapper} >
                <span>Write your post:</span>
                <textarea
                    value={props.newPostText}
                    ref={newPostElement}
                    onKeyDown={newPostEditing}
                    onChange={newPostChange}
                    name=""
                    id=""
                    rows="6">
                </textarea>
            <button className={" float-right btn btn-primary btn-lg"}
                    onClick={ () => props.dispatch(addPostActionCreator()) }>Add post</button>
        </div>
    )
}


export default PostAdd;