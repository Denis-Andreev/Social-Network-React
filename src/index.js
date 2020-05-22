import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

import store from './Redux/redux-store';

let rerenderThree = (state) => {
    debugger;
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App data={state}
                     userName={state.currentUser.userName}
                     isLogIn={state.currentUser.isLogIn}
                     userId={state.currentUser.userId}
                     dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
    debugger;
}
rerenderThree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderThree(state);
});