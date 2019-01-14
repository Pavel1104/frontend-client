import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL, LOGOUT,
  RESTORE_USER_SESSION,
  RESTORE_USER_SESSION_SUCCESS,
  RESTORE_USER_SESSION_FAIL,
} from '../actions/UserActions'


const initialState = {
  name: '',
  error: '',
  isFetching: false,
  token: '',
  success: false,
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, isFetching: true, error: '', success: false}

    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: action.payload.success,
        token: action.payload.token,
        name: action.payload.username
      }

    case LOGIN_FAIL:
      return {...state, isFetching: false, error: action.payload.message}

    case LOGOUT:
      return {...state, ...initialState}

    case REGISTER_REQUEST:
      return {...state, isFetching: true, error: '', success: false}

    case REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: action.payload.success,
        token: action.payload.token,
        name: action.payload.username
      }

    case REGISTER_FAIL:
      return {...state, isFetching: false, error: action.payload.message}

    case RESTORE_USER_SESSION:
      return {...state, isFetching: true, error: ''}

    case RESTORE_USER_SESSION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: action.payload.success,
        token: action.payload.token,
        name: action.payload.username
      }

    case RESTORE_USER_SESSION_FAIL:
      return {...state, isFetching: false}

    default:
      return state
  }
}
