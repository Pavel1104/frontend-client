import {
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL
} from '../actions/ProductsActions'


const initialState = {
  products: [],
  isFetching: false,
  error: '',
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_REQUEST:
      return {...state, isFetching: true, error: ''}

    case LOAD_PRODUCTS_SUCCESS:
      return {...state, isFetching: false, products: action.payload}

    case LOAD_PRODUCTS_FAIL:
      return {...state, isFetching: false, error: action.payload.message}

    default:
      return state
  }
}
