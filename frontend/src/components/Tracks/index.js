import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getTracks} from "../../store/tracks";
import { useParams } from "react-router-dom";
import spotify from "./spotify.png"
import "./tracks.css";

export default function ListedTracks() {
    const dispatch = useDispatch();
    const tracks = useSelector((state) => state.tracks.items);
    const albums = useSelector((state) => state.albums.items);
    const { albumId } = useParams();

    useEffect(() => {
        dispatch(getTracks(albumId));
    }, [dispatch]);


    return (
        <div className="outside_tracks__div_container">
            {tracks && tracks.map((track) => {
                return (
                    <div key={track.id} className="tracks_top_mapped__div_container">
                        <div>
                            <img src={spotify} alt="spotify" className="tracks_album__image_container"></img>
                        </div>
                        <div key={track.name} className="song_title__div_container">
                            {track.name}
                        </div>
                        <div>
                            <a href={track.external_urls.spotify}>Open me in Spotify!</a>
                        </div>
                        {/* <div>
                            <audio className="audio__element">
                                <source src={track.external_urls.spotify}></source>
                            </audio>
                        </div> */}
                    </div>
                )
            })}
        </div>
    )
}
