import axios from 'axios'
import {loadUserSession} from '../store/localStorage'

const api = axios.create({
  // baseURL: 'http://demo6925046.mockable.io',
  baseURL: 'http://smktesting.herokuapp.com/api',
})

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// Add a requesr interceptor
api.interceptors.request.use(function(config) {
  let userSession = loadUserSession()
  let token = userSession.token
  if (token) {
    config.headers["Authorization"] = `Token${token}`
  }
  return config
}, function(error) {
  return Promise.reject(error)
})

// Add a response interceptor
api.interceptors.response.use(function(response) {
  return sleep(2000) // simulate server latency
    .then(() => {
      return response
    })
}, function(error) {
  return Promise.reject(error)
})

export default api
