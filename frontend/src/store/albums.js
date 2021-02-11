import { fetch } from "./csrf";

const LOAD = "albumsArray/LOAD";

const load = albumsArray => ({
    type: LOAD,
    albumsArray,
});

export const getAlbums = (spotifyId) => async dispatch => {
    const res = await fetch(`/api/artists/${spotifyId}`);
    if (res.ok) {
        dispatch(load(res.data));
    }
}

const AlbumsReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD: {
            return action.albumsArray
        }
        default:
        return state;
    }
};

export default AlbumsReducer;
