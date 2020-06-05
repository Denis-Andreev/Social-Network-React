import {connect} from "react-redux";
import ProfileInfo from "./profileInfo";
import {setUserStatusActionCreator} from "../../../Redux/users-reducer";
import {setStatusActionCreator} from "../../../Redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profile.profileInfo,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUserStatus: (userId, newStatus) => dispatch(setUserStatusActionCreator(userId, newStatus)),
        localeSetStatus: (newStatus) => dispatch(setStatusActionCreator(newStatus)),
    }
}

let ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;