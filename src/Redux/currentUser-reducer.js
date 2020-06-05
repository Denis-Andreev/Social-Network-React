import {forEach} from "react-bootstrap/cjs/ElementChildren";

const AUTHORIZATION = "AUTHORIZATION";
const TOGGLE_AUTH = "TOGGLE-AUTH";
export const authActionCreator = (login, password) => ({type: AUTHORIZATION, login, password});

export const toggleAuthActionCreator = () => ({type: TOGGLE_AUTH});

let currentUser = {
    userName: "Denis Andreev",
    userId: 0,
    isLogIn: false,
    users: [
        {
            login: 'admin',
            password: 'admin',
        },
    ]
};

const currentUserReducer = (state = currentUser, action) => {
    switch(action.type) {
        case TOGGLE_AUTH: {
            return {
                ...state,
                isLogIn: !state.isLogIn,
            }
        }
        case AUTHORIZATION: {
            let user = state.users.find((user) => {
                if (user.login == action.login && user.password == action.password) {
                    return user;
                }
            })
            if (user) {
                return {
                    ...state,
                    isLogIn: true,
                }
            }
        }
    }
    return state;
}

export default currentUserReducer;

