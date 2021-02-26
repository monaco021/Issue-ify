import { fetch } from "./csrf";

const LOAD = "images/LOAD";

const load = images => ({
    type: LOAD,
    images,
});

export const getAlbumImage = (albumId) => async dispatch => {
    const res = await fetch(`/api/album/image/${albumId}`);
    if (res.ok) {
        dispatch(load(res.data));
    }
}

const ImageReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD: {
            return action.images
        }
        default:
        return state;
    }
};

export default ImageReducer;
