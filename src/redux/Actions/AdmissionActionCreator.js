import axios from '../../services/api.service'
import { AdmissionActions } from '../Common/AdmissionAction'

export const fetchAdmissionRequest = () => {
  return {
    type: AdmissionActions.FETCH_ADMISSION_REQUEST
  }
}
export const fetchAdmissionFailed = error => {
  return {
    type: AdmissionActions.FETCH_ADMISSION_FAILED,
    error
  }
}
export const fetchAdmissionSuccess = payload => {
  return {
    type: AdmissionActions.FETCH_ADMISSION_SUCCESS,
    payload
  }
}
export const createAdmissionRequest = () => {
  return {
    type: AdmissionActions.CREATE_ADMISSION_REQUEST
  }
}
export const createAdmissionFailed = error => {
  return {
    type: AdmissionActions.CREATE_ADMISSION_FAILED,
    error
  }
}

export const createAdmissionValidate = validateError => {
  return {
    type: AdmissionActions.CREATE_ADMISSION_VALIDATE,
    validateError
  }
}

export const createAdmissionSuccess = payload => {
  return {
    type: AdmissionActions.CREATE_ADMISSION_SUCCESS,
    payload
  }
}
export const clearAdmission = () => {
  return {
    type: AdmissionActions.CLEAR_ADMISSION
  }
}
export const editAdmissionRequest = () => {
  return {
    type: AdmissionActions.EDIT_ADMISSION_REQUEST
  }
}

export const editAdmissionSuccess = payload => {
  return {
    type: AdmissionActions.EDIT_ADMISSION_SUCCESS,
    payload
  }
}
export const editAdmissionFailed = () => {
  return {
    type: AdmissionActions.EDIT_ADMISSION_FAILED
  }
}
export const deleteAdmissionRequest = () => {
  return {
    type: AdmissionActions.DELETE_ADMISSION_REQUEST
  }
}

export const deleteAdmissionSuccess = payload => {
  return {
    type: AdmissionActions.DELETE_ADMISSION_SUCCESS,
    payload
  }
}
export const deleteAdmissionFailed = () => {
  return {
    type: AdmissionActions.DELETE_ADMISSION_FAILED
  }
}

export const fetchAdmission = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return async dispatch => {
    dispatch(fetchAdmissionRequest())

    try {
      const response = await axios.get('/admission')
      dispatch(fetchAdmissionSuccess(response.data))
    } catch (e) {
      switch (e.response.status) {
        case 401:
          dispatch(fetchAdmissionFailed(e.response.data.message))
          break
        default:
          dispatch(fetchAdmissionFailed('server error'))
      }
    }
  }
}
export const createAdmission = (token, values) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return async dispatch => {
    dispatch(createAdmissionRequest())

    try {
      const response = await axios.post('/admission', values)
      dispatch(createAdmissionSuccess(response.data))
    } catch (e) {
      switch (e.response.status) {
        case 401:
          dispatch(createAdmissionFailed(e.response.data.message))
          break
        case 422:
          dispatch(createAdmissionValidate(e.response.data))
          break
        default:
          dispatch(createAdmissionFailed('server error'))
      }
    }
  }
}

export const updateAdmission = (token, id, values) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return async dispatch => {
    dispatch(editAdmissionRequest())

    try {
      const response = await axios.patch(`/Admission/update/${id}`, values)
      dispatch(editAdmissionSuccess(response.data))
    } catch (e) {
      switch (e.response.status) {
        case 401:
          dispatch(editAdmissionFailed(e.response.data.message))
          break
        default:
          dispatch(editAdmissionFailed('server error'))
      }
    }
  }
}
export const deleteAdmission = (token, id) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  console.log(id)
  return async dispatch => {
    dispatch(deleteAdmissionRequest())

    try {
      const response = await axios.delete(`/Admission/delete/${id}`)
      dispatch(deleteAdmissionSuccess(response.data))
    } catch (e) {
      console.log(e)
      //   switch (e.response.status) {
      //     case 401:
      //       dispatch(deleteAdmissionFailed(e.response.data.message))
      //       break
      //     default:
      //       dispatch(deleteAdmissionFailed('server error'))
      //   }
    }
  }
}
