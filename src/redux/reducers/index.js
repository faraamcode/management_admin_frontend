import { combineReducers } from 'redux'
import { authReducer } from './AuthReducer'
import { profileReducer } from './ProfileReducer'
import { aboutReducer } from './AboutReducer'
import { admissionReducer } from './AdmissionReducer'

const reducers = combineReducers({
  Authentication: authReducer,
  Profile: profileReducer,
  About: aboutReducer,
  Admission: admissionReducer
})

export default reducers
