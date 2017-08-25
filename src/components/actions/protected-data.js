import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_RELATED_POSTS_SUCCESS = 'FETCH_RELATED_POSTS'
export const fetchRelatedPostsSuccess = data => ({
    type: FETCH_RELATED_POSTS_SUCCESS,
    data
})

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

export const UPDATE_CURRENT_POST = 'UPDATE_CURRENT_POST'
export const updateCurrentPost = post => ({
    type: UPDATE_CURRENT_POST,
    post
})

export const UPDATE_VIEW_USER_DATA = 'UPDATE_VIEW_USER_DATA'
export const updateViewUserData = user => ({
    type: UPDATE_VIEW_USER_DATA,
    user
})

export const fetchPosts = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected/posts/`, {
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

export const fetchRelatedPosts = (amount, destination) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/protected/posts/?amount=${amount}&destination=${destination}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
      }
  })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(data => {
        dispatch(fetchRelatedPostsSuccess(data))})
      .catch(err => {
          dispatch(fetchProtectedDataError(err));
      });
};

export const createPost = values => (dispatch, getState) => {
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

export const editPost = values => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log('here')
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
      .then(data => dispatch(addNewPost(data)))

      .catch(err => {
          dispatch(fetchProtectedDataError(err));
  });
}

export const fetchSelectedPost = postId => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/protected/posts/${postId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        }
      })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(updateCurrentPost(data)))

        .catch(err => {
            dispatch(fetchProtectedDataError(err));
    });
}


export const deletePost = postId => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log(postId)
    return fetch(`${API_BASE_URL}/protected/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(() => dispatch(fetchPosts()))

    .catch(err => {
        dispatch(fetchProtectedDataError(err));
    });
}


export const fetchSelectedUser = user => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log(user)
  return fetch(`${API_BASE_URL}/users/userdata/${user}`, {
      method: 'GET',
      headers: {
          Authorization: `Bearer ${authToken}`,
          'content-type': 'application/json'
      }
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(data => dispatch(updateViewUserData(data)))

      .catch(err => {
          dispatch(fetchProtectedDataError(err));
  });
}
