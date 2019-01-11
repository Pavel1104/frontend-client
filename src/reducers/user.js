import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
  REGISTER_REQUEST, REGISTER_SUCCESS,
  REGISTER_FAIL } from '../actions/UserActions'


const initialState = {
  name: '',
  error: '',
  isFetching: false,
  token: '',
  password: '',
  success: false,
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, success: action.payload.success, token: action.payload.token, name: action.payload.username }

    case LOGIN_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    case REGISTER_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case REGISTER_SUCCESS:
      return { ...state, isFetching: false, success: action.payload.success, token: action.payload.token, name: action.payload.username }

    case REGISTER_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    default:
      return state
  }
}
