import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getAlbums} from "../../store/albums";
import { useParams } from "react-router-dom";
import "./albums.css"

export default function ListedAlbums() {
    const dispatch = useDispatch();
    const albums = useSelector((state) => state.albums.items);
    // const user = useSelector(state => state.session.user)
    const { spotifyId } = useParams();

    useEffect(() => {
        dispatch(getAlbums(spotifyId));
    }, [dispatch]);


    return (
        <div className="albums__div_container" >
           {albums && albums.map((album) => {
               return (
                   <Link key={album.id} to={`/album/${album.id}`}>
                       <img className="album__image_container" key={album.images[0].url} src={album.images[0].url} />
                       <div className="album__name_container" key={album.name}>
                           {album.name}
                       </div>
                   </Link>
               )
           })}
        </div>
    )
}
