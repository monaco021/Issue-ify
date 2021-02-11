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

    useEffect(() => {
        dispatch(getArtists(socialIssue));
        console.log("social Issue:",socialIssue)
    }, [dispatch]);

    return (
        <div>
            {singers && singers.map((singer) => {
                return (
                    <Link key={`${singer.id}`} to={`/artists/${singer.id}`}>
                        <div key={singer.name}>
                            {singer.name}
                        </div>
                        <img key={singer.images[0].url} src={singer.images[0].url}>

                        </img>
                    </Link>
                )
            })}
        </div>
    )
}
