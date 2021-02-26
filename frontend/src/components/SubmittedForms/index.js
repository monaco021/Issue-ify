import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getForms} from "../../store/submittedForms"
import "./submittedForms.css"

export default function SubmittedArtistForms() {
    const dispatch = useDispatch();
    const subbedforms = useSelector((state) => state.forms);

    useEffect(() => {
        console.log("useEffect dispatch")
        dispatch(getForms());
    }, [dispatch]);

    return (
        <div className="outter_sub_form__div_container">
            <h1>Submmitted Forms from Users</h1>
            <div>
                {subbedforms && subbedforms.map((form) => {
                    return (
                        <div className="inner_sub_form__div_container">
                            <div className="sub_form_text__div_container">
                                {form.artistName}
                            </div>
                            <div className="sub_form_text__div_container">
                                {form.socialIssue}
                            </div>
                            <div className="sub_form_text__div_container">
                                {form.reason}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

