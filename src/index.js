import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { loadState, saveState } from './store/localStorage'
import throttle from 'lodash/throttle';
import configureStore, { history } from './store/configureStore'

import './assets/stylesheets/normalize.scss';
import './assets/stylesheets/index.scss';
import './assets/stylesheets/user.scss';


const store = configureStore(loadState());

// throttle ограничивает частоту вызова функции
// сохранение store.user в localStorage without password and error
store.subscribe(throttle(() => {
  if (store.getState().user.success) {
    saveState({
      user: Object.assign({}, store.getState().user, {error: '', password: ''})
    });
  }
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
