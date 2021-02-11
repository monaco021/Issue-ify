import { fetch } from "./csrf";

const LOAD = "artists/LOAD";

const load = artists => ({
    type: LOAD,
    artists,
});

export const getArtists = (socialIssue) => async dispatch => {
    const res = await fetch(`/api/${socialIssue}`);
    if (res.ok) {
        dispatch(load(res.data));
    }
}

const ArtistsReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD: {
            return action.artists
        }
        default:
        return state;
    }
};

export default ArtistsReducer;
