import React from "react";
import {Route, Switch} from "react-router-dom";

import classes from './main.module.css';

import Profile from './Profile/profile.js'
import News from "./News/news.js";
import Music from "./Music/music.js";
import Settings from "./Settings/settings.js"
import HeaderContainer from "../Header/HeaderContainer";
import SidebarContainer from "../Sidebar/sidebarContainer";
import UsersContainer from "./Users/usersContainer";
import UsersProfilesContainer from "./Users/UserProfile/userProfileContainer";
import DialogsContainer from "./Dialogs/dialogsContainer";
import UserProfileContainer from "./Users/UserProfile/userProfileContainer";

const Main = (props) => {
    return (
        <div className="wrapper">
            <HeaderContainer />
            <main>
                <SidebarContainer />
                <Switch>
                    <Route path='/profile' render = { () => (
                        <Profile />
                    )} />

                        <Route exact path='/users' render = { () => (
                            <UsersContainer />
                        )} />
                        <Route exact path={'/users/:userId'} render={() => <UserProfileContainer />} />

                    <Route path='/messages' render = { () => (
                        <DialogsContainer />
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
                </Switch>
            </main>
        </div>
    )
}

export default Main;