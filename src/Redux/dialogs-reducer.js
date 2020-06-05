const CHANGE_CURRENT_DIALOG = "CHANGE-CURRENT-DIALOG";
const GET_DIALOG_MESSAGE = "GET-DIALOG-MESSAGE";
const UPDATE_NEW_DIALOG_MESSAGE = "UPDATE-NEW-DIALOG-MESSAGE";
const SEND_DIALOG_MESSAGE = "SEND-DIALOG-MESSAGE";

export const changeCurrentDialogActionCreator = (userId) => ({type: CHANGE_CURRENT_DIALOG, userId: userId});
export const getDialogMessageActionCreator = () => ({type: GET_DIALOG_MESSAGE, });
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
    currentMessages: [],
    newMessagesText: [],
};

const dialogsReducer = (state = dialogs, action) => {
    let stateCopy = {
        ...state,
        messages: [...state.messages],
        newMessagesText: [...state.newMessagesText],
        currentMessages: [...state.currentMessages],
    };

    switch(action.type) {

        case CHANGE_CURRENT_DIALOG: {
            stateCopy.currentDialog = action.userId;
            break;
        }
        case GET_DIALOG_MESSAGE: {
            stateCopy.currentMessages = stateCopy.messages.filter(function(elem) {
                if ( (elem.from == stateCopy.userId || elem.to == stateCopy.userId) &&
                    (elem.from == stateCopy.currentDialog || elem.to == stateCopy.currentDialog) ) {
                    return true;
                } else {
                    return false;
                }
            }).sort((a,b) => (Date.parse(a.date) - Date.parse(b.date)));
        }
        case UPDATE_NEW_DIALOG_MESSAGE: {
            debugger;
            let dialogIsExist = false;
            stateCopy.newMessagesText.forEach((elem) => {
                if(elem.interlocutorId == stateCopy.currentDialog) {
                    elem.body = action.body;
                    dialogIsExist = true;
                }
            });
            if (dialogIsExist == false) {
                stateCopy.newMessagesText = [...stateCopy.newMessagesText,{interlocutorId: stateCopy.currentDialog, body: action.body}];
            }
            break;
        }

        case SEND_DIALOG_MESSAGE: {
            let message;
            stateCopy.newMessagesText = stateCopy.newMessagesText.map((elem) => {
                if(elem.interlocutorId == stateCopy.currentDialog) {
                    message = elem.body;
                    elem.body = "";
                }
                return elem;
            });
            if(message) {
                stateCopy.messages = [...stateCopy.messages, {
                    from: stateCopy.userId,
                    to: stateCopy.currentDialog,
                    message: message,
                    date: new Date()
                }]
            }
            break;
        }
        default: {
            return stateCopy;
        }
    }
    return stateCopy;
}

export default dialogsReducer;