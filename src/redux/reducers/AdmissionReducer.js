import { AdmissionActions } from '../Common/AdmissionAction'

const initialState = {
  loading: false,
  error: null,
  success: false,
  admission: null,
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

export const admissionReducer = (
  state = initialState,
  { type, payload, error, validateError }
) => {
  switch (type) {
    case AdmissionActions.FETCH_ADMISSION_SUCCESS:
      return {
        ...state,
        loading: false,
        admission: payload,
        success: true
      }
    case AdmissionActions.FETCH_ADMISSION_FAILED:
      return {
        ...state,
        loading: false,
        createError: null,
        createSuccess: null,
        validateError: null,
        error
      }
    case AdmissionActions.FETCH_ADMISSION_REQUEST:
      return {
        ...state,
        loading: true
      }
    case AdmissionActions.CREATE_ADMISSION_SUCCESS:
      return {
        ...state,
        createLoading: false,
        validateError: null,
        createSuccess: payload
      }
    case AdmissionActions.CREATE_ADMISSION_FAILED:
      return {
        ...state,
        createLoading: false,
        createError: error
      }
    case AdmissionActions.CREATE_ADMISSION_VALIDATE:
      return {
        ...state,
        createLoading: false,
        validateError
      }
    case AdmissionActions.CREATE_ADMISSION_REQUEST:
      return {
        ...state,
        createLoading: true
      }
    case AdmissionActions.EDIT_ADMISSION_FAILED:
      return {
        ...state,
        editError: error
      }
    case AdmissionActions.EDIT_ADMISSION_REQUEST:
      return {
        ...state,
        editLoading: true
      }
    case AdmissionActions.EDIT_ADMISSION_SUCCESS:
      return {
        ...state,
        editLoading: false,
        editSuccess: payload
      }
    case AdmissionActions.DELETE_ADMISSION_FAILED:
      return {
        ...state,
        deleteError: error
      }
    case AdmissionActions.DELETE_ADMISSION_REQUEST:
      return {
        ...state,
        deleteLoading: true
      }
    case AdmissionActions.DELETE_ADMISSION_SUCCESS:
      return {
        ...state,
        deleteLoading: false,
        deleteSuccess: payload
      }
    case AdmissionActions.CLEAR_ADMISSION:
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
