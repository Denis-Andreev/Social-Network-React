const CHANGE_CURRENT_DIALOG = "CHANGE-CURRENT-DIALOG";
const UPDATE_NEW_DIALOG_MESSAGE = "UPDATE-NEW-DIALOG-MESSAGE";
const SEND_DIALOG_MESSAGE = "SEND-DIALOG-MESSAGE";

export const changeCurrentDialogActionCreator = (userId) => ({type: CHANGE_CURRENT_DIALOG, userId: userId});
export const updateNewDialogMessagesActionCreator = (body) => ({type: UPDATE_NEW_DIALOG_MESSAGE, body: body});
export const sendDialogMessageActionCreator = () => ({type: SEND_DIALOG_MESSAGE});

let dialogs = {
    userId: 0,
    messages: [
        {
            from: 0,
            to: 1,
            message: "message",
            date: "2020-05-20T23:23:50"
        },
        {
            from: 0,
            to: 2,
            message: "message",
            date: "2020-03-20T23:11:50"
        },
        {
            from: 2,
            to: 0,
            message: "message",
            date: "2020-04-20T22:10:50"
        },
        {
            from: 3,
            to: 0,
            message: "message",
            date: "2020-05-20T23:05:50"
        },
        {
            from: 0,
            to: 3,
            message: "message",
            date: "2020-04-20T23:00:50"
        },
        {
            from: 2,
            to: 0,
            message: "message",
            date: "2020-03-20T23:00:50"
        },
        {
            from: 0,
            to: 3,
            message: "message",
            date: "2020-05-19T23:00:50"
        },
        {
            from: 0,
            to: 2,
            message: "message",
            date: "2020-05-10T23:00:50"
        },
        {
            from: 1,
            to: 0,
            message: "message",
            date: "2020-05-20T23:04:50"
        },
    ],
    interlocutors: [
        {
            userId: 1,
            userName: "Vasya Pyatachkov",
        },
        {
            userId: 2,
            userName: "Petya Kolotyshkin",
        },
        {
            userId: 3,
            userName: "Gena Beautiful",
        },
    ],
    currentDialog: null,
    newMessagesText: [],
};

const dialogsReducer = (state = dialogs, action) => {
    switch(action.type) {

        case CHANGE_CURRENT_DIALOG: {
            state.currentDialog = action.userId;
            break;
        }

        case UPDATE_NEW_DIALOG_MESSAGE: {
            let dialogIsExist = false;
            state.newMessagesText.forEach((elem) => {
                if(elem.interlocutorId == state.currentDialog) {
                    elem.body = action.body;
                    dialogIsExist = true;
                }
            });
            if (dialogIsExist == false) {
                state.newMessagesText.push({interlocutorId: state.currentDialog, body: action.body});
            }
            break;
        }

        case SEND_DIALOG_MESSAGE: {
            debugger;
            let dialogInfo = state.newMessagesText.filter( (elem) => {
                    if(state.currentDialog == elem.interlocutorId) {
                        return elem;
                    }
                }
            );
            let message = dialogInfo[0].body;
            if(message) {
                state.messages.push(
                    {
                        from: state.userId,
                        to: state.currentDialog,
                        message: message,
                        date: new Date(),
                    }
                );
            }
            // Clearing typing messages after sending
            state.newMessagesText.forEach( (elem) => {
                    if(state.currentDialog == elem.interlocutorId) {
                        elem.body = "";
                    }
                }
            );
            break;
        }

        default: {
            return state;
        }
    }
    return state;
}

export default dialogsReducer;