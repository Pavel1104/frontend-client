import api from '../utils/apiConfig'

export const LOAD_REVIEWS_REQUEST = 'LOAD_REVIEWS_REQUEST'
export const LOAD_REVIEWS_SUCCESS = 'LOAD_REVIEWS_SUCCESS'
export const LOAD_REVIEWS_FAIL = 'LOAD_REVIEWS_FAIL'

export const ADD_REVIEW_REQUEST = 'ADD_REVIEW_REQUEST'
export const ADD_REVIEWS_SUCCESS = 'ADD_REVIEWS_SUCCESS'
export const ADD_REVIEW_FAIL = 'ADD_REVIEW_FAIL'

export const loadReviews = productId => {
  return dispatch => {
    dispatch({
      type: LOAD_REVIEWS_REQUEST,
    })

    api.get(`/reviews/${productId}`)
    .then(response => {
      dispatch(loadSuccess(response.data))
    })
    .catch(err => {
      dispatch({
        type: LOAD_REVIEWS_FAIL,
        payload: new Error(err.message),
      })
    })
  }
}

const loadSuccess = data => {
  return {
    type: LOAD_REVIEWS_SUCCESS,
    payload: data,
  }
}

export const addReview = (productId, rate, text) => {
  return dispatch => {
    dispatch({
      type: ADD_REVIEW_REQUEST,
    })

    api.post(`/reviews/${productId}`, {rate, text})
    .then(response => {
      if(response.data.success) {
        console.info(response)
        dispatch(addSuccess(response.data))
        loadReviews(productId)
      }

      if(!response.data.success) {
        throw new Error(response.data.message)
      }
    })
    .catch(err => {
      dispatch({
        type: ADD_REVIEW_FAIL,
        payload: new Error(err.message),
      })
    })
  }
}

const addSuccess = data => {
  return {
    type: ADD_REVIEWS_SUCCESS,
    payload: data,
  }
}
