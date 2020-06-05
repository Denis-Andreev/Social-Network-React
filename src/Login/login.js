import React, {useState} from "react";
import classes from './login.module.css'
import {Field, reduxForm, reset} from "redux-form";
import {Redirect} from "react-router-dom";
import Alert from "react-bootstrap/Alert";

export const Login = (props, auth, isLogIn) => {

    const [errorState, setError] = useState({error: false, errorText: ""})
 //todo isLogIn undefined
    const [logInState, setLogInState] = useState(isLogIn);

    const authFunc = (formData) => {
        props.auth(formData.login, formData.password);
        if (props.isLogIn) {
            setLogInState(true);
        } else {
            // Todo ErrorStatus - undefined
            setError({error: true, errorText: "Invalid login or password"});
        }
    }

    return (
        <div className={classes.loginContainer}>
            {
                logInState == true
                    ? <Redirect to={"/profile"} />
                    : null
            }
            <h3 className="display-4">Log In</h3>
            <ReduxLoginForm errorStatus={errorState.error} errorText={errorState.errorText} onSubmit={authFunc} />
        </div>
    )
}

const LoginForm = (props) => {
    debugger;
    return (
        <form onSubmit={props.handleSubmit} className="form-group">
            {
            props.errorStatus == true
                ? <Alert variant="danger">{props.errorText}</Alert>
                : null
            }
            <Field reqired component="input" name="login" className="form-control" type="text"/>
            <Field reqired component="input" name="password" className="form-control" type="password"/>
            <button className="btn btn-lg btn-primary">Log In</button>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)