import { combineReducers } from 'redux'
import { authReducer } from './AuthReducer'
import { profileReducer } from './ProfileReducer'
import { aboutReducer } from './AboutReducer'

const reducers = combineReducers({
  Authentication: authReducer,
  Profile: profileReducer,
  About: aboutReducer
})

export default reducers
