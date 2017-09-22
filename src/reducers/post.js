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
    SAVE_SEARCH_TERM,
    GET_USERS_POSTS_SUCCESS } from '../components/actions/posts';
import { FETCH_SELECTED_USER_SUCCESS } from '../components/actions/profile'

const initialState = {
    posts: [],
    searchResultPosts: [],
    newlyAddedPost: {},
    currentPost: {},
    viewUser: {},
    sliceIndex: 0,
    final: false,
    error: null,
    searchTerm: null
};

export default function reducer(state = initialState, action) {

    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {

        const final = action.data.final
        const posts = action.data.posts

        return Object.assign({}, state, {
            posts,
            final,
            error: null
        });
    }

    else if (action.type === SEARCH_FOR_POSTS_SUCCESS) {

          const final = action.data.final
          const searchResultPosts= action.data.posts

          return Object.assign({}, state, {
              searchResultPosts,
              final,
              error: null
          });
    }

    else if (action.type === CREATE_POST_SUCCESS || action.type === EDIT_POST_SUCCESS) {

        return Object.assign({}, state, {
              newlyAddedPost: action.post
        });
    }

    else if (action.type === FETCH_SELECTED_POST_SUCCESS) {

        return Object.assign({}, state, {
            currentPost: action.post
        });
    }

    else if (action.type === FETCH_SELECTED_USER_SUCCESS) {

          return Object.assign({}, state, {
            viewUser: action.user
          });
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
        });
    }
    else if (action.type === SAVE_SEARCH_TERM) {
        return Object.assign({}, state, {
            searchTerm: action.searchTerm
        });
    }

    else if (action.type === GET_USERS_POSTS_SUCCESS) {
        const final = action.usersPosts.final

        return Object.assign({}, state,  {
            final
        });
    }

    return state;
};
