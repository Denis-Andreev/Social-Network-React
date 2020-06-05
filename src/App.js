import React from 'react';
import {Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {MainContainer} from "./Main/mainContainer";
import {LoginContainer} from "./Login/loginContainer";


const App = (props) => {
    return (
        <div>
            <Switch>
                <Route path="/login">
                    <LoginContainer />
                </Route>
                <Route path="/">
                    <MainContainer />
                </Route>
            </Switch>
        </div>
    );
}


export default App;
