import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(this.props.isLogIn == true) {
                return <Component {...this.props} />
            } else {
                return <Redirect to='/login' />
            }
        }
    }
    let RedirectComponentWithState = connect((state) => ({ isLogIn: state.currentUser.isLogIn,}), {})(RedirectComponent);
    return RedirectComponentWithState;
}
