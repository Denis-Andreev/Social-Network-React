let store = {
    data: {
        userName: "Денис Андреев",
        isLogIn: true,
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
    },
    _rerenderThree() {
        console.log("rerendering");
    },
    addPost() {
        let newPost = {
            id: 6,
            postText: this.profile.newPostText,
            authorAvatar: "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            likesCount: 0,
        };
        this.profile.posts.push(newPost);
        this.profile.newPostText = "";
        this._rerenderThree(this);
    },
    updateNewPostText(newText) {
        this.profile.newPostText = newText;
        this._rerenderThree();
    },
    subscribe(observer) {
        this._rerenderThree = observer;
    }
}


export default  store;