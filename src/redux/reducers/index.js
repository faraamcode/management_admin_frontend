import { combineReducers } from 'redux'
import { authReducer } from './AuthReducer'
import { profileReducer } from './ProfileReducer'

const reducers = combineReducers({
  Authentication: authReducer,
  Profile: profileReducer
})

export default reducers
