import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getForms} from "../../store/submittedForms";
import { useParams } from "react-router-dom";
import { get } from 'js-cookie';

export default function SubmittedArtistForms() {
    const dispatch = useDispatch();
    const forms = useSelector((state) => state.forms);

    useEffect(() => {
        dispatch(getForms);
    }, [dispatch]);

    return (
        <div>
            <div>
                {forms && forms.map((form) => {
                    return (
                        <div>
                            <div>
                                {form.artistName}
                            </div>
                            <div>
                                {form.socialIssue}
                            </div>
                            <div>
                                {form.reason}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

