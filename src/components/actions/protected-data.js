import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

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

export const ADD_NEW_POST = 'ADD_NEW_POST'
export const addNewPost = post =>({
    type: ADD_NEW_POST,
    post
})

export const fetchPosts = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected/posts`, {
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

export const createPost = (values) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log(values)
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
          dispatch(fetchProtectedDataError(err));
  });
}
