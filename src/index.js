import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { loadState, saveState } from './store/localStorage'
import throttle from 'lodash/throttle';
import configureStore, { history } from './store/configureStore'

import './index.scss';
import './normalize.scss';

const store = configureStore(loadState());

// throttle ограничивает частоту вызова функции
// сохранение store.user в localStorage без сообщений об ошибке
store.subscribe(throttle(() => {
  saveState({
    user: Object.assign({}, store.getState().user, {error:'', isFetching: false})
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
