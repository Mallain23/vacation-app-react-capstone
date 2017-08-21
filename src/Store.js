import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import appReducer from './reducers/app'

export default createStore(appReducer)
//     combineReducers({
//         appReducer,
//         form: formReducer
//     })
// );
