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

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const createPostSuccess = post =>({
    type: CREATE_POST_SUCCESS,
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

export const SET_EDIT_POST_TRUE = 'SET_EDIT_POST_TRUE'
export const setEditPostTrue = () => ({
    type: SET_EDIT_POST_TRUE
});

export const SET_EDIT_POST_TO_FALSE = 'SET_EDIT_POST_TO_FALSE'
export const setEditPostToFalse = () => ({
    type: SET_EDIT_POST_TO_FALSE
});


export const testFunction = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

      return fetch(`${API_BASE_URL}/protected/sort`, {
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
