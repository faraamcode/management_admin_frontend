import { AboutActions } from '../Common/AboutAction'

const initialState = {
  loading: false,
  error: null,
  success: false,
  about: null,
  createLoading: false,
  createError: null,
  createSuccess: null,
  editLoading: false,
  editError: null,
  editSuccess: null,
  deleteLoading: false,
  deleteError: null,
  deleteSuccess: null,
  validateError: null
}

export const aboutReducer = (
  state = initialState,
  { type, payload, error, validateError }
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
        createError: null,
        createSuccess: null,
        validateError: null,
        error
      }
    case AboutActions.FETCH_ABOUT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case AboutActions.CREATE_ABOUT_SUCCESS:
      return {
        ...state,
        createLoading: false,
        validateError: null,
        createSuccess: payload
      }
    case AboutActions.CREATE_ABOUT_FAILED:
      return {
        ...state,
        createLoading: false,
        createError: error
      }
    case AboutActions.CREATE_ABOUT_VALIDATE:
      return {
        ...state,
        createLoading: false,
        validateError
      }
    case AboutActions.CREATE_ABOUT_REQUEST:
      return {
        ...state,
        createLoading: true
      }
    case AboutActions.EDIT_ABOUT_FAILED:
      return {
        ...state,
        editError: error
      }
    case AboutActions.EDIT_ABOUT_REQUEST:
      return {
        ...state,
        editLoading: true
      }
    case AboutActions.EDIT_ABOUT_SUCCESS:
      return {
        ...state,
        editLoading: false,
        editSuccess: payload
      }
    case AboutActions.DELETE_ABOUT_FAILED:
      return {
        ...state,
        deleteError: error
      }
    case AboutActions.DELETE_ABOUT_REQUEST:
      return {
        ...state,
        deleteLoading: true
      }
    case AboutActions.DELETE_ABOUT_SUCCESS:
      return {
        ...state,
        deleteLoading: false,
        deleteSuccess: payload
      }
    case AboutActions.CLEAR_ABOUT:
      return {
        ...state,
        createLoading: false,
        createError: null,
        createSuccess: null,
        validateError: null,
        loading: false,
        error: null,
        success: false,
        editLoading: false,
        editError: null,
        editSuccess: null,
        deleteLoading: false,
        deleteError: null,
        deleteSuccess: null
      }

    default:
      return state
  }
}
