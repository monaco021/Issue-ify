import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getForms} from "../../store/submittedForms"


export default function SubmittedArtistForms() {
    const dispatch = useDispatch();
    const subbedforms = useSelector((state) => state.forms);

    useEffect(() => {
        console.log("useEffect dispatch")
        dispatch(getForms());
    }, [dispatch]);

    return (
        <div>
            <h1>Submmitted Forms from Users</h1>
            <div>
                {subbedforms && subbedforms.map((form) => {
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

