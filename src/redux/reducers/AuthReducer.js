import { AuthActions } from '../Common/AuthActions'

const initialState = {
  loading: false,
  error: null,
  success: false,
  token: null,
  validationError: null
}

export const authReducer = (
  state = initialState,
  { type, payload, error, validationError }
) => {
  switch (type) {
    case AuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
        success: true
      }
    case AuthActions.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error,
        validationError
      }
    case AuthActions.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}
