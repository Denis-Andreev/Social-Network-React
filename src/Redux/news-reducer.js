const ADD_NEWS = 'ADD-POST';
const GET_NEWS = 'GET-NEWS';

export const addNewsActionCreator = (newsBody, newsTitle, newsMedia,
                              authorInfo = {
                                  authorId: null,
                                  authorAvatar: 'https://i03.fotocdn.net/s112/e371e403bd98e4ae/user_xl/2517037623.jpg',
                            }) => ({
    type: ADD_NEWS,
    newsBody,
    newsTitle,
    newsMedia,
    authorInfo,
});


const newsState = {
    newsTypes: [
        'Economics',
        'Science',
        'Memes',
        'Politics',
    ],
    newsMediaTypes: [
        'gif', 'img', 'video', 'audio'
    ],
    news: [
        {
            authorId: 165,
            authorAvatar: 'https://i03.fotocdn.net/s112/e371e403bd98e4ae/user_xl/2517037623.jpg',
            newsType: 'Economics',
            newsTitle: 'Ekonomicheskie US news',
            newsBody: '1.87 million applications for unemployment benefits in the US for the week.' +
                'Total: about 43 million in 11 weeks',
            newsMedia: [
                {
                    href: 'https://sun1-14.userapi.com/c857416/v857416667/202738/o1KBF8lYwr4.jpg',
                    type: 'img',
                }
            ],
            date: 'Thu Jun 04 2020',
            likesCount: 5,
        },
        {
            authorId: 1,
            authorAvatar: 'https://i03.fotocdn.net/s112/e371e403bd98e4ae/user_xl/2517037623.jpg',
            newsType: 'Memes',
            newsTitle: 'Cute dog',
            newsBody: 'Its amazing!!!',
            newsMedia: [
                {
                href: 'https://vk.com/doc246688224_517725745',
                type: 'gif',
                },
            ],
            date: 'Thu Jun 04 2019',
            likesCount: 4,
        }
    ],
}

const newsReducer = (state = newsState, action) => {
    switch(action.type) {
        case ADD_NEWS:  {
            return state;
            // return {
            //     ...state,
            //     news: [...state.news,{
            //         authorId: action.authorInfo.authorId,
            //         authorAvatar: action.authorInfo.authorAvatar,
            //         newsType: action.newsType,
            //         newsTitle: action.newsTitle,
            //         newsBody: action.newsBody,
            //         newsMedia: action.newsMedia,
            //         date: new Date(Date.now()),
            //         likesCount: 0,
            //     }]
            // }
        }
        default: {
            return state;
        }
    }
    return state;
}

export default newsReducer;