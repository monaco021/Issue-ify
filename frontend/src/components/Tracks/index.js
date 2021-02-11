import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getAlbums} from "../../store/albums";
import { useParams } from "react-router-dom";

export default function ListedTracks() {
    const dispatch = useDispatch();
    const tracks = useSelector((state) => state.tracks.items);
    const user = useSelector(state => state.session.user)
    const { spotifyId } = useParams();

    useEffect(() => {
        dispatch(getTracks(spotifyId));
    }, [dispatch]);

    return (
        <div>
           {albums && albums.map((album) => {
               return (

                   <div key={album.id}>
                       <img key={album.images[0].url} src={album.images[0].url} />
                       <div>
                           {album.name}
                       </div>
                   </div>
               )
           })}
        </div>
    )
}
