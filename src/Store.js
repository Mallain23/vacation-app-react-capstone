import {createStore, combineReducers, applyMiddleware} from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import {setAuthToken} from './components/actions/auth';
import appReducer from './reducers/app'

const reducers = combineReducers({
  form: formReducer,
  app: appReducer,
  auth: authReducer,
  protectedData: protectedDataReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
}

export default store
