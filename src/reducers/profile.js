import {  TOGGLE_EDIT_PROFILE,
          GET_USER_PROFILE_SUCCESS,
          EDIT_PROFILE_SUCCESS,
          SET_EDIT_PROFILE_TRUE,
          SET_EDIT_PROFILE_TO_FALSE,
          ADD_POST_TO_FAVORITE_SUCCESS,
          DELETE_POST_FROM_FAVORITES_SUCESS,
          GET_CURRENT_USER_PROFILE_SUCCESS,
          GET_USER_FAVORITES_SUCCESS } from '../components/actions/profile'
import { EDIT_POST_SUCCESS,
         GET_USERS_POSTS_SUCCESS,
         SET_EDIT_POST_TRUE,
         SET_EDIT_POST_TO_FALSE} from  '../components/actions/posts'

const POSTS = 'POSTS'
const FAVORITES = 'FAVORITES'

const initialState = {
    editProfile: false,
    editPost: false,
    currentProfile: {},
    usersPosts: [],
    myProfile: {},
    favorites: [],
    profileView: POSTS,
    finalPostIndicator: false,
    favoritePostSliceIndex: 0
}

export default function reducer(state = initialState, action) {
      console.log(action)
     if (action.type === GET_USER_PROFILE_SUCCESS) {

            return Object.assign({}, state, {
                currentProfile: action.profile,
                editProfile: false
            })
      }

      else if (action.type === GET_USERS_POSTS_SUCCESS) {

            const usersPosts = action.usersPosts.posts
            console.log(action)
            return Object.assign({}, state, {
              usersPosts,
              profileView: POSTS,
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

      else if (action.type === ADD_POST_TO_FAVORITE_SUCCESS ||
               action.type === DELETE_POST_FROM_FAVORITES_SUCESS ||
               action.type === GET_CURRENT_USER_PROFILE_SUCCESS) {

          const { profile: myProfile } = action
          return Object.assign({}, state, {
              myProfile
          })
      }

      else if (action.type === GET_USER_FAVORITES_SUCCESS) {
          const { posts: favorites, finalPostIndicator, newSliceIndex } = action
          console.log(favorites)
          return Object.assign({}, state, {
              favorites,
              finalPostIndicator,
              profileView: FAVORITES,
              favoritePostSliceIndex: newSliceIndex
          })
      }

    return state
};
