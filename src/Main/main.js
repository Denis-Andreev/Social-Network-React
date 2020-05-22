import React from "react";
import {Route} from "react-router-dom";

import classes from './main.module.css';

import Header from '../Header/header.js'
import Sidebar from '../Sidebar/sidebar.js';
import Profile from './Profile/profile.js'
import Dialogs from "./Dialogs/dialogs.js";
import News from "./News/news.js";
import Music from "./Music/music.js";
import Settings from "./Settings/settings.js"

const Main = (props) => {
    debugger;
    return (
        <div className="wrapper">
            <Header isLogIn={props.isLogIn} userName={props.userName} />
            <main>
                <Sidebar data={props.data.sidebar} />
                <Route path='/profile' render = { () => (
                    <Profile
                        profile={props.data.profile}
                        dispatch={props.dispatch}
                    />
                )} />
                <Route path='/messages' render = { () => (
                    <Dialogs dispatch={props.dispatch}
                             userId={props.userId}
                             dialogs={props.data.dialogs} />
                )} />
                <Route path='/news' render = { () => (
                    <News />
                )} />
                <Route path='/music' render = { () => (
                    <Music />
                )} />
                <Route path='/settings' render = { () => (
                    <Settings />
                )} />
            </main>
        </div>
    )
}

export default Main;