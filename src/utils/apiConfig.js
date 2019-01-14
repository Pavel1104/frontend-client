import axios from 'axios'
import {loadUserSession} from '../store/localStorage'

const api = axios.create({
  // baseURL: 'http://demo6925046.mockable.io',
  baseURL: 'http://smktesting.herokuapp.com/api',
});

api.interceptors.request.use(function(config) {
  let userSession = loadUserSession()
  let token = userSession.token
  if (token) {
    config.headers["Authorization"] = `Token${token}`
  }
  return config;
}, function(error) {
  return Promise.reject(error);
});

export default api
