import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from "redux-thunk";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import currentUserReducer from "./currentUser-reducer";
import usersReducer from "./users-reducer";
import {reducer as formReducer} from 'redux-form'
import newsReducer from "./news-reducer";

let reducers = combineReducers({
    currentUser: currentUserReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    news: newsReducer,
    form: formReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleWare)));

export default store;