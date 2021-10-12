import axios from '../../services/api.service'
import { AboutActions } from '../Common/AboutAction'

export const fetchAboutRequest = () => {
  return {
    type: AboutActions.FETCH_ABOUT_REQUEST
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
