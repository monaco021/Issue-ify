import React from "react";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetch } from "../../store/csrf";

export default function ListedArtistForm() {
    const history = useHistory();
    const [artistName, setArtistName] = useState("");
    const [socialIssue, setSocialIssue] = useState("");
    const [reason, setReason] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(artistName);
        console.log(socialIssue)

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
        <div>
            <h1>Dont' see an Artist or want one changed? Fill out this form!</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        id="artistName"
                        type="text"
                        onChange={(e) => setArtistName(e.target.value)}
                        value={artistName}
                    />
                </div>
                <div>
                    <label>Social Issue:</label>
                    <input
                        id="socialIssue"
                        type="text"
                        onChange={(e) => setSocialIssue(e.target.value)}
                        value={socialIssue}
                    />
                </div>
                <div>
                    <label>Reason:</label>
                    <input
                        id="reason"
                        type="text"
                        onChange={(e) => setReason(e.target.value)}
                        value={reason}
                    />
                </div>
                <div>
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
