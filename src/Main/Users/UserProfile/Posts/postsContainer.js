import {connect} from "react-redux";
import Posts from "./posts";


let mapStateToProps = (state) => {
    return {
        usersPosts: state.usersPage.users.filter((elem) => ({userId: elem.userId, posts: elem.posts})),
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}



let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default  PostsContainer;