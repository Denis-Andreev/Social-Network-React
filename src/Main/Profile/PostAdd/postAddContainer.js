import {connect} from "react-redux";
import PostAdd from "./postAdd";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profile.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPost: (text) => {
            dispatch(updateNewPostActionCreator(text))
        } ,
    }
}



let PostAddContainer = connect(mapStateToProps, mapDispatchToProps)(PostAdd);

export default  PostAddContainer