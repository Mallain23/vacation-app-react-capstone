import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {fetchProtectedDataError, FETCH_PROTECTED_DATA_ERROR } from './protected-data'

export const TOGGLE_EDIT_PROFILE = 'TOGGLE_EDIT_PROFILE';
export const toggleEditProfile = () => ({
    type: TOGGLE_EDIT_PROFILE
})

export const TOGGLE_EDIT_POST = 'TOGGLE_EDIT_POST'
export const toggleEditPost = () => ({
    type: TOGGLE_EDIT_POST
});

export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS'
export const getUserProfileSuccess = profile => ({
    type: GET_USER_PROFILE_SUCCESS,
    profile
})

export const GET_USERS_POSTS_SUCCESS = 'GET_USERS_POSTS_SUCCESS'
export const getUsersPostsSuccess = usersPosts => ({
    type: GET_USERS_POSTS_SUCCESS,
    usersPosts
})

export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS'
export const editProfileSuccess = profile => ({
    type: EDIT_PROFILE_SUCCESS,
    profile
})

export const GET_USER_PROFILE = 'GET_USER_PROFILE'
export const getUserProfile = profileId => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/users/userdata/${null}/${profileId}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
          dispatch(getUserProfileSuccess(data))
          dispatch(getUsersPosts(data.username))
        })
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
}

export const GET_USERS_POSTS = 'GET_USERS_POSTS';
export const getUsersPosts = username => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/protected/posts/?username=${username}`, {
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

export const EDIT_PROFILE = 'EDIT-PROFILE'
export const editProfile = values => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log(values)
    return fetch(`${API_BASE_URL}/users`, {
        method: 'PUT',
        headers: {
              Authorization: `Bearer ${authToken}`,
              'content-type': 'application/json'
          },
          body: JSON.stringify(values)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
          dispatch(editProfileSuccess(data))})
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
}
