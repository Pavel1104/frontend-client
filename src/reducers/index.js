import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'

import { userReducer } from './user'
import { productsReducer } from './products'
import { reviewsReducer } from './reviews'

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,

  user: userReducer,
  products: productsReducer,
  reviews: reviewsReducer,
})
