import React from 'react';

import {connect} from "react-redux";
import Header from "./header";
import {toggleAuthActionCreator} from "../Redux/currentUser-reducer";

const mapStateToProps = (state) => {
    return {
        isLogIn: state.currentUser.isLogIn,
        userName: state.currentUser.userName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleAuth: () => dispatch(toggleAuthActionCreator()),
    }
}
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);


export default  HeaderContainer;