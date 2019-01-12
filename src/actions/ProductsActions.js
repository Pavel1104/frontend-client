import axios from 'axios'

export const LOAD_REQUEST = 'LOAD_REQUEST'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAIL = 'LOAD_FAIL'


const apiUrl = 'http://smktesting.herokuapp.com/api';
// const apiUrl = 'http://demo6925046.mockable.io';
const proxyUrl = "https://cors-anywhere.herokuapp.com/"

export function loadProducts( token ) {
  return function(dispatch) {
    dispatch({
      type: LOAD_REQUEST,
    })

    // fetch('http://smktesting.herokuapp.com/api/products/')
    // .then(function(response) {
    //   console.log(response.headers.get('Content-Type'));
    //   return response.text();
    // })
    // .then(function(text) {
    //   console.log('Request successful', text);
    //   dispatch(loadSuccess(JSON.parse(text)));
    // })


    axios.get(`${proxyUrl}${apiUrl}/products`, {
    // axios.get('http://smktesting.herokuapp.com/api/products/', {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        "Authorization" : token,
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Origin': 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Access-Control-Expose-Headers': 'Content-Length, X-JSON',
      },
    })
    .then((response) => {
      dispatch(loadSuccess(response.data));
    })
    .catch(function (err) {
      dispatch({
        type: LOAD_FAIL,
        error: true,
        payload: new Error('Ошибка загрузки'),
      })
    });
  }
}

const loadSuccess = (data) => {
  return {
    type: LOAD_SUCCESS,
    payload: data,
  }
};
