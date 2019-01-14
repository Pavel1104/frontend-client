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

export const restoreUserSession = () => {
  return dispatch => {
    dispatch({
      type: RESTORE_USER_SESSION,
    })

    Promise.resolve()
    .then(() => {
      let {username, token} = loadUserSession()
      if(username && token) {
        return {username, token}
      }
      throw new Error('empty username or token')
    })
    .then(data => {
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
      username,
      token,
    }
  }
}

export const handleRegister = (username, password) => {
  return dispatch => {
    dispatch({
      type: REGISTER_REQUEST,
    })

    api.post('/register/', {username, password})
    .then(response => {
      if(response.data.success) {
        dispatch(registerSuccess(response.data, username))
        saveUserSession(username, response.data.token)
      }

      if(!response.data.success) {
        throw new Error(response.data.message)
      }
    })
    .then(() => {
      history.push("/")
    })
    .catch(err => {
      dispatch({
        type: REGISTER_FAIL,
        payload: new Error(prepeareErrorMsg(err)),
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

export const handleLogin = (username, password) => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
    })

    api.post('login/', {username, password})
    .then(response => {
      if(response.data.success) {
        dispatch(loginSuccess(response.data, username))
        saveUserSession(username, response.data.token)
      }

      if(!response.data.success) {
        throw new Error(response.data.message)
      }
    })
    .then(() => {
      history.push("/")
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL,
        payload: new Error(prepeareErrorMsg(err)),
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

export const handleLogout = () => {
  saveUserSession()
  return dispatch => {
    dispatch({
      type: LOGOUT,
    })
  }
}

const prepeareErrorMsg = err => {
  if(err.message) {
    return err.message
  }

  if(err.response) {
    return err.response.statusText
  }

  return 'Unknown error'
}
