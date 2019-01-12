import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAIL } from '../actions/ProductsActions'


const initialState = {
  products: [],
  isFetching: false,
  error: '',
}

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case LOAD_SUCCESS:
      return { ...state, isFetching: false, products: action.payload }

    case LOAD_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    default:
      return state
  }
}
