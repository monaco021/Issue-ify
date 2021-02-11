import { fetch } from "./csrf";

const LOAD = "tracksArray/LOAD";

const load = tracksArray => ({
    type: LOAD,
    tracksArray,
});

export const getTracks = (albumId) => async dispatch => {
    console.log("before fetch of albums")
    const res = await fetch(`/api/album/${albumId}`);
    console.log("after fetch of albums")
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
