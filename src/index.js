import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App, { Login, NoPath } from './App';
import './index.css';

function initialState() {
  return {
    user: null
  }
}

function reducers (state = initialState(), action) {
  switch (action.type) {
    case 'USER_STATE_CHANGED':
      console.log(action)
      return state
    default:
      return state
  }
}

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <Route path="login" component={ Login } />
        <Route path="*" component={ NoPath } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
