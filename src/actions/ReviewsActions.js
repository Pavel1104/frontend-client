import axios from 'axios'

export const LOAD_REVIEWS_REQUEST = 'LOAD_REVIEWS_REQUEST'
export const LOAD_REVIEWS_SUCCESS = 'LOAD_REVIEWS_SUCCESS'
export const LOAD_REVIEWS_FAIL = 'LOAD_REVIEWS_FAIL'


const apiUrl = 'http://smktesting.herokuapp.com/api';
// const apiUrl = 'http://demo6925046.mockable.io';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

export function loadReviews( token, productId ) {
  return function(dispatch) {
    dispatch({
      type: LOAD_REVIEWS_REQUEST,
    })

    axios.get(`${proxyUrl}${apiUrl}/reviews/${productId}`, {
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
        type: LOAD_REVIEWS_FAIL,
        error: true,
        payload: new Error('Ошибка загрузки'),
      })
    });
  }
}

const loadSuccess = (data) => {
  return {
    type: LOAD_REVIEWS_SUCCESS,
    payload: data,
  }
};
