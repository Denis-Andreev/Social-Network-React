import React from "react";

import classes from './news.module.css'
import {NewsAddContainer} from "./NewsAdd/newsAddContainer";

const News = () => {
    return (
        <div className="section_wrapper">
            <NewsAddContainer />
        </div>
    )
}


export default News;