// import { fetch } from "./csrf";

// const ADD = "form/ADD";

// const addForm = (form) => ({
//     type: ADD,
//     form,
// });

// export const addArtistForm = (newForm) => async(dispatch) => {
//     const res = await fetch("/api/form/addArtist", {
//         method: "POST",
//         headers: {
//             "Content-Type": 'application/json'
//         },
//         body: JSON.stringify(newForm)
//     });
//     if (res.ok) {
//         dispatch(addForm(res.data))
//     }
// };

// const FormReducer = (state = [], action) => {
//     let newState
//     switch(action.type) {
//         case ADD: {
//             newState = [...state, action.form]
//             return action.newState
//         }
//         default:
//         return state;
//     }
// };

// export default FormReducer;
