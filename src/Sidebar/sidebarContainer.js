import {connect} from "react-redux";
import Sidebar from "./sidebar";

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {

    }
}

let SidebarContainer = connect(mapStateToProps, mapDispatchtoProps)(Sidebar);

export default SidebarContainer;