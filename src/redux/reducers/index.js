import { combineReducers } from 'redux'
import { authReducer } from './AuthReducer'

const reducers = combineReducers({
  Authentication: authReducer
})

export default reducers
