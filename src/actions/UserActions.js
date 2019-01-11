import axios from "axios";
import { history } from '../store/configureStore'
import {reset} from 'redux-form'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

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

export function handleRegister( username, password ) {
  return function(dispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    })

    axios.post(`${apiUrl}/register`,
      {username: username, password: password}
    )
    .then((response) => {
      dispatch(registerSuccess(response.data, username));
      dispatch(reset('registerForm'));
    })
    .then( () => {
      history.push("/")
    })
    .catch(function (err) {
      dispatch({
        type: LOGIN_FAIL,
        error: true,
        payload: new Error('Ошибка авторизации'),
      })
    });
  }
}

export const registerSuccess = (data, username) => {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      success: data.success,
      token: data.token,
      username: username,
    }
  }
};
