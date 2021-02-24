import { fetch } from "./csrf";

const LOAD = "forms/LOAD";

const load = forms => ({
    type: LOAD,
    forms,
});

export const getForms = () => async dispatch => {
    console.log("before fetch")
    const res = await fetch("/api/form/submittedForms");
    console.log("after fetch with res:", res)
    if (res.ok) {
        dispatch(load(res.data));
    }
}

const FormReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD: {
            return action.forms
        }
        default:
        return state;
    }
};

export default FormReducer;
