import {connect} from "react-redux";
import Posts from "./posts";

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;