import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {store, history} from './store/configureStore'

import './assets/stylesheets/normalize.scss';
import './assets/stylesheets/index.scss';
import './assets/stylesheets/user.scss';
import './assets/stylesheets/product.scss';
import './assets/stylesheets/review.scss';

export const BASE_URL = 'http://smktesting.herokuapp.com'

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
