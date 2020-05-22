import React from 'react';
import {Button} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

import classes from './header.module.css';

const Header = (props) => {
    return (
     <header className="row no-gutters">
         <span className={classes.logo}>
             <h5><i className={classes.person_name +" fa fa-user-circle-o"}></i>{props.userName}</h5>
         </span>
         <div className="ml-auto ">
             {props.isLogIn && <Auth /> }
             {!props.isLogIn && <LogOut/>}
         </div>
     </header>
    )
}
const Auth = (props) => {
    return (
        <span>
            <LogIn  />
            <SignUp />
        </span>
    )
}
const LogIn = (props) => {
    return (
        <NavLink className="btn btn-dark" to={"/login"} >Log in</NavLink>
    )
}
const SignUp = (props) => {
    return (
        <NavLink className="btn btn-primary" to={"/signin"}>Sign in</NavLink>
    )
}

const LogOut = (props) => {
    return (
        <NavLink className="btn btn-dark" to={"/login"}>Log out</NavLink>
    )
}

export default  Header;