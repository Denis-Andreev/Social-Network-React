import React from 'react';

import {connect} from "react-redux";
import {changeCurrentDialogActionCreator} from "../../../Redux/dialogs-reducer";
import DialogNames from "./dialogNames";

const mapStateToProps = (state) => {
    return {
        interlocutors: state.dialogs.interlocutors,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentDialog: (userId) => dispatch(changeCurrentDialogActionCreator(userId))
    }
}
const DialogNamesContainer = connect(mapStateToProps, mapDispatchToProps)(DialogNames);


export default  DialogNamesContainer;