import Axios from 'axios'
import { URL } from '../common/constant'
const axios = Axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axios
