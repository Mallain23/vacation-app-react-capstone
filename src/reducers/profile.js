import {  TOGGLE_EDIT_PROFILE,
          GET_USER_PROFILE_SUCCESS,
          GET_USERS_POSTS_SUCCESS,
          EDIT_PROFILE_SUCCESS,
          TOGGLE_EDIT_POST,
          SET_EDIT_POST_TO_FALSE,
          SET_EDIT_PROFILE_TO_FALSE } from '../components/actions/profile'
import { EDIT_POST_SUCCESS } from  '../components/actions/protected-data'

const initialState = {
    editProfile: false,
    editPost: false,
    currentProfile: {},
    usersPosts: []
}

export default function reducer(state = initialState, action) {
      if (action.type === TOGGLE_EDIT_PROFILE) {

          return Object.assign({}, state, {
              editProfile: !state.editProfile
          })
      }
      else if (action.type === GET_USER_PROFILE_SUCCESS) {

            return Object.assign({}, state, {
                currentProfile: action.profile
            })
      }

      else if (action.type === GET_USERS_POSTS_SUCCESS) {

            return Object.assign({}, state, {
              usersPosts: action.usersPosts
            })
      }

      else if (action.type === EDIT_PROFILE_SUCCESS) {

          return Object.assign({}, state, {
              currentProfile: action.profile,
              editProfile: false
          })
      }

      else if (action.type === TOGGLE_EDIT_POST || action.type === EDIT_POST_SUCCESS) {

          return Object.assign({}, state, {
              editPost: !state.editPost
          })
      }

      else if (action.type === SET_EDIT_POST_TO_FALSE) {
          return Object.assign({}, state, {
              editPost: false
          })
      }

      else if (action.type === SET_EDIT_PROFILE_TO_FALSE) {
          return Object.assign({}, state, {
              editProfile: false
          })
      }

    return state
};
