import {connect} from "react-redux";
import DialogMessages from "./dialogMessages";
import {getDialogMessageActionCreator} from "../../../Redux/dialogs-reducer";


let mapStateToProps = (state) => {
    return {
        userId: state.currentUser.userId,
        currentDialog: state.dialogs.currentDialog,
        currentMessages: state.dialogs.currentMessages,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getDialogMessage: () => dispatch(getDialogMessageActionCreator()),
    }
}

const DialogMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(DialogMessages)
export default DialogMessagesContainer;