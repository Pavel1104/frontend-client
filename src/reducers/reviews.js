import {
  LOAD_REVIEWS_REQUEST,
  LOAD_REVIEWS_SUCCESS,
  LOAD_REVIEWS_FAIL,
  ADD_REVIEW_REQUEST,
  ADD_REVIEWS_SUCCESS,
  ADD_REVIEW_FAIL
} from '../actions/ReviewsActions'


const initialState = {
  reviews: [],
  isFetching: false,
  error: '',
}

export function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REVIEWS_REQUEST:
      return {...state, reviews: [], isFetching: true, error: ''}

    case LOAD_REVIEWS_SUCCESS:
      return {...state, isFetching: false, reviews: action.payload}

    case LOAD_REVIEWS_FAIL:
      return {...state, isFetching: false, error: action.payload.message}

    case ADD_REVIEW_REQUEST:
      return {...state, isFetching: true, error: ''}

    case ADD_REVIEWS_SUCCESS:
      return {...state, isFetching: false}

    case ADD_REVIEW_FAIL:
      return {...state, isFetching: false, error: action.payload.message}

    default:
      return state
  }
}
