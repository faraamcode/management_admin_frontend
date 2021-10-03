import { AuthActions } from '../Common/AuthActions'
import axios from 'axios'

export const loginRequest = () => {
  return {
    type: AuthActions.LOGIN_REQUEST
  }
}
export const loginFailed = () => {
  return {
    type: AuthActions.LOGIN_FAILED
  }
}
export const loginSuccess = () => {
  return {
    type: AuthActions.LOGIN_SUCCESS
  }
}
