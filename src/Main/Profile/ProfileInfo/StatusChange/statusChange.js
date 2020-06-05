import React, {createRef, useEffect, useState} from "react";
import Modal from 'react-bootstrap/Modal'
import {Button} from "react-bootstrap";
import classes from "./../profileInfo.module.css"
import Alert from "react-bootstrap/Alert";

const StatusChange = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [errorState, setError] = useState({errorText: '', error: false});

    const [statusText, changeStatus] = useState('');

    let statusTextElement = createRef();
    function setStatus(e) {
        statusTextElement.current.dispatchEvent(new Event('blur'));
        debugger;
        //TODO WHYYYYYYYYYY ERROR FALSE??
        if (errorState.error == false) {
            props.setUserStatus(props.userId, statusText);
            props.localeSetStatus(statusText);
            handleClose()
        }
    }
    function updateStatus(e) {
        changeStatus(statusTextElement.current.value);
    }
    function blurHandler(e) {
        if(statusText.length == 0) {
            setError({error:true, errorText: "Field is empty"});
        } else if(statusText.length < 5) {
            setError({error: true, errorText: "Min length is 5 characters"});
        } else if (statusText.length > 30) {
            setError({error: true, errorText: "Max length is 30 characters"});
        } else {
            setError({error: false, errorText: "Everything all right!"})
        }
    }

    return (
        <>
            <u onClick={handleShow} className={classes.changeStatusButton}>
                Change Status
            </u>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Changing status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        ref={statusTextElement}
                        onChange={updateStatus}
                        onBlur={blurHandler}
                    />
                    {   errorState.error == true
                        ? <TypingInfo errorText={errorState.errorText}/>
                        : null
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={setStatus}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const TypingInfo = (props) => {
        return (<Alert variant="danger" className={classes.error}>{props.errorText}</Alert>)
}

export default StatusChange;