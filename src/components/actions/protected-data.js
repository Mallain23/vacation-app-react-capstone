import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import { SubmissionError } from 'redux-form';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const SEARCH_FOR_POSTS_SUCCESS = 'SEARCH_FOR_POSTS_SUCCESS'
export const searchForPostsSuccess = data => ({
    type: SEARCH_FOR_POSTS_SUCCESS,
    data
});

export const ADD_NEW_POST = 'ADD_NEW_POST'
export const addNewPost = post =>({
    type: ADD_NEW_POST,
    post
});

export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS'
export const editPostSuccess = post => ({
    type: EDIT_POST_SUCCESS,
    post
});

export const FETCH_SELECTED_POST_SUCCESS = 'FETCH_SELECTED_POST_SUCCESS'
export const fetchSelectedPostSuccess = post => ({
    type: FETCH_SELECTED_POST_SUCCESS,
    post
});

export const UPDATE_VIEW_USER_DATA = 'UPDATE_VIEW_USER_DATA'
export const updateViewUserData = user => ({
    type: UPDATE_VIEW_USER_DATA,
    user
});

export const INCREASE_SLICE_INDEX = 'INCREASE_SLICE_INDEX'
export const increaseSliceIndex = () => ({
    type: INCREASE_SLICE_INDEX
})

export const DECREASE_SLICE_INDEX = 'DECREASE_SLICE_INDEX'
export const decreaseSliceIndex = () => ({
    type: DECREASE_SLICE_INDEX
})

export const RESET_SLICE_INDEX = 'RESET_SLICE_INDEX'
export const resetSliceIndex = () => ({
    type: RESET_SLICE_INDEX
})

export const SAVE_SEARCH_TERM = 'SAVE_SEARCH_TERM'
export const saveSearchTerm = searchTerm => ({
    type: SAVE_SEARCH_TERM,
    searchTerm
})

export const GET_USERS_POSTS_SUCCESS = 'GET_USERS_POSTS_SUCCESS'
export const getUsersPostsSuccess = usersPosts => ({
    type: GET_USERS_POSTS_SUCCESS,
    usersPosts
})


export const GET_USERS_POSTS = 'GET_USERS_POSTS';
export const getUsersPosts = (username, sliceIndex) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/protected/posts/${sliceIndex}/?username=${username}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
          dispatch(getUsersPostsSuccess(data))})
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
}


export const fetchPosts = sliceIndex => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected/posts/${sliceIndex}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
          dispatch(fetchProtectedDataSuccess(data))})
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const searchForPosts = (searchTerm, amount, searchIndex) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    let URL = `${API_BASE_URL}/protected/search/?searchTerm=${searchTerm}&amount=${amount}&searchIndex=${searchIndex}`;

    return fetch(URL, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(searchForPostsSuccess(data)))
    .catch(err => dispatch(fetchProtectedDataError(err)));
};

export const createPost = values => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/protected/posts`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(addNewPost(data)))
    .catch(err => {
        const {reason, message, location} = err;
        if (reason === 'ValidationError') {
             return Promise.reject(
                 new SubmissionError({
                     [location]: message
                 })
             );
        }
        return Promise.reject(
            new SubmissionError({
                _error: 'Error Submitting Post Data'
            })
        );
    });
}

export const editPost = values => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/protected/posts`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify(values)
    })

    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(editPostSuccess(data)))

    .catch(err => {
        const {reason, message, location} = err;

        if (reason === 'ValidationError') {
             return Promise.reject(
                 new SubmissionError({
                     [location]: message
                 })
             );
        }

        return Promise.reject(
            new SubmissionError({
                _error: 'Error Submitting Post Data'
            })
        );
    });
};

export const fetchSelectedPost = postId => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/protected/post/${postId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        }
      })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(fetchSelectedPostSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
    });
}


export const deletePost = (postId, username) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/protected/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(() => dispatch(getUsersPosts(username)))
    .catch(err => dispatch(fetchProtectedDataError(err)));
}


export const fetchSelectedUser = user => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/users/userdata/${user}/${null}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        }
    })

    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(updateViewUserData(data)))

    .catch(err => dispatch(fetchProtectedDataError(err)));
};
