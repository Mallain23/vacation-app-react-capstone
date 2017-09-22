
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

export const ADD_POST_TO_FAVORITE_SUCCESS = 'ADD_POST_TO_FAVORITE_SUCCESS'
export const addPostToFavoritesSuccess = profile => ({
      type: ADD_POST_TO_FAVORITE_SUCCESS,
      profile
})

export const DELETE_POST_FROM_FAVORITES_SUCESS = 'DELETE_POST_FROM_FAVORITES_SUCESS'
export const deletePostFromFavoriteSuccess = profile => ({
    type: DELETE_POST_FROM_FAVORITES_SUCESS,
    profile
})

export const GET_CURRENT_USER_PROFILE_SUCCESS = 'GET_CURRENT_USER_PROFILE_SUCCESS'
export const getCurrentUserProfileSuccess = profile => ({
    type: GET_CURRENT_USER_PROFILE_SUCCESS,
    profile
})

export const getFavoritePosts = (sliceIndex, newSliceIndex) => (dispatch, getState) => {
  const { favoritePosts } = getState().profile.currentProfile

  const finalPostIndicator = favoritePosts.slice(0 * sliceIndex, (0 * sliceIndex) + 9).length < 9 ? true : false
  const postToDisplay  = favoritePosts.slice(0 * sliceIndex, (0 * sliceIndex) + 8)

  dispatch(getUserFavoritesSuccess(postToDisplay, finalPostIndicator, newSliceIndex))

}


export const GET_USER_FAVORITES_SUCCESS = 'GET_USER_FAVORITES_SUCCESS'
export const getUserFavoritesSuccess = (posts, finalPostIndicator, newSliceIndex) => ({
    type: GET_USER_FAVORITES_SUCCESS,
    posts,
    finalPostIndicator,
    newSliceIndex
});
