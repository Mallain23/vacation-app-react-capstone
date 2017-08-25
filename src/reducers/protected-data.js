import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    ADD_NEW_POST,
    UPDATE_CURRENT_POST,
    UPDATE_VIEW_USER_DATA,
    FETCH_RELATED_POSTS_SUCCESS
} from '../components/actions/protected-data';

const initialState = {
    posts: [],
    newlyAddedPost: {},
    currentPost: {},
    viewUser: {},
    relatedPosts: [],
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

    else if (action.type === FETCH_RELATED_POSTS_SUCCESS) {
          console.log(action.data)
          return Object.assign({}, state, {
              relatedPosts: action.data,
              error: null
          })
    }

    else if (action.type === ADD_NEW_POST) {
        return Object.assign({}, state, {
              newlyAddedPost: action.post
        })
    }

    else if (action.type === UPDATE_CURRENT_POST) {
        console.log(action.post)
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
