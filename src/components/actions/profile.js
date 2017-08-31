import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';
import {fetchProtectedDataError, FETCH_PROTECTED_DATA_ERROR } from './posts'

export const FETCH_SELECTED_USER_SUCCESS = 'FETCH_SELECTED_USER_SUCCESS'
export const fetchSelectedUserSuccess = user => ({
    type: FETCH_SELECTED_USER_SUCCESS,
    user
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

export const SET_EDIT_PROFILE_TRUE = 'SET_EDIT_PROFILE_TRUE'
export const setEditProfileTrue = () => ({
    type: SET_EDIT_PROFILE_TRUE
});

export const SET_EDIT_PROFILE_TO_FALSE = 'SET_EDIT_PROFILE_TO_FALSE'
export const setEditProfileToFalse = () => ({
    type: SET_EDIT_PROFILE_TO_FALSE
});
