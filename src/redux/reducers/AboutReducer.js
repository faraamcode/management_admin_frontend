import { AboutActions } from '../Common/AboutAction'

const initialState = {
  loading: false,
  error: null,
  success: false,
  about: null
}

export const aboutReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case AboutActions.FETCH_ABOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        about: payload,
        success: true
      }
    case AboutActions.FETCH_ABOUT_FAILED:
      return {
        ...state,
        loading: false,
        error
      }
    case AboutActions.FETCH_ABOUT_REQUEST:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}
