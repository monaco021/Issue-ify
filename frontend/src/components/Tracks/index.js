import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getTracks} from "../../store/tracks";
import { useParams } from "react-router-dom";

export default function ListedTracks() {
    const dispatch = useDispatch();
    const tracks = useSelector((state) => state.tracks.items);
    const user = useSelector(state => state.session.user)
    const { albumId } = useParams();

    useEffect(() => {
        dispatch(getTracks(albumId));
    }, [dispatch]);

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}
