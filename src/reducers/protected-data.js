import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../components/actions/protected-data';

const initialState = {
    posts: [],
    error: null
};

export default function reducer(state = initialState, action) {

    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {

        return Object.assign({}, state, {
            posts: action.data,
            error: null
      });
    }
    else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }

    return state;
}
