import {connect} from "react-redux";
import Users from "./users";
import {toggleFollowActionCreator} from "../../Redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        // friends: state.usersPage.users.map((elem) => elem.friends),
        currentUserId: state.currentUser.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId, currentUserId) => dispatch(toggleFollowActionCreator(userId, currentUserId)),
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;