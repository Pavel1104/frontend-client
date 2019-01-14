import {applyMiddleware, compose, createStore} from 'redux'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createRootReducer from '../reducers'

export const history = createBrowserHistory()

const configureStore = () => {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk,
        logger,
      ),
    ),
  )
  return store
}

export const store = configureStore()
