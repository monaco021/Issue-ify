import { fetch } from "./csrf";

const LOAD = "issues/LOAD";

const load = issues => ({
    type: LOAD,
    issues,
});

export const getIssues = () => async dispatch => {
    const res = await fetch("/api/");
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
