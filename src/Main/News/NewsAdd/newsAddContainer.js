import {connect} from "react-redux";
import {addNewsActionCreator} from "../../../Redux/news-reducer";
import NewsAdd from "./newsAdd";

const mapStateToProps = (state) => {
    return {
        newsState: state.news,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNews: (newsBody, newsTitle, newsMedia, authorInfo) => dispatch(addNewsActionCreator(newsBody, newsTitle, newsMedia, authorInfo)),
    }
}

export const NewsAddContainer = connect(mapStateToProps, mapDispatchToProps)(NewsAdd);