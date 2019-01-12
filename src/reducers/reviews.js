import { LOAD_REVIEWS_REQUEST, LOAD_REVIEWS_SUCCESS,
  LOAD_REVIEWS_FAIL } from '../actions/ReviewsActions'


const initialState = {
  reviews: [],
  isFetching: false,
  error: '',
}

export function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REVIEWS_REQUEST:
      return { ...state, reviews: [], isFetching: true, error: '' }

    case LOAD_REVIEWS_SUCCESS:
      return { ...state, isFetching: false, reviews: action.payload }

    case LOAD_REVIEWS_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    default:
      return state
  }
}
