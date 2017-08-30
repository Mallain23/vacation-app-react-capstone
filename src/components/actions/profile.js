import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';
import {fetchProtectedDataError, FETCH_PROTECTED_DATA_ERROR } from './protected-data'

export const SET_EDIT_POST_TRUE = 'SET_EDIT_POST_TRUE'
export const setEditPostTrue = () => ({
    type: SET_EDIT_POST_TRUE
});

export const SET_EDIT_POST_TO_FALSE = 'SET_EDIT_POST_TO_FALSE'
export const setEditPostToFalse = () => ({
    type: SET_EDIT_POST_TO_FALSE
});

export const SET_EDIT_PROFILE_TRUE = 'SET_EDIT_PROFILE_TRUE'
export const setEditProfileTrue = () => ({
    type: SET_EDIT_PROFILE_TRUE
});

export const SET_EDIT_PROFILE_TO_FALSE = 'SET_EDIT_PROFILE_TO_FALSE'
export const setEditProfileToFalse = () => ({
    type: SET_EDIT_PROFILE_TO_FALSE
});

export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS'
export const getUserProfileSuccess = profile => ({
    type: GET_USER_PROFILE_SUCCESS,
    profile
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
        .then(data => dispatch(getUserProfileSuccess(data)))
        .catch(err => dispatch(fetchProtectedDataError(err)));
}

export const EDIT_PROFILE = 'EDIT-PROFILE'
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
