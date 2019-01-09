import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './containers/App';
import { store } from './store/configureStore'
import * as serviceWorker from './serviceWorker';
import { saveState } from './store/localStorage'
import throttle from 'lodash/throttle';

// throttle ограничивает частоту вызова функции
store.subscribe(throttle(() => {
  saveState({
    user: store.getState().user
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
