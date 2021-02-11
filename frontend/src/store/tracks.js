import { fetch } from "./csrf";

const LOAD = "tracksArray/LOAD";

const load = tracksArray => ({
    type: LOAD,
    tracksArray,
});

export const getTracks = (albumId) => async dispatch => {
    const res = await fetch(`/api/album/${albumId}`);
    if (res.ok) {
        dispatch(load(res.data));
    }
}

const TracksReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD: {
            return action.tracksArray
        }
        default:
        return state;
    }
};

export default TracksReducer;
