import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getTracks} from "../../store/tracks";
import { useParams } from "react-router-dom";
import spotifyPic from "./spotify.png"
import {getAlbumImage} from "../../store/albumImage";


export default function ListedTracks() {
    const dispatch = useDispatch();
    const tracks = useSelector((state) => state.tracks.items);
    const albumImage = useSelector((state) => state.image.images);
    const { albumId } = useParams();

    useEffect(() => {
        dispatch(getTracks(albumId));
        dispatch(getAlbumImage(albumId));
    }, [dispatch]);


    return (
        <div>
            {tracks && tracks.map((track) => {
                return (
                    <div key={track.id}>
                        <div>
                            <img src={albumImage[0].url} alt="spotify"></img>
                        </div>
                        <div key={track.name}>
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
