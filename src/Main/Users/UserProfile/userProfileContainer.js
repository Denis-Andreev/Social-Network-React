import {connect} from "react-redux";
import UserProfile from "./userProfile";
import {withRouter} from "react-router-dom";



let mapStateToProps = (state) => {
    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let UserProfileWithUrlData = withRouter(UserProfile);
let UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfileWithUrlData);

export default  UserProfileContainer;