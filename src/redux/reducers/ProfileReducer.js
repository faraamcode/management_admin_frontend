import { ProfileActions } from '../Common/ProfileAction'

const initialState = {
  loading: false,
  error: null,
  success: false,
  profile: null
}

export const profileReducer = (
  state = initialState,
  { type, payload, error, validationError }
) => {
  switch (type) {
    case ProfileActions.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: payload,
        success: true
      }
    case ProfileActions.FETCH_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        error
      }
    case ProfileActions.FETCH_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}
