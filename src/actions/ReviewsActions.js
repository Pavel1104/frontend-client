import axios from 'axios'

export const LOAD_REVIEWS_REQUEST = 'LOAD_REVIEWS_REQUEST'
export const LOAD_REVIEWS_SUCCESS = 'LOAD_REVIEWS_SUCCESS'
export const LOAD_REVIEWS_FAIL = 'LOAD_REVIEWS_FAIL'

export const ADD_REVIEW_REQUEST = 'ADD_REVIEW_REQUEST'
export const ADD_REVIEWS_SUCCESS = 'ADD_REVIEWS_SUCCESS'
export const ADD_REVIEW_FAIL = 'ADD_REVIEW_FAIL'

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

export function handleAddReview( token, productId, rate, text ) {
  return function(dispatch) {
    dispatch({
      type: ADD_REVIEW_REQUEST,
    })

    let postData = {
      rate: rate,
      text: text,
    };

    let headers = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Authorization" : token,
      }
    };

    axios.post(`${proxyUrl}${apiUrl}/reviews/${productId}`, postData, headers)
    .then((response) => {
      dispatch(addSuccess(response.data));
      loadReviews( token, productId );
    })
    .catch(function (err) {
      dispatch({
        type: ADD_REVIEW_FAIL,
        error: true,
        payload: new Error('Ошибка добавления отзыва'),
      })
    });
  }
}

const addSuccess = (data) => {
  return {
    type: ADD_REVIEWS_SUCCESS,
    payload: data,
  }
};
