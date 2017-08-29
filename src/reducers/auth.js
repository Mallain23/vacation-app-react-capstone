import {SET_AUTH_TOKEN, SET_CURRENT_USER,} from '../components/actions/auth';
import {TOGGLE_LOGIN} from '../components/actions/users'

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    showLogin: false
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

    else if (action.type ===  TOGGLE_LOGIN) {
        return Object.assign({}, state, {
          showLogin: !state.showLogin
        })
    }

    return state;
};
