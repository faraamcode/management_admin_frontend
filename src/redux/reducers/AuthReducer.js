import { AuthActions } from '../Common/AuthActions'

const initialState = {
  loading: false,
  error: null,
  token: 'nill'
}

export const authReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case AuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: 'success'
      }
    case AuthActions.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: 'error message',
        token: 'failed'
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
