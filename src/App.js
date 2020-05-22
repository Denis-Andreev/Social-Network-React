import React from 'react';
import {Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Main from './Main/main'


const App = (props) => {
    debugger;
    return (
        <div>
            <Main
                data={props.data}
                userId={props.userId}
                isLogIn={props.isLogIn}
                userName={props.userName}
                dispatch={props.dispatch}
            />
        </div>
    );
}


export default App;
