import axios from '../../services/api.service'
import { AuthActions } from '../Common/AuthActions'

export const loginRequest = () => {
  return {
    type: AuthActions.LOGIN_REQUEST
  }
}
export const loginUser = ({ email, password }) => {
  const value = { user_email: email, user_password: password }
  return async dispatch => {
    dispatch(loginRequest())
    try {
      const response = await axios.post('/user/login', value)
      dispatch(loginSuccess(response.data.token))
    } catch (e) {
      switch (e.response.status) {
        case 401:
          dispatch(loginFailed(e.response.data.message, null))
          break
        case 422:
          dispatch(loginFailed(null, e.response.data))
          break
        default:
          dispatch(loginFailed(e.response.data.message))
      }
    }
  }
}
export const loginFailed = (error, validationError) => {
  return {
    type: AuthActions.LOGIN_FAILED,
    error,
    validationError
  }
}
export const loginSuccess = payload => {
  return {
    type: AuthActions.LOGIN_SUCCESS,
    payload
  }
}
