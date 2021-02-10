import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getArtists} from "../../store/issuePage"
import { useParams } from "react-router-dom";

export default function ListedArtists() {
    const dispatch = useDispatch();
    const singers = useSelector((state) => state.artists.artists);
    const user = useSelector(state => state.session.user)
    const { socialIssue } = useParams();
    console.log("singers:", singers)
    useEffect(() => {
        console.log("before dispatch")
        dispatch(getArtists(socialIssue));
        console.log("after dispatch")
    }, [dispatch]);

    return (
        <div>
            {singers && singers.map((singer) => {
                return (
                    <div>
                        <div key={singer.name}>
                            {singer.name}
                        </div>
                        <img key={singer.images[0].url} src={singer.images[0].url}>

                        </img>
                    </div>
                )
            })}
        </div>
    )
}
