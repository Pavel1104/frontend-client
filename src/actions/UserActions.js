import api from '../utils/apiConfig'
import {history} from '../store/configureStore'
import {saveUserSession, loadUserSession} from '../store/localStorage'

export const RESTORE_USER_SESSION = 'RESTORE_USER_SESSION'
export const RESTORE_USER_SESSION_SUCCESS = 'RESTORE_USER_SESSION_SUCCESS'
export const RESTORE_USER_SESSION_FAIL = 'RESTORE_USER_SESSION_FAIL'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const LOGOUT = 'LOGOUT'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

export function restoreUserSession() {
  return function(dispatch) {
    dispatch({
      type: RESTORE_USER_SESSION,
    })

    Promise.resolve()
    .then(() => {
      let {username, token} = loadUserSession()
      if(username && token) {
        return {username, token}
      }
      // eslint-disable-next-line
      throw 'empty username or token'
    })
    .then((data) => {
      dispatch(restoreSuccess(data.username, data.token))
    })
    .catch(() => {
      dispatch({
        type: RESTORE_USER_SESSION_FAIL,
      })
    })
  }
}

const restoreSuccess = (username, token) => {
  return {
    type: RESTORE_USER_SESSION_SUCCESS,
    payload: {
      success: true,
      username,
      token,
    }
  }
}

export function handleRegister(username, password) {
  return function(dispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    })

    api.post('/register/', {username, password})
    .then((response) => {
      dispatch(registerSuccess(response.data, username))
    })
    .then( () => {
      history.push("/")
    })
    .catch(function (err) {
      dispatch({
        type: REGISTER_FAIL,
        error: true,
        payload: new Error(err.response.statusText),
      })
    })
  }
}

const registerSuccess = (data, username) => {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      success: data.success,
      token: data.token,
      username: username,
    }
  }
}

export function handleLogin(username, password) {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })

    api.post('login/', {username, password})
    .then((response) => {
      if(response.data.success) {
        dispatch(loginSuccess(response.data, username))
        saveUserSession(username, response.data.token)
      }

      if(!response.data.success) {
        dispatch({
          type: LOGIN_FAIL,
          payload: new Error(response.data.message),
        })
      }
    })
    .then( () => {
      history.push("/")
    })
    .catch(function (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: new Error(err.response.statusText),
      })
    })
  }
}

const loginSuccess = (data, username) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      success: data.success,
      token: data.token,
      username: username,
    }
  }
}

export function handleLogout() {
  return function(dispatch) {
    dispatch({
      type: LOGOUT,
    })
  }
}
