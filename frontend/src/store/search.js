import { fetch } from "./csrf";

const LOAD = "artists/LOAD";

const load = artists => ({
    type: LOAD,
    artists,
});

export const getSearchedArtists = (artistName) => async dispatch => {
    const res = await fetch(`/api/search/${artistName}`);
    if (res.ok) {
        dispatch(load(res.data));
    }
}

const SearchedArtistsReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD: {
            return action.artists
        }
        default:
        return state;
    }
};

export default SearchedArtistsReducer;
