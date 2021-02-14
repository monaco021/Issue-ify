import { fetch } from "./csrf";

const ADD = "form/ADD";

const addForm = (form) => ({
    type: ADD,
    payload: form,
});

export const addArtistForm = (newForm) => async(dispatch) => {
    const res = await fetch("/api/form/addArtist", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newForm)
    });
    if (res.ok) {
        dispatch(addForm(newForm))
    }
};

// const FormReducer = (state = [], action) => {
//     switch(action.type) {
//         case ADD: {
//             newState = Object.assign({}, state);
//             newState.forms = [...newState.forms, action.payload]
//             return action.newState
//         }
//         default:
//         return state;
//     }
// };

// export default FormReducer;
