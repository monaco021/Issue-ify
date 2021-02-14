import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getArtists} from "../../store/issuePage"
import { useParams } from "react-router-dom";
import "./artists.css"

export default function ListedArtists() {
    const dispatch = useDispatch();
    const singers = useSelector((state) => state.artists.artists);
    // const user = useSelector(state => state.session.user)
    const { socialIssue } = useParams();

    useEffect(() => {
        dispatch(getArtists(socialIssue));
    }, [dispatch]);

    return (
        <>
            <div>
                {socialIssue}
            </div>
            <div className="artist__list_container">
                {singers && singers.map((singer) => {
                    return (
                        <Link key={`${singer.id}`} to={`/artists/${singer.id}`}>
                            <img className="artist__image_container" key={singer.images[0].url} src={singer.images[0].url}></img>
                            <div className="artist__name_container" key={singer.name}>
                                {singer.name}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}
