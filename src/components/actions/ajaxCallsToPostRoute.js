import {normalizeResponseErrors} from './utils';
import { SubmissionError } from 'redux-form';
import { fetchProtectedDataError,
         fetchProtectedDataSuccess,
         fetchSelectedPostSuccess,
         getUsersPostsSuccess,
         searchForPostsSuccess,
         createPostSuccess,
         editPostSuccess } from './posts'
         
const API_BASE_URL = 'https://thawing-crag-61618.herokuapp.com/api'

//this function gets the most recent posts to display when user logins
export const fetchPosts = (sliceIndex, amount) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/protected/posts/${sliceIndex}/?amount=${amount}`, {
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

//this function searchs for posts, returns matches of all categories, but prioritizes destination and title
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

//this function returns all the posts by a given user (to display when they are looking at profile)
export const getUsersPosts = (username, sliceIndex, amount) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/protected/posts/${sliceIndex}/?amount=${amount}&username=${username}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(getUsersPostsSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

//this ajax call returns only one post, the post that the user clicks on to read
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
    .then(data => dispatch(createPostSuccess(data)))
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
};
