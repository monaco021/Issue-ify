import React from "react";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetch } from "../../store/csrf";
import "./form.css"

export default function ListedArtistForm() {
    const history = useHistory();
    const [artistName, setArtistName] = useState("");
    const [socialIssue, setSocialIssue] = useState("");
    const [reason, setReason] = useState("");
    const [errors, setErrors] = useState([]);;


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const res = await fetch('/api/form/addArtist', {
            method: 'POST',
            body: JSON.stringify({
                artistName,
                socialIssue,
                reason
            })
        });
        if (res.ok) history.push('/');
        else window.alert('Sorry, something went wrong :(');
    };

    return(
        <div className="outsideArtist__div_container">
            <h1 className="outsideDiv__h1_container">Dont' see an Artist or want one changed? Fill out this form!</h1>
            <form className="artist__form_container">
                <label>Name:</label>
                <textarea
                    className="artistForm__input_container"
                    id="artistName"
                    type="text"
                    onChange={(e) => setArtistName(e.target.value)}
                    value={artistName}
                />
                <label>Social Issue:</label>
                <textarea
                    className="artistForm__input_container"
                    id="socialIssue"
                    type="text"
                    onChange={(e) => setSocialIssue(e.target.value)}
                    value={socialIssue}
                />
                <label>Reason:</label>
                <textarea
                    className="artistForm__input_container"
                    id="reason"
                    type="text"
                    onChange={(e) => setReason(e.target.value)}
                    value={reason}
                />
                <div className="artistBttn__div_container">
                    <button
                    id='reserve_button'
                    onClick={handleSubmit}
                    >
                    Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
