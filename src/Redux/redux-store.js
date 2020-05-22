import {combineReducers, createStore} from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import currentUserReducer from "./currentUser-reducer";

let reducers = combineReducers({
    currentUser: currentUserReducer,
    sidebar: sidebarReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
});

let store = createStore(reducers);

export default store;
