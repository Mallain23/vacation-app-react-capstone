import {  TOGGLE_EDIT_PROFILE,
          GET_USER_PROFILE_SUCCESS,
          EDIT_PROFILE_SUCCESS,
          SET_EDIT_PROFILE_TRUE,
          SET_EDIT_PROFILE_TO_FALSE } from '../components/actions/profile'
import { EDIT_POST_SUCCESS,
         GET_USERS_POSTS_SUCCESS,
         SET_EDIT_POST_TRUE,
         SET_EDIT_POST_TO_FALSE} from  '../components/actions/posts'

const initialState = {
    editProfile: false,
    editPost: false,
    currentProfile: {},
    usersPosts: []
}

export default function reducer(state = initialState, action) {

     if (action.type === GET_USER_PROFILE_SUCCESS) {

            return Object.assign({}, state, {
                currentProfile: action.profile
            })
      }

      else if (action.type === GET_USERS_POSTS_SUCCESS) {

            const usersPosts = action.usersPosts.posts
          
            return Object.assign({}, state, {
              usersPosts
            })
      }

      else if (action.type === EDIT_PROFILE_SUCCESS) {

          return Object.assign({}, state, {
              currentProfile: action.profile,
              editProfile: false
          })
      }

      else if (action.type === SET_EDIT_POST_TRUE) {

          return Object.assign({}, state, {
              editPost: true
          })
      }

      else if (action.type === SET_EDIT_POST_TO_FALSE || action.type ===  EDIT_POST_SUCCESS) {
          return Object.assign({}, state, {
              editPost: false
          })
      }

      else if (action.type === SET_EDIT_PROFILE_TRUE) {

          return Object.assign({}, state, {
              editProfile: true
          })
      }

      else if (action.type === SET_EDIT_PROFILE_TO_FALSE) {
          return Object.assign({}, state, {
              editProfile: false
          })
      }

    return state
};
