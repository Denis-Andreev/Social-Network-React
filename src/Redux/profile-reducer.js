const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_STATUS = "SET-STATUS";

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setStatusActionCreator = (newStatus) => ({type: SET_STATUS, newStatus});

let profile = {
    profileInfo: {
        userId: 0,
        avatar: "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
        gender: "Male",
        birthdayDay: "27",
        birthdayMonth: "12",
        birthdayYear: "2001",
        firstName: "Denis",
        lastName: "Andreev",
        country: "Russia",
        city: "Krasnodar",
        status: "",
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
}

const profileReducer = (state = profile, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: null,
                postText: state.newPostText,
                authorAvatar: "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                likesCount: 0,
            };
            if(state.newPostText) {
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: "",
                }
            } else {
                return state;
            }
            break;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
            break;
        }
        case SET_STATUS: {
            return {
                ...state,
                profileInfo: {
                    ...state.profileInfo,
                    status: action.newStatus,
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default profileReducer;