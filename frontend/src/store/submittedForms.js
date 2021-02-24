import { fetch } from "./csrf";

const LOAD = "forms/LOAD";

const load = forms => ({
    type: LOAD,
    forms,
});

export const getForms = () => async dispatch => {
    const res = await fetch("/api/form/submittedForms");
    if (res.ok) {
        dispatch(load(res.data));
    }
}

const IssueReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD: {
            return action.issues
        }
        default:
        return state;
    }
};

export default IssueReducer;
