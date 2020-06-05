import React from 'react'
import {NavLink} from "react-router-dom";

import ListGroup from 'react-bootstrap/ListGroup'
import classes from './menu.module.css';

const Menu = () => {
    return (
        <div className={classes.menu}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <NavLink activeClassName="" to={"/profile"} >Profile</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink activeClassName="" to={"/users"} >Users</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink activeClassName="" to={"/messages"} >Messages</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink activeClassName="" to={"/news"} >News</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink activeClassName="" to={"/music"} >Music</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink activeClassName="" to={"/settings"} >Settings</NavLink>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Menu;