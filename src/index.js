import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

import ReduxPromise from 'redux-promise';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';

import App from './App';

const myStore = createStore(rootReducer, {}, applyMiddleware(ReduxPromise));

ReactDOM.render(
    <Provider store={ myStore }><App /></Provider>, 
    document.getElementById('root')
);

