import axios from '../../services/api.service'
import { AboutActions } from '../Common/AboutAction'

export const fetchAboutRequest = () => {
  return {
    type: AboutActions.FETCH_ABOUT_REQUEST
  }
}
export const fetchAboutFailed = error => {
  return {
    type: AboutActions.FETCH_ABOUT_FAILED,
    error
  }
}
export const fetchAboutSuccess = payload => {
  return {
    type: AboutActions.FETCH_ABOUT_SUCCESS,
    payload
  }
}
export const createAboutRequest = () => {
  return {
    type: AboutActions.CREATE_ABOUT_REQUEST
  }
}
export const createAboutFailed = error => {
  return {
    type: AboutActions.CREATE_ABOUT_FAILED,
    error
  }
}

export const createAboutValidate = validateError => {
  return {
    type: AboutActions.CREATE_ABOUT_VALIDATE,
    validateError
  }
}

export const createAboutSuccess = payload => {
  return {
    type: AboutActions.CREATE_ABOUT_SUCCESS,
    payload
  }
}
export const clearAbout = () => {
  return {
    type: AboutActions.CLEAR_ABOUT
  }
}
export const editAboutRequest = () => {
  return {
    type: AboutActions.EDIT_ABOUT_REQUEST
  }
}

export const editAboutSuccess = payload => {
  return {
    type: AboutActions.EDIT_ABOUT_SUCCESS,
    payload
  }
}
export const editAboutFailed = () => {
  return {
    type: AboutActions.EDIT_ABOUT_FAILED
  }
}
export const deleteAboutRequest = () => {
  return {
    type: AboutActions.DELETE_ABOUT_REQUEST
  }
}

export const deleteAboutSuccess = payload => {
  return {
    type: AboutActions.DELETE_ABOUT_SUCCESS,
    payload
  }
}
export const deleteAboutFailed = () => {
  return {
    type: AboutActions.DELETE_ABOUT_FAILED
  }
}

export const fetchAbout = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return async dispatch => {
    dispatch(fetchAboutRequest())

    try {
      const response = await axios.get('/about')
      dispatch(fetchAboutSuccess(response.data))
    } catch (e) {
      switch (e.response.status) {
        case 401:
          dispatch(fetchAboutFailed(e.response.data.message))
          break
        default:
          dispatch(fetchAboutFailed('server error'))
      }
    }
  }
}
export const createAbout = (token, values) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return async dispatch => {
    dispatch(createAboutRequest())

    try {
      const response = await axios.post('/about', values)
      dispatch(createAboutSuccess(response.data))
    } catch (e) {
      switch (e.response.status) {
        case 401:
          dispatch(createAboutFailed(e.response.data.message))
          break
        case 422:
          dispatch(createAboutValidate(e.response.data))
          break
        default:
          dispatch(createAboutFailed('server error'))
      }
    }
  }
}

export const updateAbout = (token, id, values) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return async dispatch => {
    dispatch(editAboutRequest())

    try {
      const response = await axios.patch(`/about/update/${id}`, values)
      dispatch(editAboutSuccess(response.data))
    } catch (e) {
      switch (e.response.status) {
        case 401:
          dispatch(editAboutFailed(e.response.data.message))
          break
        default:
          dispatch(editAboutFailed('server error'))
      }
    }
  }
}
export const deleteAbout = (token, id) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  console.log(id)
  return async dispatch => {
    dispatch(deleteAboutRequest())

    try {
      const response = await axios.delete(`/about/delete/${id}`)
      dispatch(deleteAboutSuccess(response.data))
    } catch (e) {
      console.log(e)
      //   switch (e.response.status) {
      //     case 401:
      //       dispatch(deleteAboutFailed(e.response.data.message))
      //       break
      //     default:
      //       dispatch(deleteAboutFailed('server error'))
      //   }
    }
  }
}
