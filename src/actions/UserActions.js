import axios from "axios";
import { history } from '../store/configureStore'


export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

export const CHANGE_USER_DATA = 'CHANGE_USER_DATA'

export function onUserInputChange(key, value) {
  return dispatch => {
    dispatch({
      type: CHANGE_USER_DATA,
      payload: {
        key: key,
        value: value,
      }
    })
  }
}

export function handleLogin() {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })

    fetch('http://smktesting.herokuapp.com/api/products/')
    .then(r => {
      if (r.ok) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: 'success',
        })
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    })
  }
}

// const apiUrl = 'http://smktesting.herokuapp.com/api';
const apiUrl = 'http://demo6925046.mockable.io';

export function handleRegister({ name, password }) {
  return function(dispatch) {
  dispatch({
      type: REGISTER_REQUEST,
    })

    axios.post(`${apiUrl}/register`,
      {username: name, password: password}
    )
    .then(response => {
      console.log(response);
      dispatch(registerSuccess(response.data))
    })
    .then( () => {
      history.push("/")
    })
    .catch(function (err) {
      console.log(err);
      dispatch({
        type: LOGIN_FAIL,
        error: true,
        payload: new Error('Ошибка авторизации'),
      })
    });
  }
}

export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      success: data.success,
      token: data.token
    }
  }
};
