import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import appReducer from './reducers/app'

const reducers = combineReducers({
  form: formReducer,
  app: appReducer
})

export default createStore(reducers);
