import api from '../utils/apiConfig'

export const LOAD_PRODUCTS_REQUEST = 'LOAD_PRODUCTS_REQUEST'
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS'
export const LOAD_PRODUCTS_FAIL = 'LOAD_PRODUCTS_FAIL'

export const loadProducts = () => {
  return dispatch => {
    dispatch({
      type: LOAD_PRODUCTS_REQUEST,
    })

    api.get('/products/')
    .then(response => {
      dispatch(loadSuccess(response.data))
    })
    .catch(err => {
      dispatch({
        type: LOAD_PRODUCTS_FAIL,
        payload: new Error(prepeareErrorMsg(err)),
      })
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

const loadSuccess = data => {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    payload: data,
  }
}
