import { fetch } from "./csrf";

const LOAD = "searchedArtists/LOAD";

const load = searchedArtists => ({
    type: LOAD,
    searchedArtists,
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
            return action.searchedArtists
        }
        default:
        return state;
    }
};

export default SearchedArtistsReducer;
