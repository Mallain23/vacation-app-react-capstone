import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    CREATE_POST_SUCCESS,
    FETCH_SELECTED_POST_SUCCESS,
    SEARCH_FOR_POSTS_SUCCESS,
    EDIT_POST_SUCCESS,
    INCREASE_SLICE_INDEX,
    DECREASE_SLICE_INDEX,
    RESET_SLICE_INDEX,
    SAVE_SEARCH_TERM} from '../components/actions/posts';
import { FETCH_SELECTED_USER_SUCCESS } from '../components/actions/profile'

const initialState = {
    posts: [],
    searchResultPosts: [],
    newlyAddedPost: {},
    currentPost: {},
    viewUser: {},
    sliceIndex: 0,
    error: null,
    searchTerm: null
};

export default function reducer(state = initialState, action) {

    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
      //  let posts = action.data.length > 16 ? action.data.slice(sliceIndex * 16, (state.sliceIndex * 16) + 16) : action.data

        return Object.assign({}, state, {
            posts: action.data,
            error: null
        });
    }

    else if (action.type === SEARCH_FOR_POSTS_SUCCESS) {

          return Object.assign({}, state, {
              searchResultPosts: action.data,
              error: null
          })
    }

    else if (action.type === CREATE_POST_SUCCESS || action.type === EDIT_POST_SUCCESS) {

        return Object.assign({}, state, {
              newlyAddedPost: action.post
        })
    }

    else if (action.type === FETCH_SELECTED_POST_SUCCESS) {

        return Object.assign({}, state, {
            currentPost: action.post
        })
    }

    else if (action.type === FETCH_SELECTED_USER_SUCCESS) {

          return Object.assign({}, state, {
            viewUser: action.user
          })
    }

    else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }

    else if (action.type === INCREASE_SLICE_INDEX) {
        const sliceIndex = state.sliceIndex + 1;

        return Object.assign({}, state, {
            sliceIndex
        });
    }

    else if (action.type === DECREASE_SLICE_INDEX) {
        const sliceIndex = state.sliceIndex - 1;
        return Object.assign({}, state, {
            sliceIndex
        });
    }

    else if (action.type === RESET_SLICE_INDEX) {
        return Object.assign({}, state, {
            sliceIndex: 0
        })
    }
    else if (action.type === SAVE_SEARCH_TERM) {
        return Object.assign({}, state, {
            searchTerm: action.searchTerm
        })
    }

    return state;
};