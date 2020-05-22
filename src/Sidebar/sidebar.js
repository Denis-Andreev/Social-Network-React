import React from 'react';
import {NavLink} from "react-router-dom";

import classes from './sidebar.module.css'

import Menu from './Menu/menu.js'
import FriendList from "./FriendList/friendList";

const Sidebar = (props) => {
   return (
       <div className={classes.sidebar}>
           <Menu />
           <FriendList friends={props.data.friends}/>
       </div>
   )
}


export default Sidebar;