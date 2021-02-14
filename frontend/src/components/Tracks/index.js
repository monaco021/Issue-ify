import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import {getTracks} from "../../store/tracks";
import { useParams } from "react-router-dom";
import spotifyPic from "./spotify.png"

export default function ListedTracks() {
    const dispatch = useDispatch();
    const tracks = useSelector((state) => state.tracks.items);
    const albums = useSelector((state) => state.albums.items);
    const { albumId } = useParams();


    useEffect(() => {
        dispatch(getTracks(albumId));
        // console.log(albums[0].images[0].url)
    }, [dispatch]);


    return (
        <div>
            {tracks && tracks.map((track) => {
                return (
                    <div key={track.id}>
                        <div key={track.name}>
                            {track.name}
                        </div>
                        <div>
                            <a href={track.external_urls.spotify}>Open me in Spotify!</a>
                            {/* <audio src={track.preview_url}>Play me!</audio> */}
                        </div>
                        <div>
                            <img src={spotifyPic}></img>
                        </div>
                        {/* <img src={albums[0].images[0].url}></img> */}
                    </div>
                )
            })}
        </div>
    )
}
