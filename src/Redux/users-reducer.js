const SET_USERS = "GET-USERS";
const TOGGLE_FOLLOW = "TOGGLE_FOllOW";
const GET_USER_POSTS = "GET-USER-POSTS";
const SET_USER_STATUS = "SET_USER_STATUS";

export const getUsersActionCreator = () => ({type: SET_USERS,});
export const toggleFollowActionCreator = (userId, currentUserId) => ({type: TOGGLE_FOLLOW, userId, currentUserId});
export const getUserPostsActionCreator = (userId) => ({type: GET_USER_POSTS, userId});
export const setUserStatusActionCreator = (userId, newStatus) => ({type: SET_USER_STATUS, userId, newStatus});

const usersPage = {
    users: [
        {
            userId: '0',
            userName:"",
            avatar: "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            gender: "Male",
            birthdayDay: "27",
            birthdayMonth: "12",
            birthdayYear: "2001",
            firstName: "Denis",
            lastName: "Andreev",
            country: "Russia",
            city: "Krasnodar",
            status: "Hello world!!!",
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
            friends: [],
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
        },
        {
            userId: "124",
            userName:"",
            avatar: "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            gender: "Male",
            birthdayDay: "12",
            birthdayMonth: "04",
            birthdayYear: "1988",
            firstName: "Jeka",
            lastName: "Drug",
            country: "Russia",
            city: "Krasnodar",
            status: "Hello world!",
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
            friends: [],
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
        },
        {
            userId: "125",
            userName:"",
            avatar: "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            gender: "Male",
            birthdayDay: "27",
            birthdayMonth: "12",
            birthdayYear: "1998",
            firstName: "Vanya",
            lastName: "Petya",
            country: "Russia",
            city: "Moscow",
            status: "Hello world!",
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
            friends: [],
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
        },
        {
            "userId": "5ed819c64d64cdabeada038a",
            "userName": "",
            "avatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            "gender": "female",
            "birthdayDay": 12,
            "birthdayMonth": 12,
            "birthdayYear": 1988,
            "firstName": "Rogers",
            "lastName": "Wood",
            "country": "Russia",
            "city": "Moscow",
            "status": "nulla id deserunt incididunt enim",
            "birthday": "12.12.1988",
            "age": 31,
            "fullName": "Bobbie Cash",
            "showedInfo": [
                [
                    "fullName",
                    "Full name"
                ],
                [
                    "gender",
                    "Gender"
                ],
                [
                    "age",
                    "Age"
                ],
                [
                    "country",
                    "Country"
                ],
                [
                    "city",
                    "City"
                ]
            ],
            "friends": [],
            "posts": [
                {
                    "id": 0,
                    "postText": "magna consequat nisi laboris ex sint magna est nulla ut proident ut incididunt aliqua dolore",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 1,
                    "postText": "culpa aute deserunt incididunt sit enim excepteur do ullamco commodo ea elit commodo irure minim",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 2,
                    "postText": "do aliquip cupidatat nostrud eiusmod anim tempor est ex sit non excepteur ex commodo aute",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 3,
                    "postText": "ut deserunt ut anim adipisicing sit exercitation reprehenderit non proident deserunt nostrud sit et qui",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                }
            ]
        },
        {
            "userId": "5ed819c637bb8afe413ed122",
            "userName": "",
            "avatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            "gender": "female",
            "birthdayDay": 12,
            "birthdayMonth": 12,
            "birthdayYear": 1988,
            "firstName": "Stevens",
            "lastName": "Mayer",
            "country": "Russia",
            "city": "Moscow",
            "status": "irure occaecat irure id ullamco",
            "birthday": "12.12.1988",
            "age": 31,
            "fullName": "Greene Jefferson",
            "showedInfo": [
                [
                    "fullName",
                    "Full name"
                ],
                [
                    "gender",
                    "Gender"
                ],
                [
                    "age",
                    "Age"
                ],
                [
                    "country",
                    "Country"
                ],
                [
                    "city",
                    "City"
                ]
            ],
            "friends": [],
            "posts": [
                {
                    "id": 0,
                    "postText": "ut sunt consectetur consequat nulla cillum incididunt deserunt eiusmod est in nulla cillum mollit excepteur",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 1,
                    "postText": "elit sunt duis et anim ad ipsum est consectetur laborum non veniam ut ipsum Lorem",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 2,
                    "postText": "mollit pariatur enim eu cillum irure deserunt sunt reprehenderit elit fugiat ipsum do amet aliqua",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 3,
                    "postText": "laborum amet Lorem pariatur non quis excepteur sint velit magna officia nostrud laboris reprehenderit esse",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                }
            ]
        },
        {
            "userId": "5ed819c6ae99a5aae7eba4e3",
            "userName": "",
            "avatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            "gender": "male",
            "birthdayDay": 12,
            "birthdayMonth": 12,
            "birthdayYear": 1988,
            "firstName": "Carlson",
            "lastName": "Joyner",
            "country": "Russia",
            "city": "Moscow",
            "status": "exercitation eiusmod sit mollit cillum",
            "birthday": "12.12.1988",
            "age": 31,
            "fullName": "Herring Merritt",
            "showedInfo": [
                [
                    "fullName",
                    "Full name"
                ],
                [
                    "gender",
                    "Gender"
                ],
                [
                    "age",
                    "Age"
                ],
                [
                    "country",
                    "Country"
                ],
                [
                    "city",
                    "City"
                ]
            ],
            "friends": [],
            "posts": [
                {
                    "id": 0,
                    "postText": "elit irure non sint exercitation minim eu tempor commodo sit deserunt nisi est labore tempor",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 1,
                    "postText": "deserunt occaecat nisi adipisicing ex aliqua elit amet reprehenderit est in non irure tempor excepteur",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 2,
                    "postText": "commodo veniam laborum elit dolor mollit sunt exercitation consectetur laborum excepteur elit do aliqua ut",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 3,
                    "postText": "aliquip non quis veniam aliqua est cupidatat esse deserunt ea eu proident exercitation non velit",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                }
            ]
        },
        {
            "userId": "5ed819c6fdb78212f26abe95",
            "userName": "",
            "avatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            "gender": "male",
            "birthdayDay": 12,
            "birthdayMonth": 12,
            "birthdayYear": 1988,
            "firstName": "Mcgee",
            "lastName": "Glass",
            "country": "Russia",
            "city": "Moscow",
            "status": "ex dolor mollit eiusmod id",
            "birthday": "12.12.1988",
            "age": 31,
            "fullName": "Shawna Buchanan",
            "showedInfo": [
                [
                    "fullName",
                    "Full name"
                ],
                [
                    "gender",
                    "Gender"
                ],
                [
                    "age",
                    "Age"
                ],
                [
                    "country",
                    "Country"
                ],
                [
                    "city",
                    "City"
                ]
            ],
            "friends": [],
            "posts": [
                {
                    "id": 0,
                    "postText": "consectetur minim nisi nulla magna incididunt duis laboris incididunt ad officia non ex consequat commodo",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 1,
                    "postText": "qui qui occaecat qui ea veniam veniam quis sint veniam nisi duis aute aute veniam",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 2,
                    "postText": "cillum veniam sunt laboris aliquip adipisicing mollit nisi deserunt anim sunt dolor esse aliqua magna",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 3,
                    "postText": "ut dolor ullamco culpa mollit velit culpa quis elit ex ipsum ex fugiat enim reprehenderit",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                }
            ]
        },
        {
            "userId": "5ed819c63130cf7edaccdb5d",
            "userName": "",
            "avatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            "gender": "female",
            "birthdayDay": 12,
            "birthdayMonth": 12,
            "birthdayYear": 1988,
            "firstName": "Avis",
            "lastName": "Cantu",
            "country": "Russia",
            "city": "Moscow",
            "status": "nulla minim consectetur ipsum elit",
            "birthday": "12.12.1988",
            "age": 31,
            "fullName": "Candace Shannon",
            "showedInfo": [
                [
                    "fullName",
                    "Full name"
                ],
                [
                    "gender",
                    "Gender"
                ],
                [
                    "age",
                    "Age"
                ],
                [
                    "country",
                    "Country"
                ],
                [
                    "city",
                    "City"
                ]
            ],
            "friends": [],
            "posts": [
                {
                    "id": 0,
                    "postText": "consectetur minim in sit laboris fugiat aliqua consectetur elit excepteur cillum est enim nulla nisi",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 1,
                    "postText": "nisi voluptate nisi non laboris ad dolore deserunt velit minim commodo aliqua culpa veniam aliquip",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 2,
                    "postText": "in ullamco adipisicing reprehenderit consectetur mollit exercitation fugiat aute do mollit sint consequat pariatur quis",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 3,
                    "postText": "anim ipsum ullamco labore non ex voluptate exercitation elit consequat ut anim ipsum nostrud mollit",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                }
            ]
        },
        {
            "userId": "5ed819c62518c09c576605df",
            "userName": "",
            "avatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            "gender": "female",
            "birthdayDay": 12,
            "birthdayMonth": 12,
            "birthdayYear": 1988,
            "firstName": "Ana",
            "lastName": "Salazar",
            "country": "Russia",
            "city": "Moscow",
            "status": "tempor deserunt aliquip fugiat sunt",
            "birthday": "12.12.1988",
            "age": 31,
            "fullName": "Watson Adkins",
            "showedInfo": [
                [
                    "fullName",
                    "Full name"
                ],
                [
                    "gender",
                    "Gender"
                ],
                [
                    "age",
                    "Age"
                ],
                [
                    "country",
                    "Country"
                ],
                [
                    "city",
                    "City"
                ]
            ],
            "friends": [],
            "posts": [
                {
                    "id": 0,
                    "postText": "nostrud Lorem consequat amet adipisicing anim anim elit amet dolore pariatur mollit sint sint irure",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 1,
                    "postText": "consectetur nisi aliquip sit reprehenderit et dolor adipisicing occaecat voluptate dolor enim sit veniam et",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 2,
                    "postText": "et nisi ex nisi occaecat ullamco laborum cillum laboris commodo amet consectetur fugiat esse minim",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 3,
                    "postText": "ut officia velit aliqua et consequat quis nostrud quis ullamco ad nostrud non aliquip non",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                }
            ]
        },
        {
            "userId": "5ed819c64c2d5236dc4e7995",
            "userName": "",
            "avatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            "gender": "male",
            "birthdayDay": 12,
            "birthdayMonth": 12,
            "birthdayYear": 1988,
            "firstName": "Kris",
            "lastName": "Acevedo",
            "country": "Russia",
            "city": "Moscow",
            "status": "nisi nisi ut consequat ipsum",
            "birthday": "12.12.1988",
            "age": 31,
            "fullName": "Vivian Conley",
            "showedInfo": [
                [
                    "fullName",
                    "Full name"
                ],
                [
                    "gender",
                    "Gender"
                ],
                [
                    "age",
                    "Age"
                ],
                [
                    "country",
                    "Country"
                ],
                [
                    "city",
                    "City"
                ]
            ],
            "friends": [],
            "posts": [
                {
                    "id": 0,
                    "postText": "incididunt sint nisi tempor aliqua sit voluptate dolor laborum Lorem commodo laborum sunt irure reprehenderit",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 1,
                    "postText": "ullamco velit mollit dolor non est proident laborum veniam aliqua fugiat officia ullamco deserunt cupidatat",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 2,
                    "postText": "voluptate cillum nulla reprehenderit minim officia pariatur nisi Lorem laboris veniam fugiat id nostrud proident",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 3,
                    "postText": "aute duis velit aute adipisicing esse eiusmod adipisicing pariatur velit mollit et Lorem laboris exercitation",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                }
            ]
        },
        {
            "userId": "5ed819c64e596e1eb36d6cb8",
            "userName": "",
            "avatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            "gender": "female",
            "birthdayDay": 12,
            "birthdayMonth": 12,
            "birthdayYear": 1988,
            "firstName": "Mullen",
            "lastName": "Waller",
            "country": "Russia",
            "city": "Moscow",
            "status": "amet esse excepteur dolor cupidatat",
            "birthday": "12.12.1988",
            "age": 31,
            "fullName": "Saundra Griffith",
            "showedInfo": [
                [
                    "fullName",
                    "Full name"
                ],
                [
                    "gender",
                    "Gender"
                ],
                [
                    "age",
                    "Age"
                ],
                [
                    "country",
                    "Country"
                ],
                [
                    "city",
                    "City"
                ]
            ],
            "friends": [],
            "posts": [
                {
                    "id": 0,
                    "postText": "ipsum aliqua deserunt elit ipsum id Lorem incididunt quis amet esse anim nulla do deserunt",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 1,
                    "postText": "excepteur reprehenderit aliqua consequat laboris nulla magna aute anim est commodo velit ullamco consequat cillum",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 2,
                    "postText": "do consequat ad commodo adipisicing quis amet anim est culpa exercitation exercitation incididunt labore esse",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 3,
                    "postText": "labore laboris minim officia exercitation laboris id commodo occaecat velit enim ad eiusmod ex eu",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                }
            ]
        },
        {
            "userId": "5ed819c6f3078a122baf1ce8",
            "userName": "",
            "avatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            "gender": "female",
            "birthdayDay": 12,
            "birthdayMonth": 12,
            "birthdayYear": 1988,
            "firstName": "Nell",
            "lastName": "Maldonado",
            "country": "Russia",
            "city": "Moscow",
            "status": "ipsum irure proident pariatur irure",
            "birthday": "12.12.1988",
            "age": 31,
            "fullName": "Beth Noble",
            "showedInfo": [
                [
                    "fullName",
                    "Full name"
                ],
                [
                    "gender",
                    "Gender"
                ],
                [
                    "age",
                    "Age"
                ],
                [
                    "country",
                    "Country"
                ],
                [
                    "city",
                    "City"
                ]
            ],
            "friends": [],
            "posts": [
                {
                    "id": 0,
                    "postText": "esse duis sit quis do exercitation ad in officia nulla commodo tempor do reprehenderit anim",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 1,
                    "postText": "sit adipisicing aliquip dolor sint dolor enim in incididunt mollit aliqua laborum aute et eiusmod",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 2,
                    "postText": "fugiat consequat amet elit esse duis ullamco veniam eiusmod laboris qui commodo incididunt ipsum labore",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 3,
                    "postText": "et est nulla cupidatat dolor laborum commodo dolor eiusmod elit ipsum mollit minim dolor Lorem",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                }
            ]
        },
        {
            "userId": "5ed819c66c242cc9effefa96",
            "userName": "",
            "avatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            "gender": "female",
            "birthdayDay": 12,
            "birthdayMonth": 12,
            "birthdayYear": 1988,
            "firstName": "Isabella",
            "lastName": "Carey",
            "country": "Russia",
            "city": "Moscow",
            "status": "tempor cillum commodo laboris reprehenderit",
            "birthday": "12.12.1988",
            "age": 31,
            "fullName": "Aida Gomez",
            "showedInfo": [
                [
                    "fullName",
                    "Full name"
                ],
                [
                    "gender",
                    "Gender"
                ],
                [
                    "age",
                    "Age"
                ],
                [
                    "country",
                    "Country"
                ],
                [
                    "city",
                    "City"
                ]
            ],
            "friends": [],
            "posts": [
                {
                    "id": 0,
                    "postText": "minim enim elit ut ipsum officia voluptate tempor aute Lorem culpa incididunt enim cupidatat labore",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 1,
                    "postText": "magna cillum et deserunt culpa et occaecat nostrud sint culpa anim ea sunt amet minim",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 2,
                    "postText": "Lorem exercitation aute occaecat eiusmod veniam irure labore aliquip veniam labore voluptate ea reprehenderit elit",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 3,
                    "postText": "non tempor enim amet et nulla exercitation culpa ex cupidatat proident Lorem adipisicing dolore dolore",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                }
            ]
        },
        {
            "userId": "5ed819c672e24503c8031f9b",
            "userName": "",
            "avatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            "gender": "female",
            "birthdayDay": 12,
            "birthdayMonth": 12,
            "birthdayYear": 1988,
            "firstName": "Lee",
            "lastName": "Hatfield",
            "country": "Russia",
            "city": "Moscow",
            "status": "nisi eiusmod cillum elit dolore",
            "birthday": "12.12.1988",
            "age": 31,
            "fullName": "Eula Barker",
            "showedInfo": [
                [
                    "fullName",
                    "Full name"
                ],
                [
                    "gender",
                    "Gender"
                ],
                [
                    "age",
                    "Age"
                ],
                [
                    "country",
                    "Country"
                ],
                [
                    "city",
                    "City"
                ]
            ],
            "friends": [],
            "posts": [
                {
                    "id": 0,
                    "postText": "dolore nisi mollit aliqua consectetur commodo irure mollit culpa veniam sit elit ullamco tempor voluptate",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 1,
                    "postText": "elit irure pariatur id elit esse aliquip ullamco exercitation esse aliquip in eiusmod enim nulla",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 2,
                    "postText": "et aute exercitation nulla culpa fugiat laborum cupidatat cillum duis dolore nulla commodo pariatur labore",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 3,
                    "postText": "veniam velit eiusmod pariatur pariatur in in non laboris magna commodo ullamco consectetur proident do",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                }
            ]
        },
        {
            "userId": "5ed819c6ddf4bf3a0db084b4",
            "userName": "",
            "avatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
            "gender": "female",
            "birthdayDay": 12,
            "birthdayMonth": 12,
            "birthdayYear": 1988,
            "firstName": "Whitney",
            "lastName": "Alvarez",
            "country": "Russia",
            "city": "Moscow",
            "status": "labore labore officia adipisicing incididunt",
            "birthday": "12.12.1988",
            "age": 31,
            "fullName": "Spears Stark",
            "showedInfo": [
                [
                    "fullName",
                    "Full name"
                ],
                [
                    "gender",
                    "Gender"
                ],
                [
                    "age",
                    "Age"
                ],
                [
                    "country",
                    "Country"
                ],
                [
                    "city",
                    "City"
                ]
            ],
            "friends": [],
            "posts": [
                {
                    "id": 0,
                    "postText": "in adipisicing velit exercitation reprehenderit amet proident aliqua pariatur labore sit aliquip qui nostrud tempor",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 1,
                    "postText": "Lorem nisi eiusmod velit minim ea nisi veniam deserunt magna in do esse mollit nulla",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 2,
                    "postText": "sit in ea nostrud consectetur ad deserunt duis anim nulla labore ea proident incididunt ipsum",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                },
                {
                    "id": 3,
                    "postText": "ea anim deserunt Lorem exercitation est nostrud duis veniam magna amet et cupidatat in mollit",
                    "authorAvatar": "https://stud.kubsau.ru/Content/PersonsPhotos/Default.jpg",
                    "likesCount": 0
                }
            ]
        }
    ]
};

const usersReducer = (state = usersPage, action) => {
    switch(action.type) {
        case SET_USERS: {

        }
        case TOGGLE_FOLLOW: {
            if(action.currentUserId == action.userId) {
                return state;
            }
            let userIsFollowed = false;
            let userIndex;
            let subscriberPosOnFriendList = null;
            state.users.some((elem,index ) => {
                if (elem.userId == action.userId) {
                    userIndex = index;
                    if(elem.friends.length == 0) {
                        return;
                    }
                    if(elem.friends.indexOf(action.currentUserId) != -1) {
                        subscriberPosOnFriendList = elem.friends.indexOf(action.currentUserId);
                        userIsFollowed = true;
                        return;
                    }
                }
            });
            let stateCopy = {
                users: [...state.users]
            }
            if (userIsFollowed) {
                stateCopy.users[userIndex].friends = state.users[userIndex].friends
                    .filter((elem, index) => {
                        if (elem != subscriberPosOnFriendList) {
                        return elem;
                        }
                    });
                return stateCopy;
            } else {
                stateCopy.users[userIndex].friends = [...state.users[userIndex].friends, action.currentUserId];
                return stateCopy;
            }
        }
        case SET_USER_STATUS: {
            let changedUser = state.users.find((elem, index) => {
                    if (elem.userId == action.userId) {
                            elem.status = action.newStatus;
                            return elem;
                    }
                });
            let users = [...state.users.filter(elem => {
                if (elem.userId != action.userId) {
                    return elem;
                }
            }), changedUser];
            debugger;
            return {
                ...state,
                users: users,
            }
        }
        default: {
            return state;
        }
    }
}

export default usersReducer;