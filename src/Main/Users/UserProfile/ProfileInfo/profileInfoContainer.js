import {connect} from "react-redux";
import ProfileInfo from "./profileInfo";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}



let ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default  ProfileInfoContainer;