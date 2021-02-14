import React from "react";
import { useState } from 'react';

export default function ListedArtistForm() {
    const [artistName, setArtistName] = useState("");
    const [socialIssue, setSocialIssue] = useState("");
    const [reason, setReason] = useState("");

    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     const formInfo = {
    //         artistName,
    //         socialIssue,
    //         reason,
    //         submittedOn: new Date()
    //     }

    //     setArtistName("");
    //     setSocialIssue("");
    //     setReason("");
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
            const newForm = {
                artistName: artistName,
                socialIssue: socialIssue,
                reason: reason,
            };

        const response = await window.fetch('/api/form/addArtist', {
            method: 'post',
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify(newForm)
        });
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
            </form>
        </div>
    )
}
