import React from 'react';

import {connect} from "react-redux";
import Dialogs from "./dialogs";

const mapStateToProps = (state) => {
    return {
        currentDialog: state.dialogs.currentDialog,
        newMessagesText: state.dialogs.newMessagesText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default  DialogsContainer;