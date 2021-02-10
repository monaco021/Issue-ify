import { fetch } from "./csrf";

const LOAD = "artists/LOAD";

const load = artists => ({
    type: LOAD,
    artists,
});

export const getArtists = (socialIssue) => async dispatch => {
    console.log("before the fetch")
    const res = await fetch(`/api/${socialIssue}`);
    console.log("res:", res)
    console.log("res.data:", res.data)
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
