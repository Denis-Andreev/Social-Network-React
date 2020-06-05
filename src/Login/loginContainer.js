import {connect} from "react-redux";
import {Login} from "./login";
import {authActionCreator} from "../Redux/currentUser-reducer";

const mapStateToProps = (state) => {
    return {
        isLogIn: state.currentUser.isLogIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        auth: (login,password) => dispatch(authActionCreator(login, password))
    }
}

export const LoginContainer =  connect(mapStateToProps, mapDispatchToProps)(Login)