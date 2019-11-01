import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// taremos al middleware de compose
import { createStore, compose } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import reducer from './reducers';
import initialState from './initialState';
import App from './routes/App';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(reducer, initialState, composeEnhacers());
// con esto indicamos que hay una hostoria
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
