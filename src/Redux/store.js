import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _data: {
        currentUser: {
            userName: "Denis Andreev",
            userId: 0,
            isLogIn: true,
        },
        sidebar:{
            friends: [
                {
                    friendName: "Who I?",
                    friendId: "?",
                    friendAvatar: "https://img2.freepng.ru/20180325/bgw/kisspng-female-clip-art-avatar-5ab751aeeeb9b0.3078693815219634389778.jpg",
                },
                {
                    friendName: "Who I?",
                    friendId: "?",
                    friendAvatar: "https://img2.freepng.ru/20180325/bgw/kisspng-female-clip-art-avatar-5ab751aeeeb9b0.3078693815219634389778.jpg",
                },
                {
                    friendName: "Who I?",
                    friendId: "?",
                    friendAvatar: "https://img2.freepng.ru/20180325/bgw/kisspng-female-clip-art-avatar-5ab751aeeeb9b0.3078693815219634389778.jpg",
                },
                {
                    friendName: "Who I?",
                    friendId: "?",
                    friendAvatar: "https://img2.freepng.ru/20180325/bgw/kisspng-female-clip-art-avatar-5ab751aeeeb9b0.3078693815219634389778.jpg",
                },
                {
                    friendName: "Who I?",
                    friendId: "?",
                    friendAvatar: "https://img2.freepng.ru/20180325/bgw/kisspng-female-clip-art-avatar-5ab751aeeeb9b0.3078693815219634389778.jpg",
                }
            ]

        },
        profile: {
            profileInfo: {
                avatar: "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                gender: "Male",
                birthdayDay: "27",
                birthdayMonth: "12",
                birthdayYear: "2001",
                firstName: "Denis",
                lastName: "Andreev",
                country: "Russia",
                city: "Krasnodar",
                get birthday() {
                    return this.birthdayDay + "." + this.birthdayMonth + "." + this.birthdayYear;
                },
                get age() {
                    let birthday = new Date(+this.birthdayYear,+this.birthdayMonth,+this.birthdayDay);
                    let currentDate = new Date();
                    let age = (currentDate.getTime() - birthday.getTime()) / (1000*60*60*24*365);
                    return Math.round(age);
                },
                get fullName() {
                    return this.firstName + " " + this.lastName
                },
                showedInfo: [
                    ["fullName","Full name"],
                    ["gender","Gender"],
                    ["age","Age"],
                    ["country","Country"],
                    ["city","City"]
                ],
            },
            posts: [
                {
                    id: 1,
                    postText: "Lorem dasd ;dlkas d fhdtn drfr ltkf lehfr blb ns d ;jge",
                    authorAvatar: "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    likesCount: 5,
                },
                {
                    id: 2,
                    postText: "Lorem dasd ;dlkas d fhdtn drfr ltkf lehfr blb ns d ;jge",
                    authorAvatar: "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    likesCount: 5,
                },
                {
                    id: 3,
                    postText: "Lorem dasd ;dlkas d fhdtn drfr ltkf lehfr blb ns d ;jge",
                    authorAvatar: "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    likesCount: 5,
                },
                {
                    id: 4,
                    postText: "Lorem dasd ;dlkas d fhdtn drfr ltkf lehfr blb ns d ;jge",
                    authorAvatar: "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    likesCount: 5,
                },
                {
                    id: 5,
                    postText: "Lorem dasd ;dlkas d fhdtn drfr ltkf lehfr blb ns d ;jge",
                    authorAvatar: "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    likesCount: 5,
                },
            ],
            newPostText: "",
        },
        dialogs: {
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
        }
    },
    get data() {
        return this._data;
    },
    _callSubscriber() {
        console.log("calling subscriber");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._data.profile = profileReducer(this._data.profile, action);
        this._data.dialogs = dialogsReducer(this._data.dialogs, action);
        this._callSubscriber(this);
    }
}


export default  store;