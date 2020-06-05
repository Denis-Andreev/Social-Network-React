import React from "react";

import classes from './newsAdd.module.css'
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";


let NewsAdd = (props) => {
    let newsSectionOptions = props.newsState.newsTypes.map((newsType, key) => {
        return <option key={key}>{newsType}</option>;
    })
    return (
        <form onSubmit={handleSubmit}>
            {/*News title*/}
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">News title</label>
                <Field component='input' className="form-control"></Field>
            </div>
            {/*News body*/}
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">News body</label>
                <Field component='textarea' className="form-control" rows="3"></Field>
            </div>
            {/*News Section*/}
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">News section</label>
                <Field component='select' className="form-control" id="exampleFormControlSelect2">
                    {newsSectionOptions}
                </Field>
            </div>
            {/*News media*/}
            <NewsMedia newsMediaTypes={props.newsState.newsMediaTypes}/>
        </form>
    )
}

const NewsMedia = (props) => {
    debugger;
    let mediaTypesOptions = props.newsMediaTypes.map((mediaType, key) => {
        return <option key={key}>{mediaType}</option>;
    })
    return (
        <div className="form-group">
            {/*Media input*/}
            <label htmlFor="exampleFormControlTextarea1">News media</label>
            <Field component='input'
                   className="form-control"
                   placeholder="Media href(without loading since there is no API)"
            ></Field>
            {/*Select media type*/}
            <Field component='select' className="form-control" id="exampleFormControlSelect2">
                {mediaTypesOptions}
            </Field>
        </div>
    )
}

NewsAdd = reduxForm({
    form: 'newsAddForm'
})(NewsAdd);

export default  NewsAdd;
