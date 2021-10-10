import axios from '../../services/api.service'
import { ProfileActions } from '../Common/ProfileAction'

export const fetchProfileRequest = () => {
  return {
    type: ProfileActions.FETCH_PROFILE_REQUEST
  }
}
export const fetchUser = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return async dispatch => {
    dispatch(fetchProfileRequest())

    try {
      const response = await axios.get('/user/profile')
      dispatch(fetchProfileSuccess(response.data))
    } catch (e) {
      console.log(e.response)
      switch (e.response.status) {
        case 401:
          dispatch(fetchProfileFailed(e.response.data.message))
          break
        default:
          dispatch(fetchProfileFailed('server error'))
      }
    }
  }
}
export const fetchProfileFailed = error => {
  return {
    type: ProfileActions.FETCH_PROFILE_FAILED,
    error
  }
}
export const fetchProfileSuccess = payload => {
  return {
    type: ProfileActions.FETCH_PROFILE_SUCCESS,
    payload
  }
}
