import {connect} from "react-redux";
import MessageAdd from "./messageAdd";
import {sendDialogMessageActionCreator, updateNewDialogMessagesActionCreator} from "../../../../Redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        newMessagesText: state.dialogs.newMessagesText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendDialogMessage: () => dispatch(sendDialogMessageActionCreator()),
        updateNewDialogMessages: (body) => {
            dispatch(updateNewDialogMessagesActionCreator(body));
        }
    }
}

let MessageAddContainer = connect(mapStateToProps, mapDispatchToProps)(MessageAdd);

export default MessageAddContainer;