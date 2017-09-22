import { normalizeResponseErrors } from './utils';
import {API_BASE_URL} from '../config';
import { SubmissionError } from 'redux-form';
import { fetchProtectedDataError, FETCH_PROTECTED_DATA_ERROR } from './posts'
import { fetchSelectedUserSuccess,
         getUserProfileSuccess,
         editProfileSuccess,
         addPostToFavoritesSuccess,
         deletePostFromFavoriteSuccess,
         getCurrentUserProfileSuccess} from './profile'

//this function will get user data for a selected user (viewing profile)
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
    .then(data => dispatch(fetchSelectedUserSuccess(data)))
    .catch(err => dispatch(fetchProtectedDataError(err)));
};


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
        .then(data => dispatch(getUserProfileSuccess(data)))
        .catch(err => dispatch(fetchProtectedDataError(err)));
};


export const editProfile = values => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

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
    .then(data => dispatch(editProfileSuccess(data)))
    .then(() => console.log('Submitted with values', values))
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
                _error: 'Error Submitting Profile Data'
            })
        );
    });
};


export const addPostToFavorites = (post, username) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/users/favorites`, {
        method: 'PUT',
        headers: {
              Authorization: `Bearer ${authToken}`,
              'content-type': 'application/json'
          },
          body: JSON.stringify({post, username})
    })

    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(profile => dispatch(addPostToFavoritesSuccess(profile)))
    .then(() => console.log('Submitted post', post))
    .catch(err => dispatch(fetchProtectedDataError(err)))
};

export const removePostFromFavorites = (postId, username) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/users/favorites/${postId}/${username}`, {
      method: 'DELETE',
      headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        }
  })

    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(profile => dispatch(deletePostFromFavoriteSuccess(profile)))
    .then(() => console.log('Deleting Post', postId))
    .catch(err => dispatch(fetchProtectedDataError(err)))
};

export const getCurrentUserProfile = () => (dispatch, getState) => {
    const { username } = getState().auth.currentUser
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/users/userdata/${username}/${null}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
          console.log(data)
          dispatch(getCurrentUserProfileSuccess(data))})
        .catch(err => dispatch(fetchProtectedDataError(err)));
};
