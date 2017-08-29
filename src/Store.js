import {createStore, combineReducers, applyMiddleware} from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import {setAuthToken} from './components/actions/auth';
import profileReducer from './reducers/profile'

const reducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  protectedData: protectedDataReducer,
  profile: profileReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
}

export default store
