import 'bootstrap-social';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';
import './bundle.scss';

const createStoreWithMiddleware = applyMiddleware(
  ReduxPromise,
  createLogger()
)(createStore);

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  /* global document */
  , document.querySelector('.react-root'));
