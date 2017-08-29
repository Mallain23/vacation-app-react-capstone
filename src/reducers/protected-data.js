import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    ADD_NEW_POST,
    FETCH_SELECTED_POST_SUCCESS,
    UPDATE_VIEW_USER_DATA,
    SEARCH_FOR_POSTS_SUCCESS,
    EDIT_POST_SUCCESS } from '../components/actions/protected-data';

const initialState = {
    posts: [],
    searchResultPosts: [],
    newlyAddedPost: {},
    currentPost: {},
    viewUser: {},
    sliceIndex: 0,
    error: null
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

    else if (action.type === ADD_NEW_POST || action.type === EDIT_POST_SUCCESS) {

        return Object.assign({}, state, {
              newlyAddedPost: action.post
        })
    }

    else if (action.type === FETCH_SELECTED_POST_SUCCESS) {

        return Object.assign({}, state, {
            currentPost: action.post
        })
    }

    else if (action.type === UPDATE_VIEW_USER_DATA) {
          console.log(action.user)
          return Object.assign({}, state, {
            viewUser: action.user
          })
    }

    else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }

    return state;
}
