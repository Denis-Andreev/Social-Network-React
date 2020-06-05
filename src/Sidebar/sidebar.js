import React, {createRef} from 'react';
import {NavLink} from "react-router-dom";

import classes from './sidebar.module.css'

import Menu from './Menu/menu.js'
import FriendList from "./FriendList/friendList";

const Sidebar = (props) => {
    const sidebar = createRef();
    function scrollToTop() {
        debugger;
        if(window.pageYOffset >= window.screen.height*1.3) {
            window.scrollTo(0,0);
            sidebar.current.classList.remove(classes.blockBelow);
        }
    }
    function scrollObserver() {
        debugger;
        if(window.pageYOffset >= window.screen.height*1.3) {
            sidebar.current.classList.add(classes.blockBelow);
        }
    }
   return (
       <div ref={sidebar} onMouseEnter={scrollObserver} onClick={scrollToTop} className={classes.sidebar}>
           <Menu />
           <FriendList friends={props.sidebar.friends}/>
       </div>
   )
}


export default Sidebar;