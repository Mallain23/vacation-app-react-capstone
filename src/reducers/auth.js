import {SET_AUTH_TOKEN, SET_CURRENT_USER,} from '../components/actions/auth';
import {OPEN_LOGIN_FORM, OPEN_SIGNUP_FORM, CLOSE_AUTH_MODAL } from '../components/actions/users';
import { EDIT_PROFILE_SUCCESS } from '../components/actions/profile'

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
};

export default function reducer(state = initialState, action) {

    if (action.type === SET_AUTH_TOKEN) {

          return Object.assign({}, state, {
              authToken: action.authToken
          });
    }

    else if (action.type === SET_CURRENT_USER) {

        return Object.assign({}, state, {
            currentUser: action.currentUser
        });
    }

    else if (action.type === CLOSE_AUTH_MODAL) {
        return Object.assign({}, state, {
              showAuthModal: false,
              showLogin: false
        });
    }

    else if (action.type ===  OPEN_LOGIN_FORM) {
        return Object.assign({}, state, {
          showLogin: true,
          showAuthModal: true
        })
    }

    else if (action.type ===  OPEN_SIGNUP_FORM) {
        return Object.assign({}, state, {
          showLogin: false,
          showAuthModal: true
        })
    }

    else if (action.type === EDIT_PROFILE_SUCCESS) {

        return Object.assign({}, state, {
            currentUser: action.profile
        });
    }

    return state;
};
