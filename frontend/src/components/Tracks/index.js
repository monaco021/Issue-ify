import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import {getTracks} from "../../store/tracks";
import { useParams } from "react-router-dom";

export default function ListedTracks() {
    const dispatch = useDispatch();
    const tracks = useSelector((state) => state.tracks.items);
    // const user = useSelector(state => state.session.user)
    const album = useSelector(state => state.albums.items)
    const { albumId } = useParams();


    useEffect(() => {
        dispatch(getTracks(albumId));
    }, [dispatch]);


    // const result = album.filter(a => {
    //     if (albumId === a.id){
    //         return a.images[0].id
    //     }
    // });

    return (
        <div>
            {tracks && tracks.map((track) => {
                return (
                    <div key={track.id}>
                        <div key={track.name}>
                            {track.name}
                        </div>
                        {/* <img src={result}>
                        </img> */}
                    </div>
                )
            })}
        </div>
    )
}
