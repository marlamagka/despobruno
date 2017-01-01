console.log('Starting...')

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, compose, createStore} from "redux";
import { Router, browserHistory } from 'react-router';
import createLogger from "redux-logger";
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

import 'bootstrap-social';

// for bundling your styles
import './bundle.scss';

console.log('Imported stuff...')

const createStoreWithMiddleware = applyMiddleware(
  ReduxPromise,
  createLogger()
)(createStore);

const store = createStoreWithMiddleware(reducers)

console.log('Rendering React')

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
  , document.querySelector('.react-root'));
